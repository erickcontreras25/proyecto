export class Usuario {
    nombreUsuario;
    edad;
    email;
    password;
    isAdmin;

    constructor(nUsuario, edad, email, password, isAdmin) {
        this.nombreUsuario = nUsuario;
        this.edad = edad;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}
