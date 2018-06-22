import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookingComponent } from './component/booking/booking.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { ViewComponent } from './component/view/view.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { DisplayComponent } from './component/display/display.component';
import { NevbarComponent } from './component/nevbar/nevbar.component';
import {CheckinComponent} from  './component/checkin/checkin.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    ContactComponent,
    AboutComponent,
    ViewComponent,
    DisplayComponent,
    NevbarComponent,
    CheckinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'booking',component: BookingComponent},
      {path:'contact',component: ContactComponent},
      {path:'about',component: AboutComponent},
      {path: 'display', component:DisplayComponent, children: [
        {path: 'checkin',component:CheckinComponent},
        {path: 'view',component:ViewComponent},
       
  ]}
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
