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

    goToHome() {
        this.router.navigate(['/home']);
    }

    goToSettings() {
        this.router.navigate(['/settings']);
    }

    goToDetails(i: Itinerary) {
        this.ratedPaths.selectItinerary(i);
        this.router.navigate(['/map']);
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
