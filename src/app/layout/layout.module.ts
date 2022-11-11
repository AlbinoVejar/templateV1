import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountComponent } from './account/account.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    HomeComponent,
    AccountComponent,
    ContentComponent,
    AboutUsComponent,
    ContainerComponent,
    SidebarComponent,

  ],
  imports: [
    // BrowserModule,
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: []
})
export class LayoutModule { }
