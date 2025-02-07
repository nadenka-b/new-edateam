import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import UserPage from './pages/user-page';
import HomePage from "./pages/home-page";
import Recipe from "./pages/recipe-page";
import AddRecipePage from "./pages/add-recipe-page";
import { URLs } from "./__data__/urls";


export const PageRoutes = () => (
    <Routes>
        <Route path={URLs.baseUrl} element={
            <>
                <Header />
                <HomePage />
                <Footer />
            </>
        } />
        <Route path={`${URLs.ui.user.url}/:id`} element={
            <>
                <Header />
                <UserPage />
                <Footer />
            </>
        } />
        <Route path={`${URLs.ui.recipe.url}/:id`} element={
            <>
                <Header />
                <Recipe />
                <Footer />
            </>
        } />
        <Route path={URLs.ui.add_recipe.url} element={
            <>
                <Header />
                <AddRecipePage />
                <Footer />
            </>
        } />
        <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
)