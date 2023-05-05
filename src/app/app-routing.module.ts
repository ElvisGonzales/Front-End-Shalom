import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PerfiladminComponent } from './perfiladmin/perfiladmin.component';
import { AdmininventarioComponent } from './admininventario/admininventario.component';
import { AdmineventosComponent } from './admineventos/admineventos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  {path:'perfiladmin',component:PerfiladminComponent},
  {path:'adminInvetario',component:AdmininventarioComponent},
  {path:'adminEventos',component:AdmineventosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
