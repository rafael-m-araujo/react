import "./MyForm.css";

import { useState } from "react";

const MyForm = () => {
// 3 - Gerenciamento de Dados
const [name, setName] = useState()
const [email, setEmail] = useState()

const handleName = (e) => {
  setName(e.target.value);
}
// 5 - envio de form
const handleSubmit = (e) => {
  e.preventDefault();

  console.log(name, email);
};

console.log(name, email)

  return( 
  <div>
      {/* 1 - Criação de form */}
      {/* 5 - Envio de formulário */}
      <form onSubmit={handleSubmit}> 
      <div>
         <label htmlFor="name">Nome:</label> 
       <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} 
       // 6 - controlled input
       value={name}
       />
      </div>
      {/* 2 - Label Envolvendo Input */}
      <label>
        <span>E-mail:</span>
      <input type="text" name="email" placehoder="Digite o seu email"
      // 4 - Simplificando manipulação
      onChange={(e) => setEmail(e.target.value)}
      // 6 - controlled input
       value={email}
      />
      </label>
       <input type="submit" value="Enviar" />
      </form>
    </div>
)};

export default MyForm;