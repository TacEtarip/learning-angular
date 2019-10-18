import { Routes, RouterModule } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form.component';
import { Media_Tesst } from './media-tesst-item.component';


const newItemRoutes: Routes = [
  { path: '', component: MediaItemFormComponent },
  { path: 'x', component: Media_Tesst }
];

export const newItemRouting = RouterModule.forChild(newItemRoutes);
