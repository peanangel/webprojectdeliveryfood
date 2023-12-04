import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DataService } from 'src/app/service/data.service';
import { Convert as ListOrderCvt, ListOrder } from 'src/app/model/listorder.model';
import { UserService } from 'src/app/service/user.service';
import { Convert as StatusCvt,Status } from 'src/app/model/status.mode';
@Component({
  selector: 'app-notificatiions',
  templateUrl: './notificatiions.component.html',
  styleUrls: ['./notificatiions.component.scss']
})
export class NotificatiionsComponent {

  order = Array<ListOrder>();
  statuses = Array<Status>();
  status:any;
  color:any;
    constructor(private http:HttpClient,private dataService:DataService,private user :UserService){
      // this.http.get(this.dataService.apiEndpoint+"/listorder/"+this.user.user[0].cid).subscribe((data:any)=>{
      //   this.order = ListOrderCvt.toListOrder(JSON.stringify(data));
      //   console.log(this.order);

      // });


      this.http.get(this.dataService.apiEndpoint+"/statusNO1/"+this.user.user[0].cid).subscribe((data:any)=>{
        this.order = ListOrderCvt.toListOrder(JSON.stringify(data));
        console.log(this.order);

      });

      let jsonobj={
        cusid :this.user.user[0].cid
      }
      let jsonString = JSON.stringify(jsonobj);
      this.http.post(this.dataService.apiEndpoint+"/statusNO1",jsonString,{observe:'response'}).subscribe((response)=>{
        console.log(JSON.stringify(response.status));
        console.log(JSON.stringify(response.body));
        this.order = ListOrderCvt.toListOrder(JSON.stringify(response.body));
      });

      http.get(dataService.apiEndpoint+"/status").subscribe((data:any)=>{
        this.statuses = StatusCvt.toStatus(JSON.stringify(data));
      });

    }
    getId(list:any){
      console.log("Id =",list.id);
      this.dataService.selectorder = list.id;
      console.log("selectID =",this.dataService.selectorder)
    }
    searchByStatus(){
      // console.log(this.status);
      // let jsonobj={
      //   cusid :this.user.user[0].cid
      // }
      // let jsonString = JSON.stringify(jsonobj);
      // this.http.post(this.dataService.apiEndpoint+"/status/cus/"+this.status,jsonString,{observe:'response'}).subscribe((response)=>{
      //   console.log(JSON.stringify(response.status));
      //   console.log(JSON.stringify(response.body));
      //   this.order = ListOrderCvt.toListOrder(JSON.stringify(response.body));
      // });

      let jsonobj={
        status:this.status,
        cusid :this.user.user[0].cid
      }
      let jsonString = JSON.stringify(jsonobj);
      this.http.post(this.dataService.apiEndpoint+"/status/customer",jsonString,{observe:'response'}).subscribe((response)=>{
        console.log(JSON.stringify(response.status));
        console.log(JSON.stringify(response.body));
        this.order = ListOrderCvt.toListOrder(JSON.stringify(response.body));
      });
    }

}
