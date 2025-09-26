import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { Match } from '@/lib/matches-data';
import { cookies } from 'next/headers';
import { isAuthenticated } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {    
    if (!isAuthenticated(req)) return NextResponse.json({ authenticated: false }, { status: 401 });
    
    
    const [rows] = await pool.query('SELECT * FROM matches ORDER BY data DESC');

    const matches: Match[] = (rows as any[]).map(row => {
      let arbitri: string[] = [];
      try {
        if (row.arbitri) {
          // prova a fare il parse come JSON
          arbitri = JSON.parse(row.arbitri);
          if (!Array.isArray(arbitri)) arbitri = [];
        }
      } catch {
        // se non è JSON valido, prova a splittare come stringa separata da virgola
        arbitri = typeof row.arbitri === 'string' ? row.arbitri.split(',').map((s: string) => s.trim()) : [];
      }

      return {
        ...row,
        arbitri,
        casa: row.casa === '1',
        completata: row.completata === '1',
      };
    });

    return NextResponse.json(matches, {
      status: 200,
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://volleyballsanmartino.it', // il dominio del client
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Credentials': 'true',
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Errore database' }, { status: 500 });
  }
}
