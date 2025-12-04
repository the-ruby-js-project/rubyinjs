require 'slim'
require 'rack'

map "/js" do
  run Rack::File.new("lib")
end
# run lambda { |env|
#   [
#       200,
#       {
#           'Content-Type'  => 'text/html',
#           'Cache-Control' => 'public, max-age=86400'
#       },
#       [Slim::Template.new(File.open('examples/index.html.slim', File::RDONLY)).render]
#   ]
# }
class Mini
  def call(env)
    req = Rack::Request.new(env)

    case req.path
    when "/"
      [200, {"Content-Type"=>"text/html"}, [Slim::Template.new(File.open('examples/index.html.slim', File::RDONLY)).render]]
    when "/ruby.js"
      name = req.params["name"] || "world"
      [200, {"Content-Type"=>"text/javascript"}, ["Hello #{name}!"]]
    else
      [404, {"Content-Type"=>"text/plain"}, ["Not found"]]
    end
  end
end

run Mini.new