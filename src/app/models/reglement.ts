export class Reglement {
    _id: number;
    date_reglement: Date;
    reglementTtc: number;
    factureMois: number;

    constructor(value: Object = {}){
        Object.assign(this, value);
    }
}
