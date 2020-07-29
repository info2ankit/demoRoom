import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  panelOpenState = false;
  panelOpenState1 = false;

  dataSrting = [
    {
      "id":":company:",
      "name":"company Name",
      "childern":[
          {
            "id":":company:office:",
            "name":"Office Name",
            "childern":[
              {
                "id":":company:office:team:",
                "name":"Team Name",
                "childern":[
                  {
                    "id":":company:office:team:userone:",
                    "name":"User One"
                  },
                  {
                    "id":":company:office:team:usertwo:",
                    "name":"User Two"
                  }
                ]
              }
            ]
          },
          {
            "id":":company:office1:",
            "name":"Office Name1",
            "childern":[
              {
                "id":":company:office:team1:",
                "name":"Team Name1",
                "childern":[
                  {
                    "id":":company:office:team:userone1:",
                    "name":"User One1"
                  },
                  {
                    "id":":company:office:team:usertwo1:","name":"User Two1"
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
}
