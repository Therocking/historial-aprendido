import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchAll, switchMap, tap } from 'rxjs';

import { HeroesService } from './../../services/heroes.service';
import { Hero, Publisher } from '../../interfaces/hero.interface'
import { ComfirmDialogComponent } from '../../components/comfirm-dialog/comfirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {

  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  constructor(
    private herosService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }


  public get currentHero(): Hero {
    const hero = this.heroForm.value as Hero

    return hero
  }

  ngOnInit() {
    if (!this.router.url.includes('edit')) return

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.herosService.getHeroById(id)),
      ).subscribe(hero => {
        if (!hero) this.router.navigateByUrl('/')

        this.heroForm.reset(hero)
      })
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return

    if (this.currentHero.id) {
      this.herosService.updateHero(this.currentHero)
        .subscribe(hero => {
          this.showSnackbar(`${hero.superhero} updated!`)
        })

      return
    }

    this.herosService.addHero(this.currentHero)
      .subscribe(hero => {
        this.showSnackbar(`${hero.superhero} created!`)
        this.router.navigate(["heroes", hero.id])
      })
  }

  onDeleteHero() {
    if (!this.currentHero.id) throw Error('Hero id is required.');

    const dialogRef = this.dialog.open(ComfirmDialogComponent, {
      data: this.heroForm.value
    })

    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap(() => this.herosService.deleteHeroById(this.currentHero.id)),
        filter((wasDeleted: boolean) => wasDeleted),
      )
      .subscribe(() => {
        this.showSnackbar(`${this.currentHero.superhero}, was successfuly deleted!`)
        this.router.navigateByUrl('/')
      })
  }

  private showSnackbar(msg: string): void {
    this.snackBar.open(msg, 'done', {
      duration: 2500
    })
  }
}
