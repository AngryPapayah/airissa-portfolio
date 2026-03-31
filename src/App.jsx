import {createBrowserRouter, RouterProvider} from "react-router-dom";
import WebsiteLayout from "./layouts/WebsiteLayout.jsx";
import ErrorElement from "./pages/ErrorElement.jsx";
import Home from "./pages/Home.jsx";
import MyWork from "./pages/MyWork.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <WebsiteLayout/>,
        errorElement: <ErrorElement/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "mywork",
                element: <MyWork/>
            },
            {
                path: "mywork/:id",
                element: <ProjectDetail/>
            },
            {
                path: "aboutme",
                element: <AboutMe/>
            },
            {
                path: "contact",
                element: <Contact/>
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;