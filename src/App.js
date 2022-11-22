import React from "react"
import './App.css';

import Header from "./components/Header";
import { Movies } from "./pages/Movies";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="bg-black">
      <header>
        <Header />
      </header>
      <main>
        <Movies />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
