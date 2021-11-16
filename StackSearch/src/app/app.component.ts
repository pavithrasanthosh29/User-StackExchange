import { Component } from "@angular/core";
import { item } from "./services/models/user-list-response.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "StackSearch";
  userList: item[];

  getUsersResponse(userList: any) {
    this.userList = userList;
  }
}
