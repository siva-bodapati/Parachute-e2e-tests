export const ParentCredentials = {
  email: 'subhashini+p@villageit.services',
  password: 'Password@123',
};

export const NannyCredentials = {
  email: 'subhashini+n@villageit.services',
  password: 'Password@123',
};


function generateRandomGmailUsername(baseUsername: string, startNumber: number, endNumber: number): string {
  const randomNum = Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber;
  return `${baseUsername}+${randomNum}@gmail.com`;
}

const baseUsername = 'subha.v2005';
const startNumber = 1;
const endNumber = 10000;

// Generate one random username
const randomUsername = generateRandomGmailUsername(baseUsername, startNumber, endNumber);

// Assign the random username to the credentials
export const ParentSignupCredentials = {
  email: randomUsername,

};

export const fillParentAccountDetails = {
  firstName: baseUsername,
  lastName: '123',
  password: 'Password@123',
  confirmPassword: 'Password@123',
  countrycode: ' China(+86)',
  phonenumber: '7207195787',
  displayname: randomUsername,
}

//Generating random Text for JobTitle
function generateRandomString(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

const baseJobTitle = 'Automation Job - ';
const randomJobTitle = `${baseJobTitle}${generateRandomString(4)}`;

export const fillJobDetails = {
  jobTitle: randomJobTitle,
  description: 'Nanny needs to be experienced',
  budget: '10009$HK',

}