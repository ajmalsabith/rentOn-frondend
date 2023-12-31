import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../../../service/userservice/userservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reativeform!: FormGroup;
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private userservice: UserserviceService,
    private router: Router,
    private toaster:ToastrService
  ) {}

  ngOnInit(): void {
    this.reativeform = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      emailuser: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get emailuser(){
    return this.reativeform.get('emailuser')
  }

  get password(){
    return this.reativeform.get('password')
  }

  get name(){
    return this.reativeform.get('name')
  }
  get phone(){
    return this.reativeform.get('phone')
  }

  submit() {

    const user = this.reativeform.getRawValue();

    this.userservice.postregister(user).subscribe(
      (res) => {
        const token=res.token
        localStorage.setItem("usersecret",token)
        this.toaster.success(res.message)
        this.toaster.success('otp sent to your email')
        this.router.navigate(['/otp']);
      },
      (err) => {
        this.message = err.error.message;
        this.toaster.error(err.error.message)
      }
    );
  }
}
