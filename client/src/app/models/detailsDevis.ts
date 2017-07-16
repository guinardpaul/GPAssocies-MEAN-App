export class DetailsDevis {
    _id: number;
    montantHt: number;
    tauxTva: number;
    montantTtc: number;
    devis: number;

    constructor(value: Object = {}){
        Object.assign(this, value);
    }
}
