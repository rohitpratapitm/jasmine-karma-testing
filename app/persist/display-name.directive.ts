import {AfterViewInit, Directive, Input } from '@angular/core';

@Directive({
    selector: '[displayName]'
})
export class DisplayNameDirective implements AfterViewInit {

  ngAfterViewInit(): void {
    console.log('I do NOTHING');
  }
}