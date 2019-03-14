// Licensed to the Eyjafjoll under one or more agreements.
// Eyjafjoll licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

import {Component} from '@angular/core';

import {Router} from '@angular/router';
import {ApiCallService} from '../../services/api-call.service';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {SettingsService} from '../../services/settings.service';
import {LoadingController} from '@ionic/angular';

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


    constructor(private router: Router, private apiService: ApiCallService, public geolocation: Geolocation,
                private settingsService: SettingsService, public loadingController: LoadingController) {

        this.geolocation.getCurrentPosition().then((position) => {
            this.position.lat = position.coords.latitude;
            this.position.lng = position.coords.longitude;
            console.log('Position find ' + this.position.lat + ',' + this.position.lng);
        });
    }

    goToSettings() {
        this.router.navigate(['/settings']);
    }

    async calculateItenerary() {
        let origin = this.origin;
        let constraints = this.settingsService.getSettings();
        if (!origin) {
            origin = this.position.lat + ',' + this.position.lng;
        }

        this.apiService.origin = origin;
        this.apiService.destination = this.destination;

        console.log(constraints);
        if (this.travelMode !== 'WALKING') {
            constraints = [];
        }
        // TODO up loading page
        const loading = await this.loadingController.create({ message: 'Chargement en cours...' });
        await loading.present();
        this.apiService.searchItineraries(origin, this.destination, this.travelMode, constraints).then(async () => {
            // TODO hide loading page
            await loading.dismiss();
            this.router.navigate(['/results']);
        }, async () => {
            await loading.dismiss();
            // TODO delete next line, uncomment the following
            this.router.navigate(['/results']);
            // window.alert('Une erreur est survenu');
        });
    }
}
