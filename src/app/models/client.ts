/**
 * A model for an individual corporate employee
 */
export class Client {
    id: number;
    firstname: string;
    lastname: string;
    age: number;
    description:string;

    constructor(id: number,firstname: string, lastname: string,age: number,description:string){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.description = description;
    }
}