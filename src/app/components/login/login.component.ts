import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm;
  public passwordPattern: any;
  public errorBoxFlag = false;
  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.passwordPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
    this.loginForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]),
      password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern) ])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  public login() {
      this.router.navigate(['/user']);
      // this.contactService.loginValidation(this.loginForm.value.firstName, this.loginForm.value.password).subscribe((data: any) => {
      //   try {
      //     if (data !== undefined) {
      //       console.log('getDetails:::', data);
      //       if (data.isError === true) {
      //         this.errorBoxFlag = true;
      //       } else {
      //         this.errorBoxFlag = false;
      //         this.router.navigate(['/user']);
      //       }
      //     }
      //   } catch (ex) {
      //     console.log(ex);
      //   }
      // }, () => { });
  }

}
