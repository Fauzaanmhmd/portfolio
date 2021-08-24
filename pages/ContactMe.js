import Navbar from "./Navbar"
import Footer from "./Footer"

const ContactMe = () => {
    return (
        <main>
            <header>
                <Navbar />
            </header>
            <section class="contact">
                <h2>Contact Me..</h2>

                <div class="contact__list">
                    <div class="contact__email">
                        <i class="fas fa-envelope"></i> Email
                        <div class="text-secondary">email@email.com</div>
                    </div>
                    <div class="contact__phone">
                        <i class="fas fa-mobile-alt"></i> Phone
                        <div class="text-secondary">+1 (555) 555-5555</div>
                    </div>
                    <div class="contact__address">
                        <i class="fas fa-marker-alt"></i> Address
                        <div class="text-secondary">123 First St. Houston, TX</div>
                    </div>
                </div>

                <Footer />
            </section>
        </main>

    )
}

export default ContactMe