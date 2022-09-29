import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Content from "./content/Content";

interface LayoutProps {}
const Layout: React.FunctionComponent<LayoutProps> = () => {
    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    );
};
export default Layout;
