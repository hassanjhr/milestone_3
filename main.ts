// Listing element

document.getElementById('resumeForm')?.addEventListener('submit',function(event){
event.preventDefault();

// type assertion
const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const contactElement = document.getElementById('contact') as HTMLInputElement;
const educationElement = document.getElementById('education') as HTMLInputElement;
const experienceElement = document.getElementById('experience') as HTMLInputElement;
const skillsElement = document.getElementById('skills') as HTMLInputElement;
// const myfileElement = document.getElementById('myfile') as HTMLInputElement;

if (nameElement && emailElement && contactElement && educationElement && experienceElement && skillsElement ) {
    const name = nameElement.value;
    const email = emailElement.value;
    const contact = contactElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    // const myfile = myfileElement.value;

 


// resume output
const resumeOutput = `
<h2>Resume</h2>
<p><strong>Name:</strong> ${name} </p>
<p><strong>email:</strong> ${email} </p>
<p><strong>contact:</strong> ${contact} </p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
`;

const resumeOutputElement = document.getElementById('resumeOutput')
if (resumeOutputElement) {
    resumeOutputElement.innerHTML = resumeOutput
} else {
    console.error('The Resume Output Element are Missing')
}

} else {
    console.log("One or More Output Element are Missing")
}

}) 