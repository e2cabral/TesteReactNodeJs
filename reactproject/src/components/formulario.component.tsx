import React, { useState } from 'react';
import './formulario.component.css';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {sum} from "../services/calc.service.ts";

const Formulario: React.FC = () => {
    const [value1, setValue1] = useState<string>('');
    const [value2, setValue2] = useState<string>('');
    const [result, setResult] = useState<number>();

    const handleValue1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue1(e.target.value);
    };

    const handleValue2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue2(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (value1 === '' || value2 === '') {
            toast.error("Os valores devem ser preenchidos!")
            return
        }

        if (Number.isNaN(value1) && Number.isNaN(value2)) {
            toast.error('Os valores precisam ser números.')
            return
        }

        const value = await sum(value1, value2);
        setResult(value.data.sum)
    };

    const handleReset = () => {
        setValue1('');
        setValue2('');
        setResult(undefined);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="number"
                        id="valor1"
                        className="form-input"
                        value={value1}
                        placeholder="Valor 1"
                        onChange={handleValue1Change}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        id="valor2"
                        className="form-input"
                        value={value2}
                        placeholder="Valor 2"
                        onChange={handleValue2Change}
                    />
                </div>
                <button className="primary-button" type="submit">Calcular</button>
                <button className="secondary-button" onClick={handleReset} type="reset">Limpar</button>
            </form>
            {
                result &&
                <div className="result-container">
                    {result && <p>Resultado: {result}</p>}
                </div>
            }
            <ToastContainer/>
        </>
    );
};

export default Formulario;