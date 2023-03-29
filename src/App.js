import './App.css';
import { Header } from './components/Header/Header';
import { Products } from './components/Products/Products'
import { SubHeader } from './components/SubHeader/SubHeader';

function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Products />
    </div>    
  );
}

export default App;
