import { SwiperModule } from 'swiper/angular';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonalComponent } from './personal/personal.component';
import { SocialsComponent } from './socials/socials.component';
import { SwiperComponent } from './swiper/swiper.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialsComponent,
    HeaderComponent,
    SwiperComponent,
    HomePageComponent,
    PersonalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
