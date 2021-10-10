import React, {Fragment} from "react";
import {Helmet} from 'react-helmet'

const PageHelmet = (props) =>{
    return(
        <Fragment>
            <Helmet>
                <title>{props.pageTitle} || Pradnyanandana </title>
                <meta name="description" content="Pradnyanandana Portfolio" />
            </Helmet>
        </Fragment>
    )
}


export default PageHelmet;
