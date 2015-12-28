
L.mapbox.accessToken = 'pk.eyJ1IjoiamV0bG8iLCJhIjoiSTlwZDNSRSJ9.Wp9Hd_27TVS_eaPgV65FAQ';

var map = L.mapbox.map('map','jordancoord.nehe3hjh', {zoomControl: false}).setView([32.291, 36.325], 15);
	

L.control.scale().addTo(map);




	



	
	
document.getElementById('test').onclick = function(e) {
    var pos = e.target.getAttribute('data-position');
    if (pos) {
        var loc = pos.split(',');
        map.setView(loc, 17);
    }
};

	
document.getElementById('navigation2').onclick = function(e) {
    var pos = e.target.getAttribute('data-position');
    if (pos) {
        var loc = pos.split(',');
        map.setView(loc, 15);
    }
};

L.control.zoomslider().addTo(map);


d2 = L.mapbox.featureLayer(district_2);
s = L.mapbox.featureLayer(schools);
h = L.mapbox.featureLayer(health);
cc = L.mapbox.featureLayer(Com_centers);
regist_2 = L.mapbox.featureLayer(regist);
offices_2 = L.mapbox.featureLayer(offices);
secu_2 = L.mapbox.featureLayer(secu);
mos = L.mapbox.featureLayer(mosque);
cfs_2 = L.mapbox.featureLayer(CFS);
dp_2 = L.mapbox.featureLayer(DP);
w = L.mapbox.featureLayer(wash);
d33 = L.mapbox.featureLayer(d3);
d44 = L.mapbox.featureLayer(d4);
d55 = L.mapbox.featureLayer(d5);
d66 = L.mapbox.featureLayer(d6);
d77 = L.mapbox.featureLayer(d7);
d88 = L.mapbox.featureLayer(d8);
d99 = L.mapbox.featureLayer(d9);
d100 = L.mapbox.featureLayer(d10);
d110 = L.mapbox.featureLayer(d11);
d120 = L.mapbox.featureLayer(d12);
d111 = L.mapbox.featureLayer(d1);


c= L.mapbox.featureLayer(hh, {
    pointToLayer: function(feature, latlon) {
        // L.circleMarker() draws a circle with fixed radius in pixels. 
        // To draw a circle overlay with a radius in meters, use L.circle()
        return L.circleMarker(latlon, {radius: 3});
    }});
	
regist_2.addTo(map);

offices_2.addTo(map);

secu_2.addTo(map);
	

L.control.layers({
    
	'schools': s
}, {
    'schools': s,
    'health facilities': h,
	 'Community_centers': cc,
	 'Child Friendly spaces' : cfs_2,
	 'Distribution points' : dp_2,
	 'Water_facilities' : w,
	
}).addTo(map);



map.on('zoomend', function() {
    
    if (map.getZoom() > 16) {
        
	mos.addTo(map)}
	
	else{map.removeLayer(mos)};
    } );




map.on('zoomend', function() {
    
    if (map.getZoom() > 16) {
        
	c.addTo(map)}
	
	else{map.removeLayer(c)};
    } );


	
for (var  i = 1 ; i <=12; i++) {
	

	
	switch(i) {
		
	
	case (1):


	
document.getElementById(i).onmouseover = function() {
	d111.addTo(map);
};

document.getElementById(i).onmouseout = function() {
	map.removeLayer(d111);

} 

break;

case (2):


	
document.getElementById(i).onmouseover = function() {
	d2.addTo(map);
};

document.getElementById(i).onmouseout = function() {
	map.removeLayer(d2);

} 

break;

case (3):

document.getElementById(i).onmouseover = function() {
	d33.addTo(map);
};

document.getElementById(i).onmouseout = function() {
	map.removeLayer(d33);

} 

break;

case (4):

document.getElementById(i).onmouseover = function() {
	d44.addTo(map);
};

document.getElementById(i).onmouseout = function() {
	map.removeLayer(d44);

} 

break;

case (5):

document.getElementById(i).onmouseover = function() {
	d55.addTo(map);
};

document.getElementById(i).onmouseout = function() {
	map.removeLayer(d55);

} 



break;

case (6):

document.getElementById(i).onmouseover = function() {
	d66.addTo(map);
};

document.getElementById(i).onmouseout = function() {
	map.removeLayer(d66);

} 

break;

case (7):

document.getElementById(i).onmouseover = function() {
	d77.addTo(map);
};

document.getElementById(i).onmouseout = function() {
	map.removeLayer(d77);

} 

break;

case (8):

document.getElementById(i).onmouseover = function() {
	d88.addTo(map);
};

document.getElementById(i).onmouseout = function() {
	map.removeLayer(d88);

} 

break;

case (9):

document.getElementById(i).onmouseover = function() {
	d99.addTo(map);
};

document.getElementById(i).onmouseout = function() {
	map.removeLayer(d99);

} 

break;

case (10):

document.getElementById(i).onmouseover = function() {
	d100.addTo(map);
};

document.getElementById(i).onmouseout = function() {
	map.removeLayer(d100);

} 

break;

case (11):

document.getElementById(i).onmouseover = function() {
	d110.addTo(map);
};

document.getElementById(i).onmouseout = function() {
	map.removeLayer(d110);

} 

break;

case (12):

document.getElementById(i).onmouseover = function() {
	d120.addTo(map);
};

document.getElementById(i).onmouseout = function() {
	map.removeLayer(d120);

} 

break;

}};






//pop-up style

var popup1 = function(sol) 
{	
sol.on('mouseover',function(lol) {
var bubu = lol.layer.feature;


var popupContent = "<h5> " + "<center>" +   "Name: " +   "<b>" +
					bubu.properties.Name + "</b>" 
					 +  "</b>" + "</em>" + "</p>" 
					

			

			lol.layer.bindPopup(popupContent).openPopup();
			
		}) ;
		
sol.on('mouseout',function(kol) {
kol.layer.closePopup();

}) };
	
popup1(s);
popup1(h);
popup1(cc);
popup1(w);
popup1(c);	
popup1(cfs_2);	
popup1(dp_2);
popup1(mos);	
popup1(regist_2);	
popup1(offices_2);
popup1(secu_2);		
