import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../models/movie.model';
import { NavbarService } from 'src/app/navbar/services/navbar.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  id:number;
  movieSub$: Subscription;
  movie: Movie;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private navbarService: NavbarService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.movieSub$ = this.movieService.movieFromHttp(this.id)
          .subscribe(movie => { 
            this.movie = movie;
            this.navbarService.title.next(movie.name);
            //console.log(this.movie);
          });
  }
   ngOnDestroy(): void {
     this.movieSub$.unsubscribe();
   }
}
