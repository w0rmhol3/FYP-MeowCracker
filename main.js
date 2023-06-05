//Function for Lightmode switch 
function SwitchMode() {
  var lswitch = document.getElementById("Lightswitch");

  
  if (lswitch.checked == true){
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
    window.localStorage.setItem('mode', 'light');

  }else{
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
    window.localStorage.setItem('mode', 'dark');
  }

}

//The function to generate the command on Straight Attack 
function update_command(){
  var hash_type = document.getElementById('HashTypeDropdown').value;
  var file_input = document.getElementById('HashFile').value;
  var wordlist = document.getElementById('Wordlist').value;
  const outputElement = document.getElementById('Straight-Attack');
  
  outputElement.textContent = "HashCat -a 0 -m "+ hash_type + " " + file_input + " -o StraightAttack.txt /usr/share/wordlists/" + wordlist;
}

//The function to generate the command on Brute Force Attack
function update_command2(){
  var hash_type = document.getElementById('HashTypeDropdown2').value;
  var file_input = document.getElementById('HashFile2').value;
  const outputElement = document.getElementById('BruteForce-Attack');
  
  outputElement.textContent = "HashCat -a 3 -m "+ hash_type + " " + file_input;
}

//Function to switch the tabs within the website
function openTab(evt, Tab) {
    //Declaring variables
    var i, Tabcontent, Tablinks;

    //Hide other tab contents
    Tabcontent = document.getElementsByClassName("Tabcontent");
    for (i = 0; i < Tabcontent.length; i++) {
      Tabcontent[i].style.display = "none";
    }
  
    //Get all elements with class="tablinks" and remove the class "active"
    Tablinks = document.getElementsByClassName("Tablinks");
    for (i = 0; i < Tablinks.length; i++) {
      Tablinks[i].className = Tablinks[i].className.replace(" active", "");
    }
  
    //Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(Tab).style.display = "block";
    evt.currentTarget.className += " active";
  }

  
  function copy_Command() {
    let text = document.getElementById('Straight-Attack').innerHTML;
    navigator.clipboard.writeText(text);
  }

  function copy_Command2() {
    let text = document.getElementById('BruteForce-Attack').innerHTML;
    navigator.clipboard.writeText(text);
  }

//Function to load the options within Dropdownlist from JSON file 
function HashesDropdown()
{
  let dropdown1 = document.getElementById('HashTypeDropdown');
  let dropdown2 = document.getElementById('HashTypeDropdown2');
  dropdown1.length = 0;
  dropdown2.length = 0;

  dropdown1.selectedIndex = 0;
  dropdown2.selectedIndex = 0;
  
  const url = 'https://w0rmhol3.github.io/Hashes.json';
  
  fetch(url)  
    .then(  
      function(response) {  
        if (response.status !== 200) {  
          console.warn('Looks like there was a problem. Status Code: ' + 
            response.status);  
          return;  
        }
  
        // Examine the text in the response  
        response.json().then(function(data) {  
          let option;
      
        for (let i = 0; i < data.length; i++) {
            let option1 = document.createElement('option');
            option1.className = 'Hash-items';
            option1.value = data[i].HashValue;
            option1.text = data[i].HashValue + ' - ' + data[i].HashName;
            dropdown1.add(option1);

            let option2 = document.createElement('option');
            option2.className = 'Hash-items';
            option2.value = data[i].HashValue;
            option2.text = data[i].HashValue + ' - ' + data[i].HashName;
            dropdown2.add(option2);
        }    
        });  
      }  
    )  
    .catch(function(err) {  
      console.error('Fetch Error -', err);  
    });
}