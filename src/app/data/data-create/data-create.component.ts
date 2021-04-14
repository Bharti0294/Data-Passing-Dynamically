import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-create',
  templateUrl: './data-create.component.html',
  styleUrls: ['./data-create.component.css']
})
export class DataCreateComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  enteredName = '';
  enteredContent = '';
  enteredAddress ='';
  enteredMessage ='';
  @Output() postCreated = new EventEmitter();
  onAddPost() {
  const post = { Name: this.enteredName, content: this.enteredContent,
              address: this.enteredAddress, message: this.enteredMessage };
  this.postCreated.emit(post);
  }
  
}
