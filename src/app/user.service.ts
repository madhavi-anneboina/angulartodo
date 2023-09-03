import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  users = [
    {
       "id" : 1,
      "firstName": "John",
      "lastName": "Smith",
      "isAlive": true,
      "age": 27,
      "address": {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021-3100"
      }
    },
    {
      "id" : 2,
     "firstName": "kohn",
     "lastName": "kmith",
     "isAlive": true,
     "age": 27,
     "address": {
       "streetAddress": "21 2nd Street",
       "city": "white York",
       "state": "GP",
       "postalCode": "10021-3100"
     },
   },
   {
    "id" : 3,
   "firstName": "Mohn",
   "lastName": "mmith",
   "isAlive": true,
   "age": 37,
   "address": {
     "streetAddress": "21 2nd Street",
     "city": "white York",
     "state": "GP",
     "postalCode": "3000021-3100"
   },
  }
  ]
}
