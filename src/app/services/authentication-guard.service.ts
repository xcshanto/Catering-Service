import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationGuardService implements CanActivate {

  constructor( private auth: AuthenticationService, private router: Router ) { }

  canActivate( route, state: RouterStateSnapshot ) {
    return this.auth.user$.map(user => {
      if (user)
        return true;

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;  
    });
  }
}
