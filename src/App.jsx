import FarmGrid from "./sections/FarmGrid/FarmGrid";
import { Footer } from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import ProductGrid from "./sections/ProductGrid/ProductGrid";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <ProductGrid />
      <FarmGrid />
      <Footer />
    </div>
  );
}

export default App;
