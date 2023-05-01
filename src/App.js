import React from "react";
import PageHelmet from "./component/common/Helmet";
import Header from "./component/header/Header";
import Hero from "./component/section/Hero";
import About from "./component/section/About";
import Service from "./component/section/Service";
import Footer from "./component/footer/Footer";
import Project from "./component/section/Project";
import Contact from "./component/section/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Fragment } from "react/cjs/react.production.min";
import ProjectDetail from "./component/section/ProjectDetail";

const App = (props) => {
    return (
        <Fragment>
            <PageHelmet pageTitle="Portfolio" />
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Hero />
                        <About />
                        <Service />
                        <Project />
                    </Route>
                    <Route path="/project/:projectId">
                        <ProjectDetail />
                    </Route>
                </Switch>
                <Contact />
                <Footer />
            </Router>
        </Fragment>
    );
};

export default App;
