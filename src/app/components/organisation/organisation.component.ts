import { Component } from '@angular/core';
import main from "../../../assets/json/info.json";

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent {

    organisation = main['organisation'];

    constructor(){

    }


}
