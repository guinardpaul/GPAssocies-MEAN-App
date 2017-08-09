/**
 * Client model
 *
 * @export
 * @class Client
 */
export class Client {
    _id: number;
    status_client: boolean;
    civilite: string;
    nom: string;
    prenom: string;
    adresseFact: string;
    complAdresseFact: string;
    cpFact: string;
    villeFact: string;
    adresseChantier: string;
    complAdresseChantier: string;
    cpChantier: string;
    villeChantier: string;
    email: string;
    numTel: string;

    /**
     * Creates an instance of Client.
     * @param {Object} [value={}]
     * @memberof Client
     */
    constructor(value: Object = {}) {
        Object.assign(this, value);
    }
}
