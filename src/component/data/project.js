import React from "react";

export const projects = [
    {
        id: "gutenverse",
        filter: "WordPress",
        title: "Gutenverse",
        timeline: "May 2022 - Present",
        techStacks: "WordPress, PHP, Javascript, React, MySQL",
        url: "https://wordpress.org/plugins/gutenverse/",
        overview: (
            <>
                <p>Gutenverse is a WordPress plugin that extends the functionalities of the Full Site Editor. The plugin offers a wide range of blocks to be utilised in building various types of content. Additionally, it includes a form management system that seamlessly integrates with the plugin features, providing users with a comprehensive solution for managing and creating custom forms.</p>
                <p>In this project, my task is developing various features, such as:</p>
                <ul className="list">
                    <li>Popup Builder</li>
                    <li>Customizable Breakpoints</li>
                    <li>Enable / Disable Blocks</li>
                </ul>
            </>
        ),
        gallery: [
            {
                path: 1,
                width: 4,
                height: 3,
                caption: "Customizable Breakpoint",
            },
            {
                path: 2,
                width: 4,
                height: 3,
                caption: "Enable / Disable Blocks",
            },
            {
                path: 3,
                width: 4,
                height: 3,
                caption: "Popup Builder",
            },
        ],
    },
    {
        id: "jnews",
        filter: "WordPress",
        title: "JNews",
        timeline: "January 2020 - Present",
        techStacks: "WordPress, PHP, Javascript, MySQL",
        url: "https://jnews.io/",
        overview: (
            <>
                <p>JNews is a WordPress theme that empowers individuals to design professional websites with high-speed performance and optimized for search engines. It presents an array of tools such as a visual editor, paywall system, pay-to-submit, pre-made demos, customizable designs, AI-powered writing assistance, and many more. JNews is a popular choice with a large number of users and a 99% satisfaction rate. Moreover, the theme is mobile-friendly and offers lifetime updates and support for a one-time payment.</p>
                <p>In this project, my task is developing various features, such as:</p>
                <ul className="list">
                    <li>Easy Content Restriction with Paywall System</li>
                    <li>Subscription System</li>
                    <li>Scrolling Mobile Menu</li>
                    <li>Table of Contents</li>
                </ul>
            </>
        ),
        gallery: [
            {
                path: 1,
                width: 5,
                height: 3,
                caption: "Paywall and Subscription System",
            },
            {
                path: 2,
                width: 2,
                height: 3,
                caption: "Scrolling Mobile Menu",
            },
            {
                path: 3,
                width: 5,
                height: 3,
                caption: "Table of Contents",
            },
        ],
    },
    {
        id: "togamba",
        filter: "Web",
        title: "Toga MBA Consulting",
        timeline: "May 2022 - January 2023",
        techStacks: "WordPress, PHP, Javascript, MySQL",
        url: "https://togambaconsulting.com/",
        overview: (
            <>
                <p>I designed and built a refreshment website for Toga MBA Consulting using WordPress and the Gutenverse plugin.</p>
            </>
        ),
        gallery: [
            {
                path: 1,
                width: 4,
                height: 3,
                caption: "Home",
            },
            {
                path: 2,
                width: 4,
                height: 3,
                caption: "Service",
            },
            {
                path: 3,
                width: 4,
                height: 3,
                caption: "Contact Form",
            },
            {
                path: 4,
                width: 4,
                height: 3,
                caption: "Blog",
            },
            {
                path: 5,
                width: 4,
                height: 3,
                caption: "TOEFL, IELTS, GRE, and GMAT Registrasion Form",
            },
            {
                path: 6,
                width: 4,
                height: 3,
                caption: "Admission Consulting and Case Interview Registration Form",
            },
        ],
    },
    {
        id: "megayastore",
        filter: "Web",
        title: "Megaya Store",
        timeline: "October 2021 - Present",
        techStacks: "WordPress, PHP, Javascript, MySQL",
        url: "https://megayastore.com/",
        overview: (
            <>
                <p>Create some features, such as social login, DHL shipping cost, pinterest pin image, color and size variation option.</p>
            </>
        ),
        gallery: [
            {
                path: 1,
                width: 4,
                height: 3,
                caption: "Home",
            },
            {
                path: 2,
                width: 4,
                height: 3,
                caption: "Color and Size Variations",
            },
            {
                path: 3,
                width: 4,
                height: 3,
                caption: "Social Login",
            },
        ],
    },
    {
        id: "gradient-picker",
        filter: "Web",
        title: "Gradient Picker",
        timeline: "November 2022 - March 2023",
        techStacks: "Javascript, Vue",
        url: "https://pradnyanandana.github.io/gradient-picker/",
        overview: (
            <>
                <p>I created a tool for generating gradient CSS code, featuring user-friendly color pickers for easily adding new colors to the gradient. As a challenge, I replicated the existing color picker to enhance my understanding of how color values are calculated and then implemented it using my own algorithm.</p>
            </>
        ),
        gallery: [
            {
                path: 1,
                width: 4,
                height: 3,
                caption: "Gradient Picker",
            },
        ],
    },
    {
        id: "jegauto",
        filter: "Backend",
        title: "Jegauto Telegram BOT",
        timeline: "June 2022 - February 2023",
        techStacks: "Javascript, NodeJS, Express",
        overview: (
            <>
                <p>A Telegram BOT that sends notification about car prices and some other details.</p>
            </>
        ),
        gallery: [
            {
                path: 1,
                width: 4,
                height: 3,
            },
            {
                path: 2,
                width: 4,
                height: 3,
            },
            {
                path: 3,
                width: 4,
                height: 3,
            },
        ],
    },
    {
        id: "dts-harga-rumah",
        filter: "Other",
        title: "House Price Prediction in Denpasar, Bali, Indonesia",
        techStacks: "Python",
        timeline: "August 2019",
        url: "https://github.com/pradnyanandana/dtshargarumah/",
        overview: (
            <>
                <p>As part of my participation in the Digital Talent Scholarship program, a Ministry of Communication and Informatics Indonesian Republic initiative aimed at developing digital skills, I completed a final project analyzing features that impact house prices and created a regression model utilizing the Multi Layer Perceptron.</p>
            </>
        ),
        gallery: [
            {
                path: 1,
                width: 4,
                height: 3,
                caption: "Crawling Data",
            },
            {
                path: 2,
                width: 4,
                height: 3,
                caption: "Analyze Data",
            },
            {
                path: 3,
                width: 4,
                height: 3,
                caption: "Create Prediction Model",
            },
        ],
    },
    {
        id: "filmy",
        filter: "Other",
        title: "Filmy",
        timeline: "August 2017 - September 2019",
        techStacks: "Java, Android",
        url: "https://github.com/pradnyanandana/PopularMoviesIAK",
        overview: (
            <>
                <p>As part of my participation in the Digital Talent Scholarship program, a Ministry of Communication and Informatics Indonesian Republic initiative aimed at developing digital skills, I completed a final project analyzing features that impact house prices and created a regression model utilizing the Multi Layer Perceptron..</p>
            </>
        ),
        gallery: [
            {
                path: 1,
                width: 4,
                height: 3,
                caption: "Loading Screen",
            },
            {
                path: 2,
                width: 4,
                height: 3,
                caption: "Movie Detail",
            },
            {
                path: 3,
                width: 4,
                height: 3,
                caption: "Popular Movie List",
            },
            {
                path: 4,
                width: 4,
                height: 3,
                caption: "Sidebar Menu",
            },
            {
                path: 5,
                width: 4,
                height: 3,
                caption: "Coming Soon List",
            },
            {
                path: 6,
                width: 4,
                height: 3,
                caption: "Top Rated List",
            },
        ],
    },
];
