/*
Fill the class (check at the end for expected output)
*/

class registeredUser {
  constructor(name, password) {
    this.name = name;
    this.password = password;
    this.registerDate = Date.now();
  }

  get name() {
    return this.name;
  }

  get pass() {
    return this.password;
  }

  set name(newName) {
    this._name = newName;
    // console.log(newName);
  }

  set pass(newPassword) {
    this.password = newPassword;
  }

  showInfo() {
    console.log(
      `User ${this._name} has password "${this.password}" and registered at ${
        this.registerDate
      }`
    );
  }
}
let user = new registeredUser("Leo", "oldSecret");
user.showInfo();
// update user
user.name = "leandro";
user.pass = "newSecret";
user.showInfo();
let user2 = new registeredUser("Leandro", "newSecret");
