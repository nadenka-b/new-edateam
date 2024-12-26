import { getNavigationsValue } from "@brojs/cli";
import { generatePath } from "react-router-dom";

const baseUrl = getNavigationsValue('edateam.main');

export const URLs = {
    baseUrl,
    ui:{
        recipe:{
            url:`${baseUrl}${getNavigationsValue('edateam.recipe')}`,
            on:Boolean(getNavigationsValue('edateam.recipe')),
          //  getUrl:(recipeId:number)=>generatePath(`${baseUrl}${getNavigationsValue('edateam.recipe')}, {recipeId}`)
        },
        user:{
            url:`${baseUrl}${getNavigationsValue('edateam.user')}`,
            on:Boolean(getNavigationsValue('edateam.user')),
           //  getUrl:(userId:number)=>generatePath(`${baseUrl}${getNavigationsValue('edateam.user')}, {userId}`)
        }
    },
    api:{}, // здесь будут запросы
}