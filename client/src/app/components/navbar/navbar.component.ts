import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../authentication/services/auth.service';
import { historique } from '../../../environments/config';
/**
 * 
 * @author Paul GUINARD
 * @export
 * @class NavbarComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  /**
  * On Logout :
  * - clear token and user on localStorage
  * - navigate HomePage
  * @memberof NavbarComponent
  */
  onLogout() {
    this._authService.clearLocalStorage();
    this._router.navigate(['/']);
  }

  ngOnInit() {
  }

}
