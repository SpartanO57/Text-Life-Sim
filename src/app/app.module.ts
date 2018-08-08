import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { BannerComponent } from './banner/banner.component';
import { ToyComponent } from './toy/toy.component';
import { FatsaysComponent } from './fatsays/fatsays.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BannerComponent,
    ToyComponent,
    FatsaysComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
