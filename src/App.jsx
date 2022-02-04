import Layout from './Layout/Layout';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';

import Main from './Main/Main';
import About from './About/About';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className=" dark:bg-gray-900 transition duration-400">
      <Layout>
        <div id="home">
          <Header>
            <Navbar />
            <Hero />
          </Header>
          <Main>
            <About />
            <Projects />
            <Skills />
            <Contact />
          </Main>
          <Footer />
        </div>
      </Layout>
    </div>
  );
}

export default App;
