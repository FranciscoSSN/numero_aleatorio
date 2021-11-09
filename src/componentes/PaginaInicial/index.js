import React, { useState } from "react";
import "./index.css";

export default function PaginaInicial(){
    const [ NumeroAleatorio, setNumeroAleatorio ] = useState(1);

    function gerarNumero(){
        const novoNumero = Math.floor(Math.random() * (100-1) + 1);
        setNumeroAleatorio(novoNumero);
    }

    return(
        <div className="conteudo-centralizado">
            <h3>Número Aleatório</h3>
            <h1>{NumeroAleatorio}</h1>

            <div className="area-botao">
                <label>
                    Click no botão para gerar um número aleatório.
                </label>

                <button onClick={ gerarNumero }>
                    Gerar Número
                </button>
            </div>
        </div>
    );
}