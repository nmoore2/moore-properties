Rails.application.routes.draw do

  #-----------------------------------------
  # Admin Resources
  #-----------------------------------------
  devise_for :users
  devise_scope :user do
    get "/admin" => "properties#index" # custom path to login/sign_in
  end
  resources :images

  resources :properties do
    resources :images,  :only => [:create]
  end

  #-----------------------------------------
  # Public
  #-----------------------------------------
  get '/property(/:id)', to: 'pages#property', as: 'prop'

  root 'visitors#index'

end
