import { Component,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges{
  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng on changes implemented ")
  }

}
