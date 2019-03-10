import {Intersection} from './intersection';

export class Path {
    colorCode: string;
    intersections: Array<Intersection>;
    duration: string;
    distance: string;
    rating = {};

    // request needed to draw the steps
    request;


    constructor(colorCode: string, rating: {}, request) {
        this.colorCode = colorCode;
        this.rating = rating;
        this.request = request;

        this.duration = request.duration.text;
        this.distance = request.distance.text;
    }

    getRating() {
        const number = this.rating.collision + this.rating.feupieton + this.rating.feuxsonores + this.rating.vehiculepietion;

        return number / 4;
    }

}
