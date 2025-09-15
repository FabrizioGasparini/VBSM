export const STORAGE_KEYS = {
    NEWS: "vsm_news_data",
    MATCHES: "vsm_matches_data",
} as const;

export const saveToStorage = <T>(key: string, data: T): void => {
    if (typeof window !== "undefined") {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error("Error saving to localStorage:", error);
        }
    }
};

export const loadFromStorage = <T>(key: string, defaultValue: T): T => {
    if (typeof window !== "undefined") {
        try {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : defaultValue;
        } catch (error) {
            console.error("Error loading from localStorage:", error);
            return defaultValue;
        }
    }
    return defaultValue;
};

export const clearStorage = (key: string): void => {
    if (typeof window !== "undefined") {
        localStorage.removeItem(key);
    }
};
