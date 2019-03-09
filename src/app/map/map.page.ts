import {Component, ElementRef, NgZone, ViewChild} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Itinerary} from '../../models/itinerary';

declare var google: any;

@Component({
    selector: 'app-map',
    templateUrl: 'map.page.html',
    styleUrls: ['map.page.scss'],
})
export class MapPage {

    @ViewChild('Map') mapElement: ElementRef;
    map: any;
    mapOptions: any;
    location = {lat: null, lng: null};
    markerOptions: any = {position: null, map: null, title: null};
    marker: any;
    apiKey: any = 'AIzaSyDasboxO-3sQlq37ZHHNwgxqtbHxHLX7Qs';
    //directionsDisplay = new google.maps.DirectionsRenderer;

    constructor(public zone: NgZone, public geolocation: Geolocation) {
        /*load google map script dynamically */
        const script = document.createElement('script');
        script.id = 'googleMap';
        if (this.apiKey) {
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
        } else {
            script.src = 'https://maps.googleapis.com/maps/api/js?key=';
        }
        document.head.appendChild(script);
        /*Get Current location*/
        this.geolocation.getCurrentPosition().then((position) => {
            console.log(position);
            this.location.lat = position.coords.latitude;
            this.location.lng = position.coords.longitude;
        });
        /*Map options*/
        this.mapOptions = {
            center: this.location,
            zoom: 17,
            mapTypeControl: false,
            mapTypeId: 'roadmap'
        };
        setTimeout(() => {
            this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
            /*Marker Options*/
            this.markerOptions.position = this.location;
            this.markerOptions.map = this.map;
            this.markerOptions.title = 'My Location';
            this.marker = new google.maps.Marker(this.markerOptions);
        }, 3000);
    }

    displayDirection(itinerary: Itinerary) {
       // this.directionsDisplay.setDirections(itinerary.getDirections());
    }

}
