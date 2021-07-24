import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-hindisongs',
  templateUrl: './hindisongs.component.html',
  styleUrls: ['./hindisongs.component.css']
})
export class HindisongsComponent implements OnInit {

  hindi:any;
  constructor( private router:Router,private tObj:SongsService) { }

  ngOnInit(): void {
    this.tObj.getHindiSongs().subscribe(
      data=>{
        this.hindi=data;
      },
      err=>{
        console.log('error in loading data',err)
      }
    )
  }

  onclickhindi(id :any){
    this.router.navigateByUrl('hindisongs/'+id)
   
   }

}
