import { Component } from '@angular/core';
import { InsertComponent } from '../insert/insert.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { Convert as FoodCvt,Food  } from 'src/app/model/food.mode';
import { Convert as TypeFoodCvt,Typefood  } from 'src/app/model/type.mode';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Form } from '@angular/forms';


@Component({
  selector: 'app-insertfood',
  templateUrl: './insertfood.component.html',
  styleUrls: ['./insertfood.component.scss']
})
export class InsertfoodComponent {
  types : any;
  model:any={};


  constructor(public dialog: MatDialog,private data : DataService,private http: HttpClient,private router : Router,private formBuider:FormBuilder) {

    http.get(data.apiEndpoint+"/typefood").subscribe((data:any)=>{
      this.data.types = TypeFoodCvt.toTypefood(JSON.stringify(data));
      this.types = this.data.types;
      console.log(this.types);
    });


  }

  addNew(){
   
    this.dialog.open(InsertComponent,{
      minWidth:'300px',
    });

  }
  addNewFood(){
    let jsonobj={
      name :this.model.name,
      description :this.model.description,
      image : this.model.image,
      price : this.model.price,
      type : this.model.type
    }
    let jsonString = JSON.stringify(jsonobj);
    this.http.post(this.data.apiEndpoint+"/food",jsonString,{observe:'response'}).subscribe((response)=>{
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      if( JSON.stringify(response.body)=='true'){
        this.router.navigate(['/mainowner',{outlets:{shopowneroutlet:['listfood']}}]);
        console.log('insert successfully')
        alert('Add food successfully')
      }else{
        console.log('cannot insert')
      }
    });
  }
}
