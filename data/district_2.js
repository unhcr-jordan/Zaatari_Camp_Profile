var district_2 = {
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                                                                                
"features": [
{ "type": "Feature", "properties": { "OBJECTID_1": 2, "OBJECTID": 2, "District": "2", "SHAPE_Leng": 0.021380, "Area": 33.000000, "Full_Name": "District 2", "Shape_Le_1": 0.021376, "Shape_Area": 0.000026 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 36.320476336713625, 32.299713434927128 ], [ 36.319882942443883, 32.29840871738844 ], [ 36.31881254596226, 32.29603086942916 ], [ 36.318649345091274, 32.296050110424289 ], [ 36.317057469526674, 32.296182249611206 ], [ 36.314254320480586, 32.296412591168178 ], [ 36.31395829334059, 32.296449687303266 ], [ 36.31274030372208, 32.296588771954305 ], [ 36.312282367137584, 32.296641328334658 ], [ 36.312465832432281, 32.297045087960498 ], [ 36.312995757048611, 32.297905359644687 ], [ 36.314892604410204, 32.300719494808902 ], [ 36.315072713435029, 32.300992532579357 ], [ 36.315647228237026, 32.300627169508346 ], [ 36.315971772879095, 32.300530122766986 ], [ 36.316839423500653, 32.300355539176849 ], [ 36.317827024797396, 32.300129984711077 ], [ 36.318947742844102, 32.299951159018804 ], [ 36.320206497831634, 32.299779279690085 ], [ 36.320476336713625, 32.299713434927128 ] ] ] } },
]
};




for(var i = 0; i < district_2.features.length; i++ ) {

district_2.features[i].properties["fill"]= "#3887BE";
district_2.features[i].properties["fill-opacity"]= 0.07;
district_2.features[i].properties["stroke"]= "#3887BE" ;
district_2.features[i].properties["path stroke-dasharray"]= "5,5";
district_2.features[i].properties["stroke-opacity"]= 1 ;
district_2.features[i].properties["stroke-width"]= 4 ;

};




