import {Component} from '@angular/core';

import { Router } from '@angular/router';
import {Itinerary} from "../../models/itinerary";
import {ApiCallService} from '../../services/api-call.service';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    origin: string;
    position = {lat: null, lng: null};
    destination: string;
    travelMode: string;


    constructor(private router: Router, private apiService: ApiCallService, public geolocation: Geolocation) {
        this.geolocation.getCurrentPosition().then((position) => {
            this.position.lat = position.coords.latitude;
            this.position.lng = position.coords.longitude;
            console.log('Position find ' + this.position.lat + ',' + this.position.lng);
        });
    }

    goToSettings(i:Itinerary){
        this.router.navigate(['/settings']);
    }

    calculateItenerary() {
        let origin = this.origin;
        if (!origin) {
            origin = this.position.lat + ',' + this.position.lng;
        }

        this.apiService.origin = origin;
        this.apiService.destination = this.destination;

        // TODO fill constraints
        this.apiService.searchItineraries(origin, this.destination, this.travelMode, []);
        this.router.navigate(['/results']);
    }
}
