Rails.application.routes.draw do
  resources :movies, except: [:destroy]
  resources :actors, except: [:destroy]
  resources :users
  resources :user_sessions, only: [:new, :create, :destroy]
  get 'login' => 'user_sessions#new'
  get 'logout' => 'user_sessions#destroy'
end
