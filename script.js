
        let personilCount = 1;
        let activityCount = 1;

        function addPersonil() {
            personilCount++;
            const container = document.getElementById('personil-container');
            const newPersonil = document.createElement('div');
            newPersonil.className = 'form-group';
            newPersonil.innerHTML = `<label for="personil${personilCount}">Nama Personil ${personilCount}:</label><input type="text" id="personil${personilCount}" required>`;
            container.appendChild(newPersonil);
        }

        function removePersonil() {
            if (personilCount > 1) {
                const container = document.getElementById('personil-container');
                container.removeChild(container.lastElementChild);
                personilCount--;
            }
        }

        function addActivity() {
            activityCount++;
            const container = document.getElementById('activity-container');
            const newActivity = document.createElement('div');
            newActivity.className = 'form-group';
            newActivity.innerHTML = `<label for="activity${activityCount}">Activity ${activityCount}:</label><input type="text" id="activity${activityCount}" required>`;
            container.appendChild(newActivity);
        }

        function removeActivity() {
            if (activityCount > 1) {
                const container = document.getElementById('activity-container');
                container.removeChild(container.lastElementChild);
                activityCount--;
            }
        }

        document.getElementById('copy-button').addEventListener('click', () => {
            const date = document.getElementById('date').value;
            const shift = document.getElementById('shift').value;

            let personilText = '';
            for (let i = 1; i <= personilCount; i++) {
                personilText += `\n${i}. ` + document.getElementById(`personil${i}`).value;
            }

            const boiler1 = document.getElementById('boiler1').value;
            const boiler1_issues = document.getElementById('boiler1_issues').value || 'No Issue';
            const boiler2 = document.getElementById('boiler2').value;
            const boiler2_issues = document.getElementById('boiler2_issues').value || 'No Issue';
            const boiler3 = document.getElementById('boiler3').value;
            const boiler3_issues = document.getElementById('boiler3_issues').value || 'No Issue';
            const boiler4 = document.getElementById('boiler4').value;
            const boiler4_issues = document.getElementById('boiler4_issues').value || 'No Issue';

            const compressor1 = document.getElementById('compressor1').value;
            const compressor1_issues = document.getElementById('compressor1_issues').value || 'No Issue';
            const compressor2 = document.getElementById('compressor2').value;
            const compressor2_issues = document.getElementById('compressor2_issues').value || 'No Issue';
            const compressor3 = document.getElementById('compressor3').value;
            const compressor3_issues = document.getElementById('compressor3_issues').value || 'No Issue';
            const compressor4 = document.getElementById('compressor4').value;
            const compressor4_issues = document.getElementById('compressor4_issues').value || 'No Issue';
            const compressor5 = document.getElementById('compressor5').value;
            const compressor5_issues = document.getElementById('compressor5_issues').value || 'No Issue';
            const compressor6 = document.getElementById('compressor6').value;
            const compressor6_issues = document.getElementById('compressor6_issues').value || 'No Issue';

            const fuel1 = document.getElementById('fuel1').value;
            const fuel2 = document.getElementById('fuel2').value;
            const fuel3 = document.getElementById('fuel3').value;
            const fuel4 = document.getElementById('fuel4').value;
            const fuel5 = document.getElementById('fuel5').value;
            const fuel6 = document.getElementById('fuel6').value;
            const fuel7 = document.getElementById('fuel7').value;
            const fuel8_volume = document.getElementById('fuel8_volume').value;
            const fuel8_pressure = document.getElementById('fuel8_pressure').value;

            const gas1 = document.getElementById('gas1').value;
            const gas2 = document.getElementById('gas2').value;
            const gas3 = document.getElementById('gas3').value;
            const gas4 = document.getElementById('gas4').value;
            const gas5 = document.getElementById('gas5').value;
            const gas6 = document.getElementById('gas6').value;
            const gas7 = document.getElementById('gas7').value;

            const chem1 = document.getElementById('chem1').value;
            const chem2 = document.getElementById('chem2').value;
            const chem3 = document.getElementById('chem3').value;
            const chem4 = document.getElementById('chem4').value;
            const chem5 = document.getElementById('chem5').value;
            const chem6 = document.getElementById('chem6').value;
            const chem7 = document.getElementById('chem7').value;
            const chem8 = document.getElementById('chem8').value;
            const chem9 = document.getElementById('chem9').value;
            
            let activityText = '';
            for (let i = 1; i <= activityCount; i++) {
                activityText += `\n${i}. ` + document.getElementById(`activity${i}`).value;
            }

            const textToCopy = `
Engineering
DAILY TIER 1 MEETING RECORD (laporan Supervisor Ke manager)

1.	ENG – GENERAL UTILITY 
Hari, Tgl   : ${date}

a.	Kehadiran
Jumlah personel absen :
Shift 1 : ${shift} Personil (absent 0)
${personilText}

- Steam Boiler Area
1. Steam Boiler No.1 : ${boiler1} (${boiler1_issues})
2. Steam Boiler No.2 : ${boiler2} (${boiler2_issues})
3. Steam Boiler No.3 : ${boiler3} (${boiler3_issues})
4. Steam Boiler No.4 : ${boiler4} (${boiler4_issues})

- Water Treatment Area
1. Raw Water System : Running (No Issue)
2. Industrial RO No.1 : Running (No Issue)
3. Industrial RO No.2 : Running (No Issue)
4. DRW Generator : Running (No Issue)
5. Softener System : Running (No Issue)
6. Cooling Water System : Running ( No issue ) 

- Compressor Area
1. Compressor ZT250 No.1 : ${compressor1} (${compressor1_issues})
2. Compressor ZT250 No.2 : ${compressor2} (${compressor2_issues})
3. Compressor ZT75 No.1 : ${compressor3} (${compressor3_issues})
4. Compressor ZT75 No.2 : ${compressor4} (${compressor4_issues})
5. Compressor ZT75 vsd No.3 : ${compressor5} (${compressor5_issues})
6. Compressor ZT75 vsd No.4 : ${compressor6} (${compressor6_issues})
- Storage Area
1. Heavy Fuel Oil System (No Issue)
2. Fuel Oil System (No Issue)

- Stock Bahan Bakar
1. Residu Tank 1 : ${fuel1}%
2. Residu Tank 2 : ${fuel2}%
3. Residu Tank 3 : ${fuel3}%
4. Solar Tank : ${fuel4}%
5. Solar Daily Tank 1 : ${fuel5} L
6. Solar Daily Tank 2 : ${fuel6} L
7. Residu Daily tank : ${fuel7}%
8. Nitrogen Tank : ${fuel8_volume} L / ${fuel8_pressure} bar

- Stock Tabung Gas
1. O² : ${gas1} Tb
2. LPG : ${gas2} Tb
3. Acetylene : ${gas3} Tb
4. Argon : ${gas4} Tb
5. CO² : ${gas5} Tb
6. Freon : ${gas6} Tb
7. N² : ${gas7} Tb

- Stock Chemical
1. B3 : ${chem1} 
2. B4 : ${chem2}
3. B5 : ${chem3}
4. FS : ${chem4}
5. SRTF : ${chem5}
6. CHWT : ${chem6}
7. SBN : ${chem7}
8. Antiscalant : ${chem8}
9. Biotreat : ${chem9}

- Activity
${activityText}

(Nama Supervisor)
SPV ENG-GENERAL UTILITY
            `;

            navigator.clipboard.writeText(textToCopy).then(() => {
                alert('Data berhasil disalin ke clipboard.');
            }).catch(err => {
                alert('Gagal menyalin data. Silakan coba lagi.');
            });
        });
        
        // Fungsi untuk menyimpan data form ke Local Storage
function saveData() {
    const Data = {
        gas1: document.getElementById("gas1").value,
        gas2: document.getElementById("gas2").value,
        gas3: document.getElementById("gas3").value,
        gas4: document.getElementById("gas4").value,
        gas5: document.getElementById("gas5").value,
        gas6: document.getElementById("gas6").value,
        gas7: document.getElementById("gas7").value,
    };

    // Simpan objek Data sebagai string di Local Storage
    localStorage.setItem("Data", JSON.stringify(Data));
}

// Fungsi untuk memuat data form dari Local Storage
function loadData() {
    const savedData = localStorage.getItem("Data");
    if (savedData) {
        // Parse data yang disimpan dan isi form dengan data tersebut
        const Data = JSON.parse(savedData);
        document.getElementById("gas1").value = Data.gas1;
        document.getElementById("gas2").value = Data.gas2;
        document.getElementById("gas3").value = Data.gas3;
        document.getElementById("gas4").value = Data.gas4;
        document.getElementById("gas5").value = Data.gas5;
        document.getElementById("gas6").value = Data.gas6;
        document.getElementById("gas7").value = Data.gas7;
    }
}

// Menambahkan event listener untuk menyimpan data saat user mengetik di form
document.querySelectorAll(".form-group input").forEach(input => {
    input.addEventListener("input", saveData);
});

// Memuat data saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", loadData);

// Fungsi untuk menyimpan data form ke Local Storage
function saveFuelData() {
    const fuelData = {
        fuel1: document.getElementById("fuel1").value,
        fuel2: document.getElementById("fuel2").value,
        fuel3: document.getElementById("fuel3").value,
        fuel4: document.getElementById("fuel4").value,
        fuel5: document.getElementById("fuel5").value,
        fuel6: document.getElementById("fuel6").value,
        fuel7: document.getElementById("fuel7").value,
        fuel8_volume: document.getElementById("fuel8_volume").value,
        fuel8_pressure: document.getElementById("fuel8_pressure").value
    };

    // Simpan objek fuelData sebagai string di Local Storage
    localStorage.setItem("fuelData", JSON.stringify(fuelData));
}

// Fungsi untuk memuat data form dari Local Storage
function loadFuelData() {
    const savedFuelData = localStorage.getItem("fuelData");
    if (savedFuelData) {
        // Parse data yang disimpan dan isi form dengan data tersebut
        const fuelData = JSON.parse(savedFuelData);
        document.getElementById("fuel1").value = fuelData.fuel1;
        document.getElementById("fuel2").value = fuelData.fuel2;
        document.getElementById("fuel3").value = fuelData.fuel3;
        document.getElementById("fuel4").value = fuelData.fuel4;
        document.getElementById("fuel5").value = fuelData.fuel5;
        document.getElementById("fuel6").value = fuelData.fuel6;
        document.getElementById("fuel7").value = fuelData.fuel7;
        document.getElementById("fuel8_volume").value = fuelData.fuel8_volume;
        document.getElementById("fuel8_pressure").value = fuelData.fuel8_pressure;
    }
}

// Menambahkan event listener untuk menyimpan data saat user mengetik di form
document.querySelectorAll(".form-group input").forEach(input => {
    input.addEventListener("input", saveFuelData);
});

// Memuat data saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", loadFuelData);
// Fungsi untuk menyesuaikan lebar input berdasarkan panjang teks
function adjustInputWidth() {
    document.querySelectorAll('.form-group input[type="number"]').forEach(input => {
        // Buat elemen span sementara untuk mengukur lebar teks
        const tempSpan = document.createElement('span');
        tempSpan.style.visibility = 'hidden';
        tempSpan.style.position = 'absolute';
        tempSpan.style.whiteSpace = 'nowrap';
        tempSpan.style.font = window.getComputedStyle(input).font;
        tempSpan.textContent = input.value || input.placeholder;
        
        document.body.appendChild(tempSpan);
        const width = tempSpan.offsetWidth + 20; // Tambahkan padding ekstra
        input.style.width = `${width}px`;
        document.body.removeChild(tempSpan);
    });
}

// Tambahkan event listener untuk menyesuaikan lebar input saat user mengetik
document.querySelectorAll('.form-group input[type="number"]').forEach(input => {
    input.addEventListener('input', adjustInputWidth);
});

// Menyesuaikan lebar input saat halaman dimuat
document.addEventListener('DOMContentLoaded', adjustInputWidth);

// Fungsi untuk menyimpan data form ke Local Storage
function savePersonData() {
    const personData = {
        personil1: document.getElementById("personil1").value,
    };

    // Simpan objek fuelData sebagai string di Local Storage
    localStorage.setItem("personData", JSON.stringify(personData));
}

// Fungsi untuk memuat data form dari Local Storage
function loadPersonData() {
    const savedPersonData = localStorage.getItem("personData");
    if (savedPersonData) {
        // Parse data yang disimpan dan isi form dengan data tersebut
        const personData = JSON.parse(savedPersonData);
        document.getElementById("personil1").value = personData.personil1;
    }
}

// Menambahkan event listener untuk menyimpan data saat user mengetik di form
document.querySelectorAll(".form-group input").forEach(input => {
    input.addEventListener("input", savePersonData);
});

// Memuat data saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", loadPersonData);

function saveChemData() {
  const chemData = {
    chem1: document.getElementById("chem1").value,
    chem2: document.getElementById("chem2").value,
    chem3: document.getElementById("chem3").value,
    chem4: document.getElementById("chem4").value,
    chem5: document.getElementById("chem5").value,
    chem6: document.getElementById("chem6").value,
    chem7: document.getElementById("chem7").value,
    chem8: document.getElementById("chem8").value,
    chem9: document.getElementById("chem9").value,
    
  };

  // Simpan objek fuelData sebagai string di Local Storage
  localStorage.setItem("chemData", JSON.stringify(chemData));
}

// Fungsi untuk memuat data form dari Local Storage
function loadChemData() {
  const savedChemData = localStorage.getItem("chemData");
  if (savedChemData) {
    // Parse data yang disimpan dan isi form dengan data tersebut
    const chemData = JSON.parse(savedChemData);
    document.getElementById("chem1").value = chemData.chem1;
    document.getElementById("chem2").value = chemData.chem2;
    document.getElementById("chem3").value = chemData.chem3;
    document.getElementById("chem4").value = chemData.chem4;
    document.getElementById("chem5").value = chemData.chem5;
    document.getElementById("chem6").value = chemData.chem6;
    document.getElementById("chem7").value = chemData.chem7;
    document.getElementById("chem8").value = chemData.chem8;
    document.getElementById("chem9").value = chemData.chem9;
    
  }
}

// Menambahkan event listener untuk menyimpan data saat user mengetik di form
document.querySelectorAll(".form-group input").forEach(input => {
  input.addEventListener("input", saveChemData);
});

// Memuat data saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", loadChemData);