import { Component } from '@angular/core';
import { SongsService } from './songs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mymusic';
  constructor(public tObj:SongsService){}

    onSignup(userObj:any){

   
      //add userObjpapp
      
      this.tObj.createUser(userObj).subscribe(
        res=>{
          if(res.message==="User created"){
            alert("User created")
            //navigate to login component
          }
          else{
            alert(res.message)
          }
        },
        err=>{
          console.log(err)
          alert("Something went wrong in user creation")
        }
      )
      }
  
  userLogout(){
    localStorage.clear();
    this.tObj.userLoginStatus=false;
  }
}
