import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import info from "../../../../assets/json/info.json";

@Component({

  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent{

    title?:string;
    projects = info['projects']['projects-content'];
    paragraphs!:any;
    projectInfo!:any;

    constructor( private route: ActivatedRoute ){
        this.findProject();

    }

    findProject(){
        this.projects.forEach(project => {
            if(project['title'] === this.route.snapshot.paramMap.get('title')){
                this.projectInfo = project;
                this.paragraphs = project['paragraphs']
                console.log(this.projectInfo)
            }
        });
    }
}
