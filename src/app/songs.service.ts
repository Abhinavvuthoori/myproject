import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
    
  userLoginStatus=false;
  constructor(private hc:HttpClient) {
    if(localStorage.getItem("username")!==null){
      this.userLoginStatus=true;
    }
   }

  gettrendingSongs():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/trendingSongs')
  }

  getTrendingSongsById(id :any):Observable<any>{
    return this.hc.get<any>('http://localhost:3000/trendingSongs/'+id)
  }

  getTeluguSongs():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/telugusongs')
  }
   loginUser(credentials:any):Observable<any>{
   if(credentials.type==="admin"){
     return  this.hc.post("/admin/login",credentials)
 }
   if(credentials.type==="user"){
     return  this.hc.post("/user/login",credentials)
    }
    return  this.hc.post("/user/login",credentials)
   
    }
    createUser(userObj:any):Observable<any>{
      return  this.hc.post("/user/createuser",userObj)
    }
  getTeluguSongsById(id :any):Observable<any>{
    return this.hc.get<any>('http://localhost:3000/telugusongs/'+id)
  }

  getHindiSongs():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/hindisongs')
  }

  getHindiSongsById(id :any):Observable<any>{
    return this.hc.get<any>('http://localhost:3000/hindisongs/'+id)
  }

  getArtists():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/topartists')
  }

  getArtistsById(id:any):Observable<any>{
    return this.hc.get<any>('http://localhost:3000/topartists/'+id)
  }
  getFullsongsSid(lan:any,id:any):Observable<any>{
    return this.hc.get<any>(`http://localhost:3000/${lan}/`+id)
  }

  getMoods():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/moods')
  }
  
}