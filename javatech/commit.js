//console.log("Hello Javascript Geeks!");
var User = function (username, commitCount) {
    this.username = username;
    this.commitCount = commitCount;

    this.getInfo = function () {
      console.log(`Commited ${this.commitCount} commits on the OpenMRS Repo`);
    }

    this.printCoder = function() {

        return `Daud Kakumirizi volunteers with OpenMRS Organisation`;
    }
}

User.prototype.getUserName = function () {
    console.log(`Your user name is ${this.username}`);
}

var patientConcept = new User('kdaud', '7');
console.log(patientConcept);
patientConcept.getInfo();
patientConcept.getUserName();
console.log(patientConcept.printCoder());
//console.log(patientData.printCoder());

var patientData = new User('smale', '65');
//console.log(patientData.getInfo());
patientData.getInfo();
patientData.getUserName();
console.log(patientConcept.printCoder());

//coding with reactjs

