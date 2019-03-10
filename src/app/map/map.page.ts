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
}
