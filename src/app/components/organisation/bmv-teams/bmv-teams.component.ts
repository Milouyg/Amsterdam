import { Component } from '@angular/core';
import info from "../../../../assets/json/info.json";

@Component({
  selector: 'app-bmv-teams',
  templateUrl: './bmv-teams.component.html',
  styleUrls: ['./bmv-teams.component.scss']
})
export class BmvTeamsComponent {
    bmvTeams = info['organisation']['bmv-teams'];

    constructor(){
    }


}
