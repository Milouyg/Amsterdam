import { Component } from '@angular/core';
import info from "../../../assets/json/info.json";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
    intro = info['intro']
    constructor(){

    }

}
