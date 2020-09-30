$(document).ready(function(){
    mapDestinations();
    $('[data-toggle="tooltip"]').tooltip();
});



function mapDestinations(){

    /*Location We have  loop*/
    var myArray = [];
    var getCountryNameArray = [];
    var getHrefArray = [];
    $('[data-country-list="country"] li a').each(function(){
        var getClassId = String($(this).children().attr('class')); // we are getting flag from class
        var gtHrefLink = String($(this).attr('href'));
        var getCountryName = String($(this).text());

        var getLastChr = getClassId.substring(10,getClassId.length);
        //console.log(getLastChr);
        if(getLastChr != ""){
            myArray.push(getLastChr.toUpperCase());
            getHrefArray.push(gtHrefLink);
            getCountryNameArray.push(getCountryName);
        }
        //var car = {type:"Fiat", model:"500", color:"white"};


    });
    //console.log(myArray);

    /*Map Svg Loop*/
    var getSvgPathData = [];
    var getColor = ["#ff8f00",
        "#00acc1",
        "#ff3d00",
        "#ec407a",
        "#1e88e5",
        "#4527a0",
        "#ef504a",
        "#9E8705",
        "#3f51b5",
        "#ffab00",
        "#43a047",
        "#1565c0"];
    var i = 0;
    $('[data-svg="map"] path').each(function(){
        var getPathAttrVal = $(this).attr('data-code');
        var cElement = $(this);
        //console.log(getPathAttrVal);
        if(getPathAttrVal != ""){
            // getSvgPathData.push(getPathAttrVal);
            var a = myArray.indexOf(getPathAttrVal)
            //console.log('dddd',a + ' # ' + getPathAttrVal);
            if(a>0) {
                if(i==10){
                    i = 0;
                }
                i++;
                console.log(a);
                var randValue = getColor[i];
                $(cElement).attr('fill',randValue);   //color apply on svg path data
                $(cElement).attr('onclick','window.location.href ="'+getHrefArray[a]+'"'); // add Link on Path
                $(cElement).attr('class','active_path');  //Add Class
                $(cElement).attr('data-toggle','tooltip'); //ToolTip
                $(cElement).attr('data-original-title',getCountryNameArray[a]);  //ToolTip Title
            }
        }
    });
    //console.log(getSvgPathData); ="tooltip" title="Hooray!"






}

