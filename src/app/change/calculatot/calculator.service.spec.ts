import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from '../logger/logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let lser:any;
  let cal:any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
    console.log("before each method");
   lser=jasmine.createSpyObj('loggerservice',['mess'])
     cal=new CalculatorService(lser)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('add method ',()=>{
    console.log("it add method");
    let lser=new LoggerService()
    let cal=new CalculatorService(lser)
    let w=cal.add(10,20)
    expect(w).toBe(30)
  }
)
it('sub methos',()=>{
  pending()
  console.log("it  submethod")
  let s=cal.sub(30,30)
  expect(s).toBe(0);
  expect(lser.mess).toHaveBeenCalledTimes(1)
})
});
