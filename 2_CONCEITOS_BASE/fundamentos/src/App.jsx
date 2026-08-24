import './App.css'

// 2 - Importando Componente
import FirstComponent from './components/FirstComponent'

// 4 = Template Expression
import TemplateExpression from './components/TemplateExpression'


// 5 - Hierarquia de Componentes
import MyComponent from './components/MyComponent'

// 6 - Eventos
import Events from './components/Events'

function App() {
  return (
    <div>
      <h1>Fundamentos</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </div>
  )
}

export default App