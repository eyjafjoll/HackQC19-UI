export class Intersection {

    idIntersection: number;
    latitude: number;
    longitude: number;
    rating: number;


    constructor(
        in_idIngredient: number,
        in_name: number,
        in_image: number,
        in_quantity: number,
    ) {
        this.idIntersection = in_idIngredient;
        this.latitude = in_name;
        this.longitude = in_image;
        this.rating = in_quantity;
    }
}