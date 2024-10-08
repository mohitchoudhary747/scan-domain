function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Set cookies when the page loads
window.onload = function() {
    setCookie('_ga_100', '100', 7);  // Expires in 7 days
    setCookie('_ga', 'val1', 7);  // Expires in 7 days
    setCookie('_mohit_100', 'abc123xyz', 1);  // Expires in 1 day
    setCookie('theme', 'dark', 30);  // Expires in 30 days
    setCookie('_hjAbsoluteSessionInProgress', 'Hotjar', 30);  // Expires in 30 days
    setCookie('ar_debug', 'google', 30);
    setCookie('qab_payload', 'Dropps', 30);
    setCookie('TawkConnectionTime', '0', 30);
    setCookie('twk_57a2055d00df04742fb54f1c', 'vsb14.tawk.to', 30);
    setCookie('AnalyticsSyncHistory', 'AQLRC9dfTShBZAAAAYJJ5rRYaFAKqoiEf2d3ZoPklxe6VdaO2GY1dDTVZb9Ns3j-RUR9b1lGQwtKznJ0y8pLGw', 30);
    setCookie('fr', 'network', 30);
    console.log("Cookies set successfully");
};