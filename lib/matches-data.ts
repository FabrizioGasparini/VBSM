export interface Match {
    id: number;
    data: string;
    ora: string;
    squadra: string;
    avversario: string;
    casa: boolean;
    palestra: string;
    risultato?: string;
    completata: boolean;
    campionato: string;
    giornata?: number;
    arbitri?: string[];
    note?: string;
}

export const partite: Match[] = await fetch("https://www.volleyballsanmartino.it/api/matches")
    .then((res) => res.json())
    .then((data) => data as Match[]);

export const squadreOptions = ["Tutte le Squadre", "Serie C Femminile", "Serie C Maschile", "Serie D Femminile", "Prima Divisione Femminile", "Prima Divisione Maschile", "Terza Divisione Femminile", "Misto", "Under 19 Maschile", "Under 18 Femminile", "Under 18 CSI Femminile", "Under 16 Femminile", "Under 16 CSI Femminile", "Under 15 Maschile", "Under 14 Femminile", "Under 13 Femminile", "Under 12 Femminile", "S3 White Red Green"];
