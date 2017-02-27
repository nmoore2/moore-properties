Rails.application.routes.draw do

  resources :images
  resources :properties do
    resources :images,  :only => [:create]
  end
  root 'visitors#index'

end
