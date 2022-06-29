import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ResolveServService } from './resolve-serv.service';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  { path: '', redirectTo:'homepage', pathMatch:'full' },
  { path: 'users',
    component: UsersComponent,
    resolve:
    {
      data: ResolveServService
    }
  },
  { path: 'user/:id', component: UserComponent },
  { path: 'homepage' , component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo:'homepage' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
