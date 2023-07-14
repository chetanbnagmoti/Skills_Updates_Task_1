document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var collegeName = document.getElementById('collegename').value;
    var cityname = document.getElementById('cityname').value;
    var mobileNumber=document.getElementById('mobile').value;
    var age = document.getElementById('age').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
     
    // Perform further actions with the captured form values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('College Name:', collegeName);
    console.log('City Name:', cityname);
    console.log('Mobile NUmber:',mobileNumber);
    console.log('Age:', age);
    console.log('Gender:', gender);
    
    
    // Reset the form
    document.getElementById('idVisible').style.display = 'block';
    document.getElementById('downloadButton').style.display='block';
    document.getElementById('studentForm').reset();
    document.getElementById('pname').textContent =  name.toUpperCase();;
    document.getElementById('pemail').textContent=email;
    document.getElementById('pcollegename').textContent=collegeName.toUpperCase();
    document.getElementById('pcityname').textContent=cityname.toUpperCase();
    document.getElementById('pmobile').textContent=mobileNumber;
    document.getElementById('page').textContent=age;
    document.getElementById('pgender').textContent = gender.toUpperCase();
  
    // Display selected profile photo
  var profileImg = document.getElementById('profileImg');
  if (gender === 'male') {
    profileImg.src = './Profile/Male.jpg';
  } else if (gender === 'female') {
    profileImg.src = './Profile/Female.png';
  } else {
    profileImg.src = './Profile/default.png';
  }
  

  // Generate and set the ID number
  var idNumberElement = document.getElementById('idNumber');
  var generatedID = generateID();
  idNumberElement.textContent = generatedID;
 
 
  
});

// Generate a random 14-digit ID
function generateID() {
var id = '';
var digits = '0123456789';
for (var i = 0; i < 14; i++) {
  var index = Math.floor(Math.random() * digits.length);
  id += digits[index];
}
return id;
} 

// Generate and download ID card as PDF
function generateIDCardPDF() {
 
  // Get the HTML content of the ID card element
  var cardElement = document.getElementById('idVisible');

  // Set the options for the HTML to PDF conversion
  var options = {
    margin: 30,
    filename: 'IDCard.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // Convert the HTML element to PDF
  html2pdf().set(options).from(cardElement).save();
}


 // Generate and download ID card as PDF
 document.getElementById('downloadButton').addEventListener('click', function() {
  generateIDCardPDF();
});


  //Before Form Submittion:-Validation chaked
  function validateMobile(input) {
    var mobileNumber = input.value;
    var mobileError = document.getElementById('mobileError');
    
    if (mobileNumber.length !== 10 || !/^\d+$/.test(mobileNumber)) {
      mobileError.textContent = "Please enter a valid 10-digit mobile number";
    } else {
      mobileError.textContent = "";
    }
  }
  
  document.getElementById('mobile').addEventListener('input', function() {
    validateMobile(this);
  });

  function validateAge(input) {
    var age = input.value;
    var ageError = document.getElementById('ageError');
    
    if (age < 5 || age > 50 || !/^\d+$/.test(age)) {
      ageError.textContent = "Please enter a valid age between 5 and 50";
    } else {
      ageError.textContent = "";
    }
  }

  document.getElementById('age').addEventListener('input',function(){
    validateAge(this);
  });
  
  