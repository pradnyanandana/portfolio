import React from "react";
import PageHelmet from "./component/common/Helmet";
import Header from "./component/header/Header";
import Hero from "./component/section/Hero";
import About from "./component/section/About";
import Service from "./component/section/Service";
import Footer from "./component/footer/Footer";
import Project from "./component/section/Project";
import Contact from "./component/section/Contact";
import ProjectDetail from "./component/section/ProjectDetail";
import ScrollToTop from "./component/common/ScrollToTop";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";

const App = (props) => {
    return (
        <>
            <PageHelmet pageTitle="Portfolio" />
            <Router>
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/portfolio">
                            <Content />
                        </Route>
                    </Switch>
                </ScrollToTop>
            </Router>
        </>
    );
};

const Content = () => {
    const query = new URLSearchParams(useLocation().search);
    const project = query.get("project");

    return (
        <>
            <Header project={project} />
            {project ? (
                <ProjectDetail project={project} />
            ) : (
                <>
                    <Hero />
                    <About />
                    <Service />
                    <Project />
                </>
            )}
            <Contact />
            <Footer />
        </>
    );
};

export default App;
