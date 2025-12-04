require 'pry'
task :default => :compile_readme
task :compile_readme do
  require 'kramdown'

  input_file = 'Readme.md'
  output_file = '_site/index.html'

  unless Dir.exist?('_site')
    Dir.mkdir('_site')
  end

  markdown = File.read(input_file)
  html = Kramdown::Document.new(markdown, input: 'GFM', syntax_highlighter: 'rouge').to_html

  # convert each h1,h2,h3,h4 to have an id attribute for linking
  html.gsub!(/<h[1-5].+id="(?<id>.*)".*>(?<content>.*)<\/h[1-5]>/) do
    id = $1
    content = $2
    whole_element = $&
    %Q{<a href="##{id}">#{whole_element}</a>}
  end

  # use layout.html.erb as a template layout
  # and insert the generated html into the yield block
  layout_file = 'layout.html.erb'
  layout = File.read(layout_file)
  erb = ERB.new(layout)
  html = erb.result_with_hash(content: html)
  File.open(output_file, 'w') do |file|
    file.write(html)
  end

  puts "Compiled #{input_file} to #{output_file}"

  # copy a list of files to _site
  assets = [
    'logo.png',
    'lib/ruby.js'
  ]
  assets.each do |asset|
    FileUtils.cp(asset, '_site/')
  end
end
