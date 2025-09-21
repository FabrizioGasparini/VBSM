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

export const newsData: NewsArticle[] = await fetch("https://www.volleyballsanmartino.it/api/news.php")
    .then((res) => res.json())
    .then((data) => data as NewsArticle[]);

export const getNewsById = (id: number): NewsArticle | undefined => {
    return newsData.find((article: NewsArticle) => article.id === id);
};

export const getNewsBySlug = (slug: string): NewsArticle | undefined => {
    return newsData.find((article: NewsArticle) => article.slug === slug);
};

export const getFeaturedNews = (): NewsArticle[] => {
    return newsData.filter((article: NewsArticle) => article.featured);
};

export const getLatestNews = async (limit = 6): Promise<NewsArticle[]> => {
    return newsData.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()).slice(0, limit);
};

export const getNewsByCategory = (category: string): NewsArticle[] => {
    if (category === "Tutte") return newsData;
    return newsData.filter((article: NewsArticle) => article.categoria === category);
};

export const getCategories = (): string[] => {
    const categories = ["Tutte", ...new Set(newsData.map((article) => article.categoria))];
    return categories;
};
