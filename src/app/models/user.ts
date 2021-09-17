export class User {

    constructor(id: number, email: string, password: string) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    id: number;
    email: string;
    password: string;

}