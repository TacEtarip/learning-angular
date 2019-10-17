import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {
  constructor(private http: HttpClient) { }


  testGet(medium: string) {
    const getOptions = {
      params: { medium }
    };
    return this.http.get('mediaitems', getOptions);
  }

  get(medium: string): Observable<any> {
    const getOptions = {
      params: { medium }
    };
    return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
      .pipe(
        map((response: MediaItemsResponse) => {
          return response.mediaItems;
        }),
        catchError(this.handleError)
      );
  }
  add(mediaItem: MediaItem): Observable<MediaItem> {
    return this.http.post<MediaItem>('mediaitems', mediaItem)
      .pipe(catchError(this.handleError));
  }
  /*
  add(mediaItem: MediaItem): Observable<MediaItem> {
    return this.http.post<MediaItem>('mediaitems', mediaItem,
      {
        headers: new HttpHeaders({
          'Content-Type': 'aplication/json'
        })
      })
      .pipe(
        map((response: MediaItem) => {
          return response;
        }), catchError(this.handleError));
  }
  add(mediaItem: MediaItem): Observable<MediaItem> {
    return this.http.post<MediaItem>('mediaitems', mediaItem,
      {
        headers: new HttpHeaders({
          'Content-Type': 'aplication/json'
        })
      })
      .pipe(catchError(this.handleError));
  }*/

  delete(mediaItem: MediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError('A data error has ocurred, try again!');
  }

}

interface MediaItemsResponse {
  mediaItems: MediaItem[];
}

export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}
