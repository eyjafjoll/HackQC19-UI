import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Itinerary } from "../../models/itinerary";

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
    public itineraries: Array<Itinerary>;

  constructor(private router: Router) {
    this.itineraries = [
        new Itinerary(0,[], 0),
        new Itinerary(1,[], 0),
        new Itinerary(2,[], 0)
    ];

      this.itineraries.sort(this.compare);
  }

  ngOnInit() {

  }

    goToSettings(i:Itinerary){
        this.router.navigate(['/settings'])
    }

  goToDetails(i:Itinerary){
      this.router.navigate(['/map'])
  }

    compare(a: Itinerary, b: Itinerary) {
        if (a.rating < b.rating)
            return 1;
        if (a.rating > b.rating)
            return -1;
        return 0;
    }

}
