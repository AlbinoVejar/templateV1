import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './layout/home/home.component';
import { ContentComponent } from './layout/content/content.component';
import { AccountComponent } from './layout/account/account.component';
import { AboutUsComponent } from './layout/about-us/about-us.component';

const routes: Routes = [
  { path: '', component:LayoutComponent , loadChildren : () => import("./layout/layout.module").then(m => m.LayoutModule) }, //LAZY LOADING DESIGN PATTERN
 //  { path: 'home', component: HomeComponent },
 //{ path: 'content', component: ContentComponent},
  // { path: 'account', component: AccountComponent},
  // { path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
