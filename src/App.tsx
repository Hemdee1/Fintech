import {
  Empower,
  Header,
  Hero,
  Investing,
  Offer,
  Priority,
} from "./components";

function App() {
  return (
    <div className="bg-primary w-full min-h-screen font-Satoshi overflow-hidden">
      <Header />
      <Hero />
      <Investing />
      <Priority />
      <Offer />
      <Empower />
    </div>
  );
}

export default App;
