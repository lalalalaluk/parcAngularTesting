import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable} from 'rxjs/observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should get service return data', () => {
    let todos = [1 ,2 , 3];
    spyOn(service,'getTodos').and.callFake(()=>{
      return Observable.from([todos]);
    })
    component.ngOnInit();
    expect(component.todos).toBe(todos);
  });

  it('should call server when change',()=>{
    let spy = spyOn(service,'add').and.callFake(t=>{
      return Observable.empty();
    })
    component.add();
    expect(spy).toHaveBeenCalled();
  })

  it('should add new todos return from service',()=>{
    let todos = { id:1};
    // let spy = spyOn(service,'add').and.callFake(t=>{
    //   return Observable.from([todos]);
    // })
    let spy  = spyOn(service,'add').and.returnValue(Observable.from([todos]))
    component.add();
    expect(component.todos.indexOf(todos)).toBeGreaterThan(-1);
  })

  it('should add new todos return from service',()=>{
    let error = 'error from server';
    let spy  = spyOn(service,'add').and.returnValue(Observable.throw(error));
    component.add();
    expect(component.message).toBe(error);
  })

  it('should call server to delete item',()=>{
    spyOn(window,'confirm').and.returnValue(true);
    let spy =spyOn(service,'delete').and.returnValue(Observable.empty);
    component.delete(1);

    //expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(1);
  })

  it('should call server NOT to delete item',()=>{
    spyOn(window,'confirm').and.returnValue(false);
    let spy =spyOn(service,'delete').and.returnValue(Observable.empty);
    component.delete(1);

    //expect(spy).toHaveBeenCalled();
    expect(spy).not.toHaveBeenCalledWith(1);
  })
});