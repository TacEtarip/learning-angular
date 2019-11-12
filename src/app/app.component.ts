import { Component, ViewChild } from '@angular/core';
import { MediaItemListComponent } from './media-item-list.component';
import { MediaItem } from './media-item.service';
import { of, from } from 'rxjs';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MediaItemListComponent, { static: false }) mediaItems: MediaItemListComponent;

  onSubmit(mediaitem: MediaItem) {
    console.log('200');
    let tempList: MediaItem[] = this.mediaItems.mediaItems$.value;
    tempList.push(mediaitem);
    this.mediaItems.mediaItems$.next(tempList);
  }
}
