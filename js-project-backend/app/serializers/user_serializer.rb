class UserSerializer
  include FastJsonapi::ObjectSerializer
 
  attribute :id, :name, :movies
end