import Layout from "@layout";
import React from "react";
import "./assets/scss/main.scss";
import Boundary from "@components/ErrorBoundaries";

function App() {
    return (
        <Boundary>
            <Layout />
        </Boundary>
    );
}

export default App;
