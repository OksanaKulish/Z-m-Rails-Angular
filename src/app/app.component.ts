import { Component, Input } from '@angular/core';
import { Post, Tags } from 'src/web-api/dto/interfaces';
import { BaseApiService } from 'src/web-api/services/base-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'angular-app';
  public columns = [
    { prop: 'id' },
    { name: 'author' },
    { name: 'likes' },
    { name: 'popularity' },
    { name: 'reads' },
    { name: 'tags' },
  ];
  public data: Post[] | undefined;

  public constructor(public baseApiService: BaseApiService) {
    this.getData("tech");
  }

  public rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];

  public getData(tag: string) {
    this.baseApiService.getAssessment(tag).subscribe((data) => {
    this.data = data;
      console.log( data );
    });
  }
}
