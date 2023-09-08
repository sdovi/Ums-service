import { About } from "./Pages/About";
import { Footer } from "./component/Footer/Footer";
import { Header } from "./component/Header/Header";
import { Navbar } from "./component/Navbar/Navbar";
import { Section1 } from "./component/Section1/Section1";
import { Section2 } from "./component/Section2/Section2";
import { Section3 } from "./component/Section3/Section3";
import { Section4 } from "./component/Section4/Section4";
import { Contac_page } from "./Pages/Contac_page";
import { Section5 } from "./component/Section5/Section5";
import ReviewsCarousel from "./component/Section6/Section6";
import { Products } from "./component/Products/Products";
import { Product } from "./Pages/Product";
import { Route, Routes } from 'react-router-dom'
import { Home } from "./Pages/Home";
import { About_block } from "./component/About/About_block";
import { Korzina } from "./component/Korzina/Korzina";
import { Order } from "./component/Order/Order";
import { Com_order } from "./Pages/Com_order";
import { View_Product } from "./component/ViewProduct/View_Product";
import { Views_product } from "./Pages/Views_product";
import { Orders2 } from "./Pages/Orders2";


function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/contact' element={<Contac_page/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/korzina' element={<Korzina/>} />
        <Route path='/order/:id' element={<Orders2/>} />
        <Route path='/decoration' element={<Com_order/>} />

        <Route path='/:id' element={<Views_product/>} />
      </Routes>
    </div>
  );
}

export default App;
