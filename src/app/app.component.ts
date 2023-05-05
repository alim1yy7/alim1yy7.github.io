import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // isMobileDevice = false;

  ngOnInit() {}
  // @HostListener('window:resize', ['$event'])
  // onResize(event: { target: { innerWidth: number } }) {
  //   this.isMobileDevice = event.target.innerWidth < 768;
  // }
}
