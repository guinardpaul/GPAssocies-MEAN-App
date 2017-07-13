export class Devis {
	_id: number;
	ref_devis: string;
	date_creation: Date;
	montantHt: number;
	tauxTva: number;
	montantTtc: number;
	client: number;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}