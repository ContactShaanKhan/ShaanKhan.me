// Takes an html file, loads it and attaches it to the specified div.
//  Yes, it is a bit hacky, but it works :)
function load_component(html, div, callback)
{
    if (div === null)
        return

    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            div.innerHTML = xmlHttp.responseText;

            // Execute code after the component has been mounted
            //  Useful for mounting event listeners
            callback()
        }
    };

    xmlHttp.open("GET", html, true);
    xmlHttp.send(null);
}


// Load the contact form
const find_me_div = document.getElementById('findme')
const contact_form = '../../components/contactform.html';
load_component(contact_form, find_me_div, () => {
    const contact_form_submit_button = document.getElementById('submit-form-button')

    contact_form_submit_button.addEventListener("click", (event) => {
        console.log('Submit!')
    })
})











