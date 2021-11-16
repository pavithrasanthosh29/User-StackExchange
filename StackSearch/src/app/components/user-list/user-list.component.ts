import { Component, Input, OnChanges } from "@angular/core";
import { item } from "../../services/models/user-list-response.model";
@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})

/**
 *  View User Details (Name, Location, Reputation)
 *  Access Link to StackExchange User Profile Page
 */
export class UserListComponent implements OnChanges {
  @Input() userList: item[];
  users: item[];
  constructor() {}

  ngOnChanges() {
    this.users = this.userList;
  }
}
