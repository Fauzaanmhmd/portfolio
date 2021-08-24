import Navbar from "./Navbar"
import Footer from "./Footer"

const ContactMe = () => {
    return (
        <main>
            <header>
                <Navbar />
            </header>
            <section className="contact">
                <h2>Contact Me..</h2>

                <div className="contact__list">
                    <div className="contact__email">
                        <i className="fas fa-envelope"></i> Email
                        <div className="text-secondary">email@email.com</div>
                    </div>
                    <div className="contact__phone">
                        <i className="fas fa-mobile-alt"></i> Phone
                        <div className="text-secondary">+1 (555) 555-5555</div>
                    </div>
                    <div className="contact__address">
                        <i className="fas fa-marker-alt"></i> Address
                        <div className="text-secondary">123 First St. Houston, TX</div>
                    </div>
                </div>

                <Footer />
            </section>
        </main>

    )
}

export default ContactMe