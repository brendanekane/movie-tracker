class MoviesController < ApplicationController

  def new
    @movie = Movie.new
    render :new
  end

  def create
    @movie = Movie.new(movie_params)
    if @movie.save
      render :show
    else
      flash.now[:errors] = @movie.errors.full_messages
      render :new
    end
  end

  def show
    @movie = Movie.find(params[:id])
    @actor = Actor.new
    render :show
  end

  def index
    @movies = Movie.all
    render :index
  end

  def edit
    @movie = Movie.find(params[:id])
  end

  def update
    @movie = Movie.find(params[:id])
    if @movie.update_attributes(movie_params)
      redirect_to movie_path(@movie.id)
    else
      flash.now[:errors] = @movie.errors.full_messages
      render :edit
    end
  end

  private
  def movie_params
    params.require(:movie).permit(:title, :director, :year, :rating, :actor_list)
  end
end
