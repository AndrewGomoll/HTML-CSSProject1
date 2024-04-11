

function darkMode(){
    const isDarkMode = localStorage.getItem("dark") === 'true';
    localStorage.setItem('dark', !isDarkMode);
    const element = document.body;
    element.classList.toggle("darkTheme", !isDarkMode)
    var darkModeText = document.getElementById("dark")
    
}

function onload(){
    document.body.classList.toggle("darkTheme", localStorage.getItem("dark") === 'true');


}