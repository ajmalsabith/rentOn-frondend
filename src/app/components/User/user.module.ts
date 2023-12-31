import { NgModule } from '@angular/core';
import {userRoutingModule} from './user-routing.module'
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';
import { OtppassComponent } from './otppass/otppass.component';
import { HomeComponent } from './home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { PurposeComponent } from './purpose/purpose.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GenricComponent } from './genric/genric.component';
import { ProfileComponent } from './profile/profile.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AdsComponent } from './ads/ads.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { SearchPipe } from '../../pipes/search.pipe';
import { BusinessListComponent } from './business-list/business-list.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { SavedComponent } from './saved/saved.component';
import { SortPipe } from 'src/app/pipes/sort.pipe';
import { ChatComponent } from './chat/chat.component';
import { ShortPipe } from 'src/app/pipes/short.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './footer/footer.component';
import { CountPipe } from 'src/app/pipes/count.pipe';
import { ChatserchPipe } from 'src/app/pipes/chatserch.pipe';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    OtpComponent,
    OtppassComponent,
    HomeComponent,
    ForgetpasswordComponent,
    PurposeComponent,
    NewpasswordComponent,
    NavbarComponent,
    GenricComponent,
    ProfileComponent,
    AddvehicleComponent,
    EditprofileComponent,
    AdsComponent,
    EditVehicleComponent,
    SearchPipe,
    FilterPipe,
    BusinessListComponent,
    ServiceListComponent,
    ViewprofileComponent,
    SubscriptionComponent,
    SinglePageComponent,
    SavedComponent,
    SortPipe,
    ChatComponent,
    ShortPipe,
    FooterComponent,
    CountPipe,
    ChatserchPipe


    
    

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    userRoutingModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule

  
  ],
  providers: [],
  bootstrap: []

})
export class userModule { }
