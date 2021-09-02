$(document).ready(function(){
  $('.reasons-slider').slick({
    slidesToShow: 4,
    // slidesToScroll: 1,
    rows: 1,
    swipeToSlide: true,
    arrows: true,
    dots :false,
    infinite: true,
    prevArrow: '<div class="custom-slider-arro-r"></div>',
    nextArrow: '<div class="custom-slider-arro-l"></div>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                // slidesToScroll: 1,
                pauseOnHover: true,
            }
        },
        {
            breakpoint: 996,
            settings: {
                slidesToShow: 2,
                // slidesToScroll: 1,
                pauseOnHover: true,
            }
        },
        {
            breakpoint: 776,
            settings: {
                slidesToShow: 1,
                // slidesToScroll: 1,
                pauseOnHover: true,
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                pauseOnHover: true,
                // centerMode: true,
            }
        }
        ]
  });


  $('.brands-slider').slick({
    slidesToShow: 6,
    // slidesToScroll: 1,
    rows: 1,
    swipeToSlide: true,
    arrows: true,
    dots :false,
    infinite: true,
     autoplay: !0,
        autoplaySpeed: 0,
        speed: 2000,
    prevArrow: '<div class="custom-slider-arro-r"></div>',
    nextArrow: '<div class="custom-slider-arro-l"></div>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                // slidesToScroll: 1,
                pauseOnHover: true,
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                // slidesToScroll: 1,
                pauseOnHover: true,
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 3,
                pauseOnHover: true,
            }
        }
        ]
  });
  
});

/* ==  
    Googler Map   
==*/

// Create and Initialise the Map (required) our google map below

    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

     var mapOptions = {

     // How zoomed in you want the map to start at (always required)

            zoom: 12,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)

            center: new google.maps.LatLng(55.8115388,38.1983916), // Your Address Here

            // How you would like to style the map. 
            // This is where you would paste any style found on [Snazzy Maps][1].
            // copy the Styles from Snazzy maps,  and paste that style info after the word "styles:"

            styles: [{stylers:[{hue:'#000000'},{saturation:-100}]},{featureType:'water',elementType:'geometry',stylers:[{lightness:50},{visibility:'simplified'}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]}]
        };
    
        var mapElement = document.getElementById('map');
        
          // Create the Google Map using out element and options defined above
           var map = new google.maps.Map(mapElement, mapOptions);
            // Define the image to use for the map marker (58 x 44 px)
    
                var image = 'img/icons/map-marker.png';
    
        // Define the Lattitude and Longitude for the map location
    
                var myLatLng = new google.maps.LatLng(55.8109988,38.1999916);
    
        // Define the map marker characteristics
    
                var mapMarker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: image,
                title:  'Автотехцентр "Диполь"'
    
                });

           // Following Lines are needed if you use the Info Window to display content when map marker is clicked

       /*var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });*/

        // Following line turns the marker, into a clickable button and when clicked, opens the info window

            google.maps.event.addListener(mapMarker, 'click', function() {
                infowindow.open(map, mapMarker);
    });  
  }


//scroll to
$(document).ready(function(){
 
        //ID блока с ссылками #prime_nav
  $(".go-diagnostic-map button, .top-adres-text").click(function(event){
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
 
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: $('#map').position().top}, 1500);
  });


});


$(window).scroll(function () {
    $(".parallax-container-l").css("background-position","30% " + ($(this).scrollTop() / 4) + "px");
});

$(window).scroll(function () {
    $(".parallax-container-r").css("background-position","30% " + ($(this).scrollTop() / 3) + "px");
});


  // mask
  $(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $("input[name='name']").mask("+7(999) 999-99-99");
});