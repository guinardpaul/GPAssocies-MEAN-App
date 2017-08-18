/**
 * Devis model
 *
 * @export
 * @class Devis
 */
export class Devis {
	_id: number;
	ref_devis: string;
	date_creation: Date;
	montantHt: number;
	tauxTva: number;
	montantTtc: number;
	client: number;

	/**
   * Creates an instance of Devis.
   * @param {Object} [values={}]
   * @memberof Devis
   */
	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
