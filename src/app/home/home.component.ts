import { Component,OnChanges, SimpleChanges,Input,OnInit,DoCheck,AfterContentChecked,AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,DoCheck,OnChanges,AfterContentChecked,AfterContentInit {
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
  
  
}
ngAfterContentChecked(): void {
  console.log("content checked is called ")
}
ngAfterContentInit(): void {
  console.log("After content init called")
}
ngOnInit(): void {
 
}

constructor(){
  

}
  ngOnChanges(changes: SimpleChanges): void {
  
  }

}
