import { Component, DebugElement } from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { DisplayNameDirective } from './display-name.directive';
import { By } from '@angular/platform-browser';

@Component({
    template: `<div displayName>My name is {{name}}</div>`
})
export class TestDisplayNameComponent  {

  name:string = 'Dave';
}

describe('DisplayNameDirective', () => {
  let fixture: ComponentFixture<TestDisplayNameComponent>;
  let debugElement: DebugElement;
  let component: TestDisplayNameComponent;
  let directive: DisplayNameDirective;
  let ngAfterViewInitSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DisplayNameDirective, TestDisplayNameComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDisplayNameComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    const directiveElement: DebugElement = debugElement.query(By.directive(DisplayNameDirective));
    directive = directiveElement.injector.get<DisplayNameDirective>(DisplayNameDirective);
    ngAfterViewInitSpy = spyOn(directive, 'ngAfterViewInit').and.callThrough();
    fixture.detectChanges();
  });

  it('ngOnInit should have been called', () => {
    expect(ngAfterViewInitSpy).toHaveBeenCalledTimes(1);
  });
  
});