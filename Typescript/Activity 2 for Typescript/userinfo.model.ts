enum Gender {
    Male = "Male",
    Female = "Female",
    Other = "Other"
}

enum CivilStatus {
    Single = "Single",
    Married = "Married",
    Divorced = "Divorced",
    Widowed = "Widowed",
    Separated = "Separated"
}

class UserInfo {
    private firstname:string
    private middlename:string
    private lastname:string
    private phoneno:string
    private gender:Gender
    private birthdate:Date
    private address:string
    private civilStatus:CivilStatus

    public getFirstname(): string {
        return this.firstname;
    }

    public setFirstname(firstname: string): void {
        this.firstname = firstname;
    }

    public getMiddlename(): string {
        return this.middlename;
    }

    public setMiddlename(middlename: string): void {
        this.middlename = middlename;
    }

    public getLastname(): string {
        return this.lastname;
    }

    public setLastname(lastname: string): void {
        this.lastname = lastname;
    }

    public getPhoneno(): string {
        return this.phoneno;
    }

    public setPhoneno(phoneno: string): void {
        this.phoneno = phoneno;
    }

    public getGender(): Gender {
        return this.gender;
    }

    public setGender(gender: Gender): void {
        this.gender = gender;
    }

    public getBirthdate(): Date {
        return this.birthdate;
    }

    public setBirthdate(birthdate: Date): void {
        this.birthdate = birthdate;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getCivilStatus(): CivilStatus {
        return this.civilStatus;
    }

    public setCivilStatus(civilStatus: CivilStatus): void {
        this.civilStatus = civilStatus;
    }
}

const user1 = new UserInfo()
user1.setFirstname("Robien Lee")
user1.setMiddlename("Peña")
user1.setLastname("Tan")
user1.setPhoneno("091910291091")
user1.setGender(Gender.Other)
user1.setBirthdate(new Date("1990-06-02"))
user1.setAddress("Home")
user1.setCivilStatus(CivilStatus.Single)

console.log("First Name: ", user1.getFirstname());
console.log("Middle Name: ", user1.getMiddlename());
console.log("Last Name: ", user1.getLastname());
console.log("Phone Number: ", user1.getPhoneno());
console.log("Gender: ", user1.getGender());
console.log("Birthdate: ", user1.getBirthdate());
console.log("Address: ", user1.getAddress());
console.log("Civil Status: ", user1.getCivilStatus());