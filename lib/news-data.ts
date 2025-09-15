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

export const newsData: NewsArticle[] = loadFromStorage<NewsArticle[]>(STORAGE_KEYS.NEWS, []);

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
    const categories = ["Tutte", ...new Set(loadFromStorage(STORAGE_KEYS.NEWS, newsData).map((article) => article.categoria))];
    return categories;
};
