const estadoInicial = [
    {
        id:0,
        Nombre: 'Carlos Lopez',
        Nacimiento: '1997-11-25',
        Telefono: 6692245241,
        Correo: 'carloslopez@gmail.com',
    },
    {
        id:1,
        Nombre: 'Jose Torres',
        Nacimiento: '1987-11-14',
        Telefono: 6694587412,
        Correo: 'josetorres@gmail.com',
    }
]

const contactoReducer = (state = estadoInicial, action) => {
    switch(action.type) {
        case 'AÑADIR_CONTACTO':
            state = [...state, action.payload]
            return state
            case "ACTUALIZAR_CONTACTO":
               const actualizarEstado = state.map(contacto => contacto.id === action.payload.id ? action.payload : contacto)
               state = actualizarEstado
               return state
               case "ELIMINAR_CONTACTO":
               const filtrarContactos = state.filter(contacto=> contacto.id !== action.payload && contacto)
               state = filtrarContactos
               return state
        default:
            return state
    }
}

export default contactoReducer