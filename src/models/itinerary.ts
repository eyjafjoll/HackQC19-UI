import {Path} from './path';

export class Itinerary {

    idItinerary: number;
    paths: Array<Path>;


    constructor(idItinerary: number, paths: Path[]) {
        this.idItinerary = idItinerary;
        this.paths = paths;
    }

}
