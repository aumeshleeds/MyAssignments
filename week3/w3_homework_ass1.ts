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
 
class UserAuthenticator{


   public login(username:string, password: string, AccountType?:string): void{

      console.log(`The user details are username ${username} password ${password} and account Type ${AccountType}`)

   }

   public logout(): string{
      return "This is logout method"
   }

   public passwordReset(): string{
      return "password reset successful"
   }
}

const UserAuthen = new UserAuthenticator();
UserAuthen.login("Umesh", "abc123")
UserAuthen.login("Umesh", "abc123", "Admin")
const logOut = UserAuthen.logout()
console.log(logOut)
const passReset = UserAuthen.passwordReset()
console.log(passReset)
