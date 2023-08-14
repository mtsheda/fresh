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
import { MainScreenComponent } from './main-screen/main-screen.component';
import { MainContentComponent } from './main-content/main-content.component';
import { UserComponent } from './user/user.component';




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
  path:"user", component:UserComponent
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
  path:"main screen", component:MainScreenComponent
},

{
  path:"main content", component:MainContentComponent
},



  { path: 'subitem1', component: PageComponent }, // Define your actual components
  { path: 'subitem2', component: MessageComponent },
  { path: 'subitem3', component: ProfileComponent },
];










@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
