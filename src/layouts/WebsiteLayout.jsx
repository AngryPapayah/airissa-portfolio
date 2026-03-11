import {Outlet} from "react-router-dom";


function WebsiteLayout() {
    return (
        <>
            <nav className={"bg-secondary px-3 py-2.5"}>
                <div className={"flex items-center justify-between max-w-300 mx-auto"}>
                    <img src="/full-logo.png" alt="logo" className={"h-10"}/>
                    <div>
                        <a href="Aboutme">About me</a>
                        <a href="My work">My work</a>
                        <a href="Contact">Contact</a>
                    </div>
                </div>
            </nav>

            <main className={"my-0!"}>
                <Outlet/>
            </main>

            <footer className={"bg-secondary px-3 py-3"}>
                <div className={"text-sm text-center"}>
                    © Copyright {new Date().getFullYear()} Airissa
                </div>
            </footer>
        </>
    );
}

export default WebsiteLayout;