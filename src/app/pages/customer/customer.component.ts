import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../models/customer.model';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  form: FormGroup;
  customer: Customer;
  message: string;

  constructor(
    private formBuilder: FormBuilder,
    private service: CustomerService
    ) { 
    this.form = this.formBuilder.group({
      customerId : ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.customer = new Customer();
  }

  find() {
    const id = this.form.get('customerId').value;
    if(id < 1 || id > 3) {
      this.message = "Digite um valor de 1 a 3";
      return;
    }
    this.service.send(id)
      .subscribe(data => {
        this.customer = data;
        this.message = '';
      },
      error => {
        console.log(error);
      });
  }

}
