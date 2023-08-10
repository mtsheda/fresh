import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommunicationComponent } from './communication/communication.component';
import { MessageComponent } from './message/message.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './menu/profile/profile.component';
import { UserDetailsComponent } from './message/user-details/user-details.component';
import { PageComponent } from './page/page.component';
import { Page2Component } from './menu/profile/page2/page2.component';
import { MainContentRejectComponent } from './menu/main-content-reject/main-content-reject.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ToolbarRejectComponent } from './toolbar-reject/toolbar-reject.component';

const routes: Routes = [
  {
    path:"", pathMatch:'full', component:AppComponent
  },
  {
    path:"communication", component:CommunicationComponent
  }
,
{
  path:"message", component:MessageComponent
},
{
  path:"menu", component:MenuComponent
},
{
  path:"profile", component:ProfileComponent
},
{
  path:"userDetails", component:UserDetailsComponent
},

{
  path:"page", component:PageComponent
},


{
  path:"page2", component:Page2Component
},


{
  path:"main content reject", component:MainContentRejectComponent
},

{
  path:"main content", component:MainContentComponent
},



{
  path:"toolbar", component:ToolbarComponent
},


{
  path:"topBar", component:TopbarComponent
},


{
  path:"tool bar reject", component:ToolbarRejectComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
