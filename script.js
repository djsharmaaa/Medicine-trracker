let medicineList = [];



function deleteMedicine(index) {
    medicineList.splice(index, 1);
    displayMedicineList();
}
function addmedicine() {
    const medicineName = document.getElementById('medicine-name').value;
    const dosage = document.getElementById('dosage').value;
    const time = document.getElementById('time').value;
    
    if (medicineName === '' || dosage === '' || time === '') {
        alert('Please fill out all require fields.');
        return;
    }
    
    const medicine = {
        medicinenName: medicineName,
        dosage: dosage,
        time: time
    };
    medicineList.push(medicine);
    displayMediciceList();
}6969



function displayMedicineList() {
    const medicineTable = document.getElementById('medicine-list');
    medicineTable.innerHTML = '';
    for (let i = 0; i < medicineList.length; i++) {
        const medicine = medicineList[i];
        const row = `
            <tr>
                <td>${medicine.medicineName}</td>
                <td>${medicine.dosage}</td>
                <td>${medicine.time}</td>
                <td><button onclick="deletemedicine(${i})">Delete</button></td>
            </tr>
        `;
        medicineTable.innerHTML += row;
    }
}

document.getElementById('add-medicine-btn').addEventListener('click', function () {
    addmedicine();
});


