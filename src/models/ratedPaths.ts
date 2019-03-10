import {Itinerary} from './itinerary';

export class RatedPaths {
    origin: any;
    destination: string;
    travelMode: string;
    itineraries: Array<Itinerary>;


    constructor(
        startPoint: any,
        endPoint: string,
        transportationMode: string
    ) {
        this.origin = startPoint;
        this.destination = endPoint;
        this.travelMode = transportationMode;
    }

    createItineraries(steps: any) {
        // TODO
    }
}
