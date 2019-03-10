import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {Itinerary} from "../../models/itinerary";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {


    constructor(private router: Router) {
    }

    calculateItenerary(){
        this.router.navigate(['/results'])
    }

    goToSettings(i:Itinerary){
        this.router.navigate(['/settings'])
    }

    segmentChanged(ev: any) {
        console.log('Segment changed', ev);
    }
}
