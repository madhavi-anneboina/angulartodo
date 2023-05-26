import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
     states = [
      {
        id : 1,
        name : "Andhra Pradesh",
        code : "AP"
      },
      {
        id : 2,
        name : "Telangana",
        code : "TS"
      },
      {
        id : 3,
        name : "Tamil Nadu",
        code : "TN"
      },
      {
        id : 4,
        name : "Karnataka",
        code : "KS"
      },
]
districts = [
  {
    id : 1,
    name: "Krishna",
    s_id : 1
  },
  {
    id : 2,
    name: "East Godavari",
    s_id : 1
  },
  {
    id : 3,
    name: "WestbGodavari",
    s_id : 1
  },
  {
    id : 4,
    name: "Guntur",
    s_id : 1
  },
  {
    id : 5,
    name: "Vishakaptanam",
    s_id : 1
  },
  {
    id : 6,
    name: "warangal",
    s_id : 2
  },
  {
    id : 7,
    name: "Hyderabad",
    s_id : 2
  },
  {
    id : 8,
    name: "Karimnagar",
    s_id : 2
  },
  {
    id : 9,
    name: "Medak",
    s_id : 2
  },
  {
    id : 10,
    name: "Suryapet",
    s_id : 2
  },
  {
    id : 11,
    name: "Chennai",
    s_id : 3
  },
  {
    id : 12,
    name: "Maduri",
    s_id : 3
  },
  {
    id : 13,
    name: "coimbature",
    s_id : 3
  },
  {
    id : 14,
    name: "Vellore",
    s_id : 3
  },
  {
    id : 15,
    name: "Tanjavur",
    s_id : 3
  },
  {
    id : 16,
    name: "Maisure",
    s_id : 4
  },
  {
    id : 17,
    name: "Raichur",
    s_id : 4
  },
  {
    id : 18,
    name: "Bengulur",
    s_id : 4
  },
  {
    id : 19,
    name: "Ballari",
    s_id : 4
  },
  {
    id : 20,
    name: "nachalakonda",
    s_id : 4
  },
]
filterdDistricts = this.districts
constructor(){

}
  updateDistricts (e:any) {
    let sid = e.target.value
    
    this.filterdDistricts = this.districts.filter(
      (d) => d['s_id'] == sid 
      
    )

   }
}
