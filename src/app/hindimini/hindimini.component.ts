import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-hindimini',
  templateUrl: './hindimini.component.html',
  styleUrls: ['./hindimini.component.css']
})
export class HindiminiComponent implements OnInit {

  hindisongs:any;
// playStatus=false
//   vol=false
  constructor(private ar:ActivatedRoute, private lObj:SongsService,private router:Router ) { }

  ngOnInit(): void {
    
    let id=this.ar.snapshot.params.id;
    this.lObj.getHindiSongsById(id).subscribe(
      sdata=>{
        this.hindisongs=sdata;
      },
      err=>{
        console.log('error in loading data',err.message)
      }
    )
  }

  onClickDisplay(id :any,name : any){
    this.router.navigateByUrl('telugusongs/'+id + '/' +name)
  }

}
