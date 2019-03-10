import {Itinerary} from './itinerary';

export class RatedPaths {
    origin: any;
    destination: string;
    travelMode: string;
    itineraries: Array<Itinerary> = [];

    request;


    constructor(
        startPoint: any,
        endPoint: string,
        transportationMode: string
    ) {
        this.origin = startPoint;
        this.destination = endPoint;
        this.travelMode = transportationMode;
    }

    createItineraries(rating: [], res: any) {
        this.request = res.request;
        let itinerary;
        let legs;
        res.routes.forEach(route => {
            legs = route.legs[0];
            itinerary = new Itinerary(legs);
            legs.steps.forEach(step => {
                itinerary.addPath([], step);
            });
            this.itineraries.push(itinerary);
        });
    }
}
