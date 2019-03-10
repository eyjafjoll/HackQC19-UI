import {Path} from './path';

export class Itinerary {

    paths: Array<Path> = [];
    time: string;
    distance: string;

    request;

    constructor(request) {
        this.request = request;
        this.time = request.legs[0].duration.text;
        this.distance = request.legs[0].distance.text;
    }

    addPath(rating: {}, step) {
        this.paths.push(new Path('', rating, step));
    }

    getRating(): number {
        let number = 0;
        this.paths.forEach(path => {
            number += path.getRating();
        });

        return Math.round(number / this.paths.length);
    }

    getDirections(): any {
        return this.request;
    }

}
