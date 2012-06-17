require 'rubygems'
require 'sinatra/base'
require 'haml'

class Maps < Sinatra::Base


  get '/' do
    haml :index
  end

end
