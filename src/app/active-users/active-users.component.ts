import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UrlSerializer} from '@angular/router';
import {UserService} from '../user.service';

@Component({
    selector: 'app-active-users',
    templateUrl: './active-users.component.html',
    styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
    users: string[] = [];
    @Output() userSetToInactive = new EventEmitter<number>();

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.users = this.userService.activeUsers;
    }

    onSetToActive(id: number) {
        this.userService.onSetToActive(id);
    }
}
