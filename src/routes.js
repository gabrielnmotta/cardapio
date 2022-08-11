import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cardapio from './pages/Cardapio/index';
import Inicio from './pages/Cardapio/index';

export default function AppRouter() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/cardapio' element={<Cardapio />}/>
      </Routes>
    </Router>
  );
}