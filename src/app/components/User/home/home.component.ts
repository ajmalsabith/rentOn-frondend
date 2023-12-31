import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { vehicleModel } from 'src/app/Model/user';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';
import { loadhome } from 'src/app/states/userStates/user.action';
import { selectvehicles } from 'src/app/states/userStates/user.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




  vehicledatass$!:any
  searchText = '';
  filtertval=''
  sortval=''
  count!:number


  p:any

  serchdata(Value:string){
    this.searchText=Value
  }

  filtertype(value:string){
    this.filtertval=value
  }

  sortdata(value:string){
    this.sortval=value
  }

  constructor(
    private store:Store<{vehicledata:vehicleModel[]}>,private userservicec:UserserviceService,private toastere:ToastrService
   
    ){}

  ngOnInit(): void {
    this.getdata()
    this.store.dispatch(loadhome())
      
  }

  saveimge(id:string){
    this.userservicec.saveimg(id).subscribe((res:any)=>{
       this.toastere.success(res.message)
    },(err:any)=>{
      this.toastere.error(err.error.message)
    })
   }


   likesend(id:string){

    this.userservicec.sendlike(id).subscribe((res:any)=>{
      this.toastere.success(res.message)
      
      this.ngOnInit()
    },(err:any)=>{
      this.toastere.error(err.error.message)
    })

   }
  

  getdata(){
   this.store.pipe(select(selectvehicles)).subscribe((res)=>{
    this.vehicledatass$=res
   })

  }
  
}
