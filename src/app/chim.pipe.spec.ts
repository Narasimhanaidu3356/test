import { ChimPipe } from './chim.pipe';

describe('ChimPipe', () => {
  it('create an instance', () => {
    const pipe = new ChimPipe();
    expect(pipe).toBeTruthy();
  });
  it('uppsercase',()=>{
    const pipe=new ChimPipe();
    expect(pipe.transform('narasimha')).toBe('Narasimha')
  });
  it('space with uppercase',()=>{
    const pipe=new ChimPipe();
    expect(pipe.transform('ac bc')).toBe('Ac Bc');
  })
});
