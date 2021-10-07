import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {CabinetPageComponent} from "./pages/cabinet-page/cabinet-page.component";
import {GroupsPageComponent} from "./pages/groups-page/groups-page.component";
import {GroupPageComponent} from "./pages/group-page/group-page.component";

const routes: Routes = [
  {
    path: 'cabinet', component: CabinetPageComponent, children: [
      {
        path: '', component: DashboardPageComponent,
      },
      {
        path: 'groups', component: GroupsPageComponent,
      },
      {
        path: 'groups/:id', component: GroupPageComponent,
      }
    ]
  },
  {
    path: 'registration', component: RegistrationPageComponent,
  },
  {
    path: 'login', component: LoginPageComponent,
  },
  {
    path: '**', redirectTo: 'login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
