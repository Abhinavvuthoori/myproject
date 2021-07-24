import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-telugusongs',
  templateUrl: './telugusongs.component.html',
  styleUrls: ['./telugusongs.component.css']
})
export class TelugusongsComponent implements OnInit {

  telugu:any;
  constructor( private router:Router,private tObj:SongsService) { }

  ngOnInit(): void {
    this.tObj.getTeluguSongs().subscribe(
      data=>{
        this.telugu=data;
        console.log(this.telugu)
      },
      err=>{
        console.log('error in loading data',err)
      }
    )
  }


onclicktelugu(id :any){
 this.router.navigateByUrl('telugusongs/'+id)

}
}
