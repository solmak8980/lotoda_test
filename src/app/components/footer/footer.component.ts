import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  public FooterEnabled: boolean= false;
  title: string;

  constructor() {
    this.title = 'Dasboard';
  }

  ngOnInit() {
    return 0;
  }

}
