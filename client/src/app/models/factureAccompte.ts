/**
 * FactureAccompte model
 *
 * @export
 * @class FactureAccompte
 */
export class FactureAccompte {
    _id?: number;
    status_factureAccompte?: boolean;
    ref_factureAccompte: string;
    date_creation?: Date;
    montantFacture: number;
    reglementClient?: number;
    factureGlobal: number;
    valid?: boolean;
    description?: string;
    updated_at?: Date;

    /**
     * Creates an instance of FactureAccompte.
     * @param {Object} [value={}]
     * @memberof FactureAccompte
     */
    constructor(value: Object = {}) {
        Object.assign(this, value);
    }
}
