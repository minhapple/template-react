import Home from "@pages/home";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

interface ContentProps {}
const Content: React.FunctionComponent<ContentProps> = props => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
};
export default Content;
