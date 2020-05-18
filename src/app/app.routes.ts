import {Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ListAuthorComponent} from "./components/author/list-author/list-author.component";
import {CreateAuthorComponent} from "./components/author/create-author/create-author.component";
import {UploadFileComponent} from "./components/upload-file/upload-file.component";

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'listAuthor',
    component: ListAuthorComponent
  }, {
    path: 'createAuthor',
    component: CreateAuthorComponent
  }, {
    path: 'upload',
    component: UploadFileComponent
  }, {
    path: '**',
    component: NotFoundComponent
  }
]
