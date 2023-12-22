import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignIn from "./pages/signin";
import SignUp from "./pages/Signup";
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() {
return(
<>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<SignIn/>}
                    />
                    <Route
                        path="/signin"
                        element={<SignIn/>}
                    />
                    <Route
                        path="/signup"
                        element={<SignUp />}
                    />
                    <Route
                        path="/signup"
                        element={<SignUp />}
                    />
                </Routes>
            </BrowserRouter>
        </>
);
  
}

export default App
