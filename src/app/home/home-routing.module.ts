import { LiveFixturesComponent } from './live-fixtures/live-fixtures.component';
import { MyFixturesComponent } from './my-fixtures/my-fixtures.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'live-fixtures'
      },
      {
        path: 'live-fixtures',
        component: LiveFixturesComponent
      },
      {
        path: 'my-fixtures',
        component: MyFixturesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
