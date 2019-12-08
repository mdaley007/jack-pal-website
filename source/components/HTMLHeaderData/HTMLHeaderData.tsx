// IMPORT
import * as React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"

// COMPONENT
export const HTMLHeaderData: React.SFC = () => {
    return (
        <HelmetProvider>
            <Helmet>

                <meta name="description" content="Media By the People, For the People"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Jack Pal Productions</title>
            </Helmet>
        </HelmetProvider>
    )
}

//                 <link rel="icon" type="image/x-icon" href="favicon.ico"/>