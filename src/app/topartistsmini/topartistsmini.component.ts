import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-topartistsmini',
  templateUrl: './topartistsmini.component.html',
  styleUrls: ['./topartistsmini.component.css']
})
export class TopartistsminiComponent implements OnInit {
artists:any
  constructor(private ar:ActivatedRoute, private lObj:SongsService,private router:Router) { }

  ngOnInit(): void {
    
    let id=this.ar.snapshot.params.id;
    this.lObj.getArtistsById(id).subscribe(
      sdata=>{
        this.artists=sdata;
      },
      err=>{
        console.log('error in loading data',err.message)
      }
    )
  }

}
