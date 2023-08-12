import { Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero } from "./components";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Stats />
            <Billing />
            <CardDeal />
            <Clients />
            <Testimonials />
            <Business />
            <CTA />
            <Footer />
        </div>
    );
}

export default App;
