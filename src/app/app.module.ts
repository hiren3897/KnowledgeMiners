import { BrowserModule } from '@angular/platform-browser';  
import { HttpClientModule } from '@angular/common/http';  
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';  
import { AppComponent } from './app.component';  
import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';  
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';  
import { LoginComponent } from './login/login.component';  
import { DashboardComponent } from './dashboard/dashboard.component';  
import { AppRoutingModule } from '../app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { AngularMaterialModule } from './angular-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {QuestionsLoopDirective} from './question-loop.directive';
import { UserHeaderComponent } from './user-header/user-header.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RecommendationPanelComponent } from './recommendation-panel/recommendation-panel.component';
import { GalleryModule } from 'ng-gallery';



export function socialConfigs() {  
  const config = new AuthServiceConfig(  
    [  
      {  
        id: FacebookLoginProvider.PROVIDER_ID,  
        provider: new FacebookLoginProvider('1178800949125552')  
      }
      // {  
      //   id: GoogleLoginProvider.PROVIDER_ID,  
      //   provider: new GoogleLoginProvider('app-id')  
      // }  
    ]  
  );  
  return config;  
}  
@NgModule({  
  declarations: [  
    AppComponent,  
    LoginComponent,  
    DashboardComponent,
    QuestionsLoopDirective,
    UserHeaderComponent,
    AdminHeaderComponent,
    RegisterComponent,
    AboutUsComponent,
    RecommendationPanelComponent
  ],  
  imports: [  
    BrowserModule,  
    HttpClientModule,  
    AppRoutingModule, BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GalleryModule,
  ],  
  providers: [ 
    AuthService,  
    {  
      provide: AuthServiceConfig,  
      useFactory: socialConfigs  
    }  
  ],  
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})  
export class AppModule { }
