import { Component, OnInit,inject } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-param',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './param.component.html',
  styleUrl: './param.component.scss'
})
export class ParamComponent implements OnInit{

  // constructor(private route:ActivatedRoute) {}
  // @Input() id ='';

  public id:string | null='';
  name:string | null='';

  public postData(id:string | null,name:string | null) {
    console.log(id,name);
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id =param.get('id')
      this.name =param.get('name')
      this.postData(this.id,this.name);
    })
    // this.route.queryParams.subscribe((p)=> {
    //   this.id=p['id'];
    //   this.name=p['name'];
    // })
  }
}
