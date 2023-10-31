class GreetingsController < ApplicationController
  def api
    random_greeting = Greeting.order("RANDOM()").first
    render json: { greeting: random_greeting.message }
  end
end
