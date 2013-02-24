require 'sinatra'

class App < Sinatra::Base

  set :public_folder, 'static'

  get '/' do
    erb :notepad
  end
end

App.run!
