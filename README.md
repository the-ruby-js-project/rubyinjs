# rubyinjs
Enjoy Ruby like functions in jS Objects; make your life easier

## Usage
**Note**: since, no `?` symbol is supported by `Javascript` therefore for 
methods like `match?` or `include?`, `empty?` use `_` instead of `?`.

```html
<script src="https://raw.githubusercontent.com/the-ruby-js-project/rubyinjs/master/lib/ruby.js"></script>

<script>
    "1234".to_i()                       // 1234
    "1234.35".to_f()                    // 1234.35
    "shiva bhusal".start_with_('shi')   // true
    "shiva bhusal".start_with_('hi')    // false
</script>

```

### in Rails Application

```Gemfile
gem 'rubyinjs'

```

```js
// application.js

//= require 'rubyinjs'
```

## String methods

#### *(n)
```js
"Ho! ".x(3)                             //=> "Ho! Ho! Ho! "
```

#### capitalize
```js
"hello".capitalize()                    //=> "Hello"
```

#### casecmp?(str)

```js
"abcdef".casecmp_("abcde")              //=> false
"aBcDeF".casecmp_("abcdef")             //=> true
"abcdef".casecmp_("abcdefg")            //=> false
"abcdef".casecmp_("ABCDEF")             //=> true


```

#### center

```js

"hello".center(4)                       //=> "hello"
"hello".center(20)                      //=> "       hello        "
"hello".center(20, '123')               //=> "1231231hello12312312"
```

#### chr

```js
"abcde".chr()                           //=> "a"
```

#### downcase

```js

"hEllO".downcase()                      //=> "hello"
```

#### upcase

```js
"hEllO".upcase()                        //=> "HELLO"
```

#### each_char {}

```js


"hello".each_char(function(c){ console.log(c, ' ') })
    produces:

    h e l l o
```

#### empty?

```js

"hello".empty_                          //=> false
" ".empty _                             //=> false
"".empty_                               //=> true
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


"hello".gsub(/[aeiou]/, '*')            //=> "h*ll*"
"hello".gsub(/([aeiou])/, '<\1>')       //=> "h<e>ll<o>"
```

#### include?(str)

```js

"hello".include_("lo")                  //=> true
"hello".include_("ol")                  //=> false
"hello".include_('h')                   //=> true
```

#### index

```js

"hello".index('e')                      //=> 1
"hello".index('lo')                     //=> 3
"hello".index('a')                      //=> nil
"hello".index('e')                      //=> 1
```

#### lines

```js

"hello\nworld\n".lines()                //=> ["hello\n", "world\n"]
"hello  world".lines(' ')               //=> ["hello ", " ", "world"]
"hello\nworld\n".lines()                //=> ["hello", "world"]
```

#### lstrip

```js

"  hello  ".lstrip()                    //=> "hello  "
"hello".lstrip()                        //=> "hello"
```

#### rstrip

```js

"  hello  ".rstrip()                    //=> "  hello"
"hello".rstrip()                        //=> "hello"
```

#### match?(regex)

```js


"Ruby".match_(/R.../)                   //=> true
"Ruby".match_(/R.../, 1)                //=> false
"Ruby".match_(/P.../)                   //=> false
```

#### succ

```js

"abcd".succ()                           //=> "abce"
"THX1138".succ()                        //=> "THX1139"
"<<koala>>".succ()
```

#### next

```js

"abcd".next()                           //=> "abce"
"THX1138".next()                        //=> "THX1139"
"<<koala>>".next()                      //=> "<<koalb>>"
```

#### ord

```js

"a".ord()                               //=> 49
```

#### prepend

```js

// Non mutative
a = "!"
a.prepend("hello ", "world")            //=> "hello world!"
a.prepend("hello ", "world", 'shiva')   //=> "hello world shiva!"
```

#### reverse

```js

"stressed".reverse()                    //=> "desserts"
```

#### scan(pattern)

```js

a = "cruel world"
a.scan(/\w+/)                           //=> ["cruel", "world"]
a.scan(/.../)                           //=> ["cru", "el ", "wor"]
a.scan(/(...)/)                         //=> [["cru"], ["el "], ["wor"]]
a.scan(/(..)(..)/)                      //=> [["cr", "ue"], ["l ", "wo"]]
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

"hello".sub(/[aeiou]/, '*')             //=> "h*llo"
```

#### swapcase

```js

"Hello".swapcase()                      //=> "hELLO"
"cYbEr_PuNk11".swapcase()               //=> "CyBeR_pUnK11"
```

#### to_f

```js

"123.45e1".to_f()                       //=> 1234.5
"45.67 degrees".to_f()                  //=> 45.67
"thx1138".to_f()                        //=> 0.0
```

#### to_i

```js

"12345".to_i()                          //=> 12345
"99 red balloons".to_i()                //=> 99
"0a".to_i()                             //=> 0
"0a".to_i(16)                           //=> 10
"hello".to_i()                          //=> 0
"1100101".to_i(2)                       //=> 101
"1100101".to_i(8)                       //=> 294977
"1100101".to_i(10)                      //=> 1100101
"1100101".to_i(16)                      //=> 17826049

```

---

## Array Methods

#### at(index)

```js
[1, 2, 3, 4, 5, 6].at(1)  //=> 2
```


#### fetch(index, fallback)

```js

arr = ['a', 'b', 'c', 'd', 'e', 'f']
arr.fetch(100)                          //=> IndexError: index 100 outside of array bounds: -6...6
arr.fetch(100, "oops")                  //=> "oops"
 
```


#### take(count)

```js
arr = ['a', 'b', 'c', 'd', 'e', 'f']
arr.take(1)                             //=> ['a']
arr.take(2)                             //=> ['a', 'b']
```


#### first(count)

```js
arr = ['a', 'b', 'c', 'd', 'e', 'f']
arr.first()                             //=> 'a'
arr.first(2)                            //=> ['a', 'b']
```


#### last(count)

```js
arr = ['a', 'b', 'c', 'd', 'e', 'f']
arr.last                                //=> 'f'
arr.last(2)                             //=> ['e', 'f']
```


#### count

```js
browsers = ['Chrome', 'Firefox', 'Safari', 'Opera', 'IE']
browsers.length //=> 5
browsers.count //=> 5
```


#### include?(item)

```js

browsers = ['Chrome', 'Firefox', 'Safari', 'Opera', 'IE']
browsers.include_('Konqueror')          //=> false
```


#### empty?

```js
browsers = ['Chrome', 'Firefox', 'Safari', 'Opera', 'IE']
browsers.empty_ //=> false
```


#### insert(index, item)

```js
a = %w{ a b c d }
a.insert(2, 99)                         //=> ["a", "b", 99, "c", "d"]
a.insert(-2, 1, 2, 3)                   //=> ["a", "b", 99, "c", 1, 2, 3, "d"]
```


#### count

```js
[ 1, 2, 3, 4, 5 ].size()                //=> 5
```

#### collect

```js
 1, 2, 3, 4, 5 ].collect {}             //=> 5
```

#### pop

```js
a = [ "a", "b", "c", "d" ]
a.pop                                   //=> "d"
a.pop(2)                                //=> ["b", "c"]
a                                       //=> ["a"]
```

#### & operation

```js
[ 1, 1, 3, 5 ].and([ 1, 2, 3 ])         //=> [ 1, 3 ]
```

#### * 

```js
[ 1, 2, 3 ].x(3)                        //=> [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ]
[ 1, 2, 3 ].x(",")                      //=> "1,2,3"
```

#### +

```js
Ruby [ 1, 2, 3 ] + [ 4, 5 ]             //=> [ 1, 2, 3, 4, 5 ]
JS [ 1, 2, 3 ].plus([ 4, 5 ])           //=> [ 1, 2, 3, 4, 5 ]
```

#### -

```js
Ruby [ 1, 1, 2, 2, 3, 3, 4, 5 ] - [ 1, 2, 4 ]       //=>  [ 3, 3, 5 ]
JS [ 1, 1, 2, 2, 3, 3, 4, 5 ].minus([ 1, 2, 4 ])    //=>  [ 3, 3, 5 ]
```

#### assoc

```js
bs1 = [ "colors", "red", "blue", "green" ]
 s2 = [ "letters", "a", "b", "c" ]
 s3 = "foo"
 a  = [ s1, s2, s3 ]
 a.assoc("letters")                     //=> [ "letters", "a", "b", "c" ]
 a.assoc("foo")                         //=> nil
```

#### count

```js
browsers = ['Chrome', 'Firefox', 'Safari', 'Opera', 'IE']
browsers.length                         //=> 5
browsers.count                          //=> 5
```

#### rassoc

```js
a = [ [ 1, "one"], [2, "two"], [3, "three"], ["ii", "two"] ]
a.rassoc("two")                         //=> [2, "two"]
a.rassoc("four")                        //=> nil
```

#### at

```js
a = [ "a", "b", "c", "d", "e" ]
a.at(0)                                 //=> "a"
a.at(-1)                                //=> "e"
```

#### clear

```js
a = [ "a", "b", "c", "d", "e" ]
a.clear                                 //=> [ ]
```

#### compact

```js
[ "a", nil, "b", nil, "c", nil ].compact
                                        //=> [ "a", "b", "c" ]
js:
[1, 2, 3, null, undefined, true, false, 4, 5].compact() //=> [1, 2, 3, true, false, 4, 5]
```

#### cycle

```js
a = ["a", "b", "c"]
a.cycle {|x| puts x }                   // print, a, b, c, a, b, c,.. forever.
a.cycle(2) {|x| puts x }                // print, a, b, c, a, b, c.
```

#### delete

```js
a = [ "a", "b", "b", "b", "c" ]
a.delete("b")                           //=> "b"
a                                       //=> ["a", "c"]
a.delete("z")                           //=> nil
a.delete("z") { "not found" }           //=> "not found"
```

#### delete_at(index)

```js
a = %w( ant bat cat dog )
a.delete_at(2)                          //=> "cat"
a                                       //=> ["ant", "bat", "dog"]
a.delete_at(99)                         //=> nil
```

#### keep_if [destructive]

```js
a = [ "a", "b", "c", "d", "e"]
a.keep_if((v)=>v.match(/[aeiou]/))      //=> ["a", "e"]
```


#### reject

```js
a = [ "a", "b", "c", "d", "e"]
a.reject((v)=>v.match(/[aeiou]/))       //=> ["b", "c", "d"]
```


#### select

```js
a = [ "a", "b", "c", "d", "e"]
a.select((v)=>v.match(/[aeiou]/))       //=> ["a", "e"]
```


#### reverse_each

```js
a = [ "a", "b", "c" ]
a.reverse_each {|x| print x, " " }
produces:

c b a
```

#### sample

```js
a = [ "a", "b", "c" ]
a.sample()                              //=> 'a'
a.sample()                              //=> 'b'
a.sample()                              //=> 'a'
a.sample(2)                             //=> ['a', 'c']
```

#### transpose

```js
a = [[1,2], [3,4], [5,6]]
a.transpose()                           //=> [[1, 3, 5], [2, 4, 6]]
```

#### uniq

```js
a = [ "a", "a", "b", "b", "c" ]
a.uniq()                                //=> ["a", "b", "c"]
```

#### each

```js
a = [ "a", "a", "b", "b", "c" ]
a.each((x)=>console.log(x))
Output:
a
a
b
b
c
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