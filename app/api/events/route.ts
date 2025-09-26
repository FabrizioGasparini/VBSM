import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db'; // Assicurati che lib/db.ts esista
import { Evento } from '@/lib/events-data';
import { cookies } from 'next/headers';
import { isAuthenticated } from '@/lib/auth';

export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://volleyballsanmartino.it', // il dominio del client
      'Access-Control-Allow-Methods': 'OPTIONS',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function GET(req: NextRequest) {
  try {
    if (!isAuthenticated(req)) return NextResponse.json({ authenticated: false }, { status: 401 });
    
    const [rows] = await pool.query('SELECT * FROM events ORDER BY data ASC, oraInizio ASC');
    
    const events: Evento[] = (rows as any[]).map(row => ({
      id: row.id,
      squadra: row.squadra,
      palestra: row.palestra,
      data: row.data,
      oraInizio: row.oraInizio,
      oraFine: row.oraFine,
      tipo: row.tipo,
    }));

    return NextResponse.json(events, {
      status: 200,
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://volleyballsanmartino.it', // il dominio del client
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Credentials': 'true',
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Errore database' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!isAuthenticated(req)) return NextResponse.json({ authenticated: false }, { status: 401 });
    
    const data = await req.json();

    const squadra = data.squadra ?? '';
    const palestra = data.palestra ?? '';
    const data_evento = data.data ?? '';
    const oraInizio = data.oraInizio ?? '';
    const oraFine = data.oraFine ?? '';
    const tipo = data.tipo ?? 'Amichevole';

    if (!squadra || !palestra || !data_evento || !oraInizio || !oraFine || !tipo) {
      return NextResponse.json({ error: 'Tutti i campi sono obbligatori' }, { status: 400 });
    }

    const [result] = await pool.execute(
      'INSERT INTO events (squadra, palestra, data, oraInizio, oraFine, tipo) VALUES (?, ?, ?, ?, ?, ?)',
      [squadra, palestra, data_evento, oraInizio, oraFine, tipo]
    );

    // mysql2/promise restituisce result come RowDataPacket & OkPacket, otteniamo insertId
    const insertId = (result as any).insertId;

    return NextResponse.json({ success: true, id: insertId }, {
      headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://volleyballsanmartino.it', // il dominio del client
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Credentials': 'true',
      },
    });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Errore durante l\'inserimento' }, { status: 500 });
  }
}
