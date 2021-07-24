import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  trending:any;
  constructor( private router:Router,private tObj:SongsService) { }

  ngOnInit(): void {
    this.tObj.gettrendingSongs().subscribe(
      data=>{
        this.trending=data;
      },
      err=>{
        console.log('error in loading data',err)
      }
    )
  }

 onClick(id :any){
    this.router.navigateByUrl('trending/'+id)
 }
}
