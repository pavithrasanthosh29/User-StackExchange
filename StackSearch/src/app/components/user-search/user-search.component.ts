import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UserService } from "../../services/user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserListResponse } from "src/app/services/models/user-list-response.model";

@Component({
  selector: "app-user-search",
  templateUrl: "./user-search.component.html",
  styleUrls: ["./user-search.component.css"],
})

/**
 * Search StackExchange by Username
 */
export class UserSearchComponent implements OnInit {
  userList: UserListResponse;
  @Output() userListEvent = new EventEmitter<any>();

  userSearchForm: FormGroup;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.userSearchForm = this.formBuilder.group({
      username: [
        "",
        {
          validators: Validators.required,
        },
      ],
    });
  }

  onSubmit(): void {
    this.userService
      .getStackExchangeUsers(this.userSearchForm.controls.username.value)
      .subscribe(
        (userListResponse) => {
          this.userList = userListResponse;
          this.userListEvent.emit(this.userList.items);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
