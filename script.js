const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault();
    const base = document.getElementById("base").value;
    const height = document.getElementById("height").value;

    const area = ((base * height)/ 2).toFixed(2);

    const value = document.getElementById('value');
    let description = ''

    value.textContent = area.replace('.', ',')
    document.getElementById('description').textContent = description;

})