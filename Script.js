// লোকাল স্টোরেজে রক্তদাতাদের ডাটা রাখার ফাংশন

function getDonors() {
    let donors = localStorage.getItem('donors');
    return donors ? JSON.parse(donors) : [];
}

function saveDonors(donors) {
    localStorage.setItem('donors', JSON.stringify(donors));
}

function addDonor(name, phone, blood) {
    const donors = getDonors();
    donors.push({ name, phone, blood });
    saveDonors(donors);
}

function renderDonors() {
    const tbody = document.querySelector("#donorList tbody");
    const donors = getDonors();
    tbody.innerHTML = '';
    donors.forEach(donor => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${donor.name}</td><td>${donor.phone}</td><td>${donor.blood}</td>`;
        tbody.appendChild(tr);
    });
}

// রিকোয়েস্ট ফর্ম সাবমিশন হ্যান্ডেল

document.getElementById('requestForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert("আপনার রক্তের রিকোয়েস্ট গ্রহণ করা হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।");
    this.reset();
});

// জয়েন ফর্ম সাবমিশন হ্যান্ডেল

document.getElementById('joinForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('joinName').value.trim();
    const phone = document.getElementById('joinPhone').value.trim();
    const blood = document.getElementById('joinBlood').value;
    addDonor(name, phone, blood);
    renderDonors();
    alert('আপনি সফলভাবে রক্তদাতার তালিকায় যোগ হয়েছেন।');
    this.reset();
});

// পেজ লোড হলে রক্তদাতাদের তালিকা দেখানো

window.onload = function(){
    renderDonors();
}
