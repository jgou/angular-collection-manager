import { Component, OnInit } from '@angular/core';
import { Comicbook } from '../comicbook';
import { ComicbookService } from '../comicbook.service';

@Component({
  selector: 'app-comicbooks',
  templateUrl: './comicbooks.component.html',
  styleUrls: ['./comicbooks.component.css']
})
export class ComicbooksComponent implements OnInit {

  comicbooks: Comicbook[];
  selectedComicbook: Comicbook;

  constructor(private comicbookService: ComicbookService) { }

  ngOnInit() {
    this.getComicbooks();
  }

  onSelect(comicbook: Comicbook): void {
    this.selectedComicbook = comicbook;
  }

  getComicbooks(): void {
    this.comicbookService.getComicBooks().subscribe(comicbooks => this.comicbooks = comicbooks);
  }
}
