import Link from "next/link"
import Script from "next/script"

const Footer = props => {

    return (
        <footer>
            <div class="social-icons">
                <a href="#!">
                    <i class="fab fa-twitter fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/fauzaan.mhmd/">
                    <i class="fab fa-instagram fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/fauzan-muhammad-336455194/">
                    <i class="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="#!">
                    <i class="fab fa-github fa-2x"></i>
                </a>
            </div>

            <div>
                &copy; Copyright 2021
            </div>
        </footer>
    )
}

export default Footer