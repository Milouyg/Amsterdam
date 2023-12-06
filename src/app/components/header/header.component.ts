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

    toggleMenu(navigation : HTMLElement){
        navigation.classList.toggle("hidden");
    }

    // close(x : HTMLElement){
    //     console.log(x)
    // }
}
