import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../lib/db'; // Assicurati che lib/db.ts esista
import { Team } from '@/lib/teams-data';
import { cookies } from 'next/headers';
import { isAuthenticated } from '@/lib/auth';
import { te } from 'date-fns/locale';

export async function GET(req: NextRequest) {
  try {
    if (!isAuthenticated(req)) return NextResponse.json({ authenticated: false }, { status: 401 });

    const url = new URL(req.url);
    const teamId = url.searchParams.get('id'); // equivalente a $_GET['id']

    let sql = `
      SELECT 
        t.idx,
        t.id AS team_id,
        t.categoria,
        t.descrizione,
        t.stagione,
        t.campionato,
        t.colore,
        p.id AS player_id,
        p.nome AS player_nome,
        p.cognome AS player_cognome,
        p.ruolo AS player_ruolo,
        p.numero AS player_numero,
        p.capitano AS player_capitano,
        c.id AS coach_id,
        c.nome AS coach_nome,
        c.cognome AS coach_cognome,
        tc.ruolo AS coach_ruolo
      FROM teams t
      LEFT JOIN players p ON t.id = p.team_id
      LEFT JOIN team_coaches tc ON t.id = tc.team_id
      LEFT JOIN coaches c ON tc.coach_id = c.id
      ${teamId ? `WHERE t.id = ?` : ''}
      ORDER BY t.idx ASC, p.numero
    `;

    const [rows] = await pool.query(sql, teamId ? [teamId] : []);

    const teamsMap: Record<number, Team> = {};

    (rows as any[]).forEach(row => {
      const team_id = row.team_id;

      if (!teamsMap[team_id]) {
        teamsMap[team_id] = {
          idx: row.idx,
          id: team_id,
          categoria: row.categoria,
          descrizione: row.descrizione,
          stagione: row.stagione,
          campionato: row.campionato,
          colore: row.colore,
          players: [],
          coaches: [],
        };
      }

      // Giocatori
      if (row.player_id && !teamsMap[team_id].players.find(p => p.id === row.player_id)) {
        teamsMap[team_id].players.push({
          id: row.player_id,
          nome: row.player_nome,
          cognome: row.player_cognome,
          ruolo: row.player_ruolo,
          numero: row.player_numero,
          capitano: !!row.player_capitano,
        });
      }

      // Allenatori
      if (row.coach_id && !teamsMap[team_id].coaches.find(c => c.id === row.coach_id)) {
        teamsMap[team_id].coaches.push({
          id: row.coach_id,
          nome: row.coach_nome,
          cognome: row.coach_cognome,
          ruolo: row.coach_ruolo,
        });
      }
    });

    const teams = Object.values(teamsMap);

    return NextResponse.json(teams, {
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
