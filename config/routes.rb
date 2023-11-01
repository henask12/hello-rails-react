Rails.application.routes.draw do
  root 'root#index'
  get 'api/greetings', to: 'greetings#api'
end
