import { Component } from '@angular/core';
import info from "../../../assets/json/info.json";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    projects = info['projects'];

    constructor(){

    }
}
