import React, { Suspense } from 'react';
import Router from "./Router.jsx";

const App = () => {

    return (
        <Suspense fallback={null}>
            <Router />
        </Suspense>
    );
}

export default App;
// add loading element in suspense