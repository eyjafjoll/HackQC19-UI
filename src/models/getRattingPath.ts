import {Itinerary} from './itinerary';

export class GetRattingPath {
    idRating: number;
    startPoint: number;
    endPoint: number;
    transportationMode: number;
    itineraries: Array<Itinerary>;


    constructor(
        idRating: number,
        startPoint: number,
        endPoint: number,
        transportationMode: number,
        itineraries: Array<Itinerary>
    ) {
        this.idRating = idRating;
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.transportationMode = transportationMode;
        this.itineraries = itineraries;
    }
}
