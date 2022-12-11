import './theme/App.css';
import Header from './components/layout/Header';
import Statistics from './components/common/Statistics';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Statistics/>
      <Footer/>
    </div>
  );
}

export default App;
