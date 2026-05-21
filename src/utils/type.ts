
export type features = {
    id: number;
    title: string;
    description: string;
    buttonText: string;
}

export type carPhoto = {
    id: number;
    title: string;
    slug: string;
    category: string;
    src: string;
    alt: string;
    price: string;
    details: {
        brand: string;
        model: string;
        year: number;
        type?: string;
    }
}

