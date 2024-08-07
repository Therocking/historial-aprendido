import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ]

  constructor(
    private authService: AuthService,
    private router: Router,
    ){}

  
  public get user() : IUser | undefined {
    return this.authService.currentUser
  }
  

  onLogout(): void {
    this.authService.logout()

    this.router.navigateByUrl("/auth/login")
  }
}
