$('.menu-icon a').on('click',function(){
    $('.menu').slideToggle();
})
/*-------------Counter JS----------------*/
$('.counter').counterUp({
    delay: 10,
    time: 2000
});

/*-------------Counter JS----------------*/

/*------------------Auto Typed ----------*/
    let typed = new Typed(".auto_type",{
        strings : ["Mohammad Jubair", "Junior-Web Developer", "UI/UX Designer", "Junior-Software Engineer", "App Developer"],
        typeSpeed : 150,
        backspeed : 200,
        loop : true
    })
/*------------------Auto Typed------------*/
/*window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})*/
$('.education_tab').click(function(event) {
	$(this).addClass('active');
	$('.work_tab').removeClass('active');
	$('.education').show();
	$('.work').hide();
});
$('.work_tab').click(function(event) {
	$(this).addClass('active');
	$('.education_tab').removeClass('active');
	$('.work').show();
	$('.education').hide();
});