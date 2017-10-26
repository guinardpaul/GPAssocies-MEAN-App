/**
 * DetailsDevis model
 *
 * @export
 * @class DetailsDevis
 */
export class DetailsDevis {
    _id?: number;
    montantHt?: number;
    tauxTva: number;
    montantTtc?: number;
    devis?: number;

    /**
     * Creates an instance of DetailsDevis.
     * @param {Object} [value={}]
     * @memberof DetailsDevis
     */
    constructor(value: Object = {}) {
        Object.assign(this, value);
    }
}
