// 4 - Template Expression

const TemplateExpression = () => {
const name = 'Rafael'

const data = {
    age: 31,
    job: "Programador"
};

  return (
    <>
<div><p>A soma é {2+2}</p>
<h3>Bem vindo {name}</h3></div>

<p>Sua idade é {data.age} e vocë trabalha como {data.job}</p>
</>
  );
};

export default TemplateExpression