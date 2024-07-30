document.addEventListener('DOMContentLoaded', (event) => {
    const packageName = localStorage.getItem('selectedPackage');
    if (packageName) {
        document.getElementById('package-name').textContent = packageName;
    } else {
        document.getElementById('selected-package').innerHTML = '<p>No package selected.</p>';
    }
});

function payWithMpesa() {
    const mobileNumber = document.getElementById('mobile-number').value;
    const paybillNumber = '123456';
    const amount = 50;
    
    if (mobileNumber && mobileNumber.match(/^[0-9]{10}$/)) {
        alert(`Prompting payment of Ksh ${amount} to paybill ${paybillNumber} from number ${mobileNumber}`);
        // Implement the M-Pesa payment logic here.
        // For example, you might use an API or redirect the user to a payment page.
    } else {
        alert('Please enter a valid Kenyan mobile number');
    }
}
