import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';
import { TrendingminiComponent } from './trendingmini/trendingmini.component';
import { TelugusongsComponent } from './telugusongs/telugusongs.component';
import { TeluguminiComponent } from './telugumini/telugumini.component';
import { FullsongComponent } from './fullsong/fullsong.component';
import { HindisongsComponent } from './hindisongs/hindisongs.component';
import { HindiminiComponent } from './hindimini/hindimini.component';
import { BrowseComponent } from './browse/browse.component';
import { TopartistsComponent } from './topartists/topartists.component';
import { TopartistsminiComponent } from './topartistsmini/topartistsmini.component';
import { MoodsComponent } from './moods/moods.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrendingComponent,
    TrendingminiComponent,
    TelugusongsComponent,
    TeluguminiComponent,
    FullsongComponent,
    HindisongsComponent,
    HindiminiComponent,
    BrowseComponent,
    TopartistsComponent,
    TopartistsminiComponent,
    MoodsComponent,
    LoginComponent,
    SignupComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
