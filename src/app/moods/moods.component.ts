import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-moods',
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.css']
})
export class MoodsComponent implements OnInit {

  moods:any
  constructor( private router:Router,private tObj:SongsService) { }

  ngOnInit(): void {
    this.tObj.getMoods().subscribe(
      data=>{
        this.moods=data;
      },
      err=>{
        console.log('error in loading data',err)
      }
    )
  }

}
