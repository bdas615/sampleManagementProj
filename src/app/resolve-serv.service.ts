import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot,UrlTree } from '@angular/router';
import { ServService } from './serv.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveServService implements Resolve<any>{

  constructor(private service:ServService) { }

  resolve(){
    return this.service.sendData();
  }

  
}
