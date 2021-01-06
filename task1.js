//Task 1
Array.prototype.pluck =  function(prop) {
    return this.map(el => el[prop]);
  }
//Task 3
Array.prototype.splitArray = function(num) {
  var array = [];

  while (this.length){
    array.push(this.splice(0, num))
  }
  return array;
}
//Task 4
Array.prototype.clearArray = function(){
  return this.filter((val) => val)
}
//Task 5
Array.prototype.concatArray =  function( ...arr) {
  return this.concat(arr.reduce((array, item) => array.concat(item), []))
 }
//Task 6
 Array.prototype.rm = function(count = 1) {
  this.splice(0, count);
  return this
}
//Task 8
Array.prototype.replaceIn =  function (n, start=0, end = this.length){
     for (let i = start; i < end; i++) {
        this[i] = n; 
    }
    return this
   }
//Task 10
Array.prototype.uni = function () {
    return this.filter((element, index, arr) => arr.indexOf(element) === index && arr.lastIndexOf(element) !== index);
};
//Task 11
Array.prototype.nfa = function (index){
  let res = ()=> index >= 0 ? this[index]: this.slice(index)[0]
    return res()
}
//Task 13

Array.prototype.group = function(arr2, arr3){
  let test =[];
  for (let i = 0; i < this.length; i++) {
    test.push([this[i], arr2[i], arr3[i]]);
}
  return test
}

//Task 14
Array.prototype.implode = function(n) {
  return this.join(n);
}
//Task 17
Array.prototype.rnd = function() {
  return this.sort(() => (Math.random() - 0.5))
}
//Task 18
Array.prototype.diff = function (arr2){
  return this
  .filter(x => arr2.indexOf(x) == -1)
  .concat(arr2.filter(x => this.indexOf(x) == -1));
}
//Task 20
Array.prototype.fn = function() {
  return this.sort((a,b) =>
  this.filter(v => v===a).length
      - this.filter(v => v===b).length
  ).pop();
}


  module.exports = Array.prototype.pluck
  module.exports = Array.prototype.splitArray
  module.exports = Array.prototype.clearArray
  module.exports = Array.prototype.concatArray
  module.exports = Array.prototype.rm
  module.exports = Array.prototype.replaceIn
  module.exports = Array.prototype.uni
  module.exports = Array.prototype.nfa
  module.exports = Array.prototype.implode
  module.exports = Array.prototype.rnd
  module.exports = Array.prototype.diff
  module.exports = Array.prototype.fn
  module.exports = Array.prototype.group
