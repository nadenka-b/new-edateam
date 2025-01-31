export type RootObject = {
    content: Content[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

export type Content = {
    id: number;
    title: string;
    timeCook: number;
    type: Type;
    file: File;
    tags: FileType[];
    dishIngredients: DishIngredient[];
    events: Event[];
}

export type Pageable = {
    pageNumber: number;
    pageSize: number;
    sort: Sort;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

export type Sort = {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export type Event = {
    id: number;
    title: string;
    startDate: Date;
    endDate: Date;
}

export type DishIngredient = {
    id: number;
    ingredient: Ingredient;
    quantity: number; // количество
}

export type Ingredient = {
    id: number;
    title: string;
    measure: string;
}

export type File = {
    id: number;
    fileName: string;
    filePath: string;
    type: FileType;
    dateUploaded: string;
}

export type Type = {
    id: number;
    value: string;
    fileTypes: FileType[];
}

export type FileType = {
    id: number;
    value: string;
}