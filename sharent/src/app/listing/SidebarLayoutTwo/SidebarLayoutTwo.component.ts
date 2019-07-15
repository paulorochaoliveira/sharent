import { Component, OnInit, AfterViewInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'sidebar-layout-two',
  templateUrl: './SidebarLayoutTwo.component.html',
  styleUrls: ['./SidebarLayoutTwo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarLayoutTwoComponent implements OnInit {

  @Input() userIdChild: string;
  @Input() userNameChild: string;
  @Input() userImagePathChild: string;

   constructor() {}

   ngOnInit() {}

   ngAfterViewInit()
   {

   }
}
