import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserHeaderComponent} from './user-header/user-header.component'
import { AdminHeaderComponent } from './admin-header/admin-header.component'
import { RegisterComponent } from './register/register.component'
import { RecommendationPanelComponent } from './recommendation-panel/recommendation-panel.component'
import { AuthGuard } from './auth/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
export const routes: Routes = [    
  {    
    path: '',    
    redirectTo: '/home',    
    pathMatch: 'full',    
  },    
  {    
    path: 'login',    
    component: LoginComponent,    
    data: {    
      title: 'Login Page'    
    },   
  },    
  {    
    path: 'home',    
    component: HomePageComponent,    
    data: {    
      title: 'Home Page'    
    },   
  },
  {    
    path: 'User', 
    component: UserHeaderComponent,    
    data: {    
      title: 'User DashBoard'    
    },  
    canActivate: [AuthGuard],
  },  
  {    
    path: 'Admin',    
    component: AdminHeaderComponent,    
    data: {    
      title: 'User DashBoard'    
    }    
  },  
  {    
    path: 'Register',    
    component: RegisterComponent,    
    data: {    
      title: 'User DashBoard'    
    }    
  },  
  {    
    path: 'result',    
    component: RecommendationPanelComponent,    
    data: {    
      title: 'Recommendation Panel DashBoard'    
    },
    canActivate: [AuthGuard],
  },   
];    

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
