export interface IPrimayAddress {
    address_line_1:string,
         city:string,
         state:string,
         zip_code:number
}

export class PrimayAddress implements IPrimayAddress {
    address_line_1:string="";
         city:string="";
         state:string="";
         zip_code:number=0;
}
