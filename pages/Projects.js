import Navbar from "./Navbar"
import Footer from "./Footer"
const Project = () => {
    return (
        <main>
            <header>
                <Navbar />
            </header>
            <section class="projects">
                <div class="projects__bio-image">
                    <h1 class="text-secondary">My Projects</h1>
                </div>

                <div class="projects__items">
                    <div class="projects__item">
                        <img src="img/project-1.jpg" alt="My Project" />
                        <div class="projects__btns">
                            <a href="#!" class="projects__btn">
                                <i class="fas fa-eye"></i> Preview
                            </a>
                            <a href="#!" class="projects__btn">
                                <i class="fab fa-github"></i> Github
                            </a>
                        </div>
                    </div>
                    <div class="projects__item">
                        <img src="img/project-2.jpg" alt="My Project" />
                        <div class="projects__btns">
                            <a href="#!" class="projects__btn">
                                <i class="fas fa-eye"></i> Preview
                            </a>
                            <a href="https://github.com/Fauzaanmhmd/ninjalist" class="projects__btn">
                                <i class="fab fa-github"></i> Github
                            </a>
                        </div>
                    </div>
                    <div class="projects__item">
                        <img src="img/project6.jpg" alt="My Project" />
                        <div class="projects__btns">
                            <a href="#!" class="projects__btn">
                                <i class="fas fa-eye"></i> Preview
                            </a>
                            <a href="https://github.com/Fauzaanmhmd/TugasAkhir" class="projects__btn">
                                <i class="fab fa-github"></i> Github
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </main>
    )
}

export default Project