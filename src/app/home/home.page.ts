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
    travelMode = 'WALKING';


    constructor(private router: Router, private apiService: ApiCallService, public geolocation: Geolocation) {

        this.geolocation.getCurrentPosition().then((position) => {
            this.position.lat = position.coords.latitude;
            this.position.lng = position.coords.longitude;
            console.log('Position find ' + this.position.lat + ',' + this.position.lng);
        });
    }

    goToSettings() {
        this.router.navigate(['/settings']);
    }

    calculateItenerary() {
        let origin = this.origin;
        let constraints; // TODO get contraints from settings
        if (!origin) {
            origin = this.position.lat + ',' + this.position.lng;
        }

        this.apiService.origin = origin;
        this.apiService.destination = this.destination;

        if (this.travelMode !== 'WALKING') {
            constraints = [];
        }
        // TODO up loading page
        this.apiService.searchItineraries(origin, this.destination, this.travelMode, constraints).then(() => {
            // TODO hide loading page
            this.router.navigate(['/results']);
        }, () => {
            // TODO delete next line, uncomment the following
            this.router.navigate(['/results']);
            // window.alert('Une erreur est survenu');
        });
    }
}
