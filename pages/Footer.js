import Link from "next/link"
import Script from "next/script"

const Footer = props => {

    return (
        <footer>
            <div className="social-icons">
                <a href="#!">
                    <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/fauzaan.mhmd/">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/fauzan-muhammad-336455194/">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="#!">
                    <i className="fab fa-github fa-2x"></i>
                </a>
            </div>

            <div>
                &copy; Copyright 2021
            </div>
        </footer>
    )
}

export default Footer