import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  onDelete() {

    // rjxj función tap(x=> funcion(x)) permite realizar otras funciones dentro de un pipe
    // localStorage.setItem('hola1', 'yes');
    // localStorage.delete();
    this.delete.emit(this.mediaItem);
  }
}
