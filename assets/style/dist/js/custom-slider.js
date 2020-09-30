
$i = true;
$(document).on('touchend', function (e) {
    if ($i == true) {
        console.log(e);
        $i = false;
    }

});



$(document).ready(function () {

    var geCurrentNumber = 0;
    var imgArrary = [];
    var getCurrentValue;
    var currentIndex;

    //image loop
    $(".image-popup-vertical-fit").each(function () {
        imgArrary.push({
            img: $(this).attr("href"),
            title: $(this).attr("title"),
        });
    });


    $('.image-popup-vertical-fit').on('click touchend',function (event) {
        event.stopPropagation();
        event.preventDefault();
        console.log(imgArrary);
        console.log(e.view.innerWidth);
        var dWidth = e.view.innerWidth;
        var dHeight = e.view.innerHeight;

        var currentIndex = $(".image-popup-vertical-fit").index(this);
        geCurrentNumber = getCurrentValue = currentIndex + 1;



        //make custome popup
        var Body = $('body');
        Body.attr('style', 'overflow:hidden');
        Body.append('<div id="ewh-light-box" style="' +
            'position:fixed; ' +
            'top: 0px;' +
            'left: 0px;' +
            'display: flex;' +
            'justify-content: center;' +
            'align-items: center;' +
            'background-color: rgba(0, 0, 0, 0.9);' +
            'z-index: 9999;"></div>');

        //get Image Path
        var imgPath = $(this).attr('href');
        var imgAlt = $(this).attr('title');


        //Gallery Append in Body
        $('#ewh-light-box').append('<div class="ewh-gallery" style="' +
            'width: 92%;">' +
            '<span class="close-lightbox title-3 text-right float-right text-muted"><i class="fa fa-times"></i> </span>' +
            '<span class="d-inline-block w-100"  id="swipeImg"><img src="' + imgArrary[currentIndex]['img'] + '" width="100%"></span>' +
            '<span class="title-6 float-left text-muted" data-ewhTitle="' + imgAlt + '">' + imgAlt + '</span>' +
            '<span class="title-6 float-right text-muted"><span data-currentvalue="true">' + geCurrentNumber + '</span>/' + imgArrary.length + '</span>' +
            '</div>');

        return false;

    });

//swipe Left image
    $(document).on('swiperight', '#swipeImg', function (event) {
        if (geCurrentNumber == imgArrary.length) {
            geCurrentNumber = 0;
        }
        $(this).children('img').attr('src', imgArrary[geCurrentNumber]['img']);
        var getImgNumber = geCurrentNumber +1;
        $('[data-currentvalue="true"]').text(getImgNumber);
        $('[data-ewhTitle]').text(imgArrary[geCurrentNumber]['title']);
        //console.log('Image', imgArrary[geCurrentNumber]['img']);
        geCurrentNumber += 1;
    });
    $(document).on('swipeleft', '#swipeImg', function (event) {

        geCurrentNumber -= 1;
        if (geCurrentNumber == 0) {
            geCurrentNumber = 9;
        }
        $(this).children('img').attr('src', imgArrary[geCurrentNumber]['img']);
        var getImgNumber = geCurrentNumber +1;
        $('[data-currentvalue="true"]').text(getImgNumber);
        $('[data-ewhTitle]').text(imgArrary[geCurrentNumber]['title']);
    });

//destroyed Lightbox
    $(document).on("click", ".close-lightbox", function () {
        $('#ewh-light-box').remove();
        $('body').removeAttr('style');
    });

});

