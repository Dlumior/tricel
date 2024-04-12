import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { LinkShortenerModule } from './link-shortener/link-shortener.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, LinkShortenerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
