import { Component } from '@angular/core';
import { CargarscripsService } from '../Service/cargarscrips/cargarscrips.service';

@Component({
  selector: 'app-perfiladmin',
  templateUrl: './perfiladmin.component.html',
  styleUrls: ['./perfiladmin.component.css']
})
export class PerfiladminComponent {

  constructor(private _CargarScripts: CargarscripsService) { 
    _CargarScripts.scripdashboard(["scripdashboard"]);
  }
}
