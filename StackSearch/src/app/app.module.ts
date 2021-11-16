import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserSearchComponent } from "./components/user-search/user-search.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserService } from "./services/user.service";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { StacksearchFooterComponent } from './components/stacksearch-footer/stacksearch-footer.component';
@NgModule({
  declarations: [AppComponent, UserSearchComponent, UserListComponent, StacksearchFooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
