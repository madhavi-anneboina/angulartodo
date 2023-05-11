import { Component,OnChanges, SimpleChanges,Input,OnInit,DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,DoCheck {
  @Input() cdata:any
  @Input() parentdata="child wish "
  @Input() mobiles:any

  mobileList = [
    "Oppo",
    "Redmi",
    "Realme",
    "Nokia",
    "Samsung"
  ]

ngDoCheck(): void {
  console.log("Do check called ")
  
}
ngOnInit(): void {
 
}
constructor(){
  

}
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("ng on changes implemented ")
  //   console.log(changes)
  // }

}
