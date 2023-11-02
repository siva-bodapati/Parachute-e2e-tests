import { MAX_TIMEOUT, clear, click, clickAndNavigate, fill, getAllLocators, getText, isElementAttached, isElementChecked, isElementVisible, uploadFiles, waitForElementToBeVisible } from 'vasu-playwright-utils';
import { fillNannyAccountDetails, parachueNannyLoginCredentials, editNannyProfileDetails, deleteCertificateAccountCredentials } from '@testdata/parachute/Nanny/parachute-nanny-test-data';
import { getLocator, getLocatorByPlaceholder, getLocatorByRole } from 'vasu-playwright-utils';
import { expectElementToBeVisible } from 'vasu-playwright-utils';
import { expect } from '@pagesetup';


const emailAddress = `//*[@name='email']`;
const password = () => getLocator(`//*[@type='password']`).or(getLocatorByPlaceholder('Password', { exact: true }));
const login = () => getLocatorByRole('button', { name: ' Log in ' });
const myProfileText = `//*[contains(text(),'My profile')]`;
const editProfileButton = `//*[contains(text(),'Edit profile ')]`
const nannyEditDisplayName = `(//h5)[1]`
const dashboardNannyDsiplaName = '(//h4//span)[1]'
const dashboardNannyAge = `(//p//span)[1]`
const dashboardcaredBabies = `(//p//span)[2]`
const dashboardHeadline = `(//p)[4]`
// This icon for ediing displayname, firstname, lastname, headline and age
const profileNamesEditIcon = `(//*[@class='action']//*[@class='fa fa-pencil'])[1]`
const generalInfoText = `//*[contains(text(), 'General Info')]`
const nannyEditProfileDisplayName = `//*[@formcontrolname='display_name']`
const nannyEditProfileFirstName = `//*[@formcontrolname='first_name']`
const nannyEditProfileLastName = `//*[@formcontrolname='last_name']`
const nannyEditProfileBirtYear = `//*[@formcontrolname='age_year']`
const nannyEditProfileHeadline = `//*[@formcontrolname='description']`
const generalInfoButton = () => getLocatorByRole('button', { name: 'Save ' });
//This code updated nanny expected salary
const editProfileExpectedSalary = `//*[@id='earning']`
//This code updated nanny about
const aboutEditIcon = `(//*[@class='action']//*[@class='fa fa-pencil'])[2]`
const editAbout = `//*[@id='descriptionTextarea']`
const aboutSavebutton = () => getLocatorByRole('button', { name: 'Save ' });
const aboutText = `//h3[contains(text(),'About')]`
//This code update service area
const alreadycheckservicearea = `//*[@for='611b8b29c7ee7c242cb9a4a0']`
const serviceAreaEditIcon = `(//*[@class='action']//*[@class='fa fa-pencil'])[3]`
const changeserviveareaOption = `//*[@id='611b8b29c7ee7c242cb9a4a0']`
const clickServiceUpdate = () => getLocatorByRole('button', { name: 'Update' });
//This code nanny profile edit
const editpartime = `//*[@for='no6']`
const editHoursService = `//*[@for='no5']`
const editoverseasEmployement = `//*[@for='overno']`
const editpets = `//*[@for='petsSmall']`
const edithelpers = `//*[@for='no3']`
//This code works for update cared babies, experience update, cooking
const editExperienceYear = `(//input[@class='form-control rounded-pill sm ng-pristine ng-valid ng-touched ng-untouched'])[1]`
const editExperienceMonth = `(//input[@class='form-control rounded-pill sm ng-pristine ng-valid ng-touched ng-untouched'])[2]`
const editExperienceInCarredBabies = `//*[@class='form-control rounded-pill sm ng-untouched ng-pristine ng-valid']`
const editCaringtwins = `//*[@for='no2']`
const experienceInCooking = `//*[@for='no1']`
// This code workes for add/edit, delete/add certificates
const addcertificateText = `//td[contains(text(), 'Add Certificate')]`
const AddcertificateAddIcon = `(//i[@class= 'fa fa-plus-circle'])[1]`
const AddcertificateTitle = `(//input[@name='title'])[1]`
const editCertificateTitle = `(//input[@name='title'])[2]`
const attachment = `(//input[@id='attachement'])[1]`
const editAttachment = `(//input[@id= 'attachement'])[3]`
const saveincertificate = () => getLocatorByRole('button', { name: 'Save ' });
const editiconCertificate = `(//td//i[@class='fa fa-pencil'])[1]`
const deleteIconInCertificate = `(//*[@class='fa fa-trash'])[1]`
const certificateName = `(//td[contains(text(), 'Hello')])[1]`
const saveAndViewProfile = `//a[contains(text(),'Save and view profile')]`
const noCertificateText = `//span[contains(text(),'No certificate uploaded')]`
//This code works for showcase delete, add, edit
const visibleGallery = `(//*[@data-fancybox='gallery2'])[1]`
const visibleCameraIcon = `//*[@class='fa fa-camera']`
const deleteShowCaseImage = `(//*[@class='pc pc-trash'])[1]`
const EditUploadInShowCase = `(//*[@name='attachement'])[2]`
const saveButtonInShowCase = `(//*[contains(text(),'Upload')])[2]`
const saveInShowCase = () => getLocatorByRole('button', { name: 'Save ' });
//this code verify view profile
const verifyDisplayNameInViewProfile = `(//h5//span)[1]`
const verifyAgeInViewProfile = `(//p//span)[1]`
const verifyCaredBabiesInProfileView = `(//p//span)[2]`
const verifyHeadlineInViewProfile = `(//p)[2]`
const verifyAboutInViewProfile = `(//ul//p)[1]`
const caredBabiesInExperience = `(//div[@class='col-4 col-md-6 col-lg-7']//span)[6]`
const experienceInViewProfile = `(//div[@class='col-4 col-md-6 col-lg-7']//span)[7]`
const certificateText = `//table[@class='table table-sm table-borderless table-0 mb-0']//td`
const verifySalaryInViewProfile = `(//h5)[3]`
const dashboardIcon = `(//a)[19]`

export async function parachutelogInSuccessfully() {
    await fill(emailAddress, parachueNannyLoginCredentials.username);
    await fill(password(), parachueNannyLoginCredentials.password);
    await clickAndNavigate(login());
}

export async function deleteCretificateCredentials() {
    await fill(emailAddress, deleteCertificateAccountCredentials.username);
    await fill(password(), deleteCertificateAccountCredentials.password);
    await clickAndNavigate(login());
}

export async function myProfileTextISDisplayed() {
    await expectElementToBeVisible(myProfileText);
}

export async function clickEditProfileButton() {
    await click(editProfileButton)
}

export async function verifyNannyDisplayName() {
    // const expectNannyDisplayName = await getText(nannyEditDisplayName);
    // const actualNannyDisplayName = await fillNannyAccountDetails.displayname;
    // expect(expectNannyDisplayName).toMatch(actualNannyDisplayName)
    await click(profileNamesEditIcon)
}

export async function generalInfoTextISDisplayed() {
    await expectElementToBeVisible(generalInfoText);
}

export async function fillGeneralInfo() {
    await fill(nannyEditProfileFirstName, editNannyProfileDetails.first_Name)
    await fill(nannyEditProfileLastName, editNannyProfileDetails.last_Name)
    await fill(nannyEditProfileDisplayName, editNannyProfileDetails.editeddisplayname)
    await fill(nannyEditProfileBirtYear, editNannyProfileDetails.age)
    await fill(nannyEditProfileHeadline, editNannyProfileDetails.headline)
    await click(generalInfoButton())
}

export async function verifyfilledGeneralInfo() {
    const expectNannyDisplayName = await getText(nannyEditDisplayName);
    const actualNannyDisplayName = await editNannyProfileDetails.editeddisplayname;
    expect(expectNannyDisplayName).toMatch(actualNannyDisplayName)

}

export async function fillExpectedSalary() {

    await fill(editProfileExpectedSalary, editNannyProfileDetails.salary)

}

export async function filleditabout() {
    await click(aboutEditIcon)
    await expectElementToBeVisible(aboutText);
    await fill(editAbout, editNannyProfileDetails.intro)
    await click(aboutSavebutton())

}

export async function changeServiceArea() {
    await click(serviceAreaEditIcon)
    const servicearea = await isElementChecked(alreadycheckservicearea)
    if (servicearea == true) {
        await click(alreadycheckservicearea)
        await click(changeserviveareaOption)
    } else {
        await click(changeserviveareaOption)
    }
    await click(clickServiceUpdate())
}

export async function editEmployementPreference() {
    await click(editpartime)
    await click(editHoursService)
    await click(editoverseasEmployement)
    await click(edithelpers)
    await click(editpets)
}

export async function editprofiledetails() {
    await fill(editExperienceInCarredBabies, editNannyProfileDetails.caredbabies)
    await fill(editExperienceYear, editNannyProfileDetails.year)
    // await waitForElementToBeVisible(editExperienceMonth)
    // await clear(editExperienceMonth)
    // await fill(editExperienceMonth, editNannyProfileDetails.month)
    await click(editCaringtwins)
    await click(experienceInCooking)

}
//here we have already exists certificate we can edit exist certificate otherwise add new certificate
export async function editcertificates() {
    const certificateText = await isElementVisible(addcertificateText)
    if (certificateText == false) {
        await click(editiconCertificate)
        await fill(editCertificateTitle, editNannyProfileDetails.Title)
        await uploadFiles(editAttachment, 'C:\\Users\\VillageIT\\Documents\\GitHub\\Parachute-e2e-tests\\22.jpeg')
        await click(saveincertificate())


    } else {

        await click(AddcertificateAddIcon)
        await fill(AddcertificateTitle, fillNannyAccountDetails.Title)
        await uploadFiles(attachment, 'C:\\Users\\VillageIT\\Documents\\GitHub\\Parachute-e2e-tests\\nanny.jpg')
        await click(saveincertificate())
        await click(editiconCertificate)
        await fill(editCertificateTitle, editNannyProfileDetails.Title)
        await uploadFiles(editAttachment, 'C:\\Users\\VillageIT\\Documents\\GitHub\\Parachute-e2e-tests\\22.jpeg')
        await click(saveincertificate())
    }

}
//here we have already exists certificate we can delete exist certificate otherwise add new certificate
export async function deletecertificates() {
    const certificateText = await isElementVisible(certificateName)
    if (certificateText == true) {
        await click(deleteIconInCertificate)
        await click(saveAndViewProfile)
        await expectElementToBeVisible(noCertificateText);
    } else {
        await click(AddcertificateAddIcon)
        await fill(AddcertificateTitle, fillNannyAccountDetails.Title)
        await uploadFiles(attachment, 'C:\\Users\\VillageIT\\Documents\\GitHub\\Parachute-e2e-tests\\nanny.jpg')
        await click(saveincertificate())
        await click(deleteIconInCertificate)
        await click(saveAndViewProfile)
        await expectElementToBeVisible(noCertificateText);
    }

}

export async function editshowcase() {
    const expectVisbleGallery = await isElementVisible(visibleGallery)
    if (expectVisbleGallery == true) {
        await click(deleteShowCaseImage)

    } else {
        await click(visibleCameraIcon)
        await uploadFiles(EditUploadInShowCase, 'C:\\Users\\VillageIT\\Documents\\GitHub\\Parachute-e2e-tests\\nanny.jpg')
        await click(saveInShowCase())
        await click(deleteShowCaseImage)
    }
}

export async function saveAndviewProfilepage() {
    await click(saveAndViewProfile, { timeout: MAX_TIMEOUT })
    await waitForElementToBeVisible(verifyDisplayNameInViewProfile)
}

export async function verifyViewProfile() {

    const expectVerifyDisplayNameInViewProfile = await getText(verifyDisplayNameInViewProfile)
    const actualVerifyDisplayNameInViewProfile = await (editNannyProfileDetails.editeddisplayname)
    expect(expectVerifyDisplayNameInViewProfile).toMatch(actualVerifyDisplayNameInViewProfile)

    //verify age
    const age = await getText(verifyAgeInViewProfile)
    const ageMatch = age.match(/Age: (\d+)/);
    const expectedAge = ageMatch ? ageMatch[1] : null;
    const actualAge = await (editNannyProfileDetails.age)
    expect(expectedAge).toMatch(actualAge)

    //verify carredbabies
    const babies = await getText(verifyCaredBabiesInProfileView)
    const babiesMatch = babies.match(/Cared for babies: (\d+)/);
    const expectedCaredBabies = babiesMatch ? babiesMatch[1] : null;
    const actualCaredBabies = await (editNannyProfileDetails.caredbabies)
    expect(expectedCaredBabies).toMatch(actualCaredBabies)

    //verify headline
    const expectVerifyHeadlineInViewProfile = await getText(verifyHeadlineInViewProfile)
    const expectedVerifyHeadlineInViewProfile = await (editNannyProfileDetails.headline)
    expect(expectVerifyHeadlineInViewProfile).toMatch(expectedVerifyHeadlineInViewProfile)

    //verify about
    const expectAbout = await getText(verifyAboutInViewProfile)
    const actualAbout = await (editNannyProfileDetails.intro)
    expect(expectAbout).toMatch(actualAbout)

    //verify cared babies
    const expectCaredBabiesInExperience = await getText(caredBabiesInExperience)
    const actualCaredBabiesInExperience = await (editNannyProfileDetails.caredbabies)
    expect(expectCaredBabiesInExperience).toMatch(actualCaredBabiesInExperience)

    //experienceInViewProfile
    const experience = await getText(experienceInViewProfile)
    const experienceMatch = experience.match(/(\d+) Years and (\d+) months/);
    const expectYear = experienceMatch ? experienceMatch[1] : null;
    const expectMonth = experienceMatch ? experienceMatch[2] : null;
    const actualYear = await (editNannyProfileDetails.year)
    //  const actualMonth = await(editNannyProfileDetails.month)
    expect(expectYear).toMatch(actualYear)
    //  expect(expectMonth).toMatch(actualMonth)

    //verify certificate name
    const expectCertificateName = await getText(certificateText)
    const actualCertificateName = await (editNannyProfileDetails.Title)
    expect(expectCertificateName).toMatch(actualCertificateName)

    //verify expected salary
    const Salary = await getText(verifySalaryInViewProfile)
    const expectedSalary = Salary.replace(/\D/g, '')
    const actualSalary = await (editNannyProfileDetails.salary)
    expect(expectedSalary).toMatch(actualSalary)

}

export async function clickDashboardIcon() {
    await click(dashboardIcon)
}

export async function verifyInDashboardMyProfile() {

    await waitForElementToBeVisible(dashboardNannyDsiplaName)

    //verify displayName
    const expectVerifyDisplayNameInViewProfile = await getText(dashboardNannyDsiplaName)
    const actualVerifyDisplayNameInViewProfile = await (editNannyProfileDetails.editeddisplayname)
    expect(expectVerifyDisplayNameInViewProfile).toMatch(actualVerifyDisplayNameInViewProfile)

    //verify age
    const age = await getText(dashboardNannyAge)
    const ageMatch = age.match(/Age: (\d+)/);
    const expectedAge = ageMatch ? ageMatch[1] : null;
    const actualAge = await (editNannyProfileDetails.age)
    expect(expectedAge).toMatch(actualAge)

    //verify carredbabies
    const babies = await getText(dashboardcaredBabies)
    const babiesMatch = babies.match(/\d+/);
    const expectedCaredBabies = babiesMatch ? babiesMatch[0] : null;
    const actualCaredBabies = await (editNannyProfileDetails.caredbabies)
    expect(expectedCaredBabies).toMatch(actualCaredBabies)

    //verify headline
    const expectVerifyHeadlineInViewProfile = await getText(dashboardHeadline)
    const expectedVerifyHeadlineInViewProfile = await (editNannyProfileDetails.headline)
    expect(expectVerifyHeadlineInViewProfile).toMatch(expectedVerifyHeadlineInViewProfile)

}



