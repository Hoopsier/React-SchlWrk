import React, {useState} from "react";

const Laskuri = () => {
        const [luku, setLuku] = useState(0);
        return (
                <div>
                        <h3>{luku}</h3>
                        <button onClick={() => setLuku(luku + 1)}>+</button>
                        <button onClick={() => setLuku(luku - 1)}>-</button>
                        <button onClick={() => setLuku(0)}>Reset</button>
                </div>
        );
}

export default Laskuri;