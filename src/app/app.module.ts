import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { BannerComponent } from './banner/banner.component';
import { ToyComponent } from './toy/toy.component';
import { FatsaysComponent } from './fatsays/fatsays.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BannerComponent,
    ToyComponent,
    FatsaysComponent,
    HomeComponent,
    CharacterComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
