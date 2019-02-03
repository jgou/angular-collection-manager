import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { COMICBOOKS } from './mock-comicbooks';
import { Comicbook } from './comicbook';

@Injectable({
  providedIn: 'root'
})
export class ComicbookService {

  constructor() { }

  getComicBooks(): Observable<Comicbook[]>{
    return of(COMICBOOKS);
  }
}
