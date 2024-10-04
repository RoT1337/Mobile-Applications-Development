class User {
    private username:string;
    private email:string;
    private password:string;

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }
}

const user1 = new User()
user1.setEmail("temporary@gmail.com")
user1.setPassword("password")
user1.setUsername("Checks")

console.log("Email: ", user1.getEmail())
console.log("Username: ", user1.getUsername())
console.log("Password: ", user1.getPassword())