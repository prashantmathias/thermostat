require 'sinatra'
require 'json'



  enable :sessions

  get '/' do
    headers "Access-Control-Allow-Origin" => "*"
    { city: "London", temp: 18 }.to_json
  end

  # post '/city' do
  #   headers "Access-Control-Allow-Origin" => "*"
  #   session[:city] = params[:city]
  # end
  #
  # post '/temp' do
  #   headers "Access-Control-Allow-Origin" => "*"
  #   session[:temp] = params[:temp]
  # end
