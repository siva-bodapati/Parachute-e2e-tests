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
    firstName: 'nanny',
    lastName: '123',
    password: 'S!va1920',
    confirmPassword: 'S!va1920',
    countrycode: ' China(+86)',
    phonenumber: '7207195787',
    displayname: 'nanny 123',
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