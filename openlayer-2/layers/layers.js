var wms_layers = [];

var format_highway_Avignon_0 = new ol.format.GeoJSON();
var features_highway_Avignon_0 = format_highway_Avignon_0.readFeatures(json_highway_Avignon_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_Avignon_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_Avignon_0.addFeatures(features_highway_Avignon_0);
var lyr_highway_Avignon_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_Avignon_0, 
                style: style_highway_Avignon_0,
                interactive: true,
                title: '<img src="styles/legend/highway_Avignon_0.png" /> highway_Avignon'
            });

lyr_highway_Avignon_0.setVisible(true);
var layersList = [lyr_highway_Avignon_0];
lyr_highway_Avignon_0.set('fieldAliases', {'osm_id': 'osm_id', });
lyr_highway_Avignon_0.set('fieldImages', {'osm_id': 'TextEdit', });
lyr_highway_Avignon_0.set('fieldLabels', {'osm_id': 'no label', });
lyr_highway_Avignon_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});