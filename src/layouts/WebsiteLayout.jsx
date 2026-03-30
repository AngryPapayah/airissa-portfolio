import {Outlet, Link} from "react-router-dom";
import {useState} from "react";
import Button from "../components/Button";

function WebsiteLayout() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage] = useState("EN");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "EN" ? "NL" : "EN"));
    };

    return (
        <>
            <nav className="bg-secondary px-4 py-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between">
                        <Link to="/" onClick={() => setMenuOpen(false)}>
                            <img
                                src="/full-logo.png"
                                alt="logo"
                                className="h-8 sm:h-10 cursor-pointer hover:scale-105 transition"
                            />
                        </Link>

                        {/* Desktop nav */}
                        <div className="hidden md:flex items-center gap-4">
                            <Link to="/">
                                <Button>{language === "EN" ? "Home" : "Home"}</Button>
                            </Link>

                            <Link to="/aboutme">
                                <Button>{language === "EN" ? "About me" : "Over mij"}</Button>
                            </Link>

                            <Link to="/mywork">
                                <Button>{language === "EN" ? "My work" : "Mijn werk"}</Button>
                            </Link>

                            <Button>{language === "EN" ? "Contact" : "Contact"}</Button>

                            <Button onClick={toggleLanguage}>
                                {language}
                            </Button>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden px-4 py-2 rounded-xl bg-primary text-primary-content border border-white/10"
                        >
                            {menuOpen
                                ? (language === "EN" ? "Close" : "Sluiten")
                                : (language === "EN" ? "Menu" : "Menu")}
                        </button>
                    </div>

                    {/* Mobile dropdown */}
                    {menuOpen && (
                        <div
                            className="md:hidden mt-4 flex flex-col gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                            <Link to="/" onClick={() => setMenuOpen(false)}>
                                <Button className="w-full">
                                    {language === "EN" ? "Home" : "Home"}
                                </Button>
                            </Link>

                            <Link to="/aboutme" onClick={() => setMenuOpen(false)}>
                                <Button className="w-full">
                                    {language === "EN" ? "About me" : "Over mij"}
                                </Button>
                            </Link>

                            <Link to="/mywork" onClick={() => setMenuOpen(false)}>
                                <Button className="w-full">
                                    {language === "EN" ? "My work" : "Mijn werk"}
                                </Button>
                            </Link>

                            <Button className="w-full" onClick={() => setMenuOpen(false)}>
                                {language === "EN" ? "Contact" : "Contact"}
                            </Button>

                            <Button
                                className="w-full"
                                onClick={() => {
                                    toggleLanguage();
                                    setMenuOpen(false);
                                }}
                            >
                                {language}
                            </Button>
                        </div>
                    )}
                </div>
            </nav>

            <main className="my-0!">
                <Outlet context={{language}}/>
            </main>

            <footer className="bg-secondary px-3 py-3">
                <div className="text-sm text-center">
                    © Copyright {new Date().getFullYear()} Airissa
                </div>
            </footer>
        </>
    );
}

export default WebsiteLayout;