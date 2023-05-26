function update_command(){
  console.log("Reach");
  var hash_type = document.getElementById('HashTypeDropdown').value;
  var file_input = document.getElementById('HashFile').value;
  var wordlist = document.getElementById('Wordlist').value;
  const outputElement = document.getElementById('Straight-Attack');
  
  outputElement.textContent = "HashCat -a 0 -m "+ hash_type + " " + file_input + " -o StraightAttack.txt /usr/share/wordlists/" + wordlist;
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
    try {
      navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }