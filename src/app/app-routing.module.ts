import { Routes, RouterModule } from '@angular/router';
import { ListFilterCitiesComponent } from './list-filter-cities/list-filter-cities.component';



const routes: Routes = [
  { path: 'cities', component: ListFilterCitiesComponent }
];

export const routing = RouterModule.forRoot(routes);
