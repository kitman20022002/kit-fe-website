import '../src/styles.css'
import React from "react";
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({Component, pageProps}) {
    return (
        <React.Fragment>
            <Component{...pageProps}/>
        </React.Fragment>
    );
}
