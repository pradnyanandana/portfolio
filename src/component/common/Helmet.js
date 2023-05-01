import React from "react";
import {Helmet} from 'react-helmet'

const PageHelmet = (props) =>{
    return(
        <>
            <Helmet>
                <title>{props.pageTitle} || Pradnyanandana </title>
                <meta name="description" content="Pradnyanandana Portfolio" />
            </Helmet>
        </>
    )
}


export default PageHelmet;
