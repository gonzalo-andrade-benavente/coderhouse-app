import React from "react";

import { Route, Routes } from "react-router-dom";

import { ProductApp } from "../product/ProductApp";

import { UserApp } from "../user/UserApp";

export const AppRouter = () => {
    
    return(
        <div>
            
            <h1>Welcome to React Router!</h1>

            <Routes>

                <Route path="/" element={ <ProductApp /> }/>

                <Route path="/products" element={ <ProductApp /> }/>

                <Route path="/users" element={ <UserApp />} />


            </Routes>

        </div>
    )
}