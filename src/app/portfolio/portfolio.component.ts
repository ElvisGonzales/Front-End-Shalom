import { Component } from '@angular/core';
import { CargarscripsService } from '../Service/cargarscrips/cargarscrips.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  constructor(private _CargarScripts: CargarscripsService) { 
    _CargarScripts.scriplogin(["scriplogin"]);
    //_CargarScripts.questionestres(["questionestres"]);
  }
}
