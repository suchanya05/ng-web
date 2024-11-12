import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PersonalManagerComponent } from './personal-manager/personal-manager.component';
import { StockManagerComponent } from './stock-manager/stock-manager.component';
import { AddPersonalComponent } from './add-personal/add-personal.component';
// import { PersonalProfileComponent } from './personal-manager/personal-profile/personal-profile.component';
// import { PersonalSettingsComponent } from './personal-manager/personal-settings/personal-settings.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { 
    path: 'personal', 
    component: PersonalManagerComponent,
    // children: [
    //   { path: 'profile', component: PersonalProfileComponent },
    //   { path: 'settings', component: PersonalSettingsComponent }
    // ]
  },
  { path: 'stock-manager', component: StockManagerComponent },
  { path: 'personal/add', component: AddPersonalComponent },
];