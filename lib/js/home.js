$.ajaxSetup ({
    cache: false
});

$(document).ready(function() {  
    init_home_page();
});

function init_home_page(evt) {
    hide_all_taqs(evt);
    set_active_tab_contents(evt);
    $("div[id^='tab_']").click(_onChangeTab);
}

function hide_all_taqs(evt) {
    $("div[id^='tab_']").attr("class", "cell");
}

function set_active_tab_contents(evt) {
    $("#tab_"+tab).attr("class", "active");
    $(".frame-tab-contents").attr("src", dataPath+tabs[tab]+"/index.html");
}

function _onChangeTab(evt) {
    if ($(this).attr("class")!=="active") {
        tab = $(this).attr("id").split("_")[1];
        init_home_page(evt);
    }    
}
