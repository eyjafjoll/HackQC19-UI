import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Itinerary} from '../../models/itinerary';
import {ApiCallService} from '../../services/api-call.service';


@Component({
    selector: 'app-map',
    templateUrl: 'map.page.html',
    styleUrls: ['map.page.scss'],
})
export class MapPage {

    it: Itinerary;

    constructor(private router: Router, private apiService: ApiCallService) {
        this.it = apiService.ratedPaths.itinerarySelected;
    }

    goToSettings() {
        this.router.navigate(['/settings']);
    }

    getColor(i: number) {
        if (i >= 80) {
            return 'ion-color-success';
        } else if (i <= 80 && i > 50) {
            return 'ion-color-warning';
        } else {
            return 'ion-color-danger';
        }
    }
}
