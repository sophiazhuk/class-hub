$(function() {

    $("#one, #two, #three, #four, #five, #six, #seven").on("click", function() {
        $(".bird").show();
        $(".bat").hide();
    });

    $("#eight, #nine, #ten, #eleven, #twelve").on("click", function() {
        $(".bird").hide();
        $(".bat").show();
    });

    $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #ten, #eleven, #twelve").on("click", function() {
        var id = $(this).attr("id");
        var color;

        switch (id) {
            case "one":
                color = "#73ccff";
                break;
            case "two":
                color = "#4cb7f5";
                break;
            case "three":
                color = "#48a8f7";
                break;
            case "four":
                color = "#3b98eb";
                break;
            case "five":
                color = "#2a7fe8";
                break;
            case "six":
                color = "#2376db";
                break;
            case "seven":
                color = "#2376db";
                break;
            case "eight":
                color = "#3b85d4";
                break;
            case "nine":
                color = "#2d6fb5";
                break;
            case "ten":
                color = "#2d6fb5";
                break;
            case "eleven":
                color = "#20549e";
                break;
            case "twelve":
                color = "#234596";
                break;
            default:
                color = "#000000";
                break;
        }

        $(".window").animate({
            backgroundColor: color,
        }, 1000);
    });
});
