//sidebar section
$(".sideIcon i").on("click",function(){
    $("#home .leftPart").animate({left:0},1000)
    $(".content").animate({marginLeft:"100px"},1000)
})
$(".first .cross").on("click",function(){
    let boxWidth=$(".first").innerWidth();
    $("#home .leftPart").animate({left:-boxWidth},1000)
    $(".content").animate({marginLeft:"0px"},1000)
})
// duration section
$("#duration h3").on("click",function(){
    $(this).next().slideToggle(500);
    $("#duration .inner").not($(this).next()).slideUp(500);
})
//textarea part
$("textarea").keyup(function (e) { 
    let myLength=$(this).val().length;
    $("#chars").text(
        100-myLength<=0? "your available chars is finished":100-myLength//ter op
    )
});
///scroll
$("#home .sideNav a").on("click",function(e){
    console.log(e.target);
    let clickedItem=$(e.target).attr("href");
    let topEle=$(clickedItem).offset().top;
    $("body,html").animate({scrollTop:topEle},1000)
})
$(window).on("scroll",function(){
   let windowTop=$(window).scrollTop()
   let durationTop=$("#duration").offset().top
   if (windowTop>durationTop-300){
    $(".leftPart").css("display","none")
   }else{
    $(".leftPart").css("display","flex")
   }
})
$(document).ready(function(){
    countDownToTime("24 august 2024 4:24:24")   //caallllll
})
//counter section //getTime return time millisec
function countDownToTime(CountTo){
    let futureDate=new Date(CountTo).getTime()/1000 //sec
    console.log(futureDate);
    let now= new Date().getTime()/1000
    console.log(now); //time bl sec
    timeDiffrence=futureDate-now;
    let days=Math.floor(timeDiffrence/(24*60*60))
    console.log(days);
    let hours=Math.floor((timeDiffrence-(days*(24*60*60)))/(60*60))//lazm nrg3 nhwelha sec 34n l diff bl sec
    console.log(hours);
    let mins=Math.floor((timeDiffrence-((days*(24*60*60))-(hours*60*60)))/60)
    console.log(mins);
    let seconds=Math.floor(timeDiffrence-((days*24*60*60)-(hours*60*60)-(mins*60)))
    console.log(seconds);
    $(".day").html(`${days}D`)
    $(".hour").html(`${hours}h`)
    $(".mins").html(`${mins}m`)
    $(".second").html(`${seconds}s`)
    setTimeout(function(){
        countDownToTime("24 august 2024 4:24:24")
    },1000) // kol sanyaa el diff hy2eeelll f 34n kda l rkm bytghiaaar
} 


