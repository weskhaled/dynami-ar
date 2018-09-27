/**
 * A model for an individual corporate employee
 */
export class Company {
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
    description:string;

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
        wokrpermit:string,
        description:string=''
    ){
        this.id = id;
        this.name = name;
        // this.photo = photo;
        this.photo = '/assets/img/photos/developer/avatar-sm.jpg';
        this.post = post;
        this.company = company;
        this.price =  price;
        this.currency = currency;
        this.skype = skype;
        this.phone = phone;
        this.wokrpermit = wokrpermit;
        this.description = description;
    }
}