export interface Player {
    id: number;
    nome: string;
    cognome: string;
    ruolo: string;
    numero: number;
    capitano?: boolean;
    eta?: number;
    altezza?: string;
    peso?: string;
    nazionalita?: string;
    foto?: string;
}

export interface Coach {
    id: number;
    nome: string;
    cognome: string;
    ruolo: string;
    esperienza?: string;
    qualifiche: string[];
    foto?: string;
}

export interface Team {
    id: string;
    categoria: string;
    descrizione: string;
    stagione: string;
    campionato: string;
    giocatori: Player[];
    staff: Coach[];
    colore: string;
    immagine: string;
}

export const teamsData: Team[] = [
    {
        id: "s3-white-red-green",
        categoria: "S3 White Red Green",
        descrizione: "Annate 2014-20",
        stagione: "2025/2026",
        campionato: "S3 White / Red / Green",
        colore: "bg-primary",
        immagine: "/s3.png",
        giocatori: Array.from({ length: 12 }, (_, i) => ({
            id: i + 1,
            nome: `Giocatore${i + 1}`,
            cognome: `Cognome${i + 1}`,
            ruolo: "Universale",
            numero: i + 1,
            eta: Math.floor(Math.random() * 7) + 6, // 6-12 anni
            altezza: `1.${Math.floor(Math.random() * 30) + 20}m`,
            peso: `${Math.floor(Math.random() * 15) + 25}kg`,
            nazionalita: "Italia",
        })),
        staff: [
            {
                id: 1,
                nome: "Camilla",
                cognome: "Gallingani",
                ruolo: "Allenatore Principale",
                esperienza: "Specializzata nel settore giovanile",
                qualifiche: ["Istruttore Minivolley FIPAV"],
            },
            {
                id: 2,
                nome: "Giulia",
                cognome: "Iotti",
                ruolo: "Assistente Allenatore",
                esperienza: "Esperienza con bambini",
                qualifiche: ["Istruttore Minivolley FIPAV"],
            },
            {
                id: 3,
                nome: "Giulia",
                cognome: "Paterlini",
                ruolo: "Assistente Allenatore",
                esperienza: "Supporto tecnico",
                qualifiche: ["Corso Base Allenatori"],
            },
        ],
    },
    {
        id: "under-12-femminile",
        categoria: "Under 12 Femminile",
        descrizione: "Annate 2014-15",
        stagione: "2025/2026",
        campionato: "Campionato Provinciale Under 12",
        colore: "bg-primary",
        immagine: "/u12.png",
        giocatori: Array.from({ length: 12 }, (_, i) => ({
            id: i + 1,
            nome: `Giocatrice${i + 1}`,
            cognome: `Cognome${i + 1}`,
            ruolo: i === 0 ? "Palleggiatore" : i < 4 ? "Schiacciatrice" : i < 6 ? "Centrale" : "Libero",
            numero: i + 1,
            eta: Math.floor(Math.random() * 2) + 11, // 11-12 anni
            altezza: `1.${Math.floor(Math.random() * 15) + 40}m`,
            peso: `${Math.floor(Math.random() * 10) + 35}kg`,
            nazionalita: "Italia",
        })),
        staff: [
            {
                id: 1,
                nome: "Giulia",
                cognome: "Iotti",
                ruolo: "Allenatore Principale",
                esperienza: "Specializzata nel settore giovanile femminile",
                qualifiche: ["Allenatore di 2° Grado FIPAV"],
            },
            {
                id: 2,
                nome: "Nellusco",
                cognome: "Bonori",
                ruolo: "Assistente Allenatore",
                esperienza: "Esperienza nel settore giovanile",
                qualifiche: ["Corso Base Allenatori"],
            },
        ],
    },
    {
        id: "under-13-femminile",
        categoria: "Under 13 Femminile",
        descrizione: "Annate 2013-14",
        stagione: "2025/2026",
        campionato: "Campionato Provinciale Under 13",
        colore: "bg-primary",
        immagine: "/u13.png",
        giocatori: Array.from({ length: 12 }, (_, i) => ({
            id: i + 1,
            nome: `Giocatrice${i + 1}`,
            cognome: `Cognome${i + 1}`,
            ruolo: i === 0 ? "Palleggiatore" : i < 4 ? "Schiacciatrice" : i < 6 ? "Centrale" : "Libero",
            numero: i + 1,
            eta: Math.floor(Math.random() * 2) + 12, // 12-13 anni
            altezza: `1.${Math.floor(Math.random() * 15) + 45}m`,
            peso: `${Math.floor(Math.random() * 10) + 40}kg`,
            nazionalita: "Italia",
        })),
        staff: [
            {
                id: 1,
                nome: "Giorgio",
                cognome: "Bezzecchi",
                ruolo: "Allenatore Principale",
                esperienza: "Lunga esperienza nel settore giovanile",
                qualifiche: ["Allenatore di 2° Grado FIPAV"],
            },
            {
                id: 2,
                nome: "Paolo",
                cognome: "Neviani",
                ruolo: "Assistente Allenatore",
                esperienza: "Specializzato nella formazione giovanile",
                qualifiche: ["Corso Base Allenatori"],
            },
        ],
    },
    {
        id: "under-14-femminile",
        categoria: "Under 14 Femminile",
        descrizione: "Annate 2012-13",
        stagione: "2025/2026",
        campionato: "Campionato Provinciale Under 14",
        colore: "bg-secondary",
        immagine: "/u14.png",
        giocatori: Array.from({ length: 10 }, (_, i) => ({
            id: i + 1,
            nome: `Giocatrice${i + 1}`,
            cognome: `Cognome${i + 1}`,
            ruolo: i === 0 ? "Palleggiatore" : i < 3 ? "Schiacciatrice" : i < 5 ? "Centrale" : i === 5 ? "Opposto" : "Libero",
            numero: i + 1,
            eta: Math.floor(Math.random() * 2) + 13, // 13-14 anni
            altezza: `1.${Math.floor(Math.random() * 15) + 50}m`,
            peso: `${Math.floor(Math.random() * 10) + 45}kg`,
            nazionalita: "Italia",
        })),
        staff: [
            {
                id: 1,
                nome: "Federico",
                cognome: "Monaco",
                ruolo: "Allenatore Principale",
                esperienza: "Specializzato nelle categorie giovanili femminili",
                qualifiche: ["Allenatore di 2° Grado FIPAV"],
            },
            {
                id: 2,
                nome: "Nellusco",
                cognome: "Bonori",
                ruolo: "Assistente Allenatore",
                esperienza: "Supporto tecnico e motivazionale",
                qualifiche: ["Corso Base Allenatori"],
            },
        ],
    },
    {
        id: "under-15-maschile",
        categoria: "Under 15 Maschile",
        descrizione: "Annate 2013-14",
        stagione: "2025/2026",
        campionato: "Campionato Provinciale Under 15",
        colore: "bg-secondary",
        immagine: "/u15.png",
        giocatori: Array.from({ length: 12 }, (_, i) => ({
            id: i + 1,
            nome: `Giocatore${i + 1}`,
            cognome: `Cognome${i + 1}`,
            ruolo: i === 0 ? "Palleggiatore" : i < 4 ? "Schiacciatrice" : i < 6 ? "Centrale" : i === 6 ? "Opposto" : "Libero",
            numero: i + 1,
            eta: Math.floor(Math.random() * 2) + 14, // 14-15 anni
            altezza: `1.${Math.floor(Math.random() * 20) + 60}m`,
            peso: `${Math.floor(Math.random() * 15) + 55}kg`,
            nazionalita: "Italia",
        })),
        staff: [
            {
                id: 1,
                nome: "Gianni",
                cognome: "Fantini",
                ruolo: "Allenatore Principale",
                esperienza: "Esperto nel settore giovanile maschile",
                qualifiche: ["Allenatore di 2° Grado FIPAV"],
            },
            {
                id: 2,
                nome: "Alessandro",
                cognome: "Vezzani",
                ruolo: "Assistente Allenatore",
                esperienza: "Preparazione atletica e tecnica avanzata",
                qualifiche: ["Corso Specializzazione Giovanile"],
            },
        ],
    },
    {
        id: "under-16-femminile",
        categoria: "Under 16 Femminile",
        descrizione: "Annate 2010-11",
        stagione: "2025/2026",
        campionato: "Campionato Provinciale Under 16",
        colore: "bg-muted",
        immagine: "/u16.png",
        giocatori: Array.from({ length: 14 }, (_, i) => ({
            id: i + 1,
            nome: `Giocatrice${i + 1}`,
            cognome: `Cognome${i + 1}`,
            ruolo: i === 0 ? "Palleggiatore" : i < 5 ? "Schiacciatrice" : i < 8 ? "Centrale" : i === 8 ? "Opposto" : "Libero",
            numero: i + 1,
            eta: Math.floor(Math.random() * 2) + 15, // 15-16 anni
            altezza: `1.${Math.floor(Math.random() * 15) + 60}m`,
            peso: `${Math.floor(Math.random() * 10) + 55}kg`,
            nazionalita: "Italia",
        })),
        staff: [
            {
                id: 1,
                nome: "Catia",
                cognome: "Cattini",
                ruolo: "Allenatore Principale",
                esperienza: "Specializzata nel settore femminile",
                qualifiche: ["Allenatore di 1° Grado FIPAV"],
            },
            {
                id: 2,
                nome: "Ilenia",
                cognome: "Sacchetti",
                ruolo: "Assistente Allenatore",
                esperienza: "Ex giocatrice professionista",
                qualifiche: ["Allenatore di 2° Grado FIPAV"],
            },
        ],
    },
    {
        id: "under-16-femminile-csi",
        categoria: "Under 16 Femminile CSI",
        descrizione: "Annate 2010-11",
        stagione: "2025/2026",
        campionato: "Campionato CSI Under 16",
        colore: "bg-muted",
        immagine: "/u16csi.png",
        giocatori: Array.from({ length: 12 }, (_, i) => ({
            id: i + 1,
            nome: `Giocatrice${i + 1}`,
            cognome: `Cognome${i + 1}`,
            ruolo: i === 0 ? "Palleggiatore" : i < 5 ? "Schiacciatrice" : i < 8 ? "Centrale" : i === 8 ? "Opposto" : "Libero",
            numero: i + 1,
            eta: Math.floor(Math.random() * 2) + 15, // 15-16 anni
            altezza: `1.${Math.floor(Math.random() * 15) + 58}m`,
            peso: `${Math.floor(Math.random() * 10) + 52}kg`,
            nazionalita: "Italia",
        })),
        staff: [
            {
                id: 1,
                nome: "Giorgio",
                cognome: "Bezzecchi",
                ruolo: "Allenatore Principale",
                esperienza: "Esperienza pluriennale nel settore giovanile",
                qualifiche: ["Allenatore di 2° Grado FIPAV"],
            },
        ],
    },
    {
        id: "under-18-femminile-prima-divisione",
        categoria: "Under 18 Femminile / Prima Divisione Femminile",
        descrizione: "Annate 2008-09",
        stagione: "2025/2026",
        campionato: "Campionato Provinciale Under 18 / Prima Divisione",
        colore: "bg-accent",
        immagine: "/u18.png",
        giocatori: Array.from({ length: 14 }, (_, i) => ({
            id: i + 1,
            nome: `Giocatrice${i + 1}`,
            cognome: `Cognome${i + 1}`,
            ruolo: i === 0 ? "Palleggiatore" : i < 5 ? "Schiacciatrice" : i < 8 ? "Centrale" : i === 8 ? "Opposto" : "Libero",
            numero: i + 1,
            eta: Math.floor(Math.random() * 2) + 17, // 17-18 anni
            altezza: `1.${Math.floor(Math.random() * 15) + 65}m`,
            peso: `${Math.floor(Math.random() * 10) + 60}kg`,
            nazionalita: "Italia",
        })),
        staff: [
            {
                id: 1,
                nome: "Catia",
                cognome: "Cattini",
                ruolo: "Allenatore Principale",
                esperienza: "Esperta nel settore femminile di alto livello",
                qualifiche: ["Allenatore di 1° Grado FIPAV", "Master in Preparazione Atletica"],
            },
        ],
    },
    {
        id: "under-18-femminile-csi",
        categoria: "Under 18 Femminile CSI",
        descrizione: "Annate 2008-09",
        stagione: "2025/2026",
        campionato: "Campionato CSI Under 18",
        colore: "bg-accent",
        immagine: "/u18csi.png",
        giocatori: Array.from({ length: 14 }, (_, i) => ({
            id: i + 1,
            nome: `Giocatrice${i + 1}`,
            cognome: `Cognome${i + 1}`,
            ruolo: i === 0 ? "Palleggiatore" : i < 5 ? "Schiacciatrice" : i < 8 ? "Centrale" : i === 8 ? "Opposto" : "Libero",
            numero: i + 1,
            eta: Math.floor(Math.random() * 2) + 17, // 17-18 anni
            altezza: `1.${Math.floor(Math.random() * 15) + 62}m`,
            peso: `${Math.floor(Math.random() * 10) + 58}kg`,
            nazionalita: "Italia",
        })),
        staff: [
            {
                id: 1,
                nome: "Giorgio",
                cognome: "Bezzecchi",
                ruolo: "Allenatore Principale",
                esperienza: "Lunga esperienza nel settore giovanile",
                qualifiche: ["Allenatore di 2° Grado FIPAV"],
            },
            {
                id: 2,
                nome: "Paolo",
                cognome: "Neviani",
                ruolo: "Assistente Allenatore",
                esperienza: "Supporto tecnico e motivazionale",
                qualifiche: ["Corso Base Allenatori"],
            },
        ],
    },
    {
        id: "under-19-maschile",
        categoria: "Under 19 Maschile",
        descrizione: "Annate 2007-08",
        stagione: "2025/2026",
        campionato: "Campionato Provinciale Under 19",
        colore: "bg-secondary",
        immagine: "/u19.png",
        giocatori: [
            {
                id: 1,
                nome: `Leonardo`,
                cognome: `Pignagnoli`,
                ruolo: "Palleggiatore",
                numero: 1,
            },
            {
                id: 2,
                nome: `Davide`,
                cognome: `Campani`,
                ruolo: "Palleggiatore",
                numero: 2,
            },
            {
                id: 3,
                nome: `Alessio`,
                cognome: `Lugli`,
                ruolo: "Centrale",
                numero: 3,
            },
            {
                id: 4,
                nome: `Angadpal`,
                cognome: `Singh`,
                ruolo: "Centrale",
                numero: 4,
            },
            {
                id: 5,
                nome: `Arshpreet`,
                cognome: `Singh`,
                ruolo: "Centrale",
                numero: 5,
            },
            {
                id: 6,
                nome: `Matteo`,
                cognome: `Baricchi`,
                ruolo: "Opposto",
                numero: 6,
            },
            {
                id: 7,
                nome: `Valerio`,
                cognome: `Melli`,
                ruolo: "Opposto",
                numero: 7,
            },
            {
                id: 8,
                nome: `Alessio`,
                cognome: `Bolognesi`,
                ruolo: "Opposto",
                numero: 8,
            },
            {
                id: 9,
                nome: `Filippo`,
                cognome: `Bertolotti`,
                ruolo: "Schiacciatore",
                numero: 9,
            },
            {
                id: 10,
                nome: `Fabrizio`,
                cognome: `Gasparini`,
                ruolo: "Schiacciatore",
                numero: 10,
                capitano: true,
            },
            {
                id: 11,
                nome: `Pietro`,
                cognome: `Denti`,
                ruolo: "Libero",
                numero: 1,
            },
            {
                id: 12,
                nome: `Giacomo`,
                cognome: `Iotti`,
                ruolo: "Libero",
                numero: 12,
            },
        ],
        staff: [
            {
                id: 1,
                nome: "Alberto",
                cognome: "Iotti",
                ruolo: "Allenatore Principale",
                esperienza: "Specializzato nella formazione di giovani talenti",
                qualifiche: ["Allenatore di 1° Grado FIPAV"],
            },
            {
                id: 2,
                nome: "Alessandro",
                cognome: "Vezzani",
                ruolo: "Assistente Allenatore",
                esperienza: "Preparazione atletica e tecnica avanzata",
                qualifiche: ["Corso Specializzazione Giovanile"],
            },
        ],
    },
    {
        id: "prima-divisione-maschile",
        categoria: "Prima Divisione Maschile",
        descrizione: "Squadra Amatoriale Maschile",
        stagione: "2025/2026",
        campionato: "Prima Divisione Maschile",
        colore: "bg-secondary",
        immagine: "/1divm.png",
        giocatori: [
            {
                id: 1,
                nome: `Dario`,
                cognome: `Bedogni`,
                ruolo: "Palleggiatore",
                numero: 1,
                capitano: true,
            },
            {
                id: 2,
                nome: `Alessandro`,
                cognome: `Palbiani`,
                ruolo: "Palleggiatore",
                numero: 2,
            },
            {
                id: 3,
                nome: `Francesco`,
                cognome: `Mattioli`,
                ruolo: "Centrale",
                numero: 3,
            },
            {
                id: 4,
                nome: `Francesco`,
                cognome: `Scarnera`,
                ruolo: "Centrale",
                numero: 4,
            },
            {
                id: 5,
                nome: `Gabriele`,
                cognome: `Menozzi`,
                ruolo: "Centrale",
                numero: 5,
            },
            {
                id: 6,
                nome: `Davide`,
                cognome: `Ronzoni`,
                ruolo: "Centrale",
                numero: 6,
            },
            {
                id: 7,
                nome: `Riccardo`,
                cognome: `Gasparini`,
                ruolo: "Opposto",
                numero: 7,
            },
            {
                id: 8,
                nome: `Matteo`,
                cognome: `Baricchi`,
                ruolo: "Opposto",
                numero: 8,
            },
            {
                id: 9,
                nome: `Federico`,
                cognome: `Monaco`,
                ruolo: "Opposto",
                numero: 9,
            },
            {
                id: 10,
                nome: `Fabrizio`,
                cognome: `Gasparini`,
                ruolo: "Schiacciatore",
                numero: 10,
            },
            {
                id: 11,
                nome: `Mirco`,
                cognome: `Barbieri`,
                ruolo: "Schiacciatore",
                numero: 1,
            },
            {
                id: 12,
                nome: `Nicolò`,
                cognome: `Gozzi`,
                ruolo: "Schiacciatore",
                numero: 12,
            },
            {
                id: 13,
                nome: `Andrea`,
                cognome: `Masoni`,
                ruolo: "Schiacciatore",
                numero: 13,
            },
            {
                id: 14,
                nome: `Nicolò`,
                cognome: `Bertolotti`,
                ruolo: "Libero",
                numero: 14,
            },
            {
                id: 15,
                nome: `Bruno`,
                cognome: `Nappa`,
                ruolo: "Libero",
                numero: 15,
            },
            {
                id: 16,
                nome: `Pietro`,
                cognome: `Denti`,
                ruolo: "Libero",
                numero: 16,
            },
        ],
        staff: [
            {
                id: 1,
                nome: "Claudio",
                cognome: "Caselli",
                ruolo: "Allenatore Principale",
                esperienza: "Esperienza nel settore amatoriale",
                qualifiche: ["Allenatore di 3° Grado FIPAV"],
            },
            {
                id: 2,
                nome: "Cristian",
                cognome: "Gasparini",
                ruolo: "Assistente Allenatore",
                esperienza: "Ex giocatore della società",
                qualifiche: ["Corso Base Allenatori"],
            },
        ],
    },
    {
        id: "terza-divisione-femminile",
        categoria: "Terza Divisione Femminile",
        descrizione: "Squadra Amatoriale Femminile",
        stagione: "2025/2026",
        campionato: "Terza Divisione Femminile",
        colore: "bg-secondary",
        immagine: "/3divf.png",
        giocatori: Array.from({ length: 14 }, (_, i) => ({
            id: i + 1,
            nome: `Giocatrice${i + 1}`,
            cognome: `Cognome${i + 1}`,
            ruolo: i === 0 ? "Palleggiatore" : i < 5 ? "Schiacciatrice" : i < 8 ? "Centrale" : i === 8 ? "Opposto" : "Libero",
            numero: i + 1,
            eta: Math.floor(Math.random() * 15) + 22, // 22-37 anni
            altezza: `1.${Math.floor(Math.random() * 15) + 60}m`,
            peso: `${Math.floor(Math.random() * 15) + 55}kg`,
            nazionalita: "Italia",
        })),
        staff: [
            {
                id: 1,
                nome: "Ilenia",
                cognome: "Sacchetti",
                ruolo: "Allenatore Principale",
                esperienza: "Ex giocatrice professionista, ora allenatrice",
                qualifiche: ["Allenatore di 2° Grado FIPAV"],
            },
        ],
    },
    {
        id: "misto-amatoriale",
        categoria: "Misto Amatoriale",
        descrizione: "Squadra Amatoriale Mista",
        stagione: "2025/2026",
        campionato: "Campionato Misto Amatoriale",
        colore: "bg-secondary",
        immagine: "/misto.png",
        giocatori: Array.from({ length: 14 }, (_, i) => ({
            id: i + 1,
            nome: `Giocatore${i + 1}`,
            cognome: `Cognome${i + 1}`,
            ruolo: i === 0 ? "Palleggiatore" : i < 5 ? "Schiacciatrice" : i < 8 ? "Centrale" : i === 8 ? "Opposto" : "Libero",
            numero: i + 1,
            eta: Math.floor(Math.random() * 20) + 20, // 20-40 anni
            altezza: `1.${Math.floor(Math.random() * 25) + 60}m`,
            peso: `${Math.floor(Math.random() * 25) + 55}kg`,
            nazionalita: "Italia",
        })),
        staff: [
            {
                id: 1,
                nome: "Alessandro",
                cognome: "Vezzani",
                ruolo: "Allenatore Principale",
                esperienza: "Specializzato nel coordinamento di squadre miste",
                qualifiche: ["Allenatore di 2° Grado FIPAV"],
            },
        ],
    },
    {
        id: "serie-d-femminile",
        categoria: "Serie D Femminile",
        descrizione: "Squadra Senior Femminile",
        stagione: "2025/2026",
        campionato: "Serie D Regionale Femminile",
        colore: "bg-secondary",
        immagine: "/df.png",
        giocatori: Array.from({ length: 14 }, (_, i) => ({
            id: i + 1,
            nome: `Giocatrice${i + 1}`,
            cognome: `Cognome${i + 1}`,
            ruolo: i === 0 ? "Palleggiatore" : i < 5 ? "Schiacciatrice" : i < 8 ? "Centrale" : i === 8 ? "Opposto" : "Libero",
            numero: i + 1,
            eta: Math.floor(Math.random() * 10) + 18, // 18-28 anni
            altezza: `1.${Math.floor(Math.random() * 20) + 65}m`,
            peso: `${Math.floor(Math.random() * 15) + 60}kg`,
            nazionalita: "Italia",
        })),
        staff: [
            {
                id: 1,
                nome: "Michele",
                cognome: "Giazzi",
                ruolo: "Allenatore Principale",
                esperienza: "Esperienza nel settore femminile senior",
                qualifiche: ["Allenatore di 1° Grado FIPAV"],
            },
        ],
    },
    {
        id: "serie-c-femminile",
        categoria: "Serie C Femminile",
        descrizione: "Squadra Senior Femminile",
        stagione: "2025/2026",
        campionato: "Serie C Regionale Femminile",
        colore: "bg-secondary",
        immagine: "/cf.png",
        giocatori: Array.from({ length: 14 }, (_, i) => ({
            id: i + 1,
            nome: `Giocatrice${i + 1}`,
            cognome: `Cognome${i + 1}`,
            ruolo: i === 0 ? "Palleggiatore" : i < 5 ? "Schiacciatrice" : i < 8 ? "Centrale" : i === 8 ? "Opposto" : "Libero",
            numero: i + 1,
            eta: Math.floor(Math.random() * 8) + 20, // 20-28 anni
            altezza: `1.${Math.floor(Math.random() * 20) + 68}m`,
            peso: `${Math.floor(Math.random() * 15) + 62}kg`,
            nazionalita: "Italia",
        })),
        staff: [
            {
                id: 1,
                nome: "Antonella",
                cognome: "Ianniciello",
                ruolo: "Allenatore Principale",
                esperienza: "Allenatrice di alto livello con esperienza in Serie B",
                qualifiche: ["Allenatore di 1° Grado FIPAV", "Master in Preparazione Atletica"],
            },
        ],
    },
    {
        id: "serie-c-maschile",
        categoria: "Serie C Maschile",
        descrizione: "Squadra Senior Maschile",
        stagione: "2025/2026",
        campionato: "Serie C Regionale Maschile",
        colore: "bg-primary",
        immagine: "/cm.png",
        giocatori: Array.from({ length: 14 }, (_, i) => ({
            id: i + 1,
            nome: `Giocatore${i + 1}`,
            cognome: `Cognome${i + 1}`,
            ruolo: i === 0 ? "Palleggiatore" : i < 5 ? "Schiacciatrice" : i < 8 ? "Centrale" : i === 8 ? "Opposto" : "Libero",
            numero: i + 1,
            eta: Math.floor(Math.random() * 8) + 22, // 22-30 anni
            altezza: `1.${Math.floor(Math.random() * 25) + 80}m`,
            peso: `${Math.floor(Math.random() * 20) + 75}kg`,
            nazionalita: "Italia",
        })),
        staff: [
            {
                id: 1,
                nome: "Marco",
                cognome: "Barozzi",
                ruolo: "Allenatore Principale",
                esperienza: "Allenatore di alto livello con esperienza in Serie B e A",
                qualifiche: ["Allenatore di 1° Grado FIPAV", "Master in Preparazione Atletica", "Corso Specializzazione Serie A"],
            },
        ],
    },
];

export function getTeamBySlug(slug: string): Team | undefined {
    const slugMap: { [key: string]: string } = {
        "s3-white-red-green": "s3-white-red-green",
        "under-12-femminile": "under-12-femminile",
        "under-13-femminile": "under-13-femminile",
        "under-14-femminile": "under-14-femminile",
        "under-15-maschile": "under-15-maschile",
        "under-16-femminile": "under-16-femminile",
        "under-16-femminile-csi": "under-16-femminile-csi",
        "under-18-femminile-prima-divisione": "under-18-femminile-prima-divisione",
        "under-18-femminile-csi": "under-18-femminile-csi",
        "under-19-maschile": "under-19-maschile",
        "prima-divisione-maschile": "prima-divisione-maschile",
        "terza-divisione-femminile": "terza-divisione-femminile",
        "misto-amatoriale": "misto-amatoriale",
        "serie-d-femminile": "serie-d-femminile",
        "serie-c-femminile": "serie-c-femminile",
        "serie-c-maschile": "serie-c-maschile",
    };

    const teamId = slugMap[slug];
    return teamsData.find((team) => team.id === teamId);
}

export function getAllTeamSlugs(): string[] {
    return teamsData.map((team) => team.id);
}
