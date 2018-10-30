import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  details: any;
  movieId: string;
  urlList: any;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private moviesservice:MoviesService
  ) {
    var getMovieId;
    getMovieId = activatedRoute.snapshot.params;
    this.urlList = JSON.parse(JSON.stringify(activatedRoute.snapshot.url));
    this.movieId = getMovieId.id;
    //alert(this.movieId);
   }

  ngOnInit() {

    this.moviesservice.getMovieById(this.movieId).subscribe(success => {
      this.details = success;
      console.log(this.details);
      });

    


    // this.details = {
    //   "_id": "5b752b2634e21566dbadac26",
    //   "title": "Ant-Man and the Wasp",
    //   "year": "2018",
    //   "rated": "PG-13",
    //   "released": "06 Jul 2018",
    //   "runtime": "118 min",
    //   "genre": "Action, Adventure, Sci-Fi",
    //   "director": "Peyton Reed",
    //   "writer": "Chris McKenna, Erik Sommers, Paul Rudd, Andrew Barrer, Gabriel Ferrari, Stan Lee (based on the Marvel Comics by), Larry Lieber (based on the Marvel Comics by), Jack Kirby (based on the Marvel Comics by)",
    //   "actors": "Paul Rudd, Evangeline Lilly, Michael Peña, Walton Goggins",
    //   "plot": "As Scott Lang balances being both a Super Hero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.",
    //   "language": "English",
    //   "country": "USA",
    //   "awards": "N/A",
    //   "poster": "https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    //   "ratings": [
    //     {
    //       "source": "Internet Movie Database",
    //       "value": "7.5/10"
    //     },
    //     {
    //       "source": "Rotten Tomatoes",
    //       "value": "88%"
    //     },
    //     {
    //       "source": "Metacritic",
    //       "value": "70/100"
    //     }
    //   ],
    //   "metascore": "70",
    //   "imdbRating": "7.5",
    //   "imdbVotes": "68,677",
    //   "imdbID": "tt5095030",
    //   "type": "movie",
    //   "dvd": "N/A",
    //   "boxOffice": "N/A",
    //   "production": "Walt Disney Pictures",
    //   "website": "https://marvel.com/antman",
    //   "__v": 0
    // }
  }
  
  goToUrl(){
    window.open(
      'https://www.synerzip.com/',
      '_blank' // <- This is what makes it open in a new window.
    );

  }
}
