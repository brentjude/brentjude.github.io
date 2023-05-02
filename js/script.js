// init Isotope
var $container = $('#container').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer',
      gutter: 55
    }
});

// layout Isotope after each image loads
$container.imagesLoaded().progress( function() {
    $container.isotope('layout');
  });  

// filter with selects and checkboxes
var $checkboxes = $('.portfolio--nav input');

$checkboxes.change( function() {
    // map input values to an array
    var inclusives = [];

    // inclusive filters from checkboxes
    $checkboxes.each( function( i, elem ) {
        // if checkbox, use value if checked
        if ( elem.checked ) {
        inclusives.push( elem.value );
        }
    });

    // combine inclusive filters
    var filterValue = inclusives.length ? inclusives.join(', ') : '*';

    $container.isotope({ filter: filterValue })
});



//contact form jquery
$( '.js-input' ).keyup(function() {
    if( $(this).val() ) {
       $(this).addClass('not-empty');
    } else {
       $(this).removeClass('not-empty');
    }
  });


//Display the current year
var currentYear = new Date().getFullYear();

if (document.readyState) {
  document.getElementById("current-year").textContent = currentYear;
}