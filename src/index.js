import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context';
import { CartProvider } from "react-use-cart";
import { QueryClient, QueryClientProvider } from 'react-query'; 

const queryClient = new QueryClient(); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ContextProvider>
            <CartProvider>
                <QueryClientProvider client={queryClient}> 
                    <App />
                </QueryClientProvider>
            </CartProvider>
        </ContextProvider>
    </BrowserRouter>
);
