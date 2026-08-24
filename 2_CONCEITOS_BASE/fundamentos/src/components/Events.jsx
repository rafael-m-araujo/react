import React from 'react'

const Events = () => {
const handleClick = (e) => {
    console.log(e);
    console.log("Executou");
};

// 8 - Função de renderização
const renderSomething = (x) => {
    if(x) {
        return <h1>Renderizando isso!</h1>
    } else {
        return <h1>renderizando outra coisa</h1>
    }
};

return 10 > 2 && <p>Carregando...</p>;

  return (
    <div>
    <button onClick={() => console.log("testando um evento")}>Clique Aqui</button>  
    {/* 7 - Evento da função */}
    <div>
        <button onClick={handleClick}>Clique Aqui</button>
    </div>
    {/* 8 - Função com render*/}
    {renderSomething(true)}
    {renderSomething(false)}
    </div>
  );
};

export default Events