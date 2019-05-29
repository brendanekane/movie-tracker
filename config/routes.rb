Rails.application.routes.draw do
  resources :movies, except: [:destroy]
  resources :actors, except: [:destroy]
end
