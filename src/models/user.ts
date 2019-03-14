// Licensed to the Eyjafjoll under one or more agreements.
// Eyjafjoll licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

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