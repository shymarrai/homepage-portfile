var checkbox = document.getElementById('menu-hamburguer')
var content = document.querySelector('.pset-details-content')
var menu = document.querySelector('#box-menu')
function status(){


    if (checkbox.checked)
    {
        menu.style.display = 'flex';
        content.style.display = 'none';
    }
    else
    {
        menu.style.display = 'none';
        content.style.display = 'inherit';
    }

}