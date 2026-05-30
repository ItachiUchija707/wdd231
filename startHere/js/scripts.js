const userInfoSection = document.querySelector("#results");
const userData = new URLSearchParams(window.location.search);

console.log(userData);
console.log(userData.toString());
userInfoSection.innerHTML = 
`
<p>
    Appointment set for ${userData.get('first')} ${userData.get('last')}. <br>
    Phone number: ${userData.get('phone')} email: ${userData.get('email')}<br>
    Ordinance to perform; ${userData.get('ordinance')}
    appointment date: ${userData.get('date')}, location: ${userData.get('location')}
    </p>
`;