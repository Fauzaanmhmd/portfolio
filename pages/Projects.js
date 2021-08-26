import Navbar from "./Navbar"
import Footer from "./Footer"
import Image from "next/image"
import project1 from "../public/img/project-1.jpg"
import project2 from "../public/img/project-2.jpg"
import project3 from "../public/img/project-3.jpg"

const Project = () => {
    return (
        <>
            <main>
                <header>
                    <Navbar />
                </header>
                <section className="projects">
                    <div className="projects__bio-image">
                        <h1 className="text-secondary">My Projects</h1>
                    </div>

                    <div className="projects__items">
                        <div className="projects__item">
                            <Image src={project1} alt="My Project" />
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <i className="fas fa-eye"></i> Preview
                                </a>
                                <a href="#!" className="projects__btn">
                                    <i className="fab fa-github"></i> Github
                                </a>
                            </div>
                        </div>
                        <div className="projects__item">
                            <Image src={project2} alt="My Project" />
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <i className="fas fa-eye"></i> Preview
                                </a>
                                <a href="https://github.com/Fauzaanmhmd/ninjalist" className="projects__btn">
                                    <i className="fab fa-github"></i> Github
                                </a>
                            </div>
                        </div>
                        <div className="projects__item">
                            <Image src={project3} alt="My Project" />
                            <div className="projects__btns">
                                <a href="#!" className="projects__btn">
                                    <i className="fas fa-eye"></i> Preview
                                </a>
                                <a href="https://github.com/Fauzaanmhmd/TugasAkhir" className="projects__btn">
                                    <i className="fab fa-github"></i> Github
                                </a>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </section>
            </main>
        </>
    )
}

export default Project