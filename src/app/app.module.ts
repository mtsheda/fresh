import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicationComponent } from './communication/communication.component';
import { MenuComponent } from './menu/menu.component';
import { MessageComponent } from './message/message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunicationComponent,
    MenuComponent,
    MessageComponent,
    MainScreenComponent,
    FooterComponent,
    MainContentComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
