$(function() {
    $("article").hide().first().addClass("slide-active").show() // Show the first slide on launch

    $("body").keydown(function(e) {
        if (event.which == 32 || event.which == 39) // If left arrow or space bar pressed
            nextSlide()
        if (event.which == 37) // If right arrow pressed
            prevSlide()
    })

    $("#start_btn").click(firstSlide) // Configure button for changing slide
    $("#prev_btn").click(prevSlide)
    $("#next_btn").click(nextSlide)
    $("#end_btn").click(lastSlide)

    $("header li").click(navClick)
})

function navClick() {
    if($(this).attr("class") !== undefined)
        switchSlide($(".slide-active"), $("#" + $(this).attr("class")))
}

function nextSlide() { // Hide the current slide and show the next
    var oldSlide = $(".slide-active")
    if (oldSlide.next().is("article"))
        switchSlide(oldSlide, oldSlide.next())
}

function prevSlide() { // Hide the current slide and show the previous one
    var oldSlide = $(".slide-active")
    if (oldSlide.prev().is("article"))
        switchSlide(oldSlide, oldSlide.prev())
}

function firstSlide() { // Hide the current slide and show the first one
    switchSlide($(".slide-active"), $("main article").first())
}

function lastSlide() { // Hide the current slide and show the last one
    switchSlide($(".slide-active"), $("main article").last())
}

function switchSlide(prev, next) { // Hide the slide "prev" and show the slide "next"
    prev.removeClass("slide-active").hide()
    next.addClass("slide-active").show()
}