Rails.application.routes.draw do

  resources :properties
  root 'visitors#index'

end
