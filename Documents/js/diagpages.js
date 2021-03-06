$(document).ready(function() {
    $("#rfrshBtn").click(function() {
        window.location.reload(true);
    });
    $("#rfrshBtn").hover(function(e) {
        $("#rfrshBtnIcn").toggleClass('fa-spin');
    });
    $("#goHomeBtn").click(function() {
        window.history.back();
    });
});

$("body").flowtype({
    minFont: 8,
    maxFont: 14,
    fontRatio: 35
});

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
