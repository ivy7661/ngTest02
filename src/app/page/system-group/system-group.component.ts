import { Component } from '@angular/core';
import { NgClass,NgStyle,NgFor } from '@angular/common';
import { FeatureService } from '../../feature.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-system-group',
  standalone: true,
  imports: [NgClass,NgStyle,NgFor,DatePipe],
  templateUrl: './system-group.component.html',
  styleUrl: './system-group.component.scss'
})
export class SystemGroupComponent {
  public colorAndFont = ['first','second'];
  public colorStyle = {color:'red',fontSize:'30px'}
  public isBlue = true;
  public fontSize=0;
  public weatherData:any;
  public pictureList = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvfpsG2RBqawrOcNWp6VGso2NQj0wekyrqCw&s',
    'https://www.catraws.com/wp-content/uploads/2023/01/%E9%97%9C%E6%96%BC%E6%B3%A2%E6%96%AF%E8%B2%93-%E5%80%8B%E6%80%A7%E9%A3%B2%E9%A3%9F%E5%81%A5%E5%BA%B7%E7%85%A7%E9%A1%A7%E9%87%8D%E9%BB%9E.jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvfpsG2RBqawrOcNWp6VGso2NQj0wekyrqCw&s'
  ]

  today = Date.now();

  public swichColor(): void {
    this.isBlue = !this.isBlue;
  }

  constructor(private featureService:FeatureService) {
    this.featureService.getWeatherData().subscribe(data => {
      this.weatherData=data.records.location;
      console.log(this.weatherData);

    })
  };

  getStyle() {
    return { 'font-size': 16 + this.fontSize + 'px' };
  }

  addFontSize() {
    this.fontSize++;
  }

  minusFontSize() {
    this.fontSize -= 1;
  }
}
