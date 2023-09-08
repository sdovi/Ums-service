import React from 'react'
import { Navbar } from '../component/Navbar/Navbar'
import { Footer } from '../component/Footer/Footer'
import { View_Product } from '../component/ViewProduct/View_Product'

export const Views_product = () => {
    return (
        <div>
            <Navbar/>
            <View_Product/>
            <Footer/>
            
        </div>
    )
}
