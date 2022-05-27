import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { XyzComponent } from './components/xyz/xyz.component';
import { LogoArgProgComponent } from './components/logo-arg-prog/logo-arg-prog.component';
import { RedesComponent } from './components/redes/redes.component';
import { BannerComponent } from './components/banner/banner.component';
import { InformacionGGGComponent } from './components/informacion-ggg/informacion-ggg.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    XyzComponent,
    LogoArgProgComponent,
    RedesComponent,
    BannerComponent,
    InformacionGGGComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
