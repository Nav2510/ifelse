import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavModule } from './core/components/side-nav/side-nav.module';
import { DashboardModule } from './features/dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SideNavModule, DashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
