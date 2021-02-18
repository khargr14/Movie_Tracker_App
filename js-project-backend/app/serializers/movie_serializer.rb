class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :director, :summary, :review, :rating
 
  belongs_to :user
end
