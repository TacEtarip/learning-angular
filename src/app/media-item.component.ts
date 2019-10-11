import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { MediaItemService } from './media-item.service';


@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  //constructor(private mediaItemService: MediaItemService) { }


  onDelete() {
    //this.mediaItemService.delete(this.mediaItem);
    this.delete.emit(this.mediaItem);
  }
}
