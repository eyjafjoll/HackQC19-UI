import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../services/settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    blind: boolean;

    constructor(private settingsService: SettingsService) {
    }

    ngOnInit() {

    }

    update(): void {
        this.settingsService.setSetting({
            blind: 1
        });
    }

}
