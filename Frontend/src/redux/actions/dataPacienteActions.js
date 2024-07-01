
export const MOSTRAR_DATA = 'MOSTRAR_DATA';

export const mostrarData = (datas) => {
    return {
        type: MOSTRAR_DATA,
        payload: {
            datas: datas
        },
    }
}