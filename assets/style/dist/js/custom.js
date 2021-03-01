$(document).ready(function () {
    svgMap(); //Function is using on SVG MAP
    mobileNavigation();
    formComplete();
    $('[data-toggle="tooltip"]').tooltip();
});

function svgMap() {
    var myArray = [];
    var websiteUrl = "#";
    var haveCountries = [{
            'iso': 'IN',
            'name': 'India',
            'total': '20',
            'url': 'volunteer-in-india'
        },
        {
            'iso': 'ZA',
            'name': 'South Africa',
            'total': '2',
            'url': 'volunteer-in-australia'
        },
        {
            'iso': 'KH',
            'name': 'Cambodia',
            'total': '15',
            'url': 'volunteer-in-thailand'
        },
        {
            'iso': 'IE',
            'name': 'Ireland',
            'total': '2',
            'url': 'volunteer-in-australia'
        },
        {
            'iso': 'NP',
            'name': 'Nepal',
            'total': '20',
            'url': 'volunteer-in-india'
        },
        {
            'iso': 'TH',
            'name': 'Thailand',
            'total': '15',
            'url': 'volunteer-in-thailand'
        },
        {
            'iso': 'AU',
            'name': 'Australia',
            'total': '2',
            'url': 'volunteer-in-australia'
        },
        {
            'iso': 'PE',
            'name': 'Peru',
            'total': '2',
            'url': 'volunteer-in-australia'
        },
        {
            'iso': 'ES',
            'name': 'Spain',
            'total': '15',
            'url': 'volunteer-in-thailand'
        },
        {
            'iso': 'DZ',
            'name': 'Spain',
            'total': '1',
            'url': 'volunteer-in-thailand'
        },
        {
            'iso': 'CN',
            'name': 'China',
            'total': '20',
            'url': 'volunteer-in-china'
        }
    ];
    var getColor = [
        "#ff8f00",
        "#ff3d00",
        "#ec407a",
        "#1e88e5",
        "#4527a0",
        "#ef504a",
        "#00949e",
        "#ffab00",
        "#3f51b5",
        "#43a047",
        "#1565c0"
    ];
    var i = 0;
    var getSvgAttr = $('svg').attr('data-program-marker');
    //console.log(getSvgAttr);

    if (getSvgAttr == 'true') {

        $.each(haveCountries, function (k, v) { //get available countries Code and Value

            $('[data-program-marker="true"] path').each(function () {
                var dataCode = $(this).attr('data-code'); //get SVG countries Code
                var a = myArray.indexOf(dataCode);

                if (i == 9) {
                    i = 0;
                }
                i++;
                //  console.log(a);
                var rendomColor = getColor[i];
                if (dataCode == v['iso']) { //Match Country COde
                    $(this).attr('fill', rendomColor);
                    $(this).attr('class', 'cursor');
                    $(this).attr('title', v['name'] + ', ' + v['total'] + ' Programs');
                    $(this).attr('data-total', v['total']);

                    $(this).attr('onclick', 'window.location.href ="' + websiteUrl + '/' + v['url'] + '";');
                }

            });
            // console.log(k,v);
        });

    }


}

$('.ewh_nav_trigger').on('click', function () {
    $(this).toggleClass('open');
    $(this).children('.trigger_btn').toggleClass('open');
});

var getTabpane = $('.tab-pane').attr('data-content');

$('.nav-pills a').mouseover(function () {
    var getHrefVal = $(this).attr('data-menu-tab');

    $('.nav-pills a').removeClass('active');
    $(this).addClass('active');

    $('.tab-pane').removeClass('show active');

    $('[data-content="' + getHrefVal + '"]').addClass('show active');

});


/*Mobile TOuch Navbar*/



/*
 $('.dropdown').on('click',function(){
 $(this).addClass('active');
 $(this).children('.dropdown-menu').addClass('opennav');
 // console.log(hetmAppendData);

 });
 */

function mobileNavigation() {
    // addIDofMenu = [];
    $('[data-nav-type="js-navbar"]').prepend('<div role="button"><span data-subnav="js-navbar" role="button"><i class="fa fa-arrow-left"></i> Close Menu</span></div>');
    $('[data-nabigation="primary"] li.dropdown').each(function () {
        var getNavHeadingName = $(this).children('a').text();
        var getNavHeadingNameHref = $(this).children('a').attr('href');
        $(this).children('a').attr('href', '#');
        $(this).attr('data-menu-type', 'dropdown');
        $(this).children('.dropdown-menu').prepend('<div role="button" class="header-trigger d-flex justify-content-between"><span role="button" data-subnav="heading" data-nav-dismiss="true"><i class="fa fa-arrow-left"></i>' + getNavHeadingName + '</span> <a class="text-white underline d-none" href="' + getNavHeadingNameHref + '">View All</a></div>');
    });
};


$(document).on("touchend click", ".dropdown>a", function (e) {
    $(this).addClass('active');
    $(this).next('.dropdown-menu').addClass('opennav');
    $(this).next('.dropdown-menu').find('[data-subnav="heading"]').attr('data-nav-dismiss', 'true');
});


$(document).on('touchend click', '[data-subnav="heading"]', function (e) {
    //alert();
    if ($(this).attr('data-nav-dismiss') == "true") {
        $(this).attr('data-nav-dismiss', 'false');
        $('.dropdown-menu').removeClass('opennav');
    }
});
$(document).on('touchend click', '[data-subnav="js-navbar"]', function (e) {
    //alert();
    $('[data-nav-type="js-navbar"]').removeClass('show');
    $('.trigger_btn').removeClass('open');
});



//Snticky Header

var lastScrollTop = 100;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    var stx = $(this).scroll;
    if (st > lastScrollTop) {
        $('header').addClass('default-header');
        $('header').removeClass('fixedheader');
    } else {
        $('header').addClass('fixedheader');
        $('header').removeClass('default-header');
        lastScrollTop = 100;
    }
    if (st > lastScrollTop) {
        lastScrollTop = st;
    }

});


//switch view
$('[data-switch="listing-view"]').on('click', function () {
    $('.map-view').removeClass('active');
    $('[data-switch="map-view"]').removeClass('active');
    $('.listing-view').addClass('active');
    $(this).addClass('active');
});
$('[data-switch="map-view"]').on('click', function () {
    $('.listing-view').removeClass('active');
    $('[data-switch="listing-view"]').removeClass('active');
    $('.map-view').addClass('active');
    $(this).addClass('active');
});


$(".btn-wishlist").click(function () {
    $(this).toggleClass('added')
});



//apply form

function formComplete() {

    var formData = $('form').attr('data-form_complete');
    if (formData == 'true') {
        var totalLgt = 0;

        elementTypes = ['input', 'textarea', 'select'];
        $.each(elementTypes, function (index, _el) {
            totalLgt += $(_el).length;
            // console.log(index, _el);
        });
        $('.form-control').on('focusout', function () {
            var inputLgt = 0;
            var selectLgt = 0;
            var textareaLgt = 0;

            var getFormVal = $(this).val();
            //console.log(getFormVal);

            $('input').each(function () {
                if ($(this).val() == "") {
                    inputLgt += $(this).length;
                }
            });
            //console.log('Input:',inputLgt);

            $('.form-control').each(function () {
                if ($(this).children('option:selected').val() == "") {
                    selectLgt += $(this).length;
                }
            });
            // console.log('Select:',selectLgt);

            $('textarea').each(function () {
                if ($(this).val() == "") {
                    textareaLgt += $(this).length;
                }
            });
            // console.log('textarea:',textareaLgt);

            var getAllNumber = inputLgt + selectLgt + textareaLgt;
            //console.log('total:',getAllNumber);
            // console.log('total lgt:',totalLgt);
            var formulaData = getAllNumber / totalLgt * 100;
            // console.log('total lgt:',100-formulaData);
            var formulaDataPercentage = 100 - formulaData;

            $('#ProgressEvent').css({
                'width': formulaDataPercentage + '%'
            });
            $('#ProgressEvent span').show();
            $('#ProgressEvent span').text(+Math.round(formulaDataPercentage) + '%');

        });
        //console.log(inputLgt,selectLgt);
    }
}



$(document).click(function (e) {
    if (!$('.search-book .form-container').is(e.target) && $('.search-book .form-container').has(e.target).length === 0) {
        $('.search-book .form-group').find('div').removeClass('active');
        //alert();
    }
})

$('.search-book [type="search"]').on('click', function (e) {
    $('.search-book [type="search"]').next('div').removeClass('active'); 
    $(this).next('div').toggleClass('active'); 
});


$('[data-destination="true"]').on('click',function(){
    $('[data-destination="true"]').removeClass('active');
    $(this).addClass('active');
    var _getVal = $(this).attr('destination-value');
    $('[destination-input="true"]').val(_getVal);
});

$('[date-input="true"="true"]').on('click',function(){
    $('[date-input="true"]').removeClass('active');
    $(this).addClass('active');
    var _getVal = $(this).attr('destination-value');
    $('[destination-input="true"]').val(_getVal);
});