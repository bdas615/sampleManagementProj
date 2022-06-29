import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServService } from '../serv.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:any;

  constructor(private route: ActivatedRoute, private service:ServService) { }

  ngOnInit(): void 
  {

    const id = this.route.snapshot.params['id'];

    this.service.getData(id).subscribe((res=>{
      console.log(res);
      this.user = res;
    }))
  }

}

