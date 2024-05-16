
import Nav from './components/Nav'
import Main from './components/Main'
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import Offer from './components/Offer';
import Import from './components/Import';

function App() {
  return (
    <div className="App">

      <Nav></Nav>
      <Main></Main>
      <Header></Header>
      <Offer></Offer>
      <Import></Import>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
