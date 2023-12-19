import { Component } from '@angular/core';
import info from "../../../assets/json/info.json";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
    notFound = info['not-found-page'];
    
    constructor(){

    }
}
