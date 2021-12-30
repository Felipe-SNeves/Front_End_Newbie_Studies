import Cartela from './Cartela';
import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';

class App extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            numeros_sorteados: [],
            qntd_sorteada: 0
        }
    }

    sortearNumeros () {
        let qntd = document.getElementById ("qntd_select")

        if (isNaN (qntd.value)) {
            alert ("Escolha uma quantidade para ser sorteada")
            qntd.focus()
            return false;
        }

        this.setState ({
            qntd_sorteada: parseInt (qntd.value),
            numeros_sorteados: [] 
        })

        let numerosSorteados = [];

        for (let qntd_sorteada = 0; qntd_sorteada < qntd.value; qntd_sorteada++) {
            let numeroSorteado = parseInt (Math.random() * (61 - 1) + 1);
            let repetido = false;

            numerosSorteados.forEach (
                (numeroNaLista) => {
                    if (numeroNaLista === numeroSorteado) {
                        repetido = true;
                    }
                }
            )

            if (repetido) {
                qntd_sorteada--;
                repetido = false;
                continue;
            }

            numerosSorteados[qntd_sorteada] = numeroSorteado;

        }
        this.setState ({
            numeros_sorteados: numerosSorteados
        })
    }

    render () {
        return (
            <Container>
                <Row className="text-center mt-3">
                    <h3 className="h3">Mega Sena</h3>
                    <p>Informe a quantidade de números do jogo</p>
                    <Form>
                        <Form.Group>
                            <Form.Label>Quantidade de números</Form.Label>
                            <Form.Select id="qntd_select" size="sm" style={{marginLeft: '37%'}} className="w-25" aria-label="Selecione a quantidade de números a ser sorteados">
                                <option>Escolha a quantidade</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                            </Form.Select>
                        </Form.Group>
                        <Button onClick={ () => this.sortearNumeros()} size="lg" className="mt-3 btn">Fazer jogo</Button>
                    </Form>
                </Row>
                <Row className="justify-content-md-center mt-4">
                    <Cartela numerosSorteados={this.state.numeros_sorteados} />
                </Row>
            </Container>
        );
    }
}

export default App;