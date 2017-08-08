/**
 * FactureAccompte model
 *
 * @export
 * @class FactureAccompte
 */
export class FactureAccompte {
    _id: number;
    ref_factureAccompte: string;
    date_creation: Date;
    montantFacture: number;
    reglementClient: number;
    factureGlobal: number;

    /**
     * Creates an instance of FactureAccompte.
     * @param {Object} [value={}]
     * @memberof FactureAccompte
     */
    constructor(value: Object = {}) {
        Object.assign(this, value);
    }
}
