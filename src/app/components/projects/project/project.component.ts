import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({

  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{
    title?:string;

    constructor( private route: ActivatedRoute ){

    }

    ngOnInit(){
        const routing = this.route.snapshot.paramMap.get('title')
        if( routing !== null){
            this.title = routing;
        }
    }
}
