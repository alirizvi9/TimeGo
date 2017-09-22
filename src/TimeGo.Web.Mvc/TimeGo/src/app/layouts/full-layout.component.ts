import { Component, OnInit } from '@angular/core';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  constructor() { }

  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }



  public toasterconfig: ToasterConfig =
  new ToasterConfig({
      tapToDismiss: true,
      timeout: 5000
  });

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  public logout()
  {
      window.location.href = '/account/logout';
  }

  ngOnInit(): void {}
}
