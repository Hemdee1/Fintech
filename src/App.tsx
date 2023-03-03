import {
  Empower,
  Footer,
  Header,
  Hero,
  Investing,
  Offer,
  Priority,
} from "./components";
import { useEffect } from "react";

// @ts-ignore
import AOS from "simple-aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-primary w-full min-h-screen font-Satoshi overflow-hidden">
      <Header />
      <Hero />
      <Investing />
      <Priority />
      <Offer />
      <Empower />
      <Footer />
    </div>
  );
}

export default App;
