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
    return(this.casecmp(secondString) === 0);
};

/*
    "hello".center(4)         #=> "hello"
    "hello".center(20)        #=> "       hello        "
    "hello".center(20, '123') #=> "1231231hello12312312"
 */
String.prototype.center = function (width, padstr = ' ') {
    var pad = Math.abs(this.length - width)/2;
    return(this.padStart(pad+this.length, padstr).padEnd(pad*2+this.length, padstr))
};

/*
    a = "abcde"
    a.chr    #=> "a"
 */
String.prototype.chr = function () {
    return(this[0])
};

/*
   "hEllO".downcase   #=> "hello"

 */
String.prototype.downcase = function () {
    return(this.toLowerCase())
};

/*
   "hEllO".upcase   #=> "HELLO"

 */
String.prototype.upcase = function () {
    return(this.toUpperCase())
};

/*
   "hello".each_char {|c| print c, ' ' }
    produces:

    h e l l o
 */
String.prototype.each_char = function (func) {
    this.split('').forEach(function(chr, index){
        func(chr)
    });
    return(this)
};


/*
   "hello".empty?   #=> false
    " ".empty?       #=> false
    "".empty?        #=> true
 */
String.prototype.empty_ = function () {
    return(this == '');
};


/*
   "hello".end_with?("ello")               #=> true

    # returns true if one of the +suffixes+ matches.
    "hello".end_with?("heaven", "ello")     #=> true
    "hello".end_with?("heaven", "paradise") #=> false
 */
String.prototype.end_with_ = function (end_string) {
    return(this.split(end_string).slice(-1)[0] === '');
};

/*
    "hello".gsub(/[aeiou]/, '*')                  #=> "h*ll*"
    "hello".gsub(/([aeiou])/, '<\1>')             #=> "h<e>ll<o>"
 */
String.prototype.gsub = function (pattern, replacement) {
    return(this.replace(new RegExp(pattern, 'g'), replacement));
};



/*
    "hello".include? "lo"   #=> true
    "hello".include? "ol"   #=> false
    "hello".include? ?h     #=> true
 */
String.prototype.include_ = function (str) {
    return(this.includes(str));
};


/*
    "hello".index('e')             #=> 1
    "hello".index('lo')            #=> 3
    "hello".index('a')             #=> nil
    "hello".index(?e)              #=> 1
    "hello".index(/[aeiou]/, -3)   #=> 4
 */
String.prototype.index = function (str) {
    var result = this.indexOf(str);
    return(result==-1 ? null : result);
};

/*
    todo: not proper
    "hello\nworld\n".lines              #=> ["hello\n", "world\n"]
    "hello  world".lines(' ')           #=> ["hello ", " ", "world"]
    "hello\nworld\n".lines(chomp: true) #=> ["hello", "world"]
 */
String.prototype.lines = function (chomp = true) {
    return(this.split('\n'));
};

/*
    "  hello  ".lstrip   #=> "hello  "
    "hello".lstrip       #=> "hello"
 */
String.prototype.lstrip = function () {
    return(this.trimLeft());
};

/*
    "  hello  ".rstrip   #=> "  hello"
    "hello".rstrip       #=> "hello"
 */
String.prototype.rstrip = function () {
    return(this.trimRight());
};

/*
    "Ruby".match?(/R.../)    #=> true
    "Ruby".match?(/R.../, 1) #=> false
    "Ruby".match?(/P.../)    #=> false
 */
String.prototype.match_ = function (pattern) {
    return(!!this.match(pattern));
};


/*
    "abcd".succ        #=> "abce"
    "THX1138".succ     #=> "THX1139"
    "<<koala>>".succ   #=> "<<koalb>>"
 */
String.prototype.succ = function () {
    return(this.slice(0,-1)+String.fromCharCode(this.slice(-1).charCodeAt(0)+1));
};
String.prototype.next = function () {
    return(this.succ());
};

/*
    "a".ord
 */
String.prototype.ord = function () {
    return(this.charCodeAt(0));
};


/*
    a = "!"
    a.prepend("hello ", "world") #=> "hello world!"
    a                            #=> "hello world!"
 */
String.prototype.prepend = function (collection_string) {
    if(Array.isArray(collection_string)) {
        return (collection_string.join(' ') + this);
    }else{
        return(collection_string.toString()+ this)
    }
};



/*
    "stressed".reverse   #=> "desserts"
 */
String.prototype.reverse = function() {
    return(this.split('').reverse().join(''))
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
String.prototype.scan = function(pattern) {
    return(this.match(new RegExp(pattern, 'g')));
};


/*
    todo: not complete
    "cruel world".size()  #=> 11
 */
String.prototype.size = function (){
    return(this.length);
};


/*
    "hello".start_with?("hell")               #=> true
    "hello".start_with?(/H/i)                 #=> true

    # returns true if one of the prefixes matches.
    "hello".start_with?("heaven", "hell")     #=> true
    "hello".start_with?("heaven", "paradise") #=> false
 */
String.prototype.start_with_ = function (str){
    return(this.startsWith(str));
};


/*
    "hello".sub(/[aeiou]/, '*')                  #=> "h*llo"
    "hello".sub(/([aeiou])/, '<\1>')             #=> "h<e>llo"
    "hello".sub(/./) {|s| s.ord.to_s + ' ' }     #=> "104 ello"
    "hello".sub(/(?<foo>[aeiou])/, '*\k<foo>*')  #=> "h*e*llo"
 */
String.prototype.sub = function (pattern, replacement){
    return(this.replace(pattern, replacement));
};


// TODO
/*
  - Range
  -
 */
