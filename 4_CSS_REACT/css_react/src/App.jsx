import './App.css'

// 2 - CSS de componente
import MyComponent from "./components/MyComponent";

function App() {
  // 4 - css inline dinamico
  const n = 15
  return (
  <div className="App">
    {/* 1 - Css Global */}
    <h1>CSS no React</h1>
    {/* 2 - CSS de Componente */}
    <MyComponent />
    <p>Pegou o CSS do componente</p>
    {/* 3 - CSS Inline */}
  <p style={{color: "blue", padding: "25px", borderTop: "1px dotted blue"}}>Eu sou um componente inline
    {/* 4 - Inline style dinamico */}
    <h2 style={n > 10 ? {color: "purple"} : {color: "magenta"}}>
CSS dinâmico 
    </h2>
  </p>
  </div>
  );
}

export default App;
