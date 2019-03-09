export class User {
    idUser: number;
    physicalConstraint: boolean;
    isBlind: boolean;
    isDeaf: boolean;
    isColorless: boolean;
    isFamily: boolean;
    isAgoraphobic: boolean;


    constructor(
        idUser: number,
        physicalConstraint: boolean,
        isBlind: boolean,
        isDeaf: boolean,
        isColorless: boolean,
        isFamily: boolean,
        isAgoraphobic: boolean
    )
    {
        this.idUser = idUser;
        this.physicalConstraint = physicalConstraint;
        this.isBlind = isBlind;
        this.isDeaf = isDeaf;
        this.isColorless = isColorless;
        this.isFamily = isFamily;
        this.isAgoraphobic = isAgoraphobic;
    }
}