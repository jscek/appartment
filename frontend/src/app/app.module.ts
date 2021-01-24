import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

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
import { FooterComponent } from './components/footer/footer.component';
import { EditProfileComponent } from './components/user-pages/profile-page/edit-profile/edit-profile.component';
import { NotePopupComponent } from './components/user-pages/profile-page/note-popup/note-popup.component';
import { ProductRowComponent } from './components/user-pages/shopping-page/product-row/product-row.component';
import { RankingRowComponent } from './components/user-pages/ranking-page/ranking-row/ranking-row.component';
import { KingCrownComponent } from './components/atoms/king-crown/king-crown.component';
import { JoiningPopupComponent } from './components/user-pages/flats-page/joining-popup/joining-popup.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

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
    PageCardComponent,
    FooterComponent,
    EditProfileComponent,
    NotePopupComponent,
    ProductRowComponent,
    RankingRowComponent,
    KingCrownComponent,
    JoiningPopupComponent,
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
    MatDialogModule,
    MatSnackBarModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
