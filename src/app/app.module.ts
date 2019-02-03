import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComicbooksComponent } from './comicbooks/comicbooks.component';
import { ComicbookDetailsComponent } from './comicbook-details/comicbook-details.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicbooksComponent,
    ComicbookDetailsComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
