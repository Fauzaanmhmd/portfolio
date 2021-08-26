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
                            <p className="menu-nav__link">Home</p>
                        </Link>
                    </li>
                    <li className="menu-nav__item">
                        <Link className="menu-nav__link" href="./AboutMe">
                            <p className="menu-nav__link">About Me</p>
                        </Link>
                    </li>
                    <li className="menu-nav__item">
                        <Link className="menu-nav__link" href="./Projects">
                            <p className="menu-nav__link">My Projects</p>
                        </Link>
                    </li>
                    <li className="menu-nav__item">
                        <Link href="./ContactMe" className="menu-nav__link">
                            <p className="menu-nav__link">Contact Me</p>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Script src="https://kit.fontawesome.com/6d2ea823d0.js" />
        </header>

    )
}

export default Navbar

