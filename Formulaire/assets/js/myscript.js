nom = document.querySelector('[name="name"]');
pre = document.querySelector('[name="prénom"]');
email = document.querySelector('[name="email"]');
pswd = document.querySelector('[name="password"]');
verif = document.querySelectorAll('small');
msg = document.querySelector('[name="message"]');
age = document.getElementById('formCheck-1');

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function verifierFormulaire() {
    console.log("test");
    if (pre.value === '') {
        pre.classList.add('valide');
        pre.classList.remove('pas-valide');
        console.log("test1");
    } else {
        pre.classList.remove('valide');
        pre.classList.add('pas-valide');
        console.log("test2");
    }
    if (nom.value === '') {
        nom.classList.add('valide');
        nom.classList.remove('pas-valide');
        console.log("test3");
    } else {
        nom.classList.remove('valide');
        nom.classList.add('pas-valide');
        console.log("test4");
    }
    if (isValidEmail(email)) {
        console.log("test5");
        email.classList.add('valide');
        email.classList.remove('pas-valide');
    } else {
        console.log("test6");
        email.classList.remove('valide');
        email.classList.add('pas-valide');
    }
    if (pswd.length >= 8){
        console.log("test7");
        pswd.classList.add('valide');
        pswd.classList.remove('pas-valide');
        verif[0].classList.add('invisible');
    } else {
        console.log("test8");
        pswd.classList.remove('valide');
        pswd.classList.add('pas-valide');
        verif[0].classList.remove('invisible');
    }
    if (age.checked) {
        console.log("test9");
        age.classList.add('valide');
        age.classList.remove('pas-valide');
    } else {
        console.log("test10");
        age.classList.remove('valide');
        age.classList.add('pas-valide');
    }


}