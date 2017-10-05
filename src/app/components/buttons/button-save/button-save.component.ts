import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-save',
  templateUrl: './button-save.component.html',
  styleUrls: ['./button-save.component.css']
})
export class ButtonSaveComponent implements OnInit {
  @Output() onClick = new EventEmitter<any>();
  @Input() obj:any;
  @Input() label:string = 'Save';
  constructor() { 
    this.obj = {
      name: 'Meetha',
      description: 'Kuch meetha ho jaye',
      imageUrl: 'https://www.milkmaid.in/Images/Recipe/42-JauzkaMeetha1.JPG'
    }
  }

  ngOnInit() {
  }

  onSave() {
    this.onClick.emit(this.obj);
  }

}
