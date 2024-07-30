function selectPackage(packageName) {
    window.location.href = `combined.html?package=${encodeURIComponent(packageName)}`;
}
function selectPackage(packageName) {
    localStorage.setItem('selectedPackage', packageName);
    window.location.href = 'payment.html';
}

