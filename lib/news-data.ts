import { get } from "http";

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


export const getNewsData = async (): Promise<NewsArticle[]> => {
    return await fetch("https://www.volleyballsanmartino.it/api/news")
    .then((res) => res.json())
    .then((data) => data as NewsArticle[]);
};

export const getNewsById = async (id: number): Promise<NewsArticle | undefined> => {
    return (await getNewsData()).find((article: NewsArticle) => article.id === id);
};

export const getNewsBySlug = async (slug: string): Promise<NewsArticle | undefined> => {
    return (await getNewsData()).find((article: NewsArticle) => article.slug === slug);
};

export const getFeaturedNews = async (): Promise<NewsArticle[]> => {
    return (await getNewsData()).filter((article: NewsArticle) => article.featured);
};

export const getLatestNews = async (limit = 6): Promise<NewsArticle[]> => {
    console.log("Fetching latest news:", await getNewsData());
    return (await getNewsData()).sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()).slice(0, limit);
};

export const getNewsByCategory = async (category: string): Promise<NewsArticle[]> => {
    if (category === "Tutte") return await getNewsData();
    return (await getNewsData()).filter((article: NewsArticle) => article.categoria === category);
};

export const getCategories = (): string[] => {
    const categories = ["Tutte", ...new Set(newsData.map((article) => article.categoria)), "Eventi", "Comunicati", "Risultati"];
    return categories;
};

export const newsData: NewsArticle[] = await getNewsData();