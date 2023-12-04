import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InsertComponent } from '../insert/insert.component';
import { Convert as FoodCvt,Food  } from 'src/app/model/food.mode';
import { Convert as TypeFoodCvt,Typefood  } from 'src/app/model/type.mode';
import { DataService } from 'src/app/service/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updatedfood',
  templateUrl: './updatedfood.component.html',
  styleUrls: ['./updatedfood.component.scss']
})
export class UpdatedfoodComponent {
  types : Array<Typefood>;
  food :any;
  idx:any;

  constructor(public dialog: MatDialog,public data : DataService,private http: HttpClient,private router : Router) {
    this.food = this.data.selectedFood;
    this.types = this.data.types;
  }
  addNew(){
    this.dialog.open(InsertComponent,{
      minWidth:'300px',
    })
  }

  save(name:string,description:string,image:string,price:number,type:any){
    console.log(type);
    let jsonobj={
      name :name,
      description : description,
      image : image,
      price : price,
      type : type
    }
    let jsonString = JSON.stringify(jsonobj);
    this.http.put(this.data.apiEndpoint+'/food/'+ this.food.foodid,jsonString,{observe:'response'}).subscribe((response)=>{
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      if(JSON.stringify(response.body)=='true'){
        alert('Updated succesfully!!');
        this.router.navigate(['/mainowner',{outlets:{shopowneroutlet:['listfood']}}]);
      }
    })
  }

}
