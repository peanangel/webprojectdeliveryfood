import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Convert as TypeFoodCvt,Typefood  } from 'src/app/model/type.mode';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent {
  constructor(private http:HttpClient,private data :DataService){
  }
  addType(type:string){
    console.log("input vcalu",type);
    let jsonobj={
      type : type
    }
    let jsonString = JSON.stringify(jsonobj);
    this.http.post(this.data.apiEndpoint+"/typefood",jsonString,{observe:'response'}).subscribe((response)=>{
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      this.data.types = TypeFoodCvt.toTypefood(JSON.stringify(response.body));
      
    });
  }
}
