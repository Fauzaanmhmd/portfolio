import Navbar from "./Navbar"
import Footer from "./Footer"


const Home = () => {
  return (
    <div>
      <title>Fauzan Muhammad Portfolio</title>
      <body>
        <header>
          <Navbar />
        </header>
        <main>
          <section className="home">
            <h2>Hello! My Name Is</h2>
            <h1 className="home__name">
              Fauzan <span className="home__name--last">Muhammad</span>
            </h1>
            <h2>
              Web Developer dan Programmer
            </h2>

            <Footer />
          </section>
        </main>
      </body>
    </div>
  )
}

export default Home
