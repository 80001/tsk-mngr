import { Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero } from "./components";
import "./App.scss";

function App() {
    return (
        <div className="App bg-discount-gradient">
            <Navbar />
            <Hero />
            <Stats />
            <Billing />
            <Business />
            <CardDeal />
            <Clients />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    );
}

export default App;
