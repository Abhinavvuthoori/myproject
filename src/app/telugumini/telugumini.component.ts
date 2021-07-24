import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { observable, Observable } from 'rxjs';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-telugumini',
  templateUrl: './telugumini.component.html',
  styleUrls: ['./telugumini.component.css']
})
export class TeluguminiComponent implements OnInit {
telugusongs:any;
a:string | undefined;
//  playStatus=false
//   vol=false
// status=0
// len=0
  constructor(private ar:ActivatedRoute, private lObj:SongsService,private router:Router) { }

  ngOnInit(): void {
    
    let id=this.ar.snapshot.params.id;
    this.lObj.getTeluguSongsById(id).subscribe(
      sdata=>{
        this.telugusongs=sdata;
        console.log(this.telugusongs)
        
      },
      err=>{
        console.log('error in loading data',err.message)
      }
    )
  }

  audioObj=new Audio();
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];
  currentTime = '00:00:00';
  duration = '00:00:00';
 seek=0;
 status=false;
  streamObserver(url:any){
   return new Observable(observer => {
      
     this.audioObj.src=url;
     this.audioObj.load();
     this.audioObj.play();
     

     const handler = (event:Event) =>{
       console.log(event);
       this.seek=this.audioObj.currentTime;
       this.duration=this.timeFormat(this.audioObj.duration);
       this.currentTime=this.timeFormat(this.audioObj.currentTime);
     }

     this.addEvent(this.audioObj,this.audioEvents,handler);

    return () => {
      this.audioObj.pause();
      this.audioObj.currentTime=0;

      this.removeEvent(this.audioObj,this.audioEvents,handler);
    }
   });
  }

  addEvent(obj: HTMLAudioElement,events: any[],handler: (event: Event) => void){
     events.forEach(event => {
       obj.addEventListener(event,handler);
     });
  }

  removeEvent(obj: HTMLAudioElement,events: any[],handler: (event: Event) => void){
    events.forEach(event => {
      obj.removeEventListener(event,handler);
    });
  }

  setSeekTo(ev: any){
    this.audioObj.currentTime=ev.target.value;
  }
setVolume(ev: any){
  this.audioObj.volume=ev.target.value;
  console.log(ev.target.value)
}


  openSong(url: any){
    this.streamObserver(url).subscribe(event => {});
    console.log(url)
  }


  play(){
    this.status=!this.status;
    this.audioObj.play();
    console.log("play clicked");
 }
 
 pause(){
  this.status=!this.status;
  this.audioObj.pause();
   console.log("pause clicked");
 } 
 
 stop(){
  this.audioObj.pause();
  this.audioObj.currentTime=0;
   console.log("stop clicked");
 }

 timeFormat(time: number,format = "HH:mm:ss"){
   const momentTime = time *100;
   return moment.utc(momentTime).format(format);

 }
}




 

  
  


//    audioObj=new Audio();
//    audioEvents=[
//      "ended",
//      "error",
//      "play",
//      "playing",
//      "pause",
//      "timeupdate",
//      "canplay",
//      "loadedmetadata",
//      "loadstart"
//    ]
//    currenttime="00:00";
//    duration="00:00";
//    seek=0;
//    streamObserver(url: string){
//      return new Observable(observer =>{
//        this.audioObj.src=url;
//        this.audioObj.load();
//        this.audioObj.play();
//        const handler=(event:Event)=>{
//          this.seek=this.audioObj.currentTime/(this.audioObj.duration/100);
//          this.currenttime=this.timeFormat(this.audioObj.currentTime);
//          this.duration=this.timeFormat(this.audioObj.duration);
        
//        }
//        this.addEvent(this.audioObj,this.audioEvents,handler)
//        return()=>{
//          this.audioObj.pause();
//          this.audioObj.currentTime=0;

//          this.removeEvent (this.audioObj,this.audioEvents,handler)
//        }
//      });
//    }
//    addEvent(obj: HTMLAudioElement,events: any[],handler: (event: Event) => void){
//      events.forEach((event: any) =>{
//        obj.addEventListener(event,handler);
//      })
//    }
//    removeEvent(obj: HTMLAudioElement,events: any[],handler: (event: Event) => void){
//      events.forEach((event: any) =>{
//        obj.removeEventListener(event,handler);
//      })
//    }
//    setSeekTo(ev: { target: { value: number; }; }){
//      this.audioObj.currentTime 
//      = ev.target.value*(this.audioObj.duration/100)
//    }
//    setVolume(ev: { target: { value: number; }; }){
//      this.audioObj.volume = ev.target.value
//      if (this.audioObj.volume==0){
//        this.vol=true
//      }
//      if (this.audioObj.volume!=0){
//        this.vol=false
//      }
//    }
//    openSong(url: string){
//      this.streamObserver(url).subscribe(event=>{});
//      this.playStatus=true
//      console.log("hii")
//    }
//    play(){
//      this.audioObj.play();
//      this.playStatus=true
//    }
//    pause(){
//      this.audioObj.pause();
//      this.playStatus=false
//    }
//    stop(){
//      this.audioObj.pause();
//      this.audioObj.currentTime=0;
//      this.playStatus=false
//   }
//    timeFormat(time: number,format="mm:ss"){
//      const momentTime = time*1000;
//      return moment.utc(momentTime).format(format);
//    }
//  }

