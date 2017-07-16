export class FactureGlobal {
    _id: number;
    ref_factureGlobal: string;
    date_creation: Date;
    montantHt: number;
    tauxTva: number;
    montantTtc: number;
    client: number;

    constructor(value: Object = {}){
        Object.assign(this, value);
    }
}
