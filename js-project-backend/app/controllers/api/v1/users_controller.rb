class Api::V1::UsersController < ApplicationController

    def index
        users = User.all
        render json: UserSerializer.new(users).serialized_json
    end

    def create 
        user = User.find_by(:name => user_params[:name])
        if user 
            redirect_to "/api/v1/users/#{user.id}"
        else
            user = User.create(user_params)
            user.save!
            render json: user # UserSerializer.new(users).serialized_json if you need to show associated movies
        end
    end

    def show
        user = User.find_by(:id => params[:id])
        render json: UserSerializer.new(user).serialized_json
    end

    private

    def user_params
        params.require(:user).permit(:name)
    end
end