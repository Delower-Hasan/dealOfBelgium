jQuery(document).ready(function () {
  $(".envlp-data").hide();
  $("li.nav-item.env.own a").click(function(){
    $("li.nav-item.env.notif .envlp-data").hide(100);
    $("li.nav-item.env.user .envlp-data").hide(100);
    $("li.nav-item.env.post .envlp-data").hide(100);
    $("li.nav-item.env.own .envlp-data").toggle(100);
  });
  $("li.nav-item.env.notif a").click(function(){
    $("li.nav-item.env.own .envlp-data").hide(100);
    $("li.nav-item.env.user .envlp-data").hide(100);
    $("li.nav-item.env.post .envlp-data").hide(100);
    $("li.nav-item.env.notif .envlp-data").toggle(100);
  });

  $("li.nav-item.env.user a").click(function(){
    $("li.nav-item.env.own .envlp-data").hide(100);
    $("li.nav-item.env.notif .envlp-data").hide(100);
    $("li.nav-item.env.post .envlp-data").hide(100);
    $("li.nav-item.env.user .envlp-data").toggle(100);
  });
  $("li.nav-item.env.post a").click(function(){
    $("li.nav-item.env.own .envlp-data").hide(100);
    $("li.nav-item.env.notif .envlp-data").hide(100);
    $("li.nav-item.env.user .envlp-data").hide(100);
    $("li.nav-item.env.post .envlp-data").toggle(100);
  });

  // Active Deactive
  $("ul.hbp li a").click(function(){
    $("ul.hbp li a").removeClass("bottom-active");
    $(this).addClass("bottom-active");
  
  });
  let tagToggle = true;
  $(".catagory-tags li").click(function(){
    $(".catagory-tags li").removeClass("active-catagory")
    $(this).addClass("active-catagory");
    if(tagToggle){
      $(".catagory-tags li").hide();
      $(this).toggle(10);
      tagToggle= false
    }else{
      $(".catagory-tags li").show();
      $(this).toggle(10);
      tagToggle= true;
    }
    
    
  });


    


//   Brand section
function setDots(){
  $(".owl-nav").removeClass('disabled');
}
$('.catagory-header-wrapper').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  dots:false,
  nav:true,
  responsive:{
      0:{
          items:4,
          nav:false
      },
      500:{
          items:5,
          nav:false
      },
      992:{
          items:7,
          loop:true
      }
  },
  onInitialized:setDots,
  onChanged:setDots
})


// Fileter items
$(".js-select-menu").on("click", function() {
  var $menu = $(this);
  var $menuState = $menu.find(".js-menu-state");
  if($menuState.is(":checked")) {
    $(document).one("mouseup", function(e) {
      if (!$menu.is(e.target)
        && $menu.has(e.target).length === 0) {
          $menuState.prop("checked", "");
        }
    });
  }
});

$(".js-option").on("change", function() {
  var $optionMenu = $(this).closest(".js-select-options");
  var $checkedList = $optionMenu.find(".js-option:checked ~ span");
  var $label =  $optionMenu.prev(".js-select-label");
  
  if(!$(".js-check-all").is(":checked") &&
     $checkedList.length === $(".js-option").length) {
    $(".js-check-all").prop("checked", true);  
  }
  
  if($(".js-check-all").is(":checked") &&
     $checkedList.length !== $(".js-option").length) {
    $(".js-check-all").prop("checked", false);  
  }
  
  if(!$checkedList.length) {
    $label.attr("data-label", $label.data("defaultLabel"))
    return;
  }
  
  // var text = "";
  // $checkedList.each(function(index) {
  //   text += $(this).text();
  //   if(index + 1 !== $checkedList.length) {
  //     text += ", "
  //   }
  // });

  // $label.attr("data-label", text)
});

$(".js-check-all").on("change", function() {
  var $toggle = $(this);
  var checked = $toggle.is(":checked") ? true : false;

  $toggle.closest(".js-select-options").find(".js-option").each(function() {
    $(this).prop("checked", checked).change();
  });
});

$.fn.selectMenuValue = function() {
  var $checked = this.find('.js-select-options .js-option:checked');
  if($checked.length) {
    return [];
  }
  
  var valueArray = []; 
  $checked.each(function() {
    valueArray.push($(this).val());
  });

  return valueArray;
}

// filter js
$(".js-filter-input").on("keyup", function() {
  var userSuppliedCriteria = $.trim($(this).val()).toLowerCase().split(" ");
  $(".js-filterable").each(function () {
    var $filterableElement = $(this);
    if ($filterableElement.shouldBeExcluded(userSuppliedCriteria)) {
      $filterableElement.hide();
    } else {
      $filterableElement.show();
    }
  });
});

$.fn.shouldBeExcluded = function (userSuppliedCriteria) {
  var elementCriteria = this.data("filterCriteria").toLowerCase();
  return userSuppliedCriteria.some(function (word) {
    return elementCriteria.indexOf(word) === -1;
  });
};

// Scroll top


// declare variable
var scrollTop = $(".top-of-page");

// sticky menu
$(window).on('scroll', function(){
  var scrolling = $(this).scrollTop();
   var headSection = $(".header-section")
  if(scrolling > 100){
    headSection.fadeOut(800);	
  }
  else {
    headSection.fadeIn(500);
  }	
  });

//Click event to scroll to top
$(scrollTop).click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 200);
  return false;

}); // click() scroll top EMD


// footer show/hide
$(".footer").hide();
$(".hide-show-footer").click(function(){
  $(".hide-show-footer i").toggleClass("rotate-down");
  $(".footer").toggle(100);

}); 


// Active Deactive
$(".activity").click(function(){
  $(".activity").removeClass("active");
  $(this).addClass("active");
});

// Active Deactive content Show

$(".act-2-content").hide();
$(".act-1-active").click(function(){
  $(".act-2-content").hide();
  $(".act-1-content").show();
});

$(".act2-active").click(function(){
  $(".act-1-content").hide();
  $(".act-2-content").show();
});

// $("li.nav-item.env.post a").click(function(){
//   $("li.nav-item.env.own .envlp-data").hide(100);
// });

// Date picker
$('#startDate').calendar();
$('#endDate').calendar();

// Select Country
$(document).ready(function() {
  $('.js-example-basic-single').select2();
});

// Post Editor
ClassicEditor
.create( document.querySelector( '#editor' ) )
.then( editor => {
        console.log( editor );
} )
.catch( error => {
        console.error( error );
} );




// Shipping is free
let toggle = true;
$(".thread-price-free.ship-post").hide()
$('#free-shipping').prop('checked', false).change(function(){
  $(".thread-price-free.ship-post").toggle(100)
 if(toggle){
  $('#fship').prop("disabled", true);
  $(".freeshipp").toggleClass("free-ship-active ");
  toggle = false;
 }else{
  $('#fship').prop("disabled", false);
  $(".freeshipp").toggleClass("free-ship-active ");
  toggle = true;
 }
});

$("#price").keyup(function(){
 var price = $("#price").val()
 $(".thread-price-new.tpost").html(price+'€');
}); 

$("#USUAL").keyup(function(){
 var usualprice = $("#USUAL").val()
 var price = $("#price").val()
  var percentage = usualprice/price
 $(".thread-price-percentage.dpost").html(percentage.toFixed(2)+'%');
 $(".thread-price-old.dpost").html(usualprice+'€');
}); 

$("#deal-title").keyup(function(){
  var title = $("#deal-title").val()
  console.log(title.length)
  if(title.length <= 140){
    $("#deal-post-title").html(title);
    var restText = 140-title.length
     $("#deal-title-lenth").html(restText);
  }
 }); 
 console.log($("#editor").html())
// $(".ck.ck-content").change(function(){
//   var value = $(".ck.ck-content").val()
//   console.log($(".ck.ck-content"))
//   $("#deal-post-desc").html(value);
//  }); 


//  image uploader
var $dropzone = $('.image_picker'),
    $droptarget = $('.drop_target'),
    $dropinput = $('#inputFile'),
    $dropimg = $('.image_preview'),
    $remover = $('[data-action="remove_current_image"]');

$dropzone.on('dragover', function() {
  $droptarget.addClass('dropping');
  return false;
});

$dropzone.on('dragend dragleave', function() {
  $droptarget.removeClass('dropping');
  return false;
});

$dropzone.on('drop', function(e) {
  $droptarget.removeClass('dropping');
  $droptarget.addClass('dropped');
  $remover.removeClass('disabled');
  e.preventDefault();
  
  var file = e.originalEvent.dataTransfer.files[0],
      reader = new FileReader();

  reader.onload = function(event) {
    $dropimg.css('background-image', 'url(' + event.target.result + ')');
  };
  
  console.log(file);
  reader.readAsDataURL(file);

  return false;
});

$dropinput.change(function(e) {
  $droptarget.addClass('dropped');
  $remover.removeClass('disabled');
  $('.image_title input').val('');
  
  var file = $dropinput.get(0).files[0],
      reader = new FileReader();
  
  reader.onload = function(event) {
    $dropimg.css('background-image', 'url(' + event.target.result + ')');
  }
  
  reader.readAsDataURL(file);
});

$remover.on('click', function() {
  $dropimg.css('background-image', '');
  $droptarget.removeClass('dropped');
  $remover.addClass('disabled');
  $('.image_title input').val('');
});

$('.image_title input').blur(function() {
  if ($(this).val() != '') {
    $droptarget.removeClass('dropped');
  }
});


});

