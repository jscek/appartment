import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BackgroudSpaceComponent } from './components/backgroud-space/backgroud-space.component';
import { NoteComponent } from './components/note/note.component';
import { LoginPageComponent } from './components/user-pages/login-page/login-page.component';
import { ProfilePageComponent } from './components/user-pages/profile-page/profile-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FlatsPageComponent } from './components/user-pages/flats-page/flats-page.component';
import { AssignmentsPageComponent } from './components/user-pages/assignments-page/assignments-page.component';
import { RankingPageComponent } from './components/user-pages/ranking-page/ranking-page.component';
import { ShoppingPageComponent } from './components/user-pages/shopping-page/shopping-page.component';
import { BillingsPageComponent } from './components/user-pages/billings-page/billings-page.component';
import { PageCardComponent } from './components/page-card/page-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    BackgroudSpaceComponent,
    NoteComponent,
    LoginPageComponent,
    ProfilePageComponent,
    PageNotFoundComponent,
    FlatsPageComponent,
    AssignmentsPageComponent,
    RankingPageComponent,
    ShoppingPageComponent,
    BillingsPageComponent,
    PageCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
