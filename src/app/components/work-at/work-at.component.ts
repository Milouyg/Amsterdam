import { Component } from '@angular/core';
import info from "../../../assets/json/info.json";

@Component({
  selector: 'app-work-at',
  templateUrl: './work-at.component.html',
  styleUrls: ['./work-at.component.scss']
})
export class WorkAtComponent {
    workAt = info['work-at'];
    
    constructor(){

    }
}
