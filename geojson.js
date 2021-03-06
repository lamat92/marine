var line = {"clickable": false, "color": "#214F5D", "weight": 1, "opacity": 0.3};
var redline = {"clickable": false, "color": "#E03025", "weight": 3, "opacity": 0.2};
var poly = {"clickable": false, "color": "#214F5D", "weight": 1, "opacity": 0.4, "fill": true, "fillColor": "#214F5D", "fillOpacity": 0.4};
var rail_ouessant = {"type": "FeatureCollection",
	"features": [
	{"type": "Feature",
		"properties": {
			"style": line
		},
		"geometry": {"type": "LineString", "coordinates": [[-5.4183333, 48.81], [-5.4475, 48.8445953], [-5.4766667, 48.8791667]]}},
	{"type": "Feature",
		"properties": {
			"style": line
		},
		"geometry": {"type": "LineString", "coordinates": [[-5.3675, 48.4898333], [-5.1338637, 48.4222134], [-5.0219949, 48.4660728], [-5.1983333, 48.62]]}},
	{"type": "Feature",
		"properties": {
			"style": redline
		},
		"geometry": {"type": "LineString", "coordinates": [[-5.5712496, 48.9841784], [-5.7966667, 48.8970921], [-5.9733281, 48.6808392]]}},
	{"type": "Feature",
		"properties": {
			"style": line
		},
		"geometry": {"type": "LineString", "coordinates": [[-5.81, 48.6233333], [-5.7575, 48.6041703], [-5.705, 48.585]]}},
	{"type": "Feature",
		"properties": {
			"style": line
		},
		"geometry": {"type": "LineString", "coordinates": [[-6.0266667, 48.7], [-5.9733281, 48.6808392], [-5.92, 48.6616667]]}},
	{"type": "Feature",
		"properties": {
			"style": poly
		},
		"geometry": {"type": "LineString", "coordinates": [[-5.3675, 48.4898333], [-5.3916667, 48.4966667], [-5.3115071, 48.5587227], [-5.215, 48.6333333], [-5.1983333, 48.62], [-5.2893692, 48.5499933], [-5.3675, 48.4898333]]}},
	{"type": "Feature",
		"properties": {
			"style": poly
		},
		"geometry": {"type": "LineString", "coordinates": [[-5.4766667, 48.8791667], [-5.508503, 48.9138727], [-5.5416667, 48.95], [-5.5908285, 48.9305442], [-5.6639058, 48.9016098], [-5.75, 48.8675], [-5.7809669, 48.8300687], [-5.833417, 48.7666054], [-5.8861948, 48.7026647], [-5.92, 48.6616667], [-5.81, 48.6233333], [-5.7519922, 48.695603], [-5.7047676, 48.7543617], [-5.66, 48.81], [-5.6020761, 48.8318635], [-5.5198756, 48.8628738], [-5.4766667, 48.8791667]]}},
	{"type": "Feature",
		"properties": {
			"style": line
		},
		"geometry": {"type": "LineString", "coordinates": [[-5.215, 48.6333333], [-5.245, 48.6616667]]}},
	{"type": "Feature",
		"properties": {
			"style": poly
		},
		"geometry": {"type": "LineString", "coordinates": [[-6.0466667, 48.71], [-6.0266667, 48.7], [-5.9868277, 48.7493427], [-5.925203, 48.8255726], [-5.8779141, 48.8839907], [-5.8433333, 48.9266667], [-5.7844743, 48.9489313], [-5.6729174, 48.9911027], [-5.6008333, 49.0183333], [-5.6133333, 49.0333333], [-5.683961, 49.0066272], [-5.7993024, 48.9629829], [-5.86, 48.94], [-5.8989485, 48.892097], [-5.9462551, 48.8338527], [-6.0089036, 48.7566147], [-6.0466667, 48.71]]}},
	{"type": "Feature",
		"properties": {
			"style": poly
		},
		"geometry": {"type": "LineString", "coordinates": [[-5.4383333, 48.51], [-5.393605, 48.5451291], [-5.3380782, 48.5887052], [-5.2889264, 48.6272471], [-5.245, 48.6616667], [-5.2924524, 48.7023186], [-5.3365945, 48.740105], [-5.3770883, 48.7747435], [-5.4183333, 48.81], [-5.5039588, 48.7765032], [-5.5716667, 48.75], [-5.6150257, 48.6964026], [-5.6630437, 48.6369792], [-5.705, 48.585], [-5.640258, 48.5668015], [-5.5782493, 48.5493652], [-5.5170296, 48.5321449], [-5.4383333, 48.51]]}},
	{"type": "Feature",
		"properties": {
			"style": line
		},
		"geometry": {"type": "LineString", "coordinates": [[-5.4383333, 48.51], [-5.3916667, 48.4966667]]}},
	{"type": "Feature",
		"properties": {
			"style": line
		},
		"geometry": {"type": "LineString", "coordinates": [[-5.5416667, 48.95], [-5.5712496, 48.9841784], [-5.6008333, 49.0183333]]}},
	{"type": "Feature",
		"properties": {
			"style": redline
		},
		"geometry": {"type": "LineString", "coordinates": [[-5.7575, 48.6041703], [-5.6158335, 48.780009], [-5.4475, 48.8445953]]}}
	]
};
var webcams = {"type": "FeatureCollection",
	"features": [
		{"type": "Feature",
			"properties": {
				"name": "Saint Mathieu",
				"popupContent": "http://data.diabox.com/?id=16&view=webcam",
			},
			"geometry": {
				"type": "Point",
				"coordinates": [-4.77092,48.32989]
			}
		},
		{"type": "Feature",
			"properties": {
				"name": "Kermorvan",
				"popupContent": "http://data.diabox.com/?id=15&view=webcam",
			},
			"geometry": {
				"type": "Point",
				"coordinates": [-4.78804,48.36255]
			}
		},
		{"type": "Feature",
			"properties": {
				"name": "Le minou",
				"popupContent": "http://data.diabox.com/?id=11&view=webcam",
			},
			"geometry": {
				"type": "Point",
				"coordinates": [-4.61426,48.33655]
			}
		}
	]
};