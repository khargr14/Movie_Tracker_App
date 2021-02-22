class Api::V1::UsersController < ApplicationController
    def index
        users = User.all 
        #have to add the  serializer to show associated to movies
        render json: UserSerializer.new(users).serialized_json
    
    def create
        user = User.find_by(:name => user_params[:name]) 
        if User.find_by(:name => user_params[:name])
            
            redirect_to "/api/v1/users/#{user.id}"
        else
            user = User.create(user_params)
            user.save!
            render json: user
            #render json: UserSerializer.new(user)
        end
    end

    def show
        user = User.find_by(:id => params[:id])
       # render json: user
        render json: UserSerializer.new(user).serialized_json
    end

    private

    def user_params
        params.require(:user).permit(:name)
    end
end
   

