import {createBrowserRouter, RouterProvider} from "react-router-dom";
import WebsiteLayout from "./layouts/WebsiteLayout.jsx";
import ErrorElement from "./pages/ErrorElement.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <WebsiteLayout/>,
        errorElement: <ErrorElement/>,
        children: [
            {
                path: "app",
                element: <Home/>
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;