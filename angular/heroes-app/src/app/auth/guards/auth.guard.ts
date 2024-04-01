import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanMatch {
    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    private checkAuthStatus(): Observable<boolean> | boolean {
        return this.authService.checkAuthetication()
            .pipe(
                tap(isAuthenticated => {
                    if (!isAuthenticated) this.router.navigateByUrl("/auth/login")
                })
            )
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

        return this.checkAuthStatus()
    }

    canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {

        return this.checkAuthStatus()
    }

}