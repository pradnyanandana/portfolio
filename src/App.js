import React, {Fragment} from "react";
import PageHelmet from "./component/common/Helmet";
import Header from "./component/header/Header";
import Hero from "./component/section/Hero";
import About from "./component/section/About"
import Service from "./component/section/Service";
import Footer from "./component/footer/Footer";
import Project from "./component/section/Project";
import Contact from "./component/section/Contact";
import "./App.css";

const App = (props) => {
    return (
        <Fragment>
            <PageHelmet pageTitle="Portfolio"/>
            <Header />
            <Hero />
            <About />
            <Service />
            <Project />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default App;
