json.extract! user, :id, :username, :email, :password, :password_confirmation, :created_at, :updated_at
json.url api_user_url(user, format: :json)
