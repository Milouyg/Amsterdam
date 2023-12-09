import { Component } from '@angular/core';
import info from "../../../../assets/json/info.json";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent {

    organisation = info['organisation'];

    constructor(){

    }


}
