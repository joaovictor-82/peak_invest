import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Calculate } from '../models/calculate.model';
import { Customer } from '../models/customer.model';

@Injectable({ providedIn: 'root' })
export class CustomerService {
    constructor(private http: HttpClient) { }

    private urlBase = `${environment.api}/finance/`;

    send(id: number) {
        return this.http.get<Customer>(this.urlBase + `${id}`);
    }
}