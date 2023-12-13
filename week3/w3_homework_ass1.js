/**
 * TypeScript Assignments

### Assignment 1: Automated Testing of a User Authentication System
 
Objective:
Practice integrating classes and methods into a test script for a user authentication system.
 
Instructions:
1. Create a class as `UserAuthenticator`
2. Create a methods like login(with 2 mandatory parameters and one optional parameter), logout,
   and password reset.
3. Create instance of the class and call the methods
*/
var UserAuthenticator = /** @class */ (function () {
    function UserAuthenticator() {
    }
    UserAuthenticator.prototype.login = function (username, password, AccountType) {
        console.log("The user details are username ".concat(username, " password ").concat(password, " and account Type ").concat(AccountType));
    };
    UserAuthenticator.prototype.logout = function () {
        return "This is logout method";
    };
    UserAuthenticator.prototype.passwordReset = function () {
        return "password reset successful";
    };
    return UserAuthenticator;
}());
var UserAuthen = new UserAuthenticator();
UserAuthen.login("Umesh", "abc123");
UserAuthen.login("Umesh", "abc123", "Admin");
var logOut = UserAuthen.logout();
console.log(logOut);
var passReset = UserAuthen.passwordReset();
console.log(passReset);
