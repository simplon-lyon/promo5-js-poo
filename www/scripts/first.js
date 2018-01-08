
class SmallDog {
    
    constructor(paramName,paramRace,paramBirthdate) {
      this.name = paramName;
      this.race = paramRace;
      this.birthdate = paramBirthdate;
    }

    bark() {
        alert('waf');
    }
}


let doge = new SmallDog('rex', 'corgi', '10/05/2017');



console.log(doge);
