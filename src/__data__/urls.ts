import { getNavigationsValue } from "@brojs/cli";
import { generatePath } from "react-router-dom";

const baseUrl = getNavigationsValue('edateam.main');

export const URLs = {
    baseUrl,
    ui:{
        recipe:{
            url:`${baseUrl}${getNavigationsValue('new-edateam.recipe')}`,
            on:Boolean(getNavigationsValue('new-edateam.recipe')),
            getUrl:(recipeId:number)=>generatePath(`${baseUrl}${getNavigationsValue('new-edateam.recipe')}, {recipeId}`)
        },
        user:{
            url:`${baseUrl}${getNavigationsValue('new-edateam.user')}`,
            on:Boolean(getNavigationsValue('new-edateam.user')),
            getUrl:(userId:number)=>generatePath(`${baseUrl}${getNavigationsValue('new-edateam.user')}, {userId}`)
        },
        add_recipe:{
            url:`${baseUrl}${getNavigationsValue('new-edateam.add-recipe')}`,
            on: Boolean(getNavigationsValue('new-edateam.add-recipe'))
        }
    },
    api:{}, // здесь будут запросы
}