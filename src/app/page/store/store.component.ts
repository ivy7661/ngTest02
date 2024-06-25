import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CounterService } from '../../counter.service';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent implements OnInit {
  data = [];
  constructor(private http: HttpClient,public counterService:CounterService) {}

  ngOnInit(): void {
    let url =
      'https://apiservice.mol.gov.tw/OdService/rest/tag?limit=100&offset=0';
    this.http.get<[]>(url).subscribe((result) => {
      this.data = result;
      console.log(this.data);
    });
  }
}
