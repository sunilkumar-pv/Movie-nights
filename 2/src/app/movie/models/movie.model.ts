export interface Movie {
    id: number;
    name: string;
    genre: string;
    image: string;
    releaseYear: string; 
}

export const movies: Movie[] = [
  {
      id: 1,
      name: 'The Movie 1',
      genre: 'Sci-fi',
      image: '/assets/img/1.jpg',
      releaseYear: '1984'
  },
  {
    id: 2,
    name: 'The Movie 2',
    genre: 'Sci-fi',
    image: '/assets/img/2.jpg',
    releaseYear: '1974'
  },
  {
    id: 3,
    name: 'The Movie 3',
    genre: 'Sci-fi',
    image: '/assets/img/3.jpg',
    releaseYear: '1964'
  },
  {
    id: 4,
    name: 'The Movie 4',
    genre: 'Sci-fi',
    image: '/assets/img/4.jpg',
    releaseYear: '1954'
  },
  {
    id: 5,
    name: 'The Movie 5',
    genre: 'Sci-fi',
    image: '/assets/img/5.jpg',
    releaseYear: '1944'
  },

]