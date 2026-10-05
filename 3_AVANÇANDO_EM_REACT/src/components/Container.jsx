
const Container = ({children}) => {
  return (
    <div>
        <h1>Conteúdo do compomente pai:</h1>
        {children}
    </div>
  )
}

export default Container