require 'slim'
# require 'rack'

use Rack::Static,
    :urls => ["/images", "/lib", "/css"],
    :root => "examples"

run lambda { |env|
  [
      200,
      {
          'Content-Type'  => 'text/html',
          'Cache-Control' => 'public, max-age=86400'
      },
      [Slim::Template.new(File.open('examples/index.html.slim', File::RDONLY)).render]
  ]
}