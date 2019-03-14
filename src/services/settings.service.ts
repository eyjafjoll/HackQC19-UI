// Licensed to the Eyjafjoll under one or more agreements.
// Eyjafjoll licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

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
