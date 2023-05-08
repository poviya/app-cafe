import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NumericValidator } from 'src/app/common/custom-validators.ts';
import { Country, StateCity } from 'src/app/interfaces';
import { AppService, CountryService, ToolsService } from 'src/app/services';

import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
//import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  msg = false;
  useExists: boolean;
  ipapi: any;

  countries: Country[]; 
  stateCitiesAll: StateCity[]; 

  myform: FormGroup = this.fb.group({
    email:    ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    //phonePrefix: ['+1', Validators.required],
    //phone: ['', [Validators.required, NumericValidator]],
    terms: [false, Validators.requiredTrue],
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private countryService: CountryService,
               private toolsService: ToolsService,
               private appService: AppService,
               private authService: AuthService ) {
               
                }


  ngOnInit(): void {
    
  }

  async onCountry(e: any) {
    const data = {
      Country: e.target.value,
    };
    
    const dataStateCities = await this.appService.appStateCitiesfindAll().toPromise();
    this.stateCitiesAll = dataStateCities!.filter( res => res.Country === data.Country);
    /*
    this.stateCityService.findAllCountry(data).subscribe(res => {
      this.stateCitiesAll = res;  //console.log(res);
      //this.defaultStateCity();
    });

    this.adCategoryService.findAllCountry(data).subscribe(res => {
      this.adCategories = res;  //console.log(res);
    });
    */
    this.myform.patchValue({
      StateCity: "",
      CityZone: "",
      AdCategory: ""
    });
  }

  register() {
  
    const data = {
      email: this.myform.value.email,
      password: this.myform.value.password,
      //phonePrefix: this.myform.value.phonePrefix,
      //phone: this.myform.value.phone,
      //whatsapp: true,
    }

    this.authService.register(data )
        .subscribe(res => { console.log(res);
        if ( res.useExists!) {
          this.useExists = true;
        } else if ( res.ok == true) {
          this.router.navigateByUrl('auth/verified-account');
        }else {
          //Swal.fire('Error', ok, 'error');
        }
      });

  }

  findAllCountry()
  {
    this.appService.appCountryfindAll().subscribe(async res => {
      this.countries = res!.filter( countries => countries.activeOnlypu === true);;
      this.phoneLocation();
      const dataStateCities = await this.appService.appStateCitiesfindAll().toPromise();
      //this.stateCitiesAll = dataStateCities!.filter( res => res.Country === Country);
      //console.log(this.ipapi)
      
      //this.defaultStateCity();
    });
  }

  
  phoneLocation()
  {
    this.myform.patchValue({
      phonePrefix: '+1',
    });
    /*
    this.ipapi = this.toolsService.ipapi;
   
    if(!this.ipapi)
    {
      this.myform.patchValue({
        phonePrefix: '+1',
      });
    } else { 
      this.myform.patchValue({
        phonePrefix: '+' + this.ipapi['location']['calling_code'],
      });
    }*/
  }
}
