import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Convert as ListOrderCvt, ListOrder } from 'src/app/model/listorder.model';
import { DataService } from 'src/app/service/data.service';
import { Convert as StatusCvt,Status } from 'src/app/model/status.mode';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  listorder = Array<ListOrder>();
  statuses = Array<Status>();
  model:any={};
  constructor(private http:HttpClient,private dataService:DataService){
    this.http.get(this.dataService.apiEndpoint+"/listorder").subscribe((data:any)=>{
      this.listorder = ListOrderCvt.toListOrder(JSON.stringify(data));
      console.log(this.listorder);
    });
    http.get(dataService.apiEndpoint+"/status").subscribe((data:any)=>{
      this.statuses = StatusCvt.toStatus(JSON.stringify(data));

    });
  }
  findByStatus(status:any){
    console.log('status:',status.ids)
    this.http.get(this.dataService.apiEndpoint +"/status/"+status.ids).subscribe(data=>{
      this.listorder = ListOrderCvt.toListOrder(JSON.stringify(data));
      console.log(this.listorder)

    });
  }
  findAll(){
    this.http.get(this.dataService.apiEndpoint+"/listorder").subscribe((data:any)=>{
      this.listorder = ListOrderCvt.toListOrder(JSON.stringify(data));
      console.log(this.listorder);
    });
  }

  updateStatus(sts:any,$oid:any)
  {
    if(confirm("update status ?")){


    console.log("oid:",$oid)
    let jsonobj={
      id:sts
    }
    let jsonString = JSON.stringify(jsonobj);

    this.http.put(this.dataService.apiEndpoint+"/iorder/status/"+$oid,jsonString,{observe:'response'}).subscribe((response)=>{
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      if(response.body == true){
        alert("Updated");
      }
    });}

  }
  getId(list:any){
    console.log("Id =",list.id);
    this.dataService.selectorder = list.id;
    console.log("selectID =",this.dataService.selectorder)
  }
}
