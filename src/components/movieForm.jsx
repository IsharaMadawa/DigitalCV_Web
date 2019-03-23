import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import { saveMovie, getMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";

class MovieFrom extends Form {
  state = {
    data: { title: "", genreId: "", dailyRentalRate: "", numberInStock: "" },
    genres: [],
    errors: {},
    movie: {}
  };

  async populateGenres() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }

  async populateMovie() {
    try {
      const movieId = this.props.match.params.id;
      if (movieId === "new") return;

      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovie();
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  }

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .min(5)
      .max(255)
      .required(),
    genreId: Joi.string().required(),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(255)
      .required(),
    numberInStock: Joi.number()
      .min(0)
      .max(255)
      .required()
  };

  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>Edit Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Movie Name")}
          {this.renderSelect("genreId", "Ganre", this.state.genres)}
          {this.renderInput("dailyRentalRate", "Daily Retal")}
          {this.renderInput("numberInStock", "No. In Stock")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default MovieFrom;
