import { Button } from 'react-bootstrap';
import React from 'react';

const Numero = (props) => {
    return (
        <div className="m-1">
            <Button size="sm" variant={props.sorteado ? "primary" : "outline-primary"} disabled>{props.num}</Button>
        </div>
    );
}

export default Numero;