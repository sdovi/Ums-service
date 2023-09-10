import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context';
import { CartProvider } from "react-use-cart";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ContextProvider>
            <CartProvider>
                    <App />
            </CartProvider>
        </ContextProvider>
    </BrowserRouter>
);
