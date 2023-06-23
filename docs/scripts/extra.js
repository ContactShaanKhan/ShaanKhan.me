// Takes an html file, loads it and attaches it to the specified div.
//  Yes, it is a bit hacky, but it works :)
function load_component(html, div)
{
    if (div === null)
        return

    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            div.innerHTML = xmlHttp.responseText;
        }
    };

    xmlHttp.open("GET", html, true);
    xmlHttp.send(null);
}


// Load the contact form
const find_me_div = document.getElementById('findme')
const contact_form = '../../components/contactform.html';
load_component(contact_form, find_me_div)

// TODO: Handle the submit button for the contact form