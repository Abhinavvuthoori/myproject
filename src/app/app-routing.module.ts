import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { CartComponent } from './cart/cart.component';
import { FullsongComponent } from './fullsong/fullsong.component';
import { HindiminiComponent } from './hindimini/hindimini.component';
import { HindisongsComponent } from './hindisongs/hindisongs.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoodsComponent } from './moods/moods.component';
import { TeluguminiComponent } from './telugumini/telugumini.component';
import { TelugusongsComponent } from './telugusongs/telugusongs.component';
import { TopartistsComponent } from './topartists/topartists.component';
import { TopartistsminiComponent } from './topartistsmini/topartistsmini.component';
import { TrendingComponent } from './trending/trending.component';
import { TrendingminiComponent } from './trendingmini/trendingmini.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'fav',component:CartComponent},
  {path:'browse',component:BrowseComponent,children:[
    {path:'topartists',component:TopartistsComponent},
    {path:'topartists/:id',component:TopartistsminiComponent},
    {path:'moods',component:MoodsComponent},
    {path:'',component:TopartistsComponent}
  ]},
  {path:'trending',component:TrendingComponent},
  {path:'trending/:id',component:TrendingminiComponent},
  {path:'telugusongs',component:TelugusongsComponent},
  {path:'telugusongs/:id',component:TeluguminiComponent},
  {path:'telugusongs/:id/:name',component:FullsongComponent},
  {path:'hindisongs',component:HindisongsComponent},
  {path:'hindisongs/:id',component:HindiminiComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
