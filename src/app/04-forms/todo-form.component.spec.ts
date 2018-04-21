import { FormsModule, FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component'; 

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder())
  });

  it('should create two controlls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
    
  });

  it('should make name controll required', () => {
    let controll = component.form.get('name');
    controll.setValue('');
    expect(component.form.valid).toBeFalsy();
  });
});