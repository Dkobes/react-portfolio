import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Resume from './sections/Resume';
import AboutMe from './sections/AboutMe';
import Header from './sections/header';
import Footer from './sections/footer';

function App() {

  return (
    <Router>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App
