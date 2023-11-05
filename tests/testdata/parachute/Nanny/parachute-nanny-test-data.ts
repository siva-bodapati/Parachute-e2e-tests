function generateRandomGmailUsername(baseUsername: string, startNumber: number, endNumber: number): string {
  const randomNum = Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber;
  return `${baseUsername}+${randomNum}@gmail.com`;
}

const baseUsername = 'bodapatisskumar';
const startNumber = 1;
const endNumber = 10000;

// Generate one random username
const randomUsername = generateRandomGmailUsername(baseUsername, startNumber, endNumber);

// Assign the random username to the credentials
export const parachuteNannysignupSuccessCredentials = {
  username: randomUsername
};

export const fillNannyAccountDetails = {
  firstName: 'Pravalika',
  lastName: 'nair',
  password: 'S!va1920',
  confirmPassword: 'S!va1920',
  countrycode: ' China(+86)',
  phonenumber: '7207195787',
  get displayname() {
    return `${this.firstName} ${this.lastName}`;
  },
  headline: 'Testing puprose',
  intro: 'Testing purpose',
  salary: '2000',
  age: '29',
  year: '5',
  month: '3',
  caredbabies: '13',
  Title: 'Hello',
  docyear: '2003'

}
// Login test data
export const parachueNannyLoginCredentials = {
  username: 'bodapatisskumar+6963@gmail.com',
  password: 'S!va1920',
};

export const deleteCertificateAccountCredentials = {
  username: 'bodapatisskumar+6963@gmail.com',
  password: 'S!va1920',
};

// nanny edit profile test data
export const editNannyProfileDetails = {
  first_Name: 'Regina',
  last_Name: 'shekar',
  password: 'S!va1920',
  confirmPassword: 'S!va1920',
  countrycode: ' China(+86)',
  phonenumber: '7207195787',
  get editeddisplayname() {
    return `${this.first_Name} ${this.last_Name}`;
  },
  headline: 'Hi This is Nanny',
  intro: 'Testing purpose',
  salary: '5000',
  age: '29',
  year: '6',
  month: '7',
  caredbabies: '15',
  Title: 'Hello',
  docyear: '2003'

}

//Nanny apply Job details data
export const nannyApplyJobData = {
  expectedSalary: '5000',
  workingHours: '28',
  coverLetter: 'Testing purpose only'
}