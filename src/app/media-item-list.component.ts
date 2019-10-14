import { Component, OnInit } from '@angular/core';
import { MediaItemService, MediaItem } from './media-item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  medium = '';
  // mediaItems: MediaItem[];
  mediaItems$: Observable<MediaItem[]>;
  constructor(private mediaItemService: MediaItemService) { }

  ngOnInit() {
    this.getMediaItems(this.medium);
  }


  onMediaItemDelete(mediaItem: MediaItem) {
    this.mediaItemService.delete(mediaItem)
      .subscribe(() => {
        this.getMediaItems(this.medium);
      });
  }

  getMediaItems(medium: string) {
    this.medium = medium;
    this.mediaItems$ = this.mediaItemService.get(medium);
    /*
    this.mediaItemService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });*/
  }
  ejecutarTest() {
    this.mediaItemService.testGet('Movies')
      .subscribe(res => console.log(res));
  }
}
