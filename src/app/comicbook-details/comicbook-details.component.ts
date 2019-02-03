import { Component, OnInit, Input } from '@angular/core';
import { Comicbook } from '../comicbook';

@Component({
  selector: 'app-comicbook-details',
  templateUrl: './comicbook-details.component.html',
  styleUrls: ['./comicbook-details.component.css']
})
export class ComicbookDetailsComponent implements OnInit {

  @Input() comicbook: Comicbook;

  constructor() { }

  ngOnInit() {
  }

}
