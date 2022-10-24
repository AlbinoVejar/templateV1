import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccountComponent } from './account/account.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'content', component: ContentComponent },
      { path: 'account', component: AccountComponent },
      { path: 'about-us', component: AboutUsComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
