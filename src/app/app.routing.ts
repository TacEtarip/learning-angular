import { Routes } from '@angular/router';

import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemListComponent } from './media-item-list.component';

const appRoutes: Routes = [
  { path: 'add', component: MediaItemFormComponent },
  { path: ':medium', }, // routing por tipo de medium
  { path: '', redirectTo: 'all', pathMatch: 'full' }
];
