export class FactureMois {
    _id: number;
    ref_factureMois: string;
    date_creation: Date;
    montantHt: number;
    tauxTva: number;
    montantTtc: number;
    factureGlobal: number;

    constructor(value: Object = {}){
        Object.assign(this, value);
    }
}
