import { loadFromStorage, STORAGE_KEYS } from "./storage";

export interface Match {
    id: string;
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

export const partite: Match[] = loadFromStorage<Match[]>(STORAGE_KEYS.MATCHES, []);
export const squadreOptions = ["Tutte le Squadre", "Serie C Femminile", "Serie C Maschile", "Serie D Femminile", "Prima Divisione Femminile", "Prima Divisione Maschile", "Terza Divisione Femminile", "Under 19 Maschile", "Under 18 Femminile", "Under 18 CSI Femminile", "Under 16 Femminile", "Under 16 CSI Femminile", "Under 15 Maschile", "Under 14 Femminile", "Under 13 Femminile", "Under 12 Femminile", "S3 White Red Green"];
