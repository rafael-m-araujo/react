import './App.css'

// 2 - Imagem em assets
import night from "./assets/night.jpg";

// 3 - useState
import data from './components/data';
function App() {
  
  return (
    <div>
      <h1>Avançando em React</h1>
      {/* 1 - Imagem em public*/}
      <img src="/img.jpg" alt="Alguma imagem" />

      {/*2 - Imagem em assets*/}
      <img src={night} alt="Outra imagem" />

      {/* 3 - useState */}
      <Data />
    </div>
  )
}

export default App
