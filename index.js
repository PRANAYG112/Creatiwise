// console.log('hi')
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}



$(document).ready(function() {
    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function() {
    $("#flip1").click(function() {
        $("#panel1").slideToggle("slow");
    });
});
$(document).ready(function() {
    $("#flip2").click(function() {
        $("#panel2").slideToggle("slow");
    });
});
$(document).ready(function() {
    $("#flip3").click(function() {
        $("#panel3").slideToggle("slow");
    });
});
$(document).ready(function() {
    $("#flip4").click(function() {
        $("#panel4").slideToggle("slow");
    });
});


$('.week').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('myClickState');
});

$('.checkbox-round').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('checkbox-round1');
});


$(function() {
    $("#datepicker").datepicker();
});

$(function() {
    $("#datepicker1").datepicker();
});

$('.save').on('click', function(e) {

    $("#exampleModalCenter").hide();
    $('.root').show();
});