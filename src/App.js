import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <header className="w-full fixed z-50">    
        <Header></Header>
      </header>
      <main className="w-11/12 m-auto pt-8">
        <Shop ></Shop>
      </main>
    </div>
  );
}

export default App;
