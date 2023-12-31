import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environment/environment'
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor( private http:HttpClient) { }
  url=environment.url
  // url='http://localhost:5000'




  postregister(user:any):Observable<any> {
    return this.http.post(`${this.url}/api/register`,{user})
  }
  postpurpose(data:any):Observable<any> {
    return this.http.post(`${this.url}/api/purpose`,{data})
  }

  postotp(otp:any){
    return this.http.post(`${this.url}/api/otp`,{otp},)
  }

  postlogin(data:any){
    return this.http.post(`${this.url}/api/login`,{data})
  }

  sendpassword(data:any){
    return this.http.post(`${this.url}/api/setpassword`,{data})
  }

  postvehicle(data:any){
    return this.http.post(`${this.url}/api/vehicleAdd`,data)
  }

  getprofile(){
    return this.http.get(`${this.url}/api/profile`)
  }


  loadeditprofile(){
    return this.http.get(`${this.url}/api/editprofileget`)
  }

  edituserdata(data:any){
    return this.http.post(`${this.url}/api/editprofile`,data)
  }
  logoutpost(){
    return this.http.post(`${this.url}/api/logout`,{})
  }

  loadhome(){
    return this.http.get(`${this.url}/api/home`)
  }

  getvehicledata(id:string){
    return this.http.post(`${this.url}/api/editvehicle`,{id:id})
  }

  editvehicle(data:any){
    return this.http.post(`${this.url}/api/editvehiclepost`,data)
  }

  removevehicle(id:string){
    return this.http.post(`${this.url}/api/removevehi`,{id:id})
  }
  

  getservicesdata(){
    return this.http.get(`${this.url}/api/getsevices`)
  }
  getviewprofile(id:string){
    return this.http.post(`${this.url}/api/viewprofile`,{id:id})
  }

  getbusinessdata(){
    return this.http.get(`${this.url}/api/getbusiness`)
  }

  subscriptionsend(data:any){
    return this.http.post(`${this.url}/api/subscription`,{data:data})
  }
  showfasterpay(data:any){
    return this.http.post(`${this.url}/api/showfaster`,{data:data})
  }
  singlevehicle(id:string){
    return this.http.post(`${this.url}/api/singleview`,{id:id})
  }
  saveimg(id:string){
    return this.http.post(`${this.url}/api/saveimg`,{id:id})
  }

  getsavedData(){
    return this.http.get(`${this.url}/api/savedDatas`)
  }


  removesaved(id:string){
    return this.http.post(`${this.url}/api/removesaved`,{id:id})
  }


  makechnge(id:string){
    return this.http.post(`${this.url}/api/makechange`,{id:id})
  }

  
  getchat(id:string){
    return this.http.post(`${this.url}/api/getchat`,{id:id})
  }

  getchatdata(){
    return this.http.get(`${this.url}/api/getchatdata`)
  }

  messagesend(data:any){
    return this.http.post(`${this.url}/api/sendmessage`,{data:data})
  }

  getmessages(data:any){
    return this.http.post(`${this.url}/api/getmessage`,{data:data})
  }

  sendlike(id:string){
    return this.http.post(`${this.url}/api/sendlike`,{id:id})
  }
}
