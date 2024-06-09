$(document).ready(function() {
    $(".nav-item-search").click(function() {
        $(".form-control").fadeToggle(); // 切換表單的顯示/隱藏
    });

    $(".form-control").click(function(e) {
        e.stopPropagation(); // 防止點擊表單時冒泡到 document
    });

    $(document).click(function(e) {
        // 點擊頁面其他地方時，如果表單是顯示的，則隱藏表單
        if ($(e.target).closest(".form-control").length === 0) {
            $(".form-control").fadeOut();
        }
    });

    
});
