import React  from "react";
import {Routes, Route} from 'react-router-dom';
import UserPage from './pages/user-page';
import HomePage from "./pages/home-page";
import Recipe from "./pages/recipe-page";
import { URLs } from "./__data__/urls";
export const PageRoutes =()=>(
    <Routes>
        <Route path={URLs.ui.user.url} element={<UserPage/>}/> 
        <Route path={URLs.baseUrl} element={<HomePage/>}/>
        <Route path={URLs.ui.recipe.url} element={<Recipe/>}/>
        <Route path="*" element={<h1>Page not found</h1>}/>
    </Routes>
)