const button = document.getElementById('submit');
button.addEventListener('click', validation);

function validation(event) {
    let commit = document.getElementById('commit').value;
    let nom = document.getElementById('name').value;
    let prenom = document.getElementById('prenom').value;

    document.querySelector('#commentname3').textContent = `${nom} ${prenom}`;
    document.querySelector('#commentarea3').textContent = commit;

    let commentarea1 = document.getElementById('commentarea1');
    let commentarea2 = document.getElementById('commentarea2');
    let commentarea3 = document.getElementById('commentarea3');
    
        // if (commentarea1.textContent === "") {
        //     commentarea2.textContent = commit;
        // }
        //  else if (commentarea2.textContent === "") {
        //     commentarea3.textContent = commit;
        // }
        //  else (commentarea3.textContent === ""); { 
        //     commentarea1.textContent = commit;
        // }
        
    }



