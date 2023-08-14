import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CanvasJSAngularChartsModule} from '@canvasjs/angular-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicationComponent } from './communication/communication.component';
import { MenuComponent } from './menu/menu.component';
import { MessageComponent } from './message/message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainScreenComponent } from './main-screen/main-screen.component';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileComponent } from './menu/profile/profile.component';

import { MainContentComponent } from './main-content/main-content.component';
import { IconMenuComponent } from './icon-menu/icon-menu.component';
import { CollapsingMenuComponent } from './collapsing-menu/collapsing-menu.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule} from '@angular/material/input';
import { MatNativeDateModule} from '@angular/material/core';
import { ContentComponent } from './content/content.component';
import { ProductListingComponent } from './product-listing/product-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunicationComponent,
    MenuComponent,
    MessageComponent,
    MainScreenComponent,
    ProfileComponent,
  
    MainContentComponent,
    IconMenuComponent,
    CollapsingMenuComponent,
    UserComponent,
    ContentComponent,
    ProductListingComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule ,
    CanvasJSAngularChartsModule,
    FormsModule ,
    MatDatepickerModule ,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
