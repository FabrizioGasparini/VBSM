export interface Evento {
    id: number;
    squadra: string;
    data: string;
    oraInizio: string;
    oraFine: string;
    palestra: string;
    tipo: string;
}

export const eventi: Evento[] = await fetch("https://www.volleyballsanmartino.it/api/events")
    .then((res) => res.json())
    .then((data) => data as Evento[]);

export const palestreOptions = ["Tutte le Palestre", "Palestra Bombonera", "Palestra Scuole Medie", "Palestra Scuole Elementari"];

export async function addEvento(nuovoEvento: Omit<Evento, "id">): Promise<Evento> {
    const response = await fetch("https://www.volleyballsanmartino.it/api/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuovoEvento),
    });
    const data = await response.json();
    return data as Evento;
}
