import { Component } from '@angular/core';
import info from "../../../../assets/json/info.json";

@Component({
  selector: 'app-work-method',
  templateUrl: './work-method.component.html',
  styleUrls: ['./work-method.component.scss']
})
export class WorkMethodComponent {

    workMethod = info['organisation']['work-method'];

    constructor(){

    }


}
