import Navbar from "./Navbar"
import Footer from "./Footer"

const AboutMe = () => {
    return (
        <main>
            <header>
                <Navbar />
            </header>
            <section className="about">
                <div className="about__bio-image">
                    <div className="about__bio">
                        <h2 className="text-secondary">BIO</h2>
                        <p>I'am learned programming language for the first time in collage. My first programming language is C++. When i entered on the final semester, I increased my learning about programming. I created an e-commerce web application using the javascript language with the next js framework and the react js library.</p>
                    </div>
                </div>

                <div className="jobs">
                    <div className="jobs__job">
                        <h2 className="text-secondary">2017 - Current</h2>
                        <h3>Universitas Nasional</h3>
                        <h6>Frontend Engineer</h6>
                        <p>Saat kuliah di Universitas Nasional, obsesi untuk mendalami dunia programming pada diri saya meningkat. Saya mendalami sisi design yang mana akan ditampilkan pada sebuah website. Semester terakhir di universitas ditambah tugas akhir yang harus diselesaikan, memacu saya dalam mendalami sisi frontend website.</p>
                    </div>
                </div>

                <Footer />
            </section>
        </main>
    )
}

export default AboutMe