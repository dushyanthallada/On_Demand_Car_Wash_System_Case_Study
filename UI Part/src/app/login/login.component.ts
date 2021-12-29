import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm= this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  constructor(private fb: FormBuilder, private authService: AuthserviceService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.authenticate(this.loginForm.value.username, this.loginForm.value.password);
  }

}
//   hide: boolean = false;

//   constructor(private fb: FormBuilder) {
//   }

//   ngOnInit() {
//   }

//   loginForm: FormGroup = this.fb.group({
//     email: ['', [Validators.required, Validators.email]],
//     password: ['', [Validators.required, Validators.minLength(6)]]
//   })


//   onLogin() {
//     if (!this.loginForm.valid) {
//       return;
//     }
//     console.log(this.loginForm.value);
//   }

// }
