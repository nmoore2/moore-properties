Rails.application.routes.draw do

  resources :faqs
  #-----------------------------------------
  # Admin Resources
  #-----------------------------------------
  resources :pages
  devise_for :users

  devise_scope :user do
    # get "/users/sign_up",  :to => "visitors#index"
    get "/admin" => "properties#index" # custom path to login/sign_in
  end
  resources :images

  resources :properties do
    resources :images,  :only => [:create]
  end

  #-----------------------------------------
  # Public
  #-----------------------------------------
  get '/faq', to: 'visitors#faq', as: 'faq_page'
  get '/contact', to: 'visitors#contact', as: 'contact'
  get '/apply', to: 'visitors#apply', as: 'apply'

  root 'visitors#index'

end
