import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Itinerary} from '../../models/itinerary';
import {ApiCallService} from '../../services/api-call.service';
import {RatedPaths} from '../../models/ratedPaths';

declare var google: any;

@Component({
    selector: 'google-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

    @ViewChild('Map') mapElement: ElementRef;
    map: any;
    mapOptions: any;
    markerOptions: any = {position: null, map: null, title: null};
    marker: any;
    ratedPaths: RatedPaths;

    directionsDisplay = new google.maps.DirectionsRenderer;

    constructor(public zone: NgZone, private apiService: ApiCallService) {

    }

    ngOnInit() {
        this.ratedPaths = this.apiService.ratedPaths;
        this.mapOptions = {
            center: this.ratedPaths.itinerarySelected.request.start_location,
            zoom: 17,
            mapTypeControl: false,
            mapTypeId: 'roadmap'
        };

        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
        /*Marker Options*/
        this.markerOptions.position = this.ratedPaths.itinerarySelected.request.start_location;
        this.markerOptions.map = this.map;
        this.markerOptions.title = 'My Location';
        this.marker = new google.maps.Marker(this.markerOptions);
        this.directionsDisplay.setMap(this.map);
        this.displayDirection(this.apiService.ratedPaths.itinerarySelected);
    }

    displayDirection(itinerary: Itinerary) {
        this.directionsDisplay.setDirections({
            request: this.apiService.ratedPaths.request,
            routes: [itinerary.getDirections()]
        });
    }

}
