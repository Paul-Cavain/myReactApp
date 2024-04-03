import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';

function App() {

  return (
    <div className="">
      <section>
        <div>
          <Navbar />
        </div>
        <div>
          <Home />
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
