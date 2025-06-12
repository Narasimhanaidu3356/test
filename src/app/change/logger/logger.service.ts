import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

message:string[]=[]
  constructor() { }
  mess(a:string){
  this.message.push(a); 
  }
}
