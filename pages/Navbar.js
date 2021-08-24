import Link from "next/link"
import Script from "next/script"

const Navbar = props => {

    return (
        <header>
            <div className="menu-btn">
                <span className="menu-btn__burger"></span>
            </div>

            <nav className="nav">
                <ul className="menu-nav">
                    <li className="menu-nav__item active">
                        <Link href="/">
                            <a className="menu-nav__link">
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className="menu-nav__item">
                        <Link href="./AboutMe">
                            <a href="about.html" className="menu-nav__link">
                                About Me
                            </a>
                        </Link>
                    </li>
                    <li className="menu-nav__item">
                        <Link href="./Projects">
                            <a className="menu-nav__link">
                                My Projects
                            </a>
                        </Link>
                    </li>
                    <li className="menu-nav__item">
                        <Link href="./ContactMe" className="menu-nav__link">
                            <a className="menu-nav__link">
                                Contact Me
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Script src="https://kit.fontawesome.com/6d2ea823d0.js" />
        </header>

    )
}

export default Navbar

