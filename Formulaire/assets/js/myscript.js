nom = document.querySelector('[name="name"]');
pre = document.querySelector('[name="prénom"]');
email = document.querySelector('[name="email"]');
pswd = document.querySelector('[name="password"]');
verif = document.querySelectorAll('small');
msg = document.querySelector('[name="message"]');
age = document.getElementById('formCheck-1');
age2 = document.querySelector('label');

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function verifierFormulaire() {
    if (pre.value === '') {
        pre.classList.remove('valide');
        pre.classList.add('pas-valide');
        vpre = false;
    } else {
        pre.classList.add('valide');
        pre.classList.remove('pas-valide');
        vpre = true;
    }
    if (nom.value === '') {
        nom.classList.remove('valide');
        nom.classList.add('pas-valide');
        vnom = false;
    } else {
        nom.classList.add('valide');
        nom.classList.remove('pas-valide');
        vnom = true;
    }
    if (isValidEmail(email.value)) {
        email.classList.add('valide');
        email.classList.remove('pas-valide');
        vemail = true;
    } else {
        email.classList.remove('valide');
        email.classList.add('pas-valide');
        vemail = false;
    }
    if (pswd.value.length >= 8){
        pswd.classList.add('valide');
        pswd.classList.remove('pas-valide');
        verif[0].classList.add('invisible');
        vpswd = true;
    } else {
        pswd.classList.remove('valide');
        pswd.classList.add('pas-valide');
        verif[0].classList.remove('invisible');
        vpswd = false;
    }
    if(msg.value === ''){
        msg.classList.remove('valide');
        msg.classList.add('pas-valide');
        vmsg = false;
    } else {
        msg.classList.add('valide');
        msg.classList.remove('pas-valide');
        vmsg = true;
    }
    if (age.checked) {
        age2.classList.add('tvalide');
        age2.classList.remove('tpas-valide');
        vage = true;
    } else {
        age2.classList.remove('tvalide');
        age2.classList.add('tpas-valide');
        vage = false;
    }
    verifall();
}

function verifall() {
    if (vpre && vnom && vemail && vpswd && vmsg && vage) {
        alert('Formulaire validé');
    } else {
        alert('Veuillez remplir tous les champs correctement');
    }
}
