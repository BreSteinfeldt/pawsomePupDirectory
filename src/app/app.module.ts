import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BreedsComponent } from './breeds.component';
import { RandomImageComponent } from './random-image.component';
import { DogService } from './dog.service';

@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    BrowserModule,
    HttpClientModule
  ],
  providers: [DogService]
})
export class AppModule { }