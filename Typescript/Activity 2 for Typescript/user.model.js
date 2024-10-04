var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.setUsername = function (username) {
        this.username = username;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    return User;
}());
var user1 = new User();
user1.setEmail("temporary@gmail.com");
user1.setPassword("password");
user1.setUsername("Checks");
console.log("Email: ", user1.getEmail());
console.log("Username: ", user1.getUsername());
console.log("Password: ", user1.getPassword());
