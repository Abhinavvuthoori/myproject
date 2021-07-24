import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-topartists',
  templateUrl: './topartists.component.html',
  styleUrls: ['./topartists.component.css']
})
export class TopartistsComponent implements OnInit {

  
  artists:any
  constructor( private router:Router,private tObj:SongsService) { }

  ngOnInit(): void {
    this.tObj.getArtists().subscribe(
      data=>{
        this.artists=data;
      },
      err=>{
        console.log('error in loading data',err)
      }
    )
  }

  onClickArtists(id :any){
    this.router.navigateByUrl('browse/topartists/'+id)
  }

}
