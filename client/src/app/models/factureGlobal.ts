/**
 * FactureGlobal model
 *
 * @export
 * @class FactureGlobal
 */
export class FactureGlobal {
    _id: number;
    ref_factureGlobal: string;
    date_creation: Date;
    montantHt: number;
    tauxTva: number;
    montantTtcTotal: number;
    montantTtcFacture: number;
    montantTtcRegle: number;
    client: number;

    /**
     * Creates an instance of FactureGlobal.
     * @param {Object} [value={}]
     * @memberof FactureGlobal
     */
    constructor(value: Object = {}) {
        Object.assign(this, value);
    }
}
