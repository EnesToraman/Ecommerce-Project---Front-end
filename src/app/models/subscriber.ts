export class Subscriber {

    constructor(id: number, email: string, userAgent: string) {
        this.id = id;
        this.email = email;
        this.userAgent = userAgent;
    }

    id: number;
    email: string;
    userAgent: string;

}