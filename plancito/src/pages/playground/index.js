import {useState} from 'react'

const Playground = () => {
    const [nombre,setNombre] = useState()
    const [mes,setMes] = useState()
    const [uno, setUno] = useState()
    const [dos,setDos] = useState()
    const firstPart = (input) => {
        const firstLet = input.toLowerCase()[0]
        var response
        switch(firstLet){
            case 'a':
                response = "Captain"
                break;
            case 'b':
                response = "Wonder"
                break;
            case 'c':
                response = "Super"
                break;
            case 'd':
                response = "Phantom"
                break;
            case 'e':
                response = "Dark"
                break;
            case 'f':
                response = "Incredible"
                break;
            case 'g':
                response = "Professor"
                break;
            case 'h':
                response = "Iron"
                break;
            case 'i':
                response = "Hawk"
                break;
            case 'j':
                response = "Archer"
                break;
            case 'k':
                response = "Steel"
                break;
            case 'l':
                response = "Bolt"
                break;
            case 'm':
                response = "Atomic"
                break;
            case 'n':
                response = "Torch"
                break;
            case 'o':
                response = "Space"
                break;
            case 'p':
                response = "Mega"
                break;
            case 'q':
                response = "Turbo"
                break;
            case 'r':
                response = "Fantastic"
                break;
            case 's':
                response = "Invisible"
                break;
            case 't':
                response = "Night"
                break;
            case 'u':
                response = "Silver"
                break;
            case 'v':
                response = "Aqua"
                break;
            case 'w':
                response = "Amazing"
                break;
            case 'x':
                response = "Giant"
                break;
            case 'y':
                response = "Rock"
                break;
            case 'z':
                response = "Power"
                break;
            default:
                response = ""
                break;
        }
        return response;
    }

    const secondPart = (input) =>{
        var response = ""
        switch(input){
            case "Enero":
                response = "Shield"
                break;
            case "Febrero":
                response = "Arrow"
                break;
            case "Marzo":
                response = "Justice"
                break;
            case "Abril":
                response = "Thunder"
                break;
            case "Mayo":
                response = "Rider"
                break;
            case "Junio":
                response = "Falcon"
                break;
            case "Julio":
                response = "Ninja"
                break;
            case "Agosto":
                response = "Spider"
                break;
            case "Septiembre":
                response = "Beast"
                break;
            case "Octubre":
                response = "Blade"
                break;
            case "Noviembre":
                response = "Hulk"
                break;
            case "Diciembre":
                response = "Doom"
                break;
            default:
                response = ""
        }

        return response
    }
    
    return (
        <div>
            <h1>Encuentra tu nombre de superheroe</h1>
            <label>Ingresa tu nombre: </label>
            <br/>
            <input value={nombre} onChange={t=> setNombre(t.target.value)} placeholder='Nombre'/>
            <br/>
            <label>Ingresa tu mes de cumpleaños:</label>
            <br/>
            <select value={mes} onChange={t => setMes(t.target.value)}>
                <option>--Seleccione un mes--</option>
                <option value={"Enero"}>Enero</option>
                <option value={"Febrero"}>Febrero</option>
                <option value={"Marzo"}>Marzo</option>
                <option value={"Abril"}>Abril</option>
                <option value={"Mayo"}>Mayo</option>
                <option value={"Junio"}>Junio</option>
                <option value={"Julio"}>Julio</option>
                <option value={"Agosto"}>Agosto</option>
                <option value={"Septiembre"}>Septiembre</option>
                <option value={"Octubre"}>Octubre</option>
                <option value={"Noviembre"}>Noviembre</option>
                <option value={"Diciembre"}>Diciembre</option>
            </select>
            <br/>
            <br/>
            <button onClick={() => {
                if(nombre != null && mes != null){
                    setUno(firstPart(nombre))
                    setDos(secondPart(mes))
                }else{
                    alert("Los campos no pueden estar vacíos")
                }
            }}>generar</button>
            <p>Resultado: {uno} {dos}</p>
        </div>
    );
};

export default Playground;
