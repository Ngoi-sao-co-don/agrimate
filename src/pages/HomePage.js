import { Link } from "react-router-dom"
import Header from "./components/Header"
import Banner from "./components/Banner";
import Content from "./components/Content";
import Footer from "./components/Footer";
function HomePage(){
    return <>
        <Header />
        <Banner />
        <Content />
        <Footer />
    </>
}

export default HomePage