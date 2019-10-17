import { Component, OnInit } from '@angular/core';
import { MediaItemService, MediaItem } from './media-item.service';
import { Observable, Subject, of } from 'rxjs';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  medium = '';
  // mediaItems: MediaItem[];
  // mediaSubject = new Subject();
  // mediaItemsShow = this.mediaSubject.asObservable;
  mediaItems$: Observable<MediaItem[]>;

  constructor(private mediaItemService: MediaItemService) { }


  ngOnInit() {
    this.getMediaItems(this.medium);
    setInterval(() => { this.getMediaItems(this.medium); }, 300);
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
    // console.log(this.mediaItems$.subscribe(res => { console.log(res); }));
  }

  /*

    solo se hace link hasta que la lista original no observable se re-asigne
    getMediaItemsOne(medium: string) {
      this.medium = medium;

      this.mediaItemService.get(medium)
        .subscribe(mediaItems => {
          this.mediaItems = mediaItems;
        });
      this.mediaItems$ = of(this.mediaItems);
    }

    getMediaItemsTwo(medium: string) {
      this.medium = medium;

      this.mediaItemService.get(medium)
        .subscribe(mediaItems => {
          this.mediaItems.push(mediaItems);
        });

    }*/

  ejecutarTest() {
    this.mediaItemService.testGet('Movies')
      .subscribe(res => console.log(res));
  }
}
