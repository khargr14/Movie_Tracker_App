class Api::V1::MoviesController < ApplicationController

    def index
        movies = Movie.all
        render json: movies
    end

    def show 
        movie = Movie.find(params[:id])
        render json: movies
    end


    def create
        movie = Movie.create(movie_params)
        movie.save!
        render json: movie
    end 

    def update
        movie = Movie.find(params[:id])
        movie.update(movie_params)
        render json: movie
    end

    def destroy 
        movie = Movie.find_by(:id => params[:id]).destroy
        render json: movie
    end

    private
        def movie_params
            params.require(:movie).permit(:title, :director, :summary, :review, :rating, :user_id )
        end


end
