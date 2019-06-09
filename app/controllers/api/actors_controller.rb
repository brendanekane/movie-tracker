class Api::ActorsController < ApplicationController

  def new
    @actor = Actor.new
    render :new
  end

  def create
    @actor = Actor.new(actor_params)
    if @actor.save
      render :index
    else
      flash.now[:errors] = @actor.errors.full_messages
    end
  end

  def show
    @actor = Actor.find(params[:id])
    @movies = @actor.movies
    render :show
  end

  def index
    @movie = Movies.find(params[:id])
    @actors = @movie.actors
    render :index
  end

  def edit
    @actor = Actor.find(params[:id])
  end

  def update
    @actor = Actor.find(params[:id])
    if @actor.update_attributes(actor_params)
      redirect_to(api_actor_path(@actor.id))
    else
      flash.now[:errors] = @actor.errors.full_messages
      render :edit
    end
  end

  private
  def actor_params
    params.require(:actor).permit(:name, :movie_list)
  end
end
