export class User {
    id;
    email;
    nombreUsuario;
    edad;
    isAdmin;

    constructor(id, nUsuario, edad, email, isAdmin) {
        this.id = id;
        this.nombreUsuario = nUsuario;
        this.edad = edad;
        this.email = email;
        this.isAdmin = isAdmin;
    }
}
