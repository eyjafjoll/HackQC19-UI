// Licensed to the Eyjafjoll under one or more agreements.
// Eyjafjoll licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ResultsPage} from './results.page';

const routes: Routes = [
    {
        path: '',
        component: ResultsPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ResultsPage]
})
export class ResultsPageModule {
}
