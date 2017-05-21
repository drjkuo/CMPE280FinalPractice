// powerN(x,n)

function powerN(x,n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  return powerN(x,n-1) * x;
}


// powerFunctionGen()

function powerFunctionGen(n) {
  return function(x) {
    return powerN(x,n);
  }
}












var book = function (title, pages) {
   this.title = title;
   this.pages = pages;
}

book.prototype.alertinfo = function() {
   console.log(this.title);
}

var book1 = new book("Lean startup", 100);

// console.log(book1);

// var comicbook =

// book1.alertinfo();

var book3 = Object.create(book1);

// console.log(book3);

var fiction = function (title,pages,type) {
   book.call(this,title,pages);
   this.type = type;
}

fiction.prototype = Object.create(book.prototype);
fiction.prototype.construnctor = fiction;
// console.log(typeof fiction.prototype.construnctor);
// console.log(fiction.prototype);

fiction.prototype.alertinfo = function () {
   book.prototype.alertinfo.call(this);
}

console.log(fiction.prototype.alertinfo);
