# rubyinjs
Enjoy Ruby like functions in jS Objects; make your life easier

## Development
### Requirements
You need to have a working `Ruby` language installed in your system.
```bash
$ which ruby
/Users/john/.rvm/rubies/ruby-2.6.3/bin/ruby
```
#### Install Ruby
##### Mac
```ruby
brew install ruby
```

#### Linux
```bash
$ apt-get install ruby
```

Or install ruby using `RVM` or `rbenv`

### Running dev server
You can run a development server using following command
```bash
$ bundle install

# Symlink the lib dir to examples/lib, otherwise, server wont be able to serve js file
$ ln -s $(pwd)/lib/ $(pwd)/examples/


$ rackup -p 3000

Puma starting in single mode...
* Version 4.0.1 (ruby 2.6.3-p62), codename: 4 Fast 4 Furious
* Min threads: 0, max threads: 16
* Environment: development
* Listening on tcp://0.0.0.0:3000
Use Ctrl-C to stop

```