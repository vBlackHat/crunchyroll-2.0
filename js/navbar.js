function mouseOverIcones (icone, legenda,  after) {
    var element = document.querySelector(after);

    if (icone != null) {
        document.getElementById(icone).style.fill = "#F78F25";
    }
    if (legenda != null) {
        document.getElementById(legenda).style.color = "#F78F25";
    }
    if (after != null) {
        element.style.setProperty("--corAfterDropdown", "#F78F25");
    }
        
}

function mouseOutIcones (icone, legenda, after) {
    var emFoco = document.getElementById("input-form-navbar");
    var element = document.querySelector(after);

    if (icone != "svg-form-navbar"){
        if (icone != null) {
            document.getElementById(icone).style.fill = "rgb(184, 181, 181)";
        }
        if (legenda != null) {
            document.getElementById(legenda).style.color = "rgb(184, 181, 181)";
        }
        if (after != null) {
            element.style.setProperty("--corAfterDropdown", "rgb(184, 181, 181");
        }
    }
}

function inputFocus () {
    document.getElementById("svg-form-navbar").style.fill = "#F78F25";
}

function inputBlur () {
    document.getElementById("svg-form-navbar").style.fill = "rgb(184, 181, 181)";
}

function chamaDropdown () {
    document.getElementById("indicador-dropdown-navbar").classList.remove("escondido");
    document.getElementById("indicador-dropdown-navbar").classList.add("indicacao-dropdown")
}

function escondeDropdown () {
    document.getElementById("indicador-dropdown-navbar").classList.remove("indicacao-dropdown");
    document.getElementById("indicador-dropdown-navbar").classList.add("escondido")
}

