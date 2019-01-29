class Koerper {
  constructor(height, age) {
    this.height = height;
    this.age = age;
  }
  get alterVor10Jahren() {
    return this.berrechneAlterVor10Jahren();
  }
  set name(newName) {
    this._name = newName;
    console.log(newName);
  }

  berrechneAlterVor10Jahren() {
    return this.age - 10;
  }
}
const stefKoerper = new Koerper(174, 52);
stefKoerper.colorOfHair = "brown";
stefKoerper.name = "Klaus Peter";

console.log(stefKoerper.newName);
console.log(stefKoerper.alterVor10Jahren);
console.log(stefKoerper.colorOfHair);
