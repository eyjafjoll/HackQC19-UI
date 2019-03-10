import {Component} from '@angular/core';
import {Router} from '@angular/router';
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

    calculateItenerary() {
        if (!this.origin) {
            this.origin = this.position.lat + ',' + this.position.lng;
        }

        this.apiService.origin = this.origin;
        this.apiService.destination = this.destination;

        // TODO fill constraints
        this.apiService.searchItineraries(this.origin, this.destination, this.travelMode, []);
        this.router.navigate(['/results']);
    }
}
