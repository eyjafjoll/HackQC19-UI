import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Itinerary} from "../../models/itinerary";


@Component({
    selector: 'app-map',
    templateUrl: 'map.page.html',
    styleUrls: ['map.page.scss'],
})
export class MapPage {

    constructor(private router: Router) {
    }

    goToSettings() {
        this.router.navigate(['/settings']);
    }

    getColor(i: number) {
        if (i >= 85) {
            return "ion-color-success";
        } else if (i >= 70 && i > 50) {
            return "ion-color-warning";
        } else {
            return "ion-color-danger";
        }
    }
}
