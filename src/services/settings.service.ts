import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    settings: {};

    constructor() {
    }

    setSetting(values: {}): void {
        this.settings = values;
    }

    getSettings(): string[] {
        return ['blind', 'family'];
    }
}
