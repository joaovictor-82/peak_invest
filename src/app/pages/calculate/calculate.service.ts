import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Calculate } from '../models/calculate.model';

@Injectable({ providedIn: 'root' })
export class CalculateService {
    constructor(private http: HttpClient) { }

    private urlBase = `${environment.api}/finance`;

    send(model: Calculate) {
        return this.http.post<number>(this.urlBase, model);
    }
}