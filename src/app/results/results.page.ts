import {Component, OnInit} from '@angular/core';
import {ApiCallService} from '../../services/api-call.service';

@Component({
    selector: 'app-results',
    templateUrl: './results.page.html',
    styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

    origin: string;
    destination: string;

    constructor(private apiService: ApiCallService) {
        this.origin = this.apiService.origin;
        this.destination = this.apiService.destination;

        console.log(this.destination);
        // this.ratedPaths = this.apiService.ratedPaths Observable
    }

    ngOnInit() {
    }

}
