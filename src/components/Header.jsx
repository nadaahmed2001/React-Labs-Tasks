import React from "react";
import { Link } from "react-router";
import { useContext } from "react";
import LanguageContext from "../context/language";


export default function Header() {
    const { language, setLanguage } = useContext(LanguageContext);
    return (
        //   <nav>
        //     <Link to="/">Movie List</Link>
        //     <Link to="/watchlist">Watchlist</Link>

        //   </nav>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand">
                    { language === "en" ? "Movies App" : "تطبيق الأفلام" }
                </span>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">
                            { language === "en" ? "Movies List" : "قائمة الأفلام" }
                        </Link>
                        <Link className="nav-link" to="/watchlist">
                            { language === "en" ? "Watchlist" : "المفضلة" }
                        </Link>
                        <Link className="nav-link" to="/signup">
                            { language === "en" ? "Signup" : "تسجيل الدخول" }
                        </Link>

                        {/* Drop down lang */}
                        <div className="dropdown">
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="form-select"
                                style={{ width: "100px" }}
                            >
                                <option value="en">EN</option>
                                <option value="ar">AR</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
}
