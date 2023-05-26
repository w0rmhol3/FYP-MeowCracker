function update_command(){
  console.log("Reach");
  var hash_type = document.getElementById('HashTypeDropdown').value;
  var file_input = document.getElementById('HashFile').value;
  var wordlist = document.getElementById('Wordlist').value;
  const outputElement = document.getElementById('Straight-Attack');
  
  outputElement.textContent = "HashCat -a "+hash_type +" -m " + file_input + " -o StraightAttack.txt \\\ " + wordlist;
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


