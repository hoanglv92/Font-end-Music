import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {SlideComponent} from './index/slide/slide.component';
import {ShowMusicHotComponent} from './index/show-music-hot/show-music-hot.component';
import {AlbumHotComponent} from './index/album-hot/album-hot.component';
import {MusicNewComponent} from './index/music-new/music-new.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {SigninComponent} from './signin/signin.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const roster: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SlideComponent,
    ShowMusicHotComponent,
    AlbumHotComponent,
    MusicNewComponent,
    FooterComponent,
    IndexComponent,
    SigninComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(roster)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
