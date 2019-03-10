import {Path} from './path';

export class Itinerary {

    paths: Array<Path> = [];
    time: string;
    distance: string;
    rating: number;

    request;

    constructor(request) {
        this.request = request;
        this.time = request.duration.text;
        this.distance = request.distance.texttime;
        this.rating = this.getRating();
    }

    addPath(rating: {}, step) {
        this.paths.push(new Path('', {}, step));
    }

    getRating(): number {
        // TODO
        return Math.round(Math.random() * 100);
    }

    getDirections(): any {
        return this.request;
    }

}
