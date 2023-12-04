import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  hidden = false;
  num:any;
  constructor(private data:DataService){
    this.num = this.data.itemCart;
    console.log("this.num",this.num);
    console.log("this.data",this.data.itemCart);
  }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
