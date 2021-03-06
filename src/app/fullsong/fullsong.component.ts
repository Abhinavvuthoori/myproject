import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-fullsong',
  templateUrl: './fullsong.component.html',
  styleUrls: ['./fullsong.component.css']
})
export class FullsongComponent implements OnInit {

  playStatus=false
  vol=false

fulls:any;
  constructor(private tObj:SongsService,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    let lan=this.ar.snapshot.url[1].path; 
    let id=this.ar.snapshot.params.id;
    this.tObj.getFullsongsSid(lan,id).subscribe(
      data=>{
        this.fulls=data;
        console.log(this.fulls)
      },
      err=>{
        console.log('error in loading data',err)
      }
    )
  }


  // audioObj=new Audio();
  // audioEvents=[
  //   "ended",
  //   "error",
  //   "play",
  //   "playing",
  //   "pause",
  //   "timeupdate",
  //   "canplay",
  //   "loadedmetadata",
  //   "loadstart"
  // ]
  // currenttime="00:00";
  // duration="00:00";
  // seek=0;
  // streamObserver(audio){
  //   return new Observable(observer =>{
  //     this.audioObj.src=audio;
  //     this.audioObj.load();
  //     this.audioObj.play();
  //     const handler=(event:Event)=>{
  //       this.seek=this.audioObj.currentTime/(this.audioObj.duration/100);
  //       this.currenttime=this.timeFormat(this.audioObj.currentTime);
  //       this.duration=this.timeFormat(this.audioObj.duration)
  //     }
  //     this.addEvent(this.audioObj,this.audioEvents,handler)
  //     return()=>{
  //       this.audioObj.pause();
  //       this.audioObj.currentTime=0;

  //       this.removeEvent (this.audioObj,this.audioEvents,handler)
  //     }
  //   });
  // }
  // addEvent(obj,events,handler){
  //   events.forEach(event =>{
  //     obj.addEventListener(event,handler);
  //   })
  // }
  // removeEvent(obj,events,handler){
  //   events.forEach(event =>{
  //     obj.removeEventListener(event,handler);
  //   })
  // }
  // setSeekTo(ev){
  //   this.audioObj.currentTime = ev.target.value*(this.audioObj.duration/100)
  // }
  // setVolume(ev){
  //   this.audioObj.volume = ev.target.value
  //   if (this.audioObj.volume==0){
  //     this.vol=true
  //   }
  //   if (this.audioObj.volume!=0){
  //     this.vol=false
  //   }
  // }
  // openSong(audio){
  //   this.streamObserver(audio).subscribe(event=>{});
  //   this.playStatus=true
  // }
  // play(){
  //   this.audioObj.play();
  //   this.playStatus=true
  // }
  // pause(){
  //   this.audioObj.pause();
  //   this.playStatus=false
  // }
  // stop(){
  //   this.audioObj.pause();
  //   this.audioObj.currentTime=0;
  //   this.playStatus=false
  // }
  // timeFormat(time,format="mm:ss"){
  //   const momentTime = time*1000;
  //   return moment.utc(momentTime).format(format);
  // }

}
