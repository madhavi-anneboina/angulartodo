// import { Component } from '@angular/core';
// import { MobileService } from './mobile.service';

// @Component({
//   selector: 'app-curd',
//   templateUrl: './curd.component.html',
//   styleUrls: ['./curd.component.css']
// })
// export class CurdComponent {
//   constructor(private ms:MobileService){}
//   mobiles:any= []

// formHeader = "Add Mobile"
// mobile=""
// showForm = false
// mobileName:any ="";
// price:any;
// ram:any;
// storage:any;
// id= null;

// ngOnInit():void{
// this.getMobiles()

// }
// getMobiles = () =>{
//   this.ms.fetchMobiles().subscribe(
//     (data)=>{
//       this.mobiles = data
//     }
//    )
// }

// deletemobile(id:any){
//  this.ms.deleteMobile(id).subscribe(
//   (res)=>{
//     this.getMobiles()
//   }

//  )
// }

// openForm(data=null){
//   this.showForm = true
//   if(data){
//     this.mobileName = data.name;
//     this.price = data.price;
//     this.ram = data.ram;
//     this.storage = data.storage
//      this.id = data.id
//      this.formHeader="Edit Mobile"
//   } else {
//     this.id = null 
//     this.formHeader = "Add Mobile"
//   }
// }
// closeForm(){
//   this.showForm = false;
//   this.clearForm()
// }
// clearForm(){
//   this.mobileName =null;
//   this.price = null;
//   this.ram = null;
//   this.storage = null

// }
// saveMobile(){

//   this.showForm =false;

//   let  body = {
//     name:this.mobileName,
//     price:this.price,
//     ram:this.ram,
//     storage:this.storage
//   }

//   if(this.id){
//     body.name.id=this.id;
//     this.ms.putMobile(body).subscribe(
//       (res)=>{
//         this.getMobiles()
//       },
      
//     )
//   }

//   else{
//     this.ms.postMobile(body).subscribe(
//       (res)=>{
//         this.getMobiles()
//       },
//     )
//   }

// }
// }
