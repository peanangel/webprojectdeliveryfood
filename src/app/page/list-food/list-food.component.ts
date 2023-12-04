import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Convert as FoodCvt,Food  } from 'src/app/model/food.mode';
import { Convert as TypeFoodCvt,Typefood  } from 'src/app/model/type.mode';
import { DataService  } from 'src/app/service/data.service';
import { HttpClient } from '@angular/common/http';
import { count } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { InsertComponent } from '../insert/insert.component';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.scss']
})
export class ListFoodComponent {
  foods = Array<Food>();
  types = Array<Typefood>();

  constructor(public dialog: MatDialog,private dataService : DataService ,private http: HttpClient,private router : Router){
    this.http.get(this.dataService.apiEndpoint+"/food").subscribe((data:any)=>{
      this.foods = FoodCvt.toFood(JSON.stringify(data));
      console.log(this.foods);
    });
    http.get(dataService.apiEndpoint+"/typefood").subscribe((data:any)=>{
      this.types = TypeFoodCvt.toTypefood(JSON.stringify(data));
      console.log(this.types);
    });
  }
  deleteFood(id:number){
    console.log(id)


    if(confirm("ยืนยันการลบข้อมูล?")){
      this.http.delete(this.dataService.apiEndpoint+'/food/'+id).subscribe((res)=>{
        console.log(res);

           this.http.get(this.dataService.apiEndpoint+"/food").subscribe((data:any)=>{
         this.foods = FoodCvt.toFood(JSON.stringify(data));
          console.log(this.foods);
      });

      });

    }
  }
  findByType(type:string){
    console.log(type);
    this.http.get(this.dataService.apiEndpoint +"/food/type/"+type).subscribe(data=>{
      this.foods = FoodCvt.toFood(JSON.stringify(data));
      console.log(this.foods);
    })
  }
  findAll(){
    this.http.get(this.dataService.apiEndpoint+"/food").subscribe(data=>{
      this.foods = FoodCvt.toFood(JSON.stringify(data));
    })
  }
  findByName(name:string){
    this.http.get(this.dataService.apiEndpoint+"/food/name/"+name).subscribe(data=>{
      this.foods = FoodCvt.toFood(JSON.stringify(data));
    })
  }

  edit(food:Food){
    this.dataService.selectedFood = food;
    this.dataService.selectEditFood = food.foodid;
    this.dataService.types = this.types;
    console.log("this.dataService.selectedFood",this.dataService.selectedFood);
    console.log("this.dataService.types",this.dataService.types);
    console.log(this.dataService.selectedFood.price);
    this.router.navigate(['/mainowner',{outlets:{shopowneroutlet:['updatedfood']}}]);

  }
}
