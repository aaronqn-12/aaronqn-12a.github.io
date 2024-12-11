function iniciarMap(){
    var coord = {lat:19.477362,lng:-99.060694};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom:10,
        center:coord
    });
    var marker = new google.maps.marker({
        position: coord,
        map : map
    });
}
