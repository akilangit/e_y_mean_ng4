import { Component } from '@angular/core';
// This is Decorator - Component Decorator
// Every component begins with a @Component decorator function that takes a metadata object. 
// The metadata object describes how the HTML template and component class work together.
@Component({
  selector: 'app-root', // use as <app-root> in html. if '#app-root', selector will be used as <div id="app-root"></div>
  templateUrl: './app.component.html', //Step 4: only one should be there, not multiple, not zero.
  styleUrls: ['./app.component.css'] // optional - styling for each component. can have many style urls comma separated 
})
export class AppComponent {
  title = 'app works!'; // This title appears in index page- Change this and see it in action
}
