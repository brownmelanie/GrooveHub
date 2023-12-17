import { DATA_MOCK } from "../mocks/data";

export const pedirDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(DATA_MOCK)
        }, 500); //desp de 0.5segs carga los datos que estan en data_mock
    })
} //creo la promesa pedirDatos que trae el array DATA_MOCK