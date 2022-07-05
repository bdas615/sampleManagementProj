import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ServService } from './serv.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveServService implements Resolve<any>{

  constructor(private service:ServService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | boolean | Promise<any>{
    return this.service.sendData();
  }

  
}
