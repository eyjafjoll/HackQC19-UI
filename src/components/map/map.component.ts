import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Itinerary} from '../../models/itinerary';

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
    location = {lat: 45, lng: 45};
    markerOptions: any = {position: null, map: null, title: null};
    marker: any;

    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;

    watch;

    constructor(public zone: NgZone, public geolocation: Geolocation) {

    }

    ngOnInit() {
        /*Get Current location*/
        this.geolocation.getCurrentPosition().then((position) => {
            this.location.lat = position.coords.latitude;
            this.location.lng = position.coords.longitude;
            this.mapOptions = {
                center: this.location,
                zoom: 17,
                mapTypeControl: false,
                mapTypeId: 'roadmap'
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
            /*Marker Options*/
            this.markerOptions.position = this.location;
            this.markerOptions.map = this.map;
            this.markerOptions.title = 'My Location';
            this.marker = new google.maps.Marker(this.markerOptions);
            this.directionsDisplay.setMap(this.map);
            //this.displayDirection(new Itinerary(1, []));
        });


        this.watch = this.geolocation.watchPosition();
        this.watch.subscribe((data) => {
            this.location.lat = data.coords.latitude;
            this.location.lng = data.coords.longitude;
            /*Marker Options*/
            this.markerOptions.position = this.location;
            this.marker = new google.maps.Marker(this.markerOptions);
        });
    }


    async delay(ms: number): Promise<any> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    displayDirection(itinerary: Itinerary) {
        this.delay(3000).then(() => {
            this.directionsService.route({
                origin: this.location,
                destination: '85 Rue Dalhousie, Québec, QC G1K 8R2',
                travelMode: 'WALKING'
            }, (response, status) => {
                if (status === 'OK') {
                    console.log(response);
                    const r = {
                        request: response.request,
                        routes: response.routes
                    };
                    this.directionsDisplay.setDirections(r);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        });
        //
    }

}
