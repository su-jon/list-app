/*
1.DOM selection
2.event listerer
3.form validation
4.create element
5.append child
*/
const name = document.querySelector('#name');
const profession = document.querySelector('#profession');
const salary = document.querySelector('#salary');
const infoList = document.querySelector('#info-list');
const button = document.querySelector('.btn');


button.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Button is clicked');
  if (name.value == '' && profession.value == '' && salary.value == '') {
    alert("Please input your information");
  } else {
    const newRow = document.createElement('tr');

    const newName = document.createElement('th');
    newName.innerHTML = name.value;
    newRow.appendChild(newName)

    const newProfession = document.createElement('th');
    newProfession.innerHTML = profession.value;
    newRow.appendChild(newProfession)

    const newSalary = document.createElement('th');
    newSalary.innerHTML = salary.value;
    newRow.appendChild(newSalary)

    infoList.appendChild(newRow)
  }
})