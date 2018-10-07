/**
 * A model for an individual corporate employee
 */
export class Company {
    id: number;
    name:string;
    business_type:string;
    company_name:string;
    phone:string;
    sector:string;
    mail:string;
    creation:string;
    description:string;

    constructor(
        id: number,
        name:string,
        business_type:string,
        company_name:string,
        phone:string,
        sector:string,
        mail:string,
        creation:string,
        description:string,
    ){
        this.id = id;
        this.name = name;
        this.company_name = company_name;
        this.business_type = business_type;
        this.phone = phone;
        this.sector = sector;
        this.mail = mail;
        this.creation = creation;
        this.description = description;
    }
}