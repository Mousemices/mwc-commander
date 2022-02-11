import Realm from 'realm';

// Nombre, Correo, Categoría ( Front, Back, Mobile, Data), Teléfono, Días a asistir al mobile ( 28 Feb, 1 -3 Marzo)
const Developer = {
    name: 'Developer',
    properties: {
        //_id: 'uuid',
        name: 'string',
        email: 'string',
        category: 'string',
        phone: 'string',
        days_to_attend: 'string',
    },
    primaryKey: 'email'
}

export { Developer };