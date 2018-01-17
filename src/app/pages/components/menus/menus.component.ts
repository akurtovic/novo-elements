import { Component, HostBinding } from '@angular/core';

import { fadeAnimation } from '../../../app.animations';
import { MENUS_DEMOS } from './demos';

let usageDoc: string = require('html-loader!markdown-loader!./docs/usage.md');

@Component({
  selector: 'demo-menus',
  templateUrl: './menus.component.html',
  animations: [fadeAnimation],
})
export class MenusComponent {
  @HostBinding('@routeAnimation') public routeAnimation: boolean = true;
  @HostBinding('class.demo-route-animation')
  public classAnimation: boolean = true;

  public name: string = 'Menus';
  public src: string = 'https://github.com/bullhorn/novo-elements-3.0/tree/master/src/platform/core/components/menus';
  public usageDoc: string = usageDoc;
  public demos: DEMOS = MENUS_DEMOS;
}