import { Component,OnChanges, SimpleChanges,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() cdata:any
  @Input() parentdata="child wish "

ngOnInit(): void {
  console.log("onInit called ")
  console.log("onInit",this.parentdata)
}
constructor(){
  console.log("constructor callde")
  console.log("In constructor",this.parentdata)

}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng on changes implemented ")
    console.log(changes)
  }

}
