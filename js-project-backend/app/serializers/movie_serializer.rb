class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :director, :summary, :review, :rating, :user_id, :user
end
