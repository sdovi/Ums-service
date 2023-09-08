import React from 'react'
import { Navbar } from '../component/Navbar/Navbar'
import { Footer } from '../component/Footer/Footer'
import { Products } from '../component/Products/Products'
import { View_Product } from '../component/ViewProduct/View_Product'

export const Product = () => {
    return (
        <div>
            <Navbar />
            <Products/>
            <Footer />

        </div>
    )
}
