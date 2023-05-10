import { Component,OnChanges, SimpleChanges,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() cdata:any

ngOnInit(): void {
  console.log("onInit called ")
}
constructor(){
  console.log("constructor callde")

}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng on changes implemented ")
    console.log(changes)
  }

}
