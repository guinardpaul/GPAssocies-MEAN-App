/**
 * FactureMois model
 *
 * @export
 * @class FactureMois
 */
export class FactureMois {
    _id: number;
    ref_factureMois: string;
    date_creation: Date;
    montantHt: number;
    tauxTva: number;
    montantTtc: number;
    factureGlobal: number;

    /**
     * Creates an instance of FactureMois.
     * @param {Object} [value={}]
     * @memberof FactureMois
     */
    constructor(value: Object = {}){
        Object.assign(this, value);
    }
}
