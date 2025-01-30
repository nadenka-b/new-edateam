export type BaseResponse<Data> = {
    success: true;
    body?: Data;
  } | {
    success: false;
    error: string;
  };
  
  export type Recipe = {
    id: string;
    title: string;
    videoUrl: string;
    tags: string[];
    timeCooking: string;
    ingredients: Ingredient[];
    steps: string[];
  };
  
  export type Ingredient = {
    name: string;
    amount: string;
  };
  
  export type RecipeResponse = BaseResponse<Recipe[]>; 
  