export class Client {
    id_client: number;
    statutClient: boolean;
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

    constructor(value: Object = {}){
        Object.assign(this, value);
    }
}
