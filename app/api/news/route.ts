import pool from "@/lib/db";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";

export interface NewsArticle {
  id: number;
  slug: string;
  titolo: string;
  categoria: string;
  data: string;
  autore: string;
  immagine: string;
  estratto: string;
  contenuto: string;
  tags: string[];
  featured?: boolean;
}

export const emptyArticle: Omit<NewsArticle, "id"> = {
  slug: "",
  titolo: "",
  categoria: "Risultati",
  data: new Date().toISOString().split("T")[0],
  autore: "Redazione VSM",
  immagine: "/volleyball-game.png",
  estratto: "",
  contenuto: "",
  tags: [],
  featured: false,
};

export async function GET(req: NextRequest) {
  if (!isAuthenticated(req)) return NextResponse.json({ authenticated: false }, { status: 401 });
  
  try {
    const [rows] = await pool.query('SELECT * FROM news ORDER BY data DESC');

    const news = (rows as any[]).map(row => ({
      ...row,
      tags: JSON.parse(row.tags || '[]'),
    }));

    return NextResponse.json(news, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://volleyballsanmartino.it',
        'Access-Control-Allow-Methods': 'GET, OPTIONS, POST',
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
    const body = await req.json();

    const {
      slug,
      titolo,
      categoria,
      data,
      autore,
      immagine,
      estratto,
      contenuto,
      tags,
      featured
    } = { ...emptyArticle, ...body }; // usa emptyArticle come default

    const [result]: any = await pool.query(
      `INSERT INTO news (slug, titolo, categoria, data, autore, immagine, estratto, contenuto, tags, featured)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        slug,
        titolo,
        categoria,
        data,
        autore,
        immagine,
        estratto,
        contenuto,
        JSON.stringify(tags),
        featured ? 1 : 0
      ]
    );

    // Restituisci l'articolo salvato con l'ID
    const savedArticle: NewsArticle = {
      id: result.insertId,
      slug,
      titolo,
      categoria,
      data,
      autore,
      immagine,
      estratto,
      contenuto,
      tags,
      featured
    };

    return NextResponse.json(savedArticle, {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://volleyballsanmartino.it',
        'Access-Control-Allow-Methods': 'GET, OPTIONS, POST',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Errore inserimento news' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    if (!isAuthenticated(req)) return NextResponse.json({ authenticated: false }, { status: 401 });

    const body = await req.json();

    const {
      id,
      slug,
      titolo,
      categoria,
      data,
      autore,
      immagine,
      estratto,
      contenuto,
      tags,
      featured
    } = body;

    console.log("Updating article ID:", id, body);
    if (!id) {
      return NextResponse.json({ error: 'ID mancante per l\'aggiornamento' }, { status: 400 });
    }

    await pool.query(
      `UPDATE news SET slug = ?, titolo = ?, categoria = ?, data = ?, autore = ?, immagine = ?, estratto = ?, contenuto = ?, tags = ?, featured = ?
       WHERE id = ?`,
      [
        slug,
        titolo,
        categoria,
        data,
        autore,
        immagine,
        estratto,
        contenuto,
        JSON.stringify(tags),
        featured ? 1 : 0,
        id
      ]
    );

    const updatedArticle: NewsArticle = {
      id,
      slug,
      titolo,
      categoria,
      data,
      autore,
      immagine,
      estratto,
      contenuto,
      tags,
      featured
    };

    return NextResponse.json(updatedArticle, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://volleyballsanmartino.it',
        'Access-Control-Allow-Methods': 'GET, OPTIONS, POST',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Errore aggiornamento news' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    if (!isAuthenticated(req)) return NextResponse.json({ authenticated: false }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID mancante per la cancellazione' }, { status: 400 });
    }

    await pool.query('DELETE FROM news WHERE id = ?', [id]);

    return NextResponse.json({ message: 'Articolo cancellato' }, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://volleyballsanmartino.it',
        'Access-Control-Allow-Methods': 'GET, OPTIONS, POST',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Errore cancellazione news' }, { status: 500 });
  }
}

// Gestione preflight OPTIONS
export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://volleyballsanmartino.it',
      'Access-Control-Allow-Methods': 'GET, OPTIONS, POST',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
