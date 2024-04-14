// 영화 앱 화면

import React from "react";
import axios from 'axios';
import Movie from "../components/Movie";
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => { // getMovies() 함수는 시간이 필요
    // axios.get()이 반환한 결과를 movies에 저장
    const {
      data: { //data ->
        data: { movies }, // data -> movies
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');// axio.get()의 실행을 기다려

    //this.setState({ movies: movies }); 앞: state, 뒤: 구조 분해 할당으로 얻은 영화 데이터가 있는 변수

    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    // 영화 데이터 로딩!
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;