function getAge(dob) {
    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age --;

    return age;
}

function getUniYear(admissionYear) {
    let year = new Date().getFullYear() - admissionYear;

    if(year == 1) year += "st";
    else if(year == 2) year += "nd";
    else if(year == 3) year += "rd";
    else year = "";

    return year;
}

document.getElementById("introduction").innerHTML = "Heiii! I'm Olivia, a " + getAge("2002-10-03") + " years old trans woman from Norway. I am currently studying applied computer technologies at a bachelor level in my " + getUniYear(2022) + " year.";;