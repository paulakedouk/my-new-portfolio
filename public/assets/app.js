// init controller
let controller = new ScrollMagic.Controller();
let fadeElem = Array.prototype.slice.call(document.getElementsByClassName('fade-in'));
let self = this;

fadeElem.forEach(function(self) {
  // build a tween
  let tween = TweenMax.from(self, 0.5, {autoAlpha: 0, y: '+=100', ease: Linear.easeNone});
  // build a scene
  let scene = new ScrollMagic.Scene({
    triggerElement: self
  })
  .setTween(tween)
  .addTo(controller)
});
  
function hideAndShow() {
    var hideProjects = document.getElementById('projects-hidden');
    hideProjects.style.display = 'block';

    var hideBtn = document.getElementById('collapse-projects-btn');
    hideBtn.style.display = 'none';


    TweenMax.to("#projects-hidden", 0.5,  { y: -20 , opacity: 1 , ease:Power1.easeIn });
    var addMargin = document.getElementById('projects-hidden');
    addMargin.style.marginTop = '10rem';
}

function hireMeScroll() {
  console.log('test')
  var myFormTop = document.getElementById('my-form');

  myFormTop.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
 
}


// var mediaQueryMedium = window.matchMedia("(max-width: 768px)");
// if(!mediaQueryMedium.matches) {
//   $(document).mousemove(function(event){
//     var xPos = (event.clientX/$(window).width())-0.5,
//         yPos = (event.clientY/$(window).height())-0.5,
//         box = $('.contact-img');
   
//     TweenLite.to(box, 0.6, {
//       rotationY: 60 * xPos, 
//       rotationX: 60 * yPos,
//       ease: Power1.easeOut,
//       transformPerspective: 900,
//       transformOrigin: 'center'
//     });
//   });
// }


// var submitButton = document.getElementsByClassName("submit-button");
// (submitButton),
//     $(function () {
//         var e = $("#my-form");
//         $(e).submit(function (t) {
//             if ((t.preventDefault(), "" !== $("#name").val() && "" !== $("#email").val() && "" !== $("#message").val())) {
//                 $("#submit").attr("value", "Sending...");
//                 var n = $(e).serialize();
//                 $.ajax({ type: "POST", url: $(e).attr("action"), data: n }).done(function (e) {
//                     var t = document.getElementById("submit-message");
//                     t.style.display = "block";
//                     var n = document.getElementById("submit-button");
//                     (n.style.display = "none"), $("#name").val(""), $("#email").val(""), $("#message").val("");
//                 });
//             }
//         });
//     });