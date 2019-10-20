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
  @ViewChild(MediaItemListComponent, { static: false }) mediaItem: MediaItemListComponent;

  onSubmit(mediaitem: MediaItem) {
    console.log('200');
    let tempList: MediaItem[] = this.mediaItem.mediaItems$.value;
    tempList.push(mediaitem);
    this.mediaItem.mediaItems$.next(tempList);
  }
}
