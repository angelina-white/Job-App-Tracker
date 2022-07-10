Rails.application.routes.draw do
  
  resources :users, only: [:show, :create]
  resources :interviews
  resources :jobs
  resources :offers
  resources :companies, only: [:index, :show, :create]
  resources :statuses, only: [:index, :show]
  post "/login", to: "sessions#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
