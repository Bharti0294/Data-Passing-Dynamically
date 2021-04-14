import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataPassing';

  public storedPost = [] as any;
  onPostAdded(post:any) {
  this.storedPost.push(post);
  }
  

}
