const { useState, useContext } = require("react");

const DadosContext = React.createContext();

function Pai(){
    const [dados,setDados] = useState(null);

    function receberDados(dados){
        setDados(dados);
    }

    return(
        <DadosContext.Provider value={{dados,receberDados}}>
            <Filho/>
            <p>Dados recebidos:{dados}</p>
        </DadosContext.Provider>
    )
}

function Filho(){
    const {receberDados} = useContext(DadosContext);

    function handleClick(){
        receberDados('dados enviados do filho para o pai');
    }
    return (
        <button onClick={handleClick}>Enviar dados</button>
    )
}
