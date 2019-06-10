Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :movies, except: [:destroy]
    resources :actors, except: [:destroy]
    resources :users
    resources :user_sessions, only: [:new, :create, :destroy]
    get 'login' => 'user_sessions#new'
    get 'logout' => 'user_sessions#destroy'
  end
end
