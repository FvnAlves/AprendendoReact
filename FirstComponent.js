import AnotherComponent from "./AnotherComponent"

function FirstComponent() {
    //Coments
    const name = "Felipe"

  return(
    <div className="FirstComponent">
        {/*comentario no JSX*/}
        <p>Primeiro componente</p>
        {248+2092}
        {console.log}("javascript")
        <p>Nome: {name}</p>
        <AnotherComponent/>
    </div>
  )
}

export default FirstComponent
