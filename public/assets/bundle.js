(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// init
var controller = new ScrollMagic.Controller();

// define movement of panels
var wipeAnimation = new TimelineMax()
    .fromTo("div.panel.second", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
    .fromTo("div.panel.third",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
    .fromTo("div.panel.fourth", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from top
    .fromTo("div.panel.fifth", 1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone}); // in from bottom
    // create scene to pin and link animation
    
new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: "400%"
})

.setPin("#pinContainer")
.setTween(wipeAnimation)
.addTo(controller);
},{}]},{},[1]);
