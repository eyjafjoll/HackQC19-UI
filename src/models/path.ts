import {Intersection} from './intersection';

export class Path {
    colorCode: string;
    intersections: Array<Intersection>;
    duration: string;
    distance: string;
    rating: {
        collision: 95
    };

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
        let number = Math.round(Math.random() * 100);

        return number;
    }

}
