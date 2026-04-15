import Navbar from './Navbar'

function Hero() {
    return (
        <header className="hero">
            <div className="overlay"></div>

            <Navbar />

            <div className="content">
                <h1>Unlimited movies, TV shows and more</h1>
                <h3>Starts at ₹149. Cancel anytime.</h3>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>

                <div className="email-box">
                    <input type="email" placeholder="Email address" />
                    <button>Get Started</button>
                </div>
            </div>
        </header>
    )
}
export default Hero