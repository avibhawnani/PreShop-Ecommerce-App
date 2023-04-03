import  React from 'react'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import {BrowserRouter,Routes,Route } from "react-router-dom";
import AppContext from "./utils/context";
const App = () => {
  return (
    <BrowserRouter>
    <AppContext>
    <Header></Header>
    <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/category/:id' element={<Category></Category>}></Route>
        <Route exact path='/product/:id' element={<SingleProduct></SingleProduct>}></Route>
    </Routes>
    <Newsletter></Newsletter>
    <Footer></Footer>
    </AppContext>
    </BrowserRouter>
  )
}
export default App;
