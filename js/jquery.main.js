$(document).ready(function(){
	initPlayerForm();
	initUi();
	initTabs();
	initFlexImage();
  initMap('map-canvas');
  quantitySwitch();



   var wrapper = $( ".file_upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( "button" ),
        lbl = wrapper.find( "div" );
    btn.focus(function(){
        inp.focus()
    });
    // Crutches for the :focus style:
    inp.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });



        // Yep, it works!
    btn.add( lbl ).click(function(){
        inp.click();
    });


        // Crutches for the :focus style:
    btn.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });


      var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            btn.text( "Выбрать" );
        }else
            btn.text( file_name );
    }).change();




   $(".color-list li a").click(function(e){
      $(this).closest('li').toggleClass('active');
      $(this).closest('li').siblings(".active").removeClass('active');
     return false;
  });


    $('.popup-holder  .buy-block .btn-holder li .btn.btn-click').click( function(){
        var bg = $("#popup-click .bg1")
         bg.show();
        return false;
   });
    $('#popup-click  .close-popup').click( function(){
        var bg = $("#popup-click .bg1")
         bg.hide();
         $(this).closest('#popup-click').hide();
        return false;
   });
    $('#popup-click .bg1').click( function(){
          $(this).hide();
         $(this).closest('#popup-click').hide();
        return false;
   });


   $(window).load(function(){
      var _foot_h = $('#footer').outerHeight();
      $("#main").css({
          'padding-bottom': _foot_h ,
      })
        $("#footer").css({
                'margin-top': -_foot_h ,
      })
     });

    $(window).resize(function(){
          var _foot_h = $('#footer').outerHeight();
        $("#main").css({
            'padding-bottom': _foot_h ,
        })
        $("#footer").css({
            'margin-top': -_foot_h ,
        })
    });

    $(window).scroll(function(){
      _heah_h = $('#header').height();
       if ( $(this).scrollTop() > $("#wrapper").offset().top  ) {
            $("#header").addClass("scroll");
            $("#main").css({
               'padding-top': _heah_h ,
            })
        } else {
             $("#header").removeClass("scroll");
            $("#main").css({
               'padding-top': 0,
            })
        }
    });

  $('.basket .btn-del').on('click', function (e) {
    $(this).closest('tr').hide();
     return false;
  });


   $('.basket-drop-list li .btn-del').on('click', function (e) {
    if($('.basket-drop-list li').length == 1){
      $('.basket-drop').fadeOut();
    }
    $(this).closest('li').remove();
     return false;
  });

  $('.btn-filter').on('click', function (e) {
    $(this).closest('#sidebar').find('.sidebar-list').slideToggle();
     return false;
  });

    $('.btn-filter').on('click', function (e) {
    $(this).closest('.hide-filter-search').find('.sidebar-list').slideToggle();
     return false;
  });




function quantitySwitch(){
  $(document).on('click','.amount .minus,.amount .plus',function(e){
    var input=$(this).parent().find('input'),
      val=parseInt(input.val());
    if($(this).is('.plus')){
      input.val((++val))
    }else{
      if(val-1<=1)
        input.val("1")
      else
        input.val((--val)+"")
    }
    e.preventDefault();
  });
};


   if($(window).width() > 970){
    $(".sidebar-list li .title").click(function(e){
        $(this).next().slideToggle(400,function(){
        $(this).closest('li').toggleClass('active');
      });
        $(this).closest('li').siblings(".active").children("ul , .hidden-box").slideUp(400,function(){
        $(this).closest('li').removeClass('active');
      });
        e.preventDefault();
    });
  }


    $(".pay-delivery-list>li ul .title").click(function(e){
       var self = $(this);
      var currentMenu = $(this).closest('li').find('.info');
      $('.pay-delivery-list>li ul .info').not(currentMenu).slideUp();
      currentMenu.slideToggle();
      $(this).closest('li').not( $('active')).toggleClass('active');
      $('.pay-delivery-list>li ul .title').not(self).closest('li').removeClass('active');
       return false;
  });




	$('#footer .footer-columns  h4').on('click  touchstart', function (e) {
      if($(window).width() < 670){
      var self = $(this);
      var currentMenu = $(this).closest('li').find('ul');
      currentMenu.slideToggle();
      $(this).not( $(' a.active')).toggleClass('active');
       $('.footer-columns li ul').not(currentMenu).slideUp();
      $('.aside-list .title a').not(self).removeClass('active');
       }
      return false;
   });

     $(document).on( 'click', '.user-interface-list li a', function(){
          if ($(this).next().is('.basket-drop')) {
             $(this).next().fadeToggle(100,function(){
              });
              $(this).closest('li').toggleClass('active');
              return false;
          }
      });


        if($(window).width() < 970){
             $(document).on( 'click', '.nav-product-list li.has-drop  a', function(){
                if ($(this).next().is('.drop')) {
                   $(this).next().slideToggle(100,function(){
                    });
                    $(this).closest('li').toggleClass('active');
                    $(this).closest('li').siblings(".active").children(".drop").slideUp(100,function(){
                      $(this).closest('li').removeClass('active');
                    });
                    return false;
                }
            });
         }

  if (device.mobile() || device.tablet()) {
    $('.cart-visual-holder .zoom-in').on('click', function(){
      $('.zoom').zoom();
      $(this).addClass("active");
       $('.cart-visual-holder .zoom-out').addClass("active");
       return false;
    });
     $('.cart-visual-holder .zoom-out').on('click', function(){
      $('.zoom').trigger('zoom.destroy');
      $(this).removeClass("active");
       $('.cart-visual-holder .zoom-in').removeClass("active");
        return false;
    })


	}else{
		$('.zoom').zoom();
	}
	resolutions();
	init_and_resize();
	$(window).resize(function() {
		init_and_resize();
	});


	function resolutions(){
		$('body').append('<div class="resolutions960"></div>');
	}
	function init_and_resize(){
		if($('.resolutions960').is(':visible')){
      $('#header .logo').insertBefore($('#nav'));
      $('#header .female-change').insertBefore($('#nav'));
			$('#header .nav-product-list-holder').insertBefore($('#nav'));
		}
		if($('.resolutions960').is(':hidden')){
      $('#header .logo').appendTo($('.row-middle'));
			$('#header .female-change').insertBefore($('#header .user-interface-block'));
			$('#header .nav-product-list-holder').appendTo($('#header .center'));
		}
	}


	 $('.close-menu').click(function(event) {
	 	$('#header .row-top').removeClass('open');
	 	$('#header .bg').removeClass('open');
		return false;
	});
	  $('.open-menu').click(function(event) {
	 	$('#header .row-top').addClass('open');
	 	$('#header .bg').addClass('open');
		return false;
	});
	$('#header .bg').click(function(event) {
		$('#header .row-top').removeClass('open');
	 	$(this).removeClass('open');
	return false;
	})



	$("select.select-dropdown").dropdown();
	if ('slick' in $.fn) {
		$('.product-list-gallery').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			focusOnSelect: true,
			 responsive: [
                {
                  breakpoint: 1250,
                  settings: {
                    slidesToShow: 4,
                  }
                },
                 {
                  breakpoint: 980,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                 {
                  breakpoint: 770,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                  {
                  breakpoint: 550,
                  settings: {
                    slidesToShow: 1,
                    dots:true,
                  }
                },

             ]
		});
    $('.color-list.gallery').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      variableWidth:true,
      focusOnSelect: true,
       responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
            }
          }
       ]
    });
		$('.partners-gallery').slick({
			slidesToShow: 8,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			focusOnSelect: true,
			 responsive: [
                {
                  breakpoint: 1250,
                  settings: {
                    slidesToShow: 6,
                  }
                },
                 {
                  breakpoint: 960,
                  settings: {
                   slidesToShow: 4,
                  }
                },
                 {
                  breakpoint: 670,
                  settings: {
                    slidesToShow: 2,
                  }
                }
             ]
		});
    var document_gallery = $('.document-list-gallery').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      focusOnSelect: true,
       responsive: [
                {
                  breakpoint: 1250,
                  settings: {
                    slidesToShow: 4,
                  }
                },
                 {
                  breakpoint: 1000,
                  settings: {
                   slidesToShow: 3,
                  }
                },
                 {
                  breakpoint: 850,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                 {
                  breakpoint: 670,
                  settings: {
                    slidesToShow: 1,
                  }
                }
             ]
    });
		$('.main-screen-gallery').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			arrows:false,
			fade: true,
			dots: true,
			autoplay:true,
			autoplaySpeed:2000,
		});

      $('.news .news-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
         responsive: [
                    {
                      breakpoint: 850,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          adaptiveHeight: true,
                          arrows:true,
                          dots: false,
                          autoplay:false,
                      }
                    },


                 ]
    });

		$('.catalog-cart-block .catalog-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			arrows:false,
			fade: true,
			asNavFor: '.catalog-nav',
		});
		$('.catalog-cart-block .catalog-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.catalog-slider',
			vertical: true,
			arrows:false,
			focusOnSelect: true,
			 responsive: [
                    {
                      breakpoint: 960,
                      settings: {
                        slidesToShow: 4,
                        vertical: false,
                      }
                    },
                     {
                      breakpoint: 751,
                      settings: {
                        slidesToShow: 5,
                        vertical: false,
                      }
                    },
                     {
                      breakpoint: 550,
                      settings: {
                        slidesToShow: 3,
                        vertical: false,
                      }
                    },


                 ]
		});


      $('.popup-holder .catalog-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows:false,
      fade: true,
      asNavFor: '.catalog-nav',
    });


      $('.popup-holder .catalog-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.catalog-slider',
      vertical: true,
      arrows:false,
      focusOnSelect: true,
       responsive: [
                    {
                      breakpoint: 960,
                      settings: {
                        slidesToShow: 4,
                         vertical: false,
                      }
                    },
                     {
                      breakpoint: 550,
                      settings: {
                        slidesToShow: 3,
                         vertical: false,
                      }
                    },

                 ]
    });


	}
	 $(document).click(function(event) {
		if ($(event.target).closest('#header .basket-drop').length) return;
		$('#header .basket-drop').fadeOut();
		event.stopPropagation();
	})


	$(window).load(function(){
		_hh1 = $('.novelties-list li').height();
		$('.novelties-list li .half').height(_hh1/2);
	});
	$(window).resize(function(){
		if ($(window).width() < 1250) {
			_hh1 = $('.novelties-list li').height($(window).width()/2);
			_hh = _hh1.height();
			console.log()
			$('.novelties-list li').height(_hh1 );
			$('.novelties-list li .half').height(_hh/2);
		};
	});
	$(window).load(function(){
		if ($(window).width() < 1250) {
			_hh1 = $('.novelties-list li').height($(window).width()/2);
			_hh = _hh1.height();
			$('.novelties-list li').height(_hh1 );
			$('.novelties-list li .half').height(_hh/2);
		};

	});
	$('.design-list li').matchHeight();
	$('input.check ,input.radio').iCheck({
		checkboxClass: 'check',
		radioClass: 'radio',
		increaseArea: '20%' // optional
	});
	mobmenu();
	initPopups();
	function initTabs(){
	 $('.tabset ul.tab-control li a').click( function(){
		var thisHold = $(this).closest(".tabset");
		var _ind = $(this).closest('li').index();
		thisHold.children('.tab-body').children(".tab").removeClass('active');
		thisHold.children('.tab-body').children("div.tab:eq("+_ind+")").addClass('active');
		$(this).closest("ul").find(".active").removeClass("active");
		$(this).parent().addClass("active");
		return false;
	 });

  $(document).on('click' , '.female-change li a', function(){
    var thisHold = $(this).closest("#header .center ,.row-top");
    var _ind = $(this).closest('li').index();
    $('.nav-product-list-holder').children(".tab").removeClass('active');
    $('.nav-product-list-holder').children("div.tab:eq("+_ind+")").addClass('active');
    $(this).closest("ul").find(".active").removeClass("active");
    $(this).parent().addClass("active");
    return false;
   });

	};

});


function initUi (){
	$( ".slider-range" ).each(function(){
		var _slider = $(this);
		var _values = $('.min_max_currentmin_currentmax',_slider).val().split('/');
		_slider.slider({
			range: true,
			min: parseInt(_values[0]),
			max: parseInt(_values[1]),
			step:1,
			values: [ parseInt(_values[2]), parseInt(_values[3]) ],
			slide: function(event, ui) {
				// $(ui.handle).html('<span>'+ui.value+  '</span>');
				$( ".from" ,_slider).val(ui.values[0]);
				$( ".to",_slider).val(ui.values[1]);

			},
			change: function(event, ui) {
				// $(ui.handle).html('<span>'+ui.value+  '</span>');
				$( ".from" ,_slider).val(ui.values[0]);
				$( ".to",_slider).val(ui.values[1]);
				function rand (min, max) {
					return Math.floor(Math.random() * (max - min)) + min;
				}
				var rand =  rand(0, 2500);
				$( ".range-box .catalog-box .num").text(rand);
			}
		});
		// $( ".ui-slider-handle",_slider).html("<span>"+_slider.slider('values',1)+  "</span>");
		$( ".ui-slider-handle" ,_slider).eq(0).find('span').text(_slider.slider('values',0));
		$( ".to",_slider).val(_slider.slider('values',1));
		$( ".from" ,_slider).val(_slider.slider('values',0));
		$( ".ui-slider-handle").eq(0).addClass('first');
		var _text = parseInt($(".ui-slider-handle span").eq(0).text());
		$(".ui-slider-handle span").eq(0).text(_text.toLocaleString());
		var _text1 = parseInt($(".ui-slider-handle span").eq(1).text());
		$(".ui-slider-handle span").eq(1).text(_text1.toLocaleString() );
	});
	$('.price-info input[type=radio]').change(function(){
		var _holder = $(this).closest('.price-info');
		if ($('label:first',_holder).hasClass('active')) {
			$('.price-btn',_holder).removeClass('active')
		} else {
			$('.price-btn',_holder).addClass('active')
		}
	});
}

function initFlexImage(){
 $('.flex-image').each(function(){
  $(this).closest('.flex-image-holder').css({
   'background':'url('+$(this).attr('src')+') no-repeat 50% 0%',
   'background-size':'cover'
  })
 });
}

function mobmenu(){
        var opener = $('.btn-more');
        var menu = $('.box-hidden');
        opener.on('click', function(e){
            e.preventDefault();
            $(this).closest('.text').find('.box-hidden').slideToggle();
            $(this).toggleClass("active");
        });
    }

function initPopups(){
	$('body')
    .popup({
      "opener":".buy-block .btn-holder li .btn.btn-click",
      "popup_holder":"#popup-click",
      "popup":".popup",
      "close_btn":""
    })
    .popup({
      "opener":".catalog-list li .btn-show",
      "popup_holder":"#popup-show",
      "popup":".popup",
      "close_btn":".close-popup"
    })
}
$.fn.popup = function(o){
 var o = $.extend({
    "opener":".call-back a",
    "popup_holder":"#call-popup",
    "popup":".popup",
    "close_btn":".btn-close",
    "close":function(){
    	 $('.popup-holder .bg').hide();
    },
    "beforeOpen": function(popup) {
     $(popup).css({
      'left': 0,
      'top': 0
     }).hide();
    }
   },o);
 return this.each(function(){
  var container=$(this),
   opener=$(o.opener,container),
   popup_holder=$(o.popup_holder,container),
   popup=$(o.popup,popup_holder),
   close=$(o.close_btn,popup),
   bg=$('.bg',popup_holder);
   popup.css('margin',0);
   opener.click(function(e){
    o.beforeOpen.apply(this,[popup_holder]);
    popup_holder.fadeIn(400);
    alignPopup();
    bgResize();
    bg.show();
    e.preventDefault();
   });
  function alignPopup(){
   var deviceAgent = navigator.userAgent.toLowerCase();
   var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/i);
   if(agentID){
    if(popup.outerHeight()>window.innerHeight){
     popup.css({'top':$(window).scrollTop(),'left': ((window.innerWidth - popup.outerWidth())/2) + $(window).scrollLeft()});
     return false;
    }
    popup.css({
     'top': ((window.innerHeight-popup.outerHeight())/2) + $(window).scrollTop(),
     'left': ((window.innerWidth - popup.outerWidth())/2) + $(window).scrollLeft()
    });
   }else{
    if(popup.outerHeight()>$(window).outerHeight()){
     popup.css({'top':$(window).scrollTop(),'left': (($(window).width() - popup.outerWidth())/2) + $(window).scrollLeft()});
     return false;
    }
    popup.css({
     'top': (($(window).height()-popup.outerHeight())/2) + $(window).scrollTop(),
     'left': (($(window).width() - popup.outerWidth())/2) + $(window).scrollLeft()
    });
   }
  }
  function bgResize(){
   var _w=$(window).width(),
    _h=$(document).height();
   bg.css({"height":_h,"width":_w+$(window).scrollLeft()});
  }
  $(window).resize(function(){
   if(popup_holder.is(":visible")){
    bgResize();
    alignPopup();
   }
  });
  if(popup_holder.is(":visible")){
    bgResize();
    alignPopup();
  }
  close.add(bg).click(function(e){
   var closeEl=this;
   popup_holder.fadeOut(400,function(){
    o.close.apply(closeEl,[popup_holder]);
   });
   e.preventDefault();
  });
  $('body').keydown(function(e){
   if(e.keyCode=='27'){
    popup_holder.fadeOut(400);
   }
  })
 });
};


function initPlayerForm(){
	if("mask" in $.fn){
		$('.phone').mask("+7 (999) 999-99-99");
	}
	$('form').each(function(){
      var form=$(this),
      input=form.find('input:text');
  		form.find('.required').blur(function(){
            var val=$(this).val();
            if((/^[a-zA-Zа-яА-ЯіІєЄїЇ\s-]{1,40}$/ig).test(val)){
                $(this).removeClass('error');
                $(this).closest('.holder-error').removeClass('active');
            }
            else{
                $(this).addClass('error');
                $(this).closest('.holder-error').addClass('active');
				$(this).val('');
            }
        });
        form.on('keyup keydown', '.required.error', function(){
            var val=$(this).val();
            if((/^[a-zA-Z0-9а-яА-ЯіІєЄїЇ\s-\(\)\+]{1,40}$/ig).test(val)){
                $(this).removeClass('error');
                $(this).closest('.holder-error').removeClass('active');
            }
            else{
                $(this).addClass('error active');
                $(this).closest('.holder-error').addClass('active');
            }
        });
		 form.find('.phone').blur(function(){
            var val=$(this).val();
             if((/^[0-9\s-\(\)\+]{18}$/ig).test(val)){
                $(this).removeClass('error');
                $(this).closest('.holder-error').removeClass('active');
            }
            else{
                $(this).addClass('error');
                $(this).closest('.holder-error').addClass('active');
				        $(this).val('');
            }
        });
        form.on('keyup keydown', '.phone.error', function(){
            var val=$(this).val();
            if((/^[0-9\s-\(\)\+]{18}$/ig).test(val)){
                $(this).removeClass('error');
                $(this).closest('.holder-error').removeClass('active');
            }
            else{
                $(this).addClass('error');
                $(this).closest('.holder-error').addClass('active');
            }
        });
      form.find('.email').blur(function(){
          var val=$(this).val();
          if((/^[-\._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/ig).test(val) && val.length<=30){
              $(this).removeClass('error ');
              $(this).closest('.holder-error').removeClass('active');
          }
          else{
              $(this).addClass('error active');
              $(this).closest('.holder-error').addClass('active');
			  $(this).val('');
          }
      });
      form.on('keyup keydown', '.email.error', function(){
          var val=$(this).val();
          if((/^[-\._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/ig).test(val) && val.length<=30){
              $(this).removeClass('error');
              $(this).closest('.holder-error').removeClass('active');
          }
          else{
              $(this).addClass('error');
              $(this).closest('.holder-error').addClass('active');
          }
      });
      form.submit(function(e){
          input.trigger('blur');
          if(form.find('.error').size()){
			/*alert('error');*/
			return false;
		} else {
			// $.post("feedback.php", $(this).serialize());
			values = $(this).serialize();
			console.log();
			$.ajax({
				url: "feedback.php",
				type: "post",
				data: values,
				success: function(){
					// успех
					$('#popup-call .popup-info').addClass('active');
					$('#popup-ask .popup-info').addClass('active');
				},
				error:function(){
					// ошибка
				}
			});
			return false;
		}
      });
  });
};

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      _mouseDestroy = mouseProto._mouseDestroy,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles                    
      true,             // cancelable                 
      window,           // view                       
      1,                // detail                     
      touch.screenX,    // screenX                    
      touch.screenY,    // screenY                    
      touch.clientX,    // clientX                    
      touch.clientY,    // clientY                    
      false,            // ctrlKey                    
      false,            // altKey                     
      false,            // shiftKey                   
      false,            // metaKey                    
      0,                // button                     
      null              // relatedTarget              
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.bind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.unbind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse destroy method
    _mouseDestroy.call(self);
  };

})(jQuery);



  function initMap (mapId){
    if (!$('#map-canvas').length) return;
    // map
    function initialize() {
      var MY_MAPTYPE_ID = 'MapStyle';
      var stylez =  [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
;
        var image = 'images/marker.png';
        var time;

      var markers = [
        {
          lat: 55.766663,
          lng: 37.613359,
          title: 'Marker',
          tel1: "Пн-Сб: с 10:00 до 22:00",
          tel2: "+7 (926) 046-71-11",
          mail: "info@stutiopro.moscov",
        },
      ];

      var geocoder = new google.maps.Geocoder;

      var mapOptions = {
        zoom: 15,
        scrollwheel: false,
        navigationControl: true,
        mapTypeControl: false,
        scaleControl: true,
        draggable: true,
        center: new google.maps.LatLng(55.766663,37.613359),
        mapTypeId: MY_MAPTYPE_ID
      }

      var map = new google.maps.Map(document.getElementById(mapId), mapOptions);

      var initMarkers = function() {
        for (var x = 0; x < markers.length; x++) {
          var currentMarker = markers[x];
          var position = new google.maps.LatLng(currentMarker.lat,currentMarker.lng);

          var marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: image,
            title: currentMarker.title,
            tel1: currentMarker.tel1,
            tel2: currentMarker.tel2,
            mail: currentMarker.mail
          });
          var infoWindow;

          google.maps.event.addListener(marker, 'click', function() {
            var currMarker = this;
            geocoder.geocode({'location': {lat: currMarker.position.lat(), lng: currMarker.position.lng()}}, function(results, status) {
              if (typeof infoWindow != 'undefined') {
                infoWindow.close();
              }

              infoWindow = new google.maps.InfoWindow({
                content: '<div class="address_list">' + '<span class="address">' + results[0].formatted_address  + '</span>' + '</br>'
                 + '<span>'  +  currMarker.tel1 + '</span>' +   '</br>' + '<span>'  +  currMarker.tel2 + '</span>' +   '</br>' + '<span class="mail">'  +  currMarker.mail + '</span>' +  '</div>'
              });
              infoWindow.open(map, currMarker);
            });
          });
        }
      };

      initMarkers();

      /* ---------------- */
        var styledMapOptions = {name: "MyStyle"};
      var jayzMapType = new google.maps.StyledMapType(stylez, styledMapOptions);
      map.mapTypes.set(MY_MAPTYPE_ID, jayzMapType);

    }
    google.maps.event.addDomListener(window, 'load', initialize);


  }

/*! device.js 0.1.58 */
(function(){var a,b,c,d,e,f,g,h,i,j;a=window.device,window.device={},c=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),device.ios=function(){return device.iphone()||device.ipod()||device.ipad()},device.iphone=function(){return d("iphone")},device.ipod=function(){return d("ipod")},device.ipad=function(){return d("ipad")},device.android=function(){return d("android")},device.androidPhone=function(){return device.android()&&d("mobile")},device.androidTablet=function(){return device.android()&&!d("mobile")},device.blackberry=function(){return d("blackberry")||d("bb10")||d("rim")},device.blackberryPhone=function(){return device.blackberry()&&!d("tablet")},device.blackberryTablet=function(){return device.blackberry()&&d("tablet")},device.windows=function(){return d("windows")},device.windowsPhone=function(){return device.windows()&&d("phone")},device.windowsTablet=function(){return device.windows()&&d("touch")},device.fxos=function(){return d("(mobile; rv:")||d("(tablet; rv:")},device.fxosPhone=function(){return device.fxos()&&d("mobile")},device.fxosTablet=function(){return device.fxos()&&d("tablet")},device.mobile=function(){return device.androidPhone()||device.iphone()||device.ipod()||device.windowsPhone()||device.blackberryPhone()||device.fxosPhone()},device.tablet=function(){return device.ipad()||device.androidTablet()||device.blackberryTablet()||device.windowsTablet()||device.fxosTablet()},device.portrait=function(){return 90!==Math.abs(window.orientation)},device.landscape=function(){return 90===Math.abs(window.orientation)},device.noConflict=function(){return window.device=a,this},d=function(a){return-1!==j.indexOf(a)},f=function(a){var b;return b=new RegExp(a,"i"),c.className.match(b)},b=function(a){return f(a)?void 0:c.className+=" "+a},h=function(a){return f(a)?c.className=c.className.replace(a,""):void 0},device.ios()?device.ipad()?b("ios ipad tablet"):device.iphone()?b("ios iphone mobile"):device.ipod()&&b("ios ipod mobile"):device.android()?device.androidTablet()?b("android tablet"):b("android mobile"):device.blackberry()?device.blackberryTablet()?b("blackberry tablet"):b("blackberry mobile"):device.windows()?device.windowsTablet()?b("windows tablet"):device.windowsPhone()?b("windows mobile"):b("desktop"):device.fxos()?device.fxosTablet()?b("fxos tablet"):b("fxos mobile"):b("desktop"),e=function(){return device.landscape()?(h("portrait"),b("landscape")):(h("landscape"),b("portrait"))},i="onorientationchange"in window,g=i?"orientationchange":"resize",window.addEventListener?window.addEventListener(g,e,!1):window.attachEvent?window.attachEvent(g,e):window[g]=e,e()}).call(this);