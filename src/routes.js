import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cardapio from './pages/Cardapio/index';
import Inicio from './pages/Inicio/index';
import Menu from 'components/Menu';
import PaginaPadrao from './components/PaginaPadrao/index';
import Sobre from './pages/Sobre/index';
import Footer from './components/Footer';


export default function AppRouter() {
  return(
    <main>
      <Router>
        <Menu />

        <Routes>
          <Route path='/' element={<PaginaPadrao/>}>
            <Route index element={<Inicio />} />
            <Route path='/cardapio' element={<Cardapio />}/>
            <Route path='/sobre' element={<Sobre />}/>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}