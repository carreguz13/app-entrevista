const estadoInicial = [
    {
        id:0,
        Nombre: 'Carlos Lopez',
        Nacimiento: 25/11/1997,
        Telefono: 6692245241,
        Correo: 'carloslopez@gmail.com',
    },
    {
        id:1,
        Nombre: 'Jose Torres',
        Nacimiento: 14/12/1989,
        Telefono: 6694587412,
        Correo: 'josetorres@gmail.com',
    }
]

const contactoReducer = (state = estadoInicial, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default contactoReducer