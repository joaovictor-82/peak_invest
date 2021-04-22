import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculateService } from './calculate.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent implements OnInit {

  form: FormGroup;
  total: number;

  constructor(
    private formBuilder: FormBuilder,
    private service: CalculateService
    ) { 
    this.form = this.formBuilder.group({
      totalValue : ['', Validators.required],
      installments  : ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  calculate() {
    this.service.send(this.form.getRawValue())
      .subscribe(data => {
        this.total = data;
      },
      error => {
        console.log(error);
      });
  }

}
