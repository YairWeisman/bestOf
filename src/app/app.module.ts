import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GraphComponent } from './components/graph/graph.component';
import { GenreInfoComponent } from './old/genre-info/genre-info.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GraphComponent,
    GenreInfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
