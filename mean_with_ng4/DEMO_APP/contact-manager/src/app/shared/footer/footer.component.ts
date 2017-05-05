import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer class="footer container clearfix">
                <p>© 2017 My Company, Inc.</p>
             </footer>`
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
