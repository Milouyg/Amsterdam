import { Component } from '@angular/core';
import nav from "../../../assets/json/info.json";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    nav = nav['nav'];

    constructor(){

    }

    openMenu(navigation : HTMLElement, bar : HTMLElement, x : HTMLElement){
        navigation.style.display = 'flex';
        bar.style.display = 'none';
        x.style.display = 'flex';

    }

    closeMenu(navigation : HTMLElement, bar : HTMLElement, x : HTMLElement){
        navigation.style.display = 'none';
        bar.style.display = 'flex';
        x.style.display = 'none';
    }
}
