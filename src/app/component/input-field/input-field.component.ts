import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Input() label: string;
  @Input() type = 'text';
  @Input() error: string;
  @Input() placeholder: string;
  @Input() formcontrolName: any;

  constructor() { }

  ngOnInit(): void {
  }

}
