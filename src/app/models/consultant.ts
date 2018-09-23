/**
 * A model for an individual corporate employee
 */
export class Consultant {
    id: number;
    name:string;
    photo:string;
    post:string;
    company:string;
    price: number;
    currency:string;
    skype:string;
    phone:string;
    wokrpermit:string;

    constructor(
        id: number,
        name:string,
        photo:string,
        post:string,
        company:string,
        price: number,
        currency:string,
        skype:string,
        phone:string,
        wokrpermit:string
    ){
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.post = post;
        this.company = company;
        this.price =  price;
        this.currency = currency;
        this.skype = skype;
        this.phone = phone;
        this.wokrpermit = wokrpermit;
    }
}