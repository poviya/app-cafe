import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DOCUMENT, Location } from '@angular/common';
import { filter, pairwise } from 'rxjs';
import { environment } from 'src/environments/environment';

//import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  urlPrevius: string;

  msg = false;
  myform: FormGroup = this.fb.group({
    username:    ['', [ Validators.required ]],
    password: ['', [ Validators.required, Validators.minLength(3) ]],
  });

  constructor( private fb: FormBuilder,
               private router: Router, 
               private location: Location,
               @Inject(DOCUMENT) private document: Document,
               private authService: AuthService) {
                
               }

    login() {

    const { username, password } = this.myform.value;

    this.authService.login( username, password )
      .subscribe( res => {
        if ( res.ok === true ) {
          if(!res.data.user.emailVerified)  {
            this.router.navigateByUrl('auth/verified-account');
          } else {
            this.router.navigateByUrl('/panel');
            console.log('ok');
          }
        } else {
          console.log('failed');
          //Swal.fire('Error', ok, 'error');
        }
      },
      err => {
        console.log('failed');
      }

      );
  }
  

}
