import { Component } from '@angular/core';

// Models
import { User } from '../../models/user';

// Providers
import { UserProvider } from '../../providers/user-provider.ts'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private userProvider: UserProvider) {
        this.userProvider.initDB();
    }

	segmentChanged(ev: any) {
        console.log('Segment changed', ev);
    }

    ionViewDidEnter() {
        this.users = this.userProvider.getAllItems();
    }
}
