const AnotherComponent = () => {

        const handleclick = () => {
            console.log (" clickou no botao!")
        }

    return (
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleclick}> Evento de Clicks</button>
            {/* <hr>
               <button onClick={()=> console.log("teste")}> Evento no elemento</button>
            </hr>*/}
        </div>
    );
    
};

export default AnotherComponent;