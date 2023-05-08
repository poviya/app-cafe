import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() search: any;
  myForm: FormGroup;
  
  constructor( 
        private fb: FormBuilder,
        public router: Router,
        ) { 
        }

  ngOnInit(): void {
    this.controlForm();
  }

  controlForm() {
    this.myForm = this.fb.group({
      search: [this.search ? this.search : null],
    });
  }
  onSubmit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url],
                            { queryParams: { search: this.myForm.value.search } });
    //this.findAllPostUser();
   
  }
}
