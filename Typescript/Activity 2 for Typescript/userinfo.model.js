var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Other"] = "Other";
})(Gender || (Gender = {}));
var CivilStatus;
(function (CivilStatus) {
    CivilStatus["Single"] = "Single";
    CivilStatus["Married"] = "Married";
    CivilStatus["Divorced"] = "Divorced";
    CivilStatus["Widowed"] = "Widowed";
    CivilStatus["Separated"] = "Separated";
})(CivilStatus || (CivilStatus = {}));
var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    UserInfo.prototype.getFirstname = function () {
        return this.firstname;
    };
    UserInfo.prototype.setFirstname = function (firstname) {
        this.firstname = firstname;
    };
    UserInfo.prototype.getMiddlename = function () {
        return this.middlename;
    };
    UserInfo.prototype.setMiddlename = function (middlename) {
        this.middlename = middlename;
    };
    UserInfo.prototype.getLastname = function () {
        return this.lastname;
    };
    UserInfo.prototype.setLastname = function (lastname) {
        this.lastname = lastname;
    };
    UserInfo.prototype.getPhoneno = function () {
        return this.phoneno;
    };
    UserInfo.prototype.setPhoneno = function (phoneno) {
        this.phoneno = phoneno;
    };
    UserInfo.prototype.getGender = function () {
        return this.gender;
    };
    UserInfo.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    UserInfo.prototype.getBirthdate = function () {
        return this.birthdate;
    };
    UserInfo.prototype.setBirthdate = function (birthdate) {
        this.birthdate = birthdate;
    };
    UserInfo.prototype.getAddress = function () {
        return this.address;
    };
    UserInfo.prototype.setAddress = function (address) {
        this.address = address;
    };
    UserInfo.prototype.getCivilStatus = function () {
        return this.civilStatus;
    };
    UserInfo.prototype.setCivilStatus = function (civilStatus) {
        this.civilStatus = civilStatus;
    };
    return UserInfo;
}());
var user1 = new UserInfo();
user1.setFirstname("Robien Lee");
user1.setMiddlename("Peña");
user1.setLastname("Tan");
user1.setPhoneno("091910291091");
user1.setGender(Gender.Other);
user1.setBirthdate(new Date("1990-06-02"));
user1.setAddress("Home");
user1.setCivilStatus(CivilStatus.Single);
console.log("First Name: ", user1.getFirstname());
console.log("Middle Name: ", user1.getMiddlename());
console.log("Last Name: ", user1.getLastname());
console.log("Phone Number: ", user1.getPhoneno());
console.log("Gender: ", user1.getGender());
console.log("Birthdate: ", user1.getBirthdate());
console.log("Address: ", user1.getAddress());
console.log("Civil Status: ", user1.getCivilStatus());
