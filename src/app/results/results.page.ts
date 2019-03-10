import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Itinerary} from '../../models/itinerary';
import {ApiCallService} from '../../services/api-call.service';

@Component({
    selector: 'app-results',
    templateUrl: './results.page.html',
    styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

    origin: string;
    destination: string;
    ratedPaths;

    constructor(private apiService: ApiCallService, private router: Router) {
        this.origin = this.apiService.origin;
        this.destination = this.apiService.destination;
        this.ratedPaths = this.apiService.ratedPaths;

        this.ratedPaths.itineraries.sort(this.compare);
    }

    ngOnInit() {
    }


    goToSettings(i: Itinerary) {
        this.router.navigate(['/settings']);
    }

    goToDetails(i: Itinerary) {
        console.log(i);
        //this.router.navigate(['/map']);
    }

    compare(a: Itinerary, b: Itinerary) {
        if (a.getRating() < b.getRating()) {
            return 1;
        }
        if (a.getRating() > b.getRating()) {
            return -1;
        }
        return 0;
    }

}
