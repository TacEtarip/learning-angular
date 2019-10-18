import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaItemFormComponent } from './media-item-form.component';
import { newItemRouting } from './new-item.routing';
import { Media_Tesst } from './media-tesst-item.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    newItemRouting
  ],
  declarations: [
    MediaItemFormComponent,
    Media_Tesst
  ]
})
export class NewItemModule { }
