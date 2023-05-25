window.onload = function() {
    const HashinputField = document.getElementById('HashTypeDropdown');
    const FileinputField = document.getElementById('HashFile');
    const WordlistinputField = document.getElementById('Wordlist');
    const outputElement = document.getElementById('Straight-Attack');
  
    HashinputField.addEventListener('input', () => {
        outputElement.textContent = "HashCat -a 0 -m " + HashinputField + " -o StraightAttack.txt \\\ " + FileinputField.value + "";
      });

    FileinputField.addEventListener('input', () => {
      outputElement.textContent = "HashCat -a 0 -m " + HashinputField +" -o StraightAttack.txt \\\ " + FileinputField.value + "";
    });

    WordlistinputField.addEventListener('input', () => {
        outputElement.textContent = "HashCat -a 0 -m " + HashinputField +" -o StraightAttack.txt \\\ " + FileinputField.value + " " + WordlistinputField + "";
      });
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


