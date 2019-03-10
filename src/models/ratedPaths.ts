import {Itinerary} from './itinerary';

export class RatedPaths {
    origin: any;
    destination: string;
    travelMode: string;
    itineraries: Array<Itinerary> = [];
    itinerarySelected: Itinerary;

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

    createItineraries(rating: any, res: any) {
        this.request = res.request;
        let itinerary;
        let legs;
        let i = 0;
        let j = 0;
        res.routes.forEach(route => {
            legs = route.legs[0];
            itinerary = new Itinerary(route);
            legs.steps.forEach(step => {
                itinerary.addPath(rating[i][j], step);
                j++;
            });
            i++;
            this.itineraries.push(itinerary);
        });
    }

    selectItinerary(i: Itinerary): void {
        this.itinerarySelected = i;
    }
}
