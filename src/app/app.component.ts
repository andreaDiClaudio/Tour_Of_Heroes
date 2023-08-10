import { Component } from '@angular/core';

//Component Decorator
@Component({
  //The selector instructs Angular to instantiate this component whenever it finds the corresponding tag in template HTML.
  selector: 'app-root',

  //A template is a block of HTML that tell Angular how to render the component in your application.
  //To define a template as an external file, add a ‘templateUrl’ property to the component decorator
  //or
  //To define a template within the component, add a ‘template’ property to the component decorate that contain the HTML you want to use. If you want your template to span multiple lines use backticks.
  templateUrl: './app.component.html',

  //The ‘styles’ property takes an array of string that contain the CSS rule declaration.
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Working';
}
