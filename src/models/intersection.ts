export class Intersection {

    idIntersection: number;
    latitude: number;
    longitude: number;
    colision: number;
    pedestrianCross: number;
    sidewalkSize: number;
    rating: number;


    constructor(
        in_idIntersection: number,
        in_latitude: number,
        in_longitude: number,
        in_colision: number,
        in_pedestrianCross: number,
        in_sidewalkSize: number,
        in_rating: number,
    ) {
        this.idIntersection = in_idIntersection;
        this.latitude = in_latitude;
        this.longitude = in_longitude;
        this.colision = in_colision;
        this.pedestrianCross = in_pedestrianCross;
        this.sidewalkSize = in_sidewalkSize;
        this.rating = in_rating;
    }
}
