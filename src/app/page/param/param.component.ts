import { Component, OnInit,inject } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-param',
  standalone: true,
  imports: [],
  templateUrl: './param.component.html',
  styleUrl: './param.component.scss'
})
export class ParamComponent implements OnInit{

  constructor(private route:ActivatedRoute) {}
  // @Input() id ='';
  // route=inject(ActivatedRoute);

  id:string | null='';
  name:string | null='';

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => {
      this.id =p.get('id')
      this.name =p.get('name')
    })
    // this.route.queryParams.subscribe((p)=> {
    //   this.id=p['id'];
    //   this.name=p['name'];
    // })
  }
}
