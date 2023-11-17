import { useState } from "react";

const Formulario = () => {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const bmi = () => {
        return (peso / (altura * altura)).toFixed(2);
    }

    const resultado = () => {
        const valorBMI = bmi();

        if (valorBMI < 18.5) {
            return (
                <p>Cuidado! Você está abaixo do peso!</p>
            )
        } else if (valorBMI >= 18.5 && valorBMI <= 25) {
            return (
                <p>Você está no peso ideal!</p>
            )
        } else if (valorBMI > 25 && valorBMI <= 30) {
            return (
                <p>Cuidado! Você está com sobrepeso!</p>
            )
        } else if (valorBMI > 30 && valorBMI <= 35 ) {
            return (
                <p>Cuidado! Você está com obesidade moderada!</p>
            )
        } else if (valorBMI > 35 && valorBMI <= 40) {
            return (
                <p>Cuidado! Você está com obesidade severa!</p>
            )
        } else if (valorBMI > 40) {
            return (
                <p>Cuidado! Você está com obesidade mórbida!</p>
            )
        } else {
            return (
                <p>Digite a altura e o peso para obter seu IMC!</p>
            )
        }
    }

    return (
        <main>
            <form>
                <input type = "number" placeholder = "Digite a altura" onChange = {({target}) => setAltura(target.value)} />
                <input type = "number" placeholder = "Digite o peso" onChange = {({target}) => setPeso(target.value)} />
                {resultado()}
            </form>
        </main>  
    )
}

export default Formulario;