import { getConfigValue, getNavigationsValue } from "@brojs/cli";
import { generatePath } from "react-router-dom";

const baseUrl = getNavigationsValue('new-edateam.main');
console.log("Base URL:", baseUrl);

export const URLs = {
    baseUrl,
    ui: {
        recipe: {
            url: `${baseUrl}${getNavigationsValue('new-edateam.recipe')}`,
            on: Boolean(getNavigationsValue('new-edateam.recipe')),
            getUrl: (recipeId: number) => generatePath(`${baseUrl}${getNavigationsValue('new-edateam.recipe')}/:id`, { id: recipeId.toString() })
        },
        user: {
            url: `${baseUrl}${getNavigationsValue('new-edateam.user')}`,
            on: Boolean(getNavigationsValue('new-edateam.user')),
            getUrl: (userId: number) => generatePath(`${baseUrl}${getNavigationsValue('new-edateam.user')}/:id`, { id: userId.toString() })
        },
        add_recipe: {
            url: `${baseUrl}${getNavigationsValue('new-edateam.add-recipe')}`,
            on: Boolean(getNavigationsValue('new-edateam.add-recipe'))
        }
    },
    api: {
        main: getConfigValue('new-edateam.api'),
        auth: getConfigValue('new-edateam.auth'),
        images: getConfigValue('new-edateam.images')
    },
}