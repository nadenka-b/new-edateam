export type User = {
    id: number;
    login: string;
    email: string
    name: string
    surname: string
    phone: string
    image: File
    role: string
    dateRegistration: string
}

export type UserResponse = {
    user: User
    accessToken: string
    refreshToken: string
}

export type LoginRequest = {
    loginOrEmail: string
    password: string
}

export type DataPage = {
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
    isActive: boolean;
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
    filePath: string;
}

export type Type = {
    id: number;
    value: string;
    types: FileType[];
}

export type FileType = {
    id: number;
    value: string;
}

export type Filters = {
    ingredientTitles: string[];
    excludeIngredientTitles: string[];
    tagIds: number;
    cookTime: number;
    title: string;
}
