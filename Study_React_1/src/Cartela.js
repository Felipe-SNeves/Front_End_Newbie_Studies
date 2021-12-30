import Numero from './Numero';
import React from 'react';

class Linha extends React.Component {

    geraNumero (numero, sorteados) {
        let estado = false
        sorteados.forEach (
            (numeroSorteado) => {
                if (numero === numeroSorteado)
                    estado = true
            }
        )
        return (
            <Numero num={numero} sorteado={estado} />
        );
    }

    render () {
        return (<div className="d-flex justify-content-center">
                {
                    Array.apply (0, Array(20)).map ( (x, i) => 
                        {   
                            return this.geraNumero (i + 1 + this.props.offset, this.props.numerosSorteados);
                        }
                    )
                }
        </div>)
    }
}

class Cartela extends React.Component {

    render () {
        return (
            <div className="w-50">
                <Linha numerosSorteados={this.props.numerosSorteados} offset={0} />
                <Linha numerosSorteados={this.props.numerosSorteados} offset={20} />
                <Linha numerosSorteados={this.props.numerosSorteados} offset={40} />
            </div>
        );
    }
}

export default Cartela;