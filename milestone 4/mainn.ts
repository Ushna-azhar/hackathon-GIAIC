document.getElementById("resumeform")?.addEventListener("submit",function(event){
    event.preventDefault();

    const profilepictureresult=document.getElementById("profilepicture") as HTMLInputElement;


    
    const nameElement=document.getElementById("name")as HTMLInputElement;
    const emailElement=document.getElementById("email")as HTMLInputElement;
    const phoneElement=document.getElementById("phone")as HTMLInputElement;
    const academicElement=document.getElementById("education")as HTMLInputElement;
    const expertiseElement=document.getElementById("expertise")as HTMLInputElement;
    const professionalElement=document.getElementById("professional")as HTMLInputElement;

if (profilepictureresult && nameElement && emailElement && phoneElement && academicElement &&expertiseElement && professionalElement) {
    const name= nameElement.value;
    const email=emailElement.value
    const phone= phoneElement.value;
    const academic= academicElement.value;
    const expertise= expertiseElement.value;
    const professional= professionalElement.value;

    const profilepicturefile=profilepictureresult.files?.[0]
    const profilepictureUrl=profilepicturefile?URL.createObjectURL(profilepicturefile):"";

 const resumeOutput =`
    <h2>Resume</h2>
    ${profilepictureUrl?`<img src="${profilepictureUrl} alt=profile picture class =profilepicture">`:""}
    <p><strong>Name : </strong><span id = edit-name class= editable> ${name} </p>
    <p><strong>email : </strong></strong><span id = edit-email class= editable> ${email} </p>
     <p><strong>phone : </strong></strong><span id = edit-phone class= editable> ${phone} </p>


      <h3>Academic</h3>
      <p id =edit-academic class= editable>${academic}</p>

            <h3>Professional Experience</h3>
      <p id =edit-professional class= editable >${professional}</p>

      <h3>Expertise</h3>
      <p id =edit-expertise class= editable>${expertise}</p>`;
      const resumeOutputElement = document.getElementById("resumeOutput")
 if(resumeOutputElement){resumeOutputElement.innerHTML = resumeOutput}
 else{console.error("Requirement are missing , Kindly check Again")}
}else{console.error("check All the Requirements")}



});
function makeEditable(){
    const editableElements= document.querySelectorAll('.editable');
    editableElements.forEach(element=>{element.addEventListener('click',function(){
        const currentElement= element as HTMLElement
        const currentValue=currentElement.textContent||"";


        if (currentElement.tagName=== "p" || currentElement.tagName === "SPAN"){
            const input = document.createElement('input')
            input.type = 'text'
            input.value = currentValue
            input.classList.add('editing input')

            input.addEventListener('blur',function(){

currentElement.textContent=input.value
currentElement.style.display='inline'
input.remove()

            })



currentElement.style.display='none'
currentElement.parentNode?.insertBefore(input,currentElement)
input.focus()

        }



        })
    })
}
