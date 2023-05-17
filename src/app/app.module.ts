import { SwiperModule } from 'swiper/angular';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonalComponent } from './personal/personal.component';
import { SocialsComponent } from './socials/socials.component';
import { SwiperComponent } from './swiper/swiper.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialsComponent,
    HeaderComponent,
    SwiperComponent,
    HomePageComponent,
    PersonalComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
