import { Component } from "@angular/core";


@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
    // posts = [
    //     {title:"Title 1", body: "Body of post 1"},
    //     {title:"Title 2", body: "Body of post 2"},
    //     {title:"Title 3", body: "Body of post 3"}
    // ];
    posts = [];
}