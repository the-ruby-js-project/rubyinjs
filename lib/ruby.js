// Note: No support for bang! methods as Strings are immutable in JS

/*
    "Ho! " * 3   #=> "Ho! Ho! Ho! "
    "Ho! " * 0   #=> ""

 */
String.prototype.x = function (n) {
    return (this.repeat(n));
};

/*
    "hello".capitalize    #=> "Hello"
    "HELLO".capitalize    #=> "Hello"
    "123ABC".capitalize   #=> "123abc"
 */
String.prototype.capitalize = function () {
    return (this[0].toUpperCase() + this.slice(1));
};

/*
    "abcdef".casecmp("abcde")     #=> 1
    "aBcDeF".casecmp("abcdef")    #=> 0
    "abcdef".casecmp("abcdefg")   #=> -1
    "abcdef".casecmp("ABCDEF")    #=> 0
 */
String.prototype.casecmp = function (secondString) {
    if (this.toLowerCase() > secondString.toLowerCase()) {
        return 1;
    } else if (this.toLowerCase() === secondString.toLowerCase()) {
        return 0;
    } else if (this.toLowerCase() < secondString.toLowerCase()) {
        return -1;
    }
};

/*
    "abcdef".casecmp?("abcde")     #=> false
    "aBcDeF".casecmp?("abcdef")    #=> true
    "abcdef".casecmp?("abcdefg")   #=> false
    "abcdef".casecmp?("ABCDEF")    #=> true
 */
String.prototype.casecmp_ = function (secondString) {
    return (this.casecmp(secondString) === 0);
};

/*
    "hello".center(4)         #=> "hello"
    "hello".center(20)        #=> "       hello        "
    "hello".center(20, '123') #=> "1231231hello12312312"
 */
String.prototype.center = function (width, padstr = ' ') {
    var pad = Math.abs(this.length - width) / 2;
    return (this.padStart(pad + this.length, padstr).padEnd(pad * 2 + this.length, padstr))
};

/*
    a = "abcde"
    a.chr    #=> "a"
 */
String.prototype.chr = function () {
    return (this[0])
};

/*
   "hEllO".downcase   #=> "hello"

 */
String.prototype.downcase = function () {
    return (this.toLowerCase())
};

/*
   "hEllO".upcase   #=> "HELLO"

 */
String.prototype.upcase = function () {
    return (this.toUpperCase())
};

/*
   "hello".each_char {|c| print c, ' ' }
    produces:

    h e l l o
 */
String.prototype.each_char = function (func) {
    this.split('').forEach(function (chr, index) {
        func(chr)
    });
    return (this)
};


/*
   "hello".empty?   #=> false
    " ".empty?       #=> false
    "".empty?        #=> true
 */
String.prototype.empty_ = function () {
    return (this == '');
};


/*
   "hello".end_with?("ello")               #=> true

    # returns true if one of the +suffixes+ matches.
    "hello".end_with?("heaven", "ello")     #=> true
    "hello".end_with?("heaven", "paradise") #=> false
 */
String.prototype.end_with_ = function (end_string) {
    return (this.split(end_string).slice(-1)[0] === '');
};

/*
    "hello".gsub(/[aeiou]/, '*')                  #=> "h*ll*"
    "hello".gsub(/([aeiou])/, '<\1>')             #=> "h<e>ll<o>"
 */
String.prototype.gsub = function (pattern, replacement) {
    return (this.replace(new RegExp(pattern, 'g'), replacement));
};


/*
    "hello".include? "lo"   #=> true
    "hello".include? "ol"   #=> false
    "hello".include? ?h     #=> true
 */
String.prototype.include_ = function (str) {
    return (this.includes(str));
};


/*
    todo: not completely done
    "hello".index('e')             #=> 1
    "hello".index('lo')            #=> 3
    "hello".index('a')             #=> nil
    "hello".index(?e)              #=> 1
 */
String.prototype.index = function (str) {
    var result = this.indexOf(str);
    return (result == -1 ? null : result);
};

/*
    todo: not proper
    "hello\nworld\n".lines              #=> ["hello\n", "world\n"]
    "hello  world".lines(' ')           #=> ["hello ", " ", "world"]
    "hello\nworld\n".lines(chomp: true) #=> ["hello", "world"]
 */
String.prototype.lines = function (str = '\n', chomp = true) {
    return (this.split(str));
};

/*
    "  hello  ".lstrip   #=> "hello  "
    "hello".lstrip       #=> "hello"
 */
String.prototype.lstrip = function () {
    return (this.trimLeft());
};

/*
    "  hello  ".rstrip   #=> "  hello"
    "hello".rstrip       #=> "hello"
 */
String.prototype.rstrip = function () {
    return (this.trimRight());
};

/*
    "Ruby".match?(/R.../)    #=> true
    "Ruby".match?(/R.../, 1) #=> false
    "Ruby".match?(/P.../)    #=> false
 */
String.prototype.match_ = function (pattern) {
    return (!!this.match(pattern));
};


/*
    "abcd".succ        #=> "abce"
    "THX1138".succ     #=> "THX1139"
    "<<koala>>".succ   #=> "<<koalb>>"
 */
String.prototype.succ = function () {
    return (this.slice(0, -1) + String.fromCharCode(this.slice(-1).charCodeAt(0) + 1));
};
String.prototype.next = function () {
    return (this.succ());
};

/*
    "a".ord
 */
String.prototype.ord = function () {
    return (this.charCodeAt(0));
};


/*
    note: non mutative
    a = "!"
    a.prepend("hello ", "world") #=> "hello world!"
 */
String.prototype.prepend = function () {
    var collection = [];

    for (var i = 0; i < arguments.length; i++) {
        collection.push(arguments[i]);
    }

    return (collection.join(' ') + this);
};


/*
    "stressed".reverse   #=> "desserts"
 */
String.prototype.reverse = function () {
    return (this.split('').reverse().join(''))
};


/*
    todo: not complete
    a = "cruel world"
    a.scan(/\w+/)        #=> ["cruel", "world"]
    a.scan(/.../)        #=> ["cru", "el ", "wor"]
    a.scan(/(...)/)      #=> [["cru"], ["el "], ["wor"]]
    a.scan(/(..)(..)/)   #=> [["cr", "ue"], ["l ", "wo"]]

    exception in js: > a.scan(/(..)(..)/)
        ==> ["crue", "l wo"] (2)
 */
String.prototype.scan = function (pattern) {
    return (this.match(new RegExp(pattern, 'g')));
};


/*
    todo: not complete
    "cruel world".size()  #=> 11
 */
String.prototype.size = function () {
    return (this.length);
};


/*
    "hello".start_with?("hell")               #=> true
    "hello".start_with?(/H/i)                 #=> true

    # returns true if one of the prefixes matches.
    "hello".start_with?("heaven", "hell")     #=> true
    "hello".start_with?("heaven", "paradise") #=> false
 */
String.prototype.start_with_ = function () {
    for (var i = 0; i < arguments.length; i++) {
        str = arguments[i];
        if (this.startsWith(str))
            return (true)
    }
    return (false);
};


/*
    todo not 100% implemented
    "hello".sub(/[aeiou]/, '*')                  #=> "h*llo"
 */
String.prototype.sub = function (pattern, replacement) {
    return (this.replace(pattern, replacement));
};


/*
    "Hello".swapcase          #=> "hELLO"
    "cYbEr_PuNk11".swapcase   #=> "CyBeR_pUnK11"
 */
String.prototype.swapcase = function () {
    result = this.split('').map(function (c) {
        return c === c.toUpperCase()
            ? c.toLowerCase()
            : c.toUpperCase()
    }).join('');
    return (result);
};

/*
    "123.45e1".to_f        #=> 1234.5
    "45.67 degrees".to_f   #=> 45.67
    "thx1138".to_f         #=> 0.0
 */
String.prototype.to_f = function () {
    return (parseFloat(this));
};


/*
    "12345".to_i             #=> 12345
    "99 red balloons".to_i   #=> 99
    "0a".to_i                #=> 0
    "0a".to_i(16)            #=> 10
    "hello".to_i             #=> 0
    "1100101".to_i(2)        #=> 101
    "1100101".to_i(8)        #=> 294977
    "1100101".to_i(10)       #=> 1100101
    "1100101".to_i(16)       #=> 17826049
 */
String.prototype.to_i = function (base = 10) {
    return (parseInt(this, base));
};


//------------------------------------------------------------------------------------------------------------------------

/*
[1, 2, 3, 4, 5, 6].at(1)  #=> 2
 */
Array.prototype.at = function (index) {
    return (this[index]);
};


/*
arr = ['a', 'b', 'c', 'd', 'e', 'f']
arr.fetch(100)                                  #=> IndexError: index 100 outside of array bounds: -6...6
arr.fetch(100, "oops")                          #=> "oops"
 */
Array.prototype.fetch = function (index, fallback = null) {
    return (this[index] || fallback);
};


/*
arr = ['a', 'b', 'c', 'd', 'e', 'f']
arr.first                             #=> 'a'
arr.first(2)                          #=> ['a', 'b']
 */
Array.prototype.first = function (count = 1) {
    result = this.slice(0, count);
    return (result.length == 1 ? result[0] : result);
};


/*
arr = ['a', 'b', 'c', 'd', 'e', 'f']
arr.take(1)                             #=> ['a']
arr.take(2)                          #=> ['a', 'b']
 */
Array.prototype.take = function (count) {
    result = this.slice(0, count);
    return (result);
};


/*
arr = ['a', 'b', 'c', 'd', 'e', 'f']
arr.last                             #=> 'f'
arr.last(2)                          #=> ['e', 'f']
 */
Array.prototype.first = function (count = 1) {
    result = this.slice(0, count);
    return (result.length == 1 ? result[0] : result);
};


/*
browsers = ['Chrome', 'Firefox', 'Safari', 'Opera', 'IE']
browsers.length #=> 5
browsers.count #=> 5
 */
Array.prototype.count = function () {
    return (this.length);
};

/*
browsers = ['Chrome', 'Firefox', 'Safari', 'Opera', 'IE']
browsers.include?('Konqueror') #=> false
 */
Array.prototype.include_ = function (item) {
    return this.includes(item);
};


/*
browsers = ['Chrome', 'Firefox', 'Safari', 'Opera', 'IE']
browsers.empty? #=> false
 */
Array.prototype.empty_ = function () {
    return (this.length > 0 ? false : true);
};


/*
a = %w{ a b c d }
a.insert(2, 99)         #=> ["a", "b", 99, "c", "d"]
a.insert(-2, 1, 2, 3)   #=> ["a", "b", 99, "c", 1, 2, 3, "d"]
 */
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
    return this;
};

/*
[ 1, 2, 3, 4, 5 ].size   #=> 5
 */
Array.prototype.size = function () {
    return this.length;
};

/*
[ 1, 2, 3, 4, 5 ].map {}   #=> 5
 */
Array.prototype.collect = function (func) {
    return this.map(func);
};


/*
a = [ "a", "b", "c", "d" ]
a.pop     #=> "d"
a.pop(2)  #=> ["b", "c"]
a         #=> ["a"]
 */
Array.prototype.pop = function (count) {
    return this.map(func);
};


/*
[ 1, 1, 3, 5 ] & [ 1, 2, 3 ]   #=> [ 1, 3 ]
 */
Array.prototype.and = function (array) {
    var result = this.filter(value => -1 !== array.indexOf(value))
    return result;
};


/*
[ 1, 2, 3 ] * 3    #=> [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ]
[ 1, 2, 3 ] * ","  #=> "1,2,3"
 */
Array.prototype.x = function (multiplier) {
    var result = [];

    if (Number.isInteger(multiplier)) {

        for (var i = 0; i < multiplier; i++) {
            this.forEach(function (item) {
                result.push(item);
            });
        }

    } else if (typeof multiplier === 'string') {
        result = this.join(multiplier)
    }
    return result;
};


/*
[ 1, 2, 3 ] + [ 4, 5 ]    #=> [ 1, 2, 3, 4, 5 ]
 */
Array.prototype.plus = function (array) {
    var result = [...this, ...array];
    return result;
};


/*
[ 1, 1, 2, 2, 3, 3, 4, 5 ] - [ 1, 2, 4 ]  #=>  [ 3, 3, 5 ]
 */
Array.prototype.minus = function (array) {
    var result = this.filter(n => !array.includes(n));
    return result;
};


/*
s1 = [ "colors", "red", "blue", "green" ]
s2 = [ "letters", "a", "b", "c" ]
s3 = "foo"
a  = [ s1, s2, s3 ]
a.assoc("letters")  #=> [ "letters", "a", "b", "c" ]
a.assoc("foo")      #=> nil
 */
Array.prototype.assoc = function (obj) {
    var result = null;
    this.forEach(function (array) {
        if (array[0] === obj) {
            result = array;
        }
    });

    return result;
};

/*
a = [ "a", "b", "c", "d", "e" ]
a.at(0)     #=> "a"
a.at(-1)    #=> "e"
 */
Array.prototype.at = function (index) {
    var calculatedIndex = index > -1 ? index : this.length + index
    return this[calculatedIndex];
};


/*
a = [ "a", "b", "c", "d", "e" ]
a.clear    #=> [ ]
 */
Array.prototype.clear = function () {
    this.length = 0;
    return this;
};

/*
[ "a", nil, "b", nil, "c", nil ].compact
                  #=> [ "a", "b", "c" ]
js:
[1, 2, 3, null, undefined, true, false, 4, 5].compact() //=> [1, 2, 3, true, false, 4, 5]
 */
Array.prototype.compact = function () {
    var result = this.filter(function (item) {
        return (item !== null && item !== undefined)
    });

    return result;
};

/*
a = ["a", "b", "c"]
a.cycle {|x| puts x }  # print, a, b, c, a, b, c,.. forever.
a.cycle(2) {|x| puts x }  # print, a, b, c, a, b, c.
 */
Array.prototype.cycle = function (count = -1, func) {
    while (count !== 0) {
        this.forEach(func);
        count--;
    }
    return this;
};


/*
a = [ "a", "b", "b", "b", "c" ]
a.delete("b")                   #=> "b"
a                               #=> ["a", "c"]
a.delete("z")                   #=> nil
a.delete("z") { "not found" }   #=> "not found"
 */
Array.prototype.delete = function (item, func = null) {
    var originalLength = this.length;
    for (var i = 0; i < this.length; i++) {
        if (this[i] === item) {
            this.splice(i, 1);
            i--;
        }
    }

    return originalLength === this.length ? (!!func ? func() : null) : item;
};


/*
a = %w( ant bat cat dog )
a.delete_at(2)    #=> "cat"
a                 #=> ["ant", "bat", "dog"]
a.delete_at(99)   #=> nil
 */
Array.prototype.delete_at = function (index) {
    var item = this[index];
    if (item) {
        this.splice(index, 1);
        return item
    } else {
        return null;
    }
};


// TODO
/*
  - Range
  -
 */
