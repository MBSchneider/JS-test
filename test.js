function Dog(name, breed, mood, age) {
  this.name = name;
  this.breed = breed;
  this.mood = mood;
  this.age = age;
  this.bark = function(){
    return "Woof!";
  }
  this.nap = function(){
    this.mood = "sleepy";
    console.log(name+": Zzzzzzz");
  };
  this.goForWalk = function(){
    this.mood = "excited";
    console.log(name+": Oh boy, I <3 walks!!!");
  };
  this.toString = function(){
    for(var property in this){
      console.log(property + ' is ' + this[property]);
    };
  };
}

spike = new Dog("Spike", "Pug", "playful", 2);
console.log(spike);

spike.nap();
console.log(spike);

spike.goForWalk();
console.log(spike);

console.log(spike.toString());
