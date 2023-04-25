const { useState } = require("react");

function Pai(){
    const [dados,setDados] = useState(null);

    function receberDados(dados){
        setDados(dados);
    }

    return(
        <div>
            <Filho enviarDados={receberDados}/>
            <p>Dados recebidos: {dados}</p>
        </div>
    );
}

function Filho({enviarDados}) {
    function handleClick(){
        enviarDados('dados enviados do filho para o pai');
    }

    return(
        <button onClick={handleClick}> Enviar Dados</button>
    )

}

