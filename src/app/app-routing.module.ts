// Licensed to the Eyjafjoll under one or more agreements.
// Eyjafjoll licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'results', loadChildren: './results/results.module#ResultsPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
