import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    weekDays: Array<any> = [{ text: 'Sunday' },
                            { text: 'Monday' },
                            { text: 'Tuesday' },
                            { text: 'Wednesday' },
                            { text: 'Thursday' },
                            { text: 'Friday' },
                            { text: 'Saturday' }];

    timesheets: Array<any> = [{ text: '1' },
                              { text: '2' }];
  constructor() { }

  ngOnInit() {
  }

}
