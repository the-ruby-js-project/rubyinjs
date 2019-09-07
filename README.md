# rubyinjs
Enjoy Ruby like functions in jS Objects; make your life easier

## Usage
**Note**: since, no `?` symbol is supported by `Javascript` therefore for 
methods like `match?` or `include?`, `empty?` use `_` instead of `?`.

```html
<script src="https://raw.githubusercontent.com/the-ruby-js-project/rubyinjs/master/lib/ruby.js"></script>

<script>
    "1234".to_i() // 1234
    "1234.35".to_f() // 1234.35
    "shiva bhusal".start_with_('shi') // true
    "shiva bhusal".start_with_('hi') // false
</script>

```


## Methods supported
### in String Object

#### *(n)
```js
"Ho! ".x(3)   //=> "Ho! Ho! Ho! "
```

#### capitalize
```js
"hello".capitalize()    //=> "Hello"
```

#### casecmp?(str)

```js
"abcdef".casecmp_("abcde")     //=> false
"aBcDeF".casecmp_("abcdef")    //=> true
"abcdef".casecmp_("abcdefg")   //=> false
"abcdef".casecmp_("ABCDEF")    //=> true


```

#### center

```js

"hello".center(4)         //=> "hello"
"hello".center(20)        //=> "       hello        "
"hello".center(20, '123') //=> "1231231hello12312312"
```

#### chr

```js
"abcde".chr()    //=> "a"
```

#### downcase

```js

"hEllO".downcase()   //=> "hello"
```

#### upcase

```js
"hEllO".upcase()   //=> "HELLO"
```

#### each_char {}

```js


"hello".each_char(function(c){ console.log(c, ' ') })
    produces:

    h e l l o
```

#### empty?

```js

"hello".empty_   //=> false
" ".empty _      //=> false
"".empty_        //=> true
```

#### end_with?(str)

```js


"hello".end_with_("ello")               //=> true

# returns true if one of the +suffixes+ matches.
"hello".end_with_("heaven", "ello")     //=> true
"hello".end_with_("heaven", "paradise") //=> false
```

#### gsub(patern, replacement_str)

```js


"hello".gsub(/[aeiou]/, '*')                  //=> "h*ll*"
"hello".gsub(/([aeiou])/, '<\1>')             //=> "h<e>ll<o>"
```

#### include?(str)

```js

"hello".include_("lo")    //=> true
"hello".include_("ol")    //=> false
"hello".include_('h')     //=> true
```

#### index

```js

"hello".index('e')             //=> 1
"hello".index('lo')            //=> 3
"hello".index('a')             //=> nil
"hello".index('e')             //=> 1
```

#### lines

```js

"hello\nworld\n".lines()             //=> ["hello\n", "world\n"]
"hello  world".lines(' ')           //=> ["hello ", " ", "world"]
"hello\nworld\n".lines() //=> ["hello", "world"]
```

#### lstrip

```js

"  hello  ".lstrip()   //=> "hello  "
"hello".lstrip()       //=> "hello"
```

#### rstrip

```js

"  hello  ".rstrip()   //=> "  hello"
"hello".rstrip()       //=> "hello"
```

#### match?(regex)

```js


"Ruby".match_(/R.../)    //=> true
"Ruby".match_(/R.../, 1) //=> false
"Ruby".match_(/P.../)    //=> false
```

#### succ

```js

"abcd".succ()        //=> "abce"
"THX1138".succ()     //=> "THX1139"
"<<koala>>".succ()
```

#### next

```js

"abcd".next()        //=> "abce"
"THX1138".next()     //=> "THX1139"
"<<koala>>".next()   //=> "<<koalb>>"
```

#### ord

```js

"a".ord() //=> 49
```

#### prepend

```js

// Non mutative
a = "!"
a.prepend("hello ", "world") //=> "hello world!"
a.prepend("hello ", "world", 'shiva') //=> "hello world shiva!"
```

#### reverse

```js

"stressed".reverse()   //=> "desserts"
```

#### scan(pattern)

```js

a = "cruel world"
a.scan(/\w+/)        //=> ["cruel", "world"]
a.scan(/.../)        //=> ["cru", "el ", "wor"]
a.scan(/(...)/)      //=> [["cru"], ["el "], ["wor"]]
a.scan(/(..)(..)/)   //=> [["cr", "ue"], ["l ", "wo"]]
```

#### size

```js

"cruel world".size()  //=> 11
```

#### start_with?(str)

```js
"hello".start_with_("hell")               //=> true
"hello".start_with_(/H/i)                 //=> true
// returns true if one of the prefixes matches.
"hello".start_with_("heaven", "hell")     //=> true
"hello".start_with_("heaven", "paradise") //=> false
```

#### sub(pattern)

```js

"hello".sub(/[aeiou]/, '*')                  //=> "h*llo"
```

#### swapcase

```js

"Hello".swapcase()          //=> "hELLO"
"cYbEr_PuNk11".swapcase()   //=> "CyBeR_pUnK11"
```

#### to_f

```js

"123.45e1".to_f()        //=> 1234.5
"45.67 degrees".to_f()   //=> 45.67
"thx1138".to_f()         //=> 0.0
```

#### to_i

```js

"12345".to_i()             //=> 12345
"99 red balloons".to_i()   //=> 99
"0a".to_i()                //=> 0
"0a".to_i(16)            //=> 10
"hello".to_i()             //=> 0
"1100101".to_i(2)        //=> 101
"1100101".to_i(8)        //=> 294977
"1100101".to_i(10)       //=> 1100101
"1100101".to_i(16)       //=> 17826049

```

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