import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Calculator } from "./pages/Calculator";
import { Home } from "./pages/Home";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calculator" element={<Calculator />} />
            </Routes>
        </BrowserRouter>
    )
}