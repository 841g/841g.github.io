    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });



//  Hides all elements when the page is finished loading
   $(document).ready(function(e){
        $("#homeDisplay").show();
        $("#membersDisplay").hide();
        $("#shortcutsDisplay").hide();
        $("#eventsDisplay").hide();
        $("#contactDisplay").hide();
        $("#aboutDisplay").hide();
   });
        
    $("#shortcutsButton").click(function(e) {
        $("#homeDisplay").hide();
        $("#membersDisplay").hide();
        $("#shortcutsDisplay").show();
        $("#eventsDisplay").hide();
        $("#contactDisplay").hide();
        $("#aboutDisplay").hide();
    });

    $("#membersButton").click(function(e) {
        $("#homeDisplay").hide();
        $("#membersDisplay").show();
        $("#shortcutsDisplay").hide();
        $("#eventsDisplay").hide();
        $("#contactDisplay").hide();
        $("#aboutDisplay").hide();
    });

    $("#eventsButton").click(function(e) {
        $("#homeDisplay").hide();
        $("#membersDisplay").hide();
        $("#shortcutsDisplay").hide();
        $("#eventsDisplay").show();
        $("#contactDisplay").hide();
        $("#aboutDisplay").hide();
    });

    $("#aboutButton").click(function(e) {
        $("#homeDisplay").hide();
        $("#membersDisplay").hide();
        $("#shortcutsDisplay").hide();
        $("#eventsDisplay").hide();
        $("#contactDisplay").hide();
        $("#aboutDisplay").show();
    });

    $("#contactButton").click(function(e) {
        $("#homeDisplay").hide();
        $("#membersDisplay").hide();
        $("#shortcutsDisplay").hide();
        $("#eventsDisplay").hide();
        $("#contactDisplay").show();
        $("#aboutDisplay").hide();
    });

    $("#aboutButton").click(function(e) {
        $("#homeDisplay").hide();
        $("#membersDisplay").hide();
        $("#shortcutsDisplay").hide();
        $("#eventsDisplay").hide();
        $("#contactDisplay").hide();
        $("#aboutDisplay").show();
    });

    $("#homeButton").click(function(e){
        $("#homeDisplay").show();
        $("#membersDisplay").hide();
        $("#shortcutsDisplay").hide();
        $("#eventsDisplay").hide();
        $("#contactDisplay").hide();
        $("#aboutDisplay").hide();
   });