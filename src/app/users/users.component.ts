import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$:any;
  
  constructor(private ser:ServService, private active: ActivatedRoute) { }

  ngOnInit(): void 
  {
   
   this.users$ = this.active.data.pipe(map((e:any)=>e.data));

   
    
   
  }

}
