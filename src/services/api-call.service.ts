// Licensed to the Eyjafjoll under one or more agreements.
// Eyjafjoll licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RatedPaths} from '../models/ratedPaths';
import {SettingsService} from './settings.service';

declare var google: any;

@Injectable({
    providedIn: 'root'
})
export class ApiCallService {
    url = 'https://hackqc19-api.herokuapp.com/api/directions';
    directionsService = new google.maps.DirectionsService;

    origin: string;
    destination: string;
    ratedPaths: RatedPaths;

    constructor(private http: HttpClient) {
    }

    searchItineraries(origin: string, destination: string, travelMode: string, constraints: string[]) {
        const params = {
            destination: destination,
            origin: origin,
            mode: travelMode.toLocaleLowerCase(),
            constraints: constraints
        };

        return new Promise((resolve, reject) => {
                this.http.get(this.url, {
                    params: params
                }).toPromise()
                    .then(
                        res => {
                            return this.directionsService.route({
                                origin: origin,
                                destination: destination,
                                travelMode: travelMode,
                                provideRouteAlternatives: true
                            }, (response, status) => {
                                if (status === 'OK') {
                                    this.ratedPaths = new RatedPaths(origin, destination, travelMode);
                                    this.ratedPaths.createItineraries(res, response);
                                    return resolve();
                                }
                                return reject();
                            });
                        }, () => {
                            window.alert('Une erreur est survenue');
                            return reject();
                        });
            }
        );
    }
}
