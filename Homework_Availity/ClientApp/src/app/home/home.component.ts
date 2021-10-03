import { Component, NgModule } from '@angular/core';
//import { MatStepper } from '@angular/material'; //Use Matstepper next app because Matstepper is great
import { FormGroup, Validators, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  group: FormGroup;


  //@ViewChild(MatStepper, { static: true }) matStepper: MatStepper;

  constructor(private _formBuilder: FormBuilder, private _apiService: ApiService) {
    this.group = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(50), Validators.pattern("[A-Za-z0-9- ]*")]],
      lastName: ['', [Validators.required, Validators.maxLength(50), Validators.pattern("[A-Za-z0-9- ]*")]],
      npiNumber: ['', Validators.required],
      addressLineOne: ['', [Validators.required, Validators.pattern("[A-Za-z0-9- ]*")]],
      addressLineTwo: ['', [Validators.required, Validators.pattern("[A-Za-z0-9- ]*")]],
      city: ['', [Validators.required, Validators.pattern("[A-Za-z ]*")]],
      state: ['', [Validators.required, Validators.maxLength(2), Validators.pattern("[A-Z]*")]],
      zipCode: ['', [Validators.required, Validators.pattern("/^\d{5}(?:[- ]?\d{4})?$/")]],
      telephoneNumber: ['', [Validators.required, Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]],
      emailAddress: ['', Validators.required], //There is no regularity in email addresses. this is best done seperately if at all. 
    });
  }
  
}
