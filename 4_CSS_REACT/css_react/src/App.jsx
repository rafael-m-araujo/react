import './App.css'

// 2 - CSS de componente
import MyComponent from "./components/MyComponent";
import Title from './components/Title';

function App() {
// 4 - CSS inline dinamico
const n = 15

// 5 - Classes dinamicas
const redTitle = true

  return (
  <div className="App">
    {/* 1 - Css Global */}
    <h1>CSS no React</h1>
    {/* 2 - CSS de Componente */}
    <MyComponent />
    <p>Pegou o CSS do componente</p>
    {/* 3 - CSS Inline Style */}
  <p style={{color: "blue", padding: "25px", borderTop: "1px dotted blue"}}>Eu sou um componente inline
  </p>

  {/* 4 - Inline style dinamico */}
  <h2 style={n > 10 ? {color: "purple"} : {color: "magenta"}}>
   CSS dinâmico 
  </h2>

  <h2 style={n > 20 ? {color: "purple"} : {color: "magenta"}}>
   CSS dinâmico 2
  </h2>

{/* 5 - Classes dinamicas */}
<h2 className={redTitle ? "red-title" : "title"}>
Este título vai ter uma classe
</h2>

{/* 6 - CSS modules */}
<Title />
  </div>
  );
}

export default App;
