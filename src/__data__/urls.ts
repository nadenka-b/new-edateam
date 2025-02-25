import { getConfigValue, getFeatures, getNavigationValue } from "@brojs/cli";
import { generatePath } from "react-router-dom";


const baseUrl = getNavigationValue('new-edateam.main');
const getEdateamFeatures = () => getFeatures('new-edateam');

export const URLs = {
    baseUrl,
    ui: {
        recipe: {
            url: `${baseUrl}${getNavigationValue('new-edateam.recipe')}`,
            on: Boolean(getNavigationValue('new-edateam.recipe')),
            getUrl: (recipeId: number) => generatePath(`${baseUrl}${getNavigationValue('new-edateam.recipe')}/:id`, { id: recipeId.toString() })
        },
        user: {
            url: `${baseUrl}${getNavigationValue('new-edateam.user')}`,
            on: Boolean(getNavigationValue('new-edateam.user')),
            getUrl: (userId: number) => generatePath(`${baseUrl}${getNavigationValue('new-edateam.user')}/:id`, { id: userId.toString() })
        },
        add_recipe: {
            url: `${baseUrl}${getNavigationValue('new-edateam.add-recipe')}`,
            on: Boolean(getNavigationValue('new-edateam.add-recipe'))
        }
    },
    api: {
        main: getConfigValue('new-edateam.api'),
        auth: getConfigValue('new-edateam.auth'),
        images: getConfigValue('new-edateam.images')
    },
    features: {
        filters: getEdateamFeatures()?.filters,
    }
}