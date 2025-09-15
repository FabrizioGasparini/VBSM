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

export const partite: Match[] = [
    // Serie C Femminile - Girone B
    {
        id: "scf-001",
        data: "2024-12-15",
        ora: "18:00",
        squadra: "Serie C Femminile",
        avversario: "Volley Castelfranco",
        casa: true,
        palestra: "Palestra Comunale San Martino",
        risultato: "3-1",
        completata: true,
        campionato: "Serie C Femminile - Girone B",
        giornata: 8,
        arbitri: ["Marco Rossi", "Laura Bianchi"],
        note: "Vittoria importante per la classifica",
    },
    {
        id: "scf-002",
        data: "2024-12-22",
        ora: "17:00",
        squadra: "Serie C Femminile",
        avversario: "Pallavolo Modena",
        casa: false,
        palestra: "PalaSport Modena",
        risultato: "1-3",
        completata: true,
        campionato: "Serie C Femminile - Girone B",
        giornata: 9,
        arbitri: ["Giuseppe Verdi", "Anna Neri"],
        note: "Sconfitta di misura contro la capolista",
    },
    {
        id: "scf-003",
        data: "2025-01-12",
        ora: "18:30",
        squadra: "Serie C Femminile",
        avversario: "Volley Reggio Emilia",
        casa: true,
        palestra: "Palestra Comunale San Martino",
        completata: false,
        campionato: "Serie C Femminile - Girone B",
        giornata: 10,
        note: "Match cruciale per i playoff",
    },
    {
        id: "scf-004",
        data: "2025-01-19",
        ora: "16:00",
        squadra: "Serie C Femminile",
        avversario: "Volley Parma",
        casa: false,
        palestra: "Palazzetto Parma",
        completata: false,
        campionato: "Serie C Femminile - Girone B",
        giornata: 11,
    },

    // Serie C Maschile - Girone A
    {
        id: "scm-001",
        data: "2024-12-14",
        ora: "20:30",
        squadra: "Serie C Maschile",
        avversario: "Volley Bologna",
        casa: false,
        palestra: "PalaSport Bologna",
        risultato: "2-3",
        completata: true,
        campionato: "Serie C Maschile - Girone A",
        giornata: 8,
        arbitri: ["Roberto Ferrari", "Silvia Conti"],
        note: "Tie-break emozionante",
    },
    {
        id: "scm-002",
        data: "2024-12-21",
        ora: "19:00",
        squadra: "Serie C Maschile",
        avversario: "Eagles Volleyball",
        casa: true,
        palestra: "Palestra Comunale San Martino",
        risultato: "3-0",
        completata: true,
        campionato: "Serie C Maschile - Girone A",
        giornata: 9,
        arbitri: ["Mario Gialli", "Francesca Blu"],
        note: "Vittoria netta davanti al pubblico di casa",
    },
    {
        id: "scm-003",
        data: "2025-01-11",
        ora: "20:00",
        squadra: "Serie C Maschile",
        avversario: "Volley Ferrara",
        casa: true,
        palestra: "Palestra Comunale San Martino",
        completata: false,
        campionato: "Serie C Maschile - Girone A",
        giornata: 10,
        note: "Derby emiliano",
    },
    {
        id: "scm-004",
        data: "2025-01-18",
        ora: "18:00",
        squadra: "Serie C Maschile",
        avversario: "Pallavolo Ravenna",
        casa: false,
        palestra: "Palazzetto Ravenna",
        completata: false,
        campionato: "Serie C Maschile - Girone A",
        giornata: 11,
    },

    // Under 18 Femminile
    {
        id: "u18f-001",
        data: "2024-12-16",
        ora: "16:30",
        squadra: "Under 18 Femminile",
        avversario: "Volleyball Stars",
        casa: false,
        palestra: "Palestra Stars",
        risultato: "3-2",
        completata: true,
        campionato: "Campionato Regionale U18F",
        giornata: 6,
        note: "Rimonta spettacolare nel quinto set",
    },
    {
        id: "u18f-002",
        data: "2025-01-13",
        ora: "17:00",
        squadra: "Under 18 Femminile",
        avversario: "Junior Volley Cesena",
        casa: true,
        palestra: "Palestra San Marco",
        completata: false,
        campionato: "Campionato Regionale U18F",
        giornata: 7,
    },

    // Under 16 Maschile
    {
        id: "u16m-001",
        data: "2024-12-17",
        ora: "15:00",
        squadra: "Under 16 Maschile",
        avversario: "Volley Forlì",
        casa: true,
        palestra: "Palestra San Marco",
        risultato: "3-1",
        completata: true,
        campionato: "Campionato Regionale U16M",
        giornata: 5,
        note: "Ottima prestazione dei giovani",
    },
    {
        id: "u16m-002",
        data: "2025-01-14",
        ora: "16:00",
        squadra: "Under 16 Maschile",
        avversario: "Pallavolo Rimini",
        casa: false,
        palestra: "Palazzetto Rimini",
        completata: false,
        campionato: "Campionato Regionale U16M",
        giornata: 6,
    },

    // Under 14 Femminile
    {
        id: "u14f-001",
        data: "2025-01-15",
        ora: "15:30",
        squadra: "Under 14 Femminile",
        avversario: "Young Volleyball",
        casa: true,
        palestra: "Palestra San Marco",
        completata: false,
        campionato: "Campionato Provinciale U14F",
        giornata: 4,
    },

    // Prima Divisione Femminile
    {
        id: "pdf-001",
        data: "2025-01-16",
        ora: "21:00",
        squadra: "Prima Divisione Femminile",
        avversario: "Volley Santarcangelo",
        casa: true,
        palestra: "Palestra Comunale San Martino",
        completata: false,
        campionato: "Prima Divisione Femminile",
        giornata: 8,
    },

    // Seconda Divisione Maschile
    {
        id: "sdm-001",
        data: "2025-01-17",
        ora: "20:30",
        squadra: "Seconda Divisione Maschile",
        avversario: "Polisportiva Bellaria",
        casa: false,
        palestra: "Palestra Bellaria",
        completata: false,
        campionato: "Seconda Divisione Maschile",
        giornata: 7,
    },
];

export const squadreOptions = ["Tutte le Squadre", "Serie C Femminile", "Serie C Maschile", "Under 18 Femminile", "Under 18 Maschile", "Under 16 Femminile", "Under 16 Maschile", "Under 14 Femminile", "Under 14 Maschile", "Prima Divisione Femminile", "Prima Divisione Maschile", "Seconda Divisione Femminile", "Seconda Divisione Maschile", "Under 12", "Minivolley"];
