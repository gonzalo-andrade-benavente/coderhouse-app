import React from "react";

import { Route, Routes } from "react-router-dom";

import '../../App.css';

import { Navbar } from "../ui/Navbar";

import { ProductApp } from "../product/ProductApp";
import { Product } from "../product/Product";

import { UserApp } from "../user/UserApp";

export const AppRouter = () => {

    return (
        <div>

            <Navbar />

            <div className="App">

                <Routes>

                    <Route path="/" element={<ProductApp />} />

                    <Route path="/product" element={<Product />} />

                    <Route path="/products" element={<ProductApp />} />

                    <Route path="/users" element={<UserApp />} />

                </Routes>

            </div>

        </div>
    )
}