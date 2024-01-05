import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import info from "../../../../assets/json/info.json";
import { CarouselController, CarouselImage } from 'ng-simple-carousel';

@Component({

  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent{

    title?:string;
    projects = info['projects']['projects-content'];
    projectInfo!:any;

    controllerButton = new CarouselController();
    images: CarouselImage[] = [

    ];


    constructor( private route: ActivatedRoute ){
        this.findProject();

    }

    findProject(){
        this.projects.forEach(project => {
            if(project['title'] === this.route.snapshot.paramMap.get('title')){
                this.projectInfo = project;
                this.images = this.projectInfo['imgs'];
            }
        });
    }



}
