export interface Player {
    id: string; // o number, se player_id è numerico
    nome: string;
    cognome: string;
    ruolo: string | null; // se può essere null
    numero: number | null;
    capitano: boolean;
}

// Un allenatore
export interface Coach {
    id: string; // nome-cognome se lo usi come id
    nome: string;
    cognome: string;
    ruolo: string | null; // es. "head coach", "vice coach"
}

// La squadra completa
export interface Team {
    idx: number; // per ordinamento
    id: string; // id della squadra
    categoria: string;
    descrizione: string;
    stagione: string;
    campionato: string;
    colore: string | null;
    players: Player[];
    coaches: Coach[];
}

export const teamsData: Team[] = await fetch("https://www.volleyballsanmartino.it/api/teams")
    .then((res) => res.json())
    .then((data) => data as Team[]);

export const getTeamById = (id: string): Team | undefined => {
    return teamsData.find((team: Team) => team.id === id);
};
