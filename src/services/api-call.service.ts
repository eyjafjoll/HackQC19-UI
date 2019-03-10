import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RatedPaths} from '../models/ratedPaths';
import {map} from 'rxjs/operators';

declare var google: any;

@Injectable({
    providedIn: 'root'
})
export class ApiCallService {

    url = 'https://hackqc19-api.herokuapp.com';
    directionsService = new google.maps.DirectionsService;

    origin: string;
    destination: string;
    ratedPaths: Observable<RatedPaths>;

    constructor(private http: HttpClient) {
    }

    searchItineraries(origin: any, destination: string, travelMode: string, constraints: string[]) {
        const params = {
            destination: destination,
            origin: origin,
            travelMode: travelMode,
            constraints: constraints
        };

        this.ratedPaths = this.http.get(this.url, {
            params: params
        }).pipe(map(res => {
            return this.directionsService.route({
                origin: origin,
                destination: destination,
                travelMode: travelMode
            }, (response, status) => {
                if (status === 'OK') {
                    console.log('Youpi !!!');
                    // TODO popule itineraries, ... with response.
                    return new RatedPaths(origin, destination, travelMode);
                }
            });
        }));
    }
}
