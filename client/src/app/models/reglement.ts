/**
 * Reglement model
 *
 * @export
 * @class Reglement
 */
export class Reglement {
    _id: number;
    date_reglement: Date;
    reglementTtc: number;
    factureMois: number;

    /**
     * Creates an instance of Reglement.
     * @param {Object} [value={}]
     * @memberof Reglement
     */
    constructor(value: Object = {}){
        Object.assign(this, value);
    }
}
