
import Nav from './components/Nav'
import Main from './components/Main'
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import Offer from './components/Offer';
import Import from './components/Import';
import Marki from './components/Marki';
import { Routes , Route} from 'react-router-dom';
import Historia from './pages/Historia';
import Hamulce from './pages/Hamulce';
import Oleje from './pages/Oleje';
import Opony from './pages/Opony';

function App() {
  return (
    <div className="App">

<Routes>

  <Route path='*' element={
       <>
           <Nav></Nav>
          <Main></Main>
          <Marki></Marki>
          <Header></Header>
          <Offer></Offer>
          <Import></Import>
          <Footer></Footer>
          </>

  } />
        
         <Route path='/historia' element={<Historia></Historia>}/>
         <Route path='/hamulce' element={<Hamulce></Hamulce>}/>
         <Route path='/oleje' element={<Oleje></Oleje>}/>
         <Route path='/opony' element={<Opony></Opony>}/>
    
      
      </Routes>

      
      
    </div>
  );
}

export default App;
