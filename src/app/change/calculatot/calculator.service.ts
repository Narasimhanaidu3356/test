import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
constructor(public  logg:LoggerService){

}
  add(a:number,b:number){
    let result=a+b
     this.logg.mess("addmethod 11")
    return result;
  }
  sub(a:number,b:number){
    let result=a-b
    this.logg.mess("submethod11")
    return result;
  }
}
