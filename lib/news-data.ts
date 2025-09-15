import { loadFromStorage, STORAGE_KEYS } from "./storage";

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

export const newsData: NewsArticle[] = [
    {
        id: 1,
        slug: "ritiro-giovanili-marina-romea-2024",
        titolo: "Ritiro delle Squadre Giovanili a Marina Romea",
        categoria: "Eventi",
        data: "2024-09-07",
        autore: "Redazione VBSM",
        immagine: "/marina.png",
        estratto: "Dal 5 al 7 settembre le nostre squadre giovanili hanno partecipato al tradizionale ritiro di inizio stagione a Marina Romea, tre giorni intensi tra allenamenti, amicizia e divertimento.",
        contenuto: `Un weekend speciale per tutte le squadre giovanili del Volleyball San Martino, che dal 5 al 7 settembre hanno preso parte al consueto ritiro precampionato a Marina Romea.  

Tre giorni dedicati non solo al lavoro tecnico e fisico, ma anche alla coesione del gruppo e alla condivisione di momenti fuori dal campo. Gli atleti hanno svolto allenamenti al mattino sulla sabbia e in palestra nel pomeriggio, alternati ad attività di team building e giochi di gruppo.  

Gli allenatori hanno avuto l’occasione di conoscere meglio i propri ragazzi e di trasmettere lo spirito con cui affrontare la nuova stagione: impegno, crescita e divertimento.  

Il ritiro si è concluso con una partitella amichevole tra le diverse categorie, che ha coinvolto tutti i presenti in un clima di festa.  
"Siamo molto soddisfatti – ha commentato lo staff tecnico – i ragazzi hanno mostrato entusiasmo e grande partecipazione. Questo ritiro sarà la base per affrontare al meglio il campionato."`,
        tags: ["Ritiro", "Giovanili", "Marina Romea", "Preparazione"],
        featured: true,
    },
    {
        id: 2,
        slug: "ritiro-prime-squadre-viserbella-2024",
        titolo: "Ritiro delle Prime Squadre a Viserbella",
        categoria: "Eventi",
        data: "2024-09-14",
        autore: "Redazione VBSM",
        immagine: "/viserbella.png",
        estratto: "Dal 12 al 14 settembre le prime squadre del Volleyball San Martino si sono ritrovate all’Oxygen Hotel di Viserbella per il ritiro precampionato: lavoro, concentrazione e spirito di squadra.",
        contenuto: `Dal 12 al 14 settembre le prime squadre del Volleyball San Martino (Serie C Maschile, Serie C Femminile, Serie D Femminile e 1ª Divisione Maschile) hanno preso parte al ritiro di inizio stagione presso l’Oxygen Hotel di Viserbella.  

Tre giorni intensi, caratterizzati da doppie sedute di allenamento, riunioni tecniche e momenti di condivisione fuori dal campo. L’obiettivo era duplice: prepararsi fisicamente e mentalmente per la nuova stagione e consolidare il legame tra compagni e staff.  

Gli allenatori hanno posto l’accento sulla tattica e sulla costruzione del gioco, mentre i ragazzi e le ragazze hanno dimostrato grande disponibilità e voglia di lavorare.  

La struttura dell’Oxygen Hotel ha permesso di alternare sessioni in palestra e attività all’aperto, creando un mix perfetto tra intensità e relax.  
"Abbiamo gettato le basi per un’annata importante", ha dichiarato il direttore tecnico. "Il gruppo è unito e motivato, e siamo certi che questi giorni a Viserbella daranno i loro frutti durante il campionato."`,
        tags: ["Ritiro", "Prime Squadre", "Viserbella", "Preparazione", "Oxygen Hotel"],
        featured: false,
    },
    {
        id: 4,
        slug: "nuovo-presidente-roberto-intonti-2024",
        titolo: "Roberto Intonti è il Nuovo Presidente del Volleyball San Martino",
        categoria: "Società",
        data: "2025-08-01",
        autore: "Redazione VBSM",
        immagine: "/robby.png",
        estratto: "Il Volleyball San Martino dà il benvenuto al nuovo presidente Roberto Intonti, figura di grande esperienza e passione, pronto a guidare la società verso nuove sfide e traguardi.",
        contenuto: `La stagione 2025/2026 segna un momento importante per il Volleyball San Martino: Roberto Intonti è ufficialmente il nuovo presidente della società.  

    Conosciuto per il suo impegno nel mondo sportivo e per la sua vicinanza alla pallavolo, Intonti porta con sé entusiasmo, professionalità e la volontà di far crescere ulteriormente la realtà gialloblù.  

    Durante la presentazione ufficiale, il nuovo presidente ha espresso parole di orgoglio e determinazione:  
    "Assumere la guida del Volleyball San Martino è per me un grande onore. Questa società è una famiglia, e il nostro obiettivo sarà quello di continuare a investire sui giovani, rafforzare le prime squadre e mantenere alto il nome del nostro club a livello regionale e oltre."  

    Il passaggio di consegne è stato accolto con grande entusiasmo da atleti, staff e tifosi, che hanno salutato con calore l’inizio di questa nuova avventura.  

    Con Roberto Intonti alla guida, il Volleyball San Martino guarda al futuro con fiducia e ambizione, pronta ad affrontare nuove sfide dentro e fuori dal campo.`,
        tags: ["Società", "Presidente", "Roberto Intonti", "Novità"],
        featured: true,
    },
];

export const getNewsById = (id: number): NewsArticle | undefined => {
    return loadFromStorage(STORAGE_KEYS.NEWS, newsData).find((article: NewsArticle) => article.id === id);
};

export const getNewsBySlug = (slug: string): NewsArticle | undefined => {
    return loadFromStorage(STORAGE_KEYS.NEWS, newsData).find((article: NewsArticle) => article.slug === slug);
};

export const getFeaturedNews = (): NewsArticle[] => {
    return loadFromStorage(STORAGE_KEYS.NEWS, newsData).filter((article: NewsArticle) => article.featured);
};

export const getLatestNews = (limit = 6): NewsArticle[] => {
    return loadFromStorage(STORAGE_KEYS.NEWS, newsData)
        .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
        .slice(0, limit);
};

export const getNewsByCategory = (category: string): NewsArticle[] => {
    if (category === "Tutte") return loadFromStorage(STORAGE_KEYS.NEWS, newsData);
    return loadFromStorage(STORAGE_KEYS.NEWS, newsData).filter((article: NewsArticle) => article.categoria === category);
};

export const getCategories = (): string[] => {
    const categories = ["Tutte", ...new Set(newsData.map((article) => article.categoria))];
    return categories;
};
