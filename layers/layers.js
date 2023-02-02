var wms_layers = [];

var format_GPSTracking_0 = new ol.format.GeoJSON();
var features_GPSTracking_0 = format_GPSTracking_0.readFeatures(json_GPSTracking_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GPSTracking_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPSTracking_0.addFeatures(features_GPSTracking_0);
var lyr_GPSTracking_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GPSTracking_0, 
                style: style_GPSTracking_0,
                interactive: true,
                title: '<img src="styles/legend/GPSTracking_0.png" /> GPSTracking'
            });
var format_Micromovilidad_1 = new ol.format.GeoJSON();
var features_Micromovilidad_1 = format_Micromovilidad_1.readFeatures(json_Micromovilidad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Micromovilidad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Micromovilidad_1.addFeatures(features_Micromovilidad_1);
var lyr_Micromovilidad_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Micromovilidad_1, 
                style: style_Micromovilidad_1,
                interactive: true,
                title: '<img src="styles/legend/Micromovilidad_1.png" /> Micromovilidad'
            });
var format_transporteespecial_2 = new ol.format.GeoJSON();
var features_transporteespecial_2 = format_transporteespecial_2.readFeatures(json_transporteespecial_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_transporteespecial_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_transporteespecial_2.addFeatures(features_transporteespecial_2);
var lyr_transporteespecial_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_transporteespecial_2, 
                style: style_transporteespecial_2,
                interactive: true,
                title: '<img src="styles/legend/transporteespecial_2.png" /> transporteespecial'
            });
var format_Taxi_3 = new ol.format.GeoJSON();
var features_Taxi_3 = format_Taxi_3.readFeatures(json_Taxi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taxi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taxi_3.addFeatures(features_Taxi_3);
var lyr_Taxi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Taxi_3, 
                style: style_Taxi_3,
                interactive: true,
                title: '<img src="styles/legend/Taxi_3.png" /> Taxi'
            });
var format_MovilidadCompartida_4 = new ol.format.GeoJSON();
var features_MovilidadCompartida_4 = format_MovilidadCompartida_4.readFeatures(json_MovilidadCompartida_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MovilidadCompartida_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MovilidadCompartida_4.addFeatures(features_MovilidadCompartida_4);
var lyr_MovilidadCompartida_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MovilidadCompartida_4, 
                style: style_MovilidadCompartida_4,
                interactive: true,
                title: '<img src="styles/legend/MovilidadCompartida_4.png" /> MovilidadCompartida'
            });
var format_APPdeNavegacion_5 = new ol.format.GeoJSON();
var features_APPdeNavegacion_5 = format_APPdeNavegacion_5.readFeatures(json_APPdeNavegacion_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APPdeNavegacion_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APPdeNavegacion_5.addFeatures(features_APPdeNavegacion_5);
var lyr_APPdeNavegacion_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APPdeNavegacion_5, 
                style: style_APPdeNavegacion_5,
                interactive: true,
                title: '<img src="styles/legend/APPdeNavegacion_5.png" /> APP de Navegacion'
            });

        var lyr_OpenStreetMapmonochrome_6 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TM_7 = new ol.format.GeoJSON();
var features_TM_7 = format_TM_7.readFeatures(json_TM_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TM_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TM_7.addFeatures(features_TM_7);
var lyr_TM_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TM_7, 
                style: style_TM_7,
                interactive: true,
                title: '<img src="styles/legend/TM_7.png" /> TM'
            });
var format_AtracciondeVaijes_8 = new ol.format.GeoJSON();
var features_AtracciondeVaijes_8 = format_AtracciondeVaijes_8.readFeatures(json_AtracciondeVaijes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AtracciondeVaijes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AtracciondeVaijes_8.addFeatures(features_AtracciondeVaijes_8);
var lyr_AtracciondeVaijes_8 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_AtracciondeVaijes_8, 
                radius: 10 * 2,
                gradient: ['#edf8fb', '#b3cde3', '#8c96c6', '#8856a7', '#810f7c'],
                blur: 15,
                shadow: 250,
                title: 'Atraccion de Vaijes'
            });
var group_DatoscompartidosPorUsuariosde = new ol.layer.Group({
                                layers: [lyr_GPSTracking_0,lyr_Micromovilidad_1,lyr_transporteespecial_2,lyr_Taxi_3,lyr_MovilidadCompartida_4,lyr_APPdeNavegacion_5,],
                                title: "Datos compartidos Por Usuarios de"});

lyr_GPSTracking_0.setVisible(true);lyr_Micromovilidad_1.setVisible(true);lyr_transporteespecial_2.setVisible(true);lyr_Taxi_3.setVisible(true);lyr_MovilidadCompartida_4.setVisible(true);lyr_APPdeNavegacion_5.setVisible(true);lyr_OpenStreetMapmonochrome_6.setVisible(true);lyr_TM_7.setVisible(true);lyr_AtracciondeVaijes_8.setVisible(false);
var layersList = [group_DatoscompartidosPorUsuariosde,lyr_OpenStreetMapmonochrome_6,lyr_TM_7,lyr_AtracciondeVaijes_8];
lyr_GPSTracking_0.set('fieldAliases', {'id_hogar': 'id_hogar', 'zat_hogar': 'zat_hogar', 'municipio_hogar': 'municipio_hogar', 'estrato_hogar': 'estrato_hogar', 'edad_personaviaje': 'edad_personaviaje', 'Sexo': 'Sexo', 'zat_origen': 'zat_origen', 'motivo_viaje': 'motivo_viaje', 'hora_inicio': 'hora_inicio', 'zat_destino': 'zat_destino', 'municipio': 'municipio', 'hora_llegada': 'hora_llegada', 'Usa_aplicacion': 'Usa_aplicacion', 'mun_origen': 'mun_origen', 'mun_destino': 'mun_destino', 'ORIGEN': 'ORIGEN', 'DESTINO': 'DESTINO', 'utam_origen': 'utam_origen', 'utam_destino': 'utam_destino', 'modo_principal': 'modo_principal', 'Viajes_Parecidos': 'Viajes_Parecidos', });
lyr_Micromovilidad_1.set('fieldAliases', {'id_hogar': 'id_hogar', 'zat_hogar': 'zat_hogar', 'municipio_hogar': 'municipio_hogar', 'estrato_hogar': 'estrato_hogar', 'edad_personaviaje': 'edad_personaviaje', 'Sexo': 'Sexo', 'zat_origen': 'zat_origen', 'motivo_viaje': 'motivo_viaje', 'hora_inicio': 'hora_inicio', 'zat_destino': 'zat_destino', 'municipio': 'municipio', 'hora_llegada': 'hora_llegada', 'Usa_aplicacion': 'Usa_aplicacion', 'mun_origen': 'mun_origen', 'mun_destino': 'mun_destino', 'ORIGEN': 'ORIGEN', 'DESTINO': 'DESTINO', 'utam_origen': 'utam_origen', 'utam_destino': 'utam_destino', 'modo_principal': 'modo_principal', 'Viajes_Parecidos': 'Viajes_Parecidos', });
lyr_transporteespecial_2.set('fieldAliases', {'id_hogar': 'id_hogar', 'zat_hogar': 'zat_hogar', 'municipio_hogar': 'municipio_hogar', 'estrato_hogar': 'estrato_hogar', 'edad_personaviaje': 'edad_personaviaje', 'Sexo': 'Sexo', 'zat_origen': 'zat_origen', 'motivo_viaje': 'motivo_viaje', 'hora_inicio': 'hora_inicio', 'zat_destino': 'zat_destino', 'municipio': 'municipio', 'hora_llegada': 'hora_llegada', 'Usa_aplicacion': 'Usa_aplicacion', 'mun_origen': 'mun_origen', 'mun_destino': 'mun_destino', 'ORIGEN': 'ORIGEN', 'DESTINO': 'DESTINO', 'utam_origen': 'utam_origen', 'utam_destino': 'utam_destino', 'modo_principal': 'modo_principal', 'Viajes_Parecidos': 'Viajes_Parecidos', });
lyr_Taxi_3.set('fieldAliases', {'id_hogar': 'id_hogar', 'zat_hogar': 'zat_hogar', 'municipio_hogar': 'municipio_hogar', 'estrato_hogar': 'estrato_hogar', 'edad_personaviaje': 'edad_personaviaje', 'Sexo': 'Sexo', 'zat_origen': 'zat_origen', 'motivo_viaje': 'motivo_viaje', 'hora_inicio': 'hora_inicio', 'zat_destino': 'zat_destino', 'municipio': 'municipio', 'hora_llegada': 'hora_llegada', 'Usa_aplicacion': 'Usa_aplicacion', 'mun_origen': 'mun_origen', 'mun_destino': 'mun_destino', 'ORIGEN': 'ORIGEN', 'DESTINO': 'DESTINO', 'utam_origen': 'utam_origen', 'utam_destino': 'utam_destino', 'modo_principal': 'modo_principal', 'Viajes_Parecidos': 'Viajes_Parecidos', });
lyr_MovilidadCompartida_4.set('fieldAliases', {'id_hogar': 'id_hogar', 'zat_hogar': 'zat_hogar', 'municipio_hogar': 'municipio_hogar', 'estrato_hogar': 'estrato_hogar', 'edad_personaviaje': 'edad_personaviaje', 'Sexo': 'Sexo', 'zat_origen': 'zat_origen', 'motivo_viaje': 'motivo_viaje', 'hora_inicio': 'hora_inicio', 'zat_destino': 'zat_destino', 'municipio': 'municipio', 'hora_llegada': 'hora_llegada', 'Usa_aplicacion': 'Usa_aplicacion', 'mun_origen': 'mun_origen', 'mun_destino': 'mun_destino', 'ORIGEN': 'ORIGEN', 'DESTINO': 'DESTINO', 'utam_origen': 'utam_origen', 'utam_destino': 'utam_destino', 'modo_principal': 'modo_principal', 'modo_principal_desagregado': 'modo_principal_desagregado', 'Viajes_Parecidos': 'Viajes_Parecidos', });
lyr_APPdeNavegacion_5.set('fieldAliases', {'id_hogar': 'id_hogar', 'zat_hogar': 'zat_hogar', 'municipio_hogar': 'municipio_hogar', 'estrato_hogar': 'estrato_hogar', 'edad_personaviaje': 'edad_personaviaje', 'Sexo': 'Sexo', 'zat_origen': 'zat_origen', 'motivo_viaje': 'motivo_viaje', 'hora_inicio': 'hora_inicio', 'zat_destino': 'zat_destino', 'municipio': 'municipio', 'hora_llegada': 'hora_llegada', 'Usa_aplicacion': 'Usa_aplicacion', 'mun_origen': 'mun_origen', 'mun_destino': 'mun_destino', 'ORIGEN': 'ORIGEN', 'DESTINO': 'DESTINO', 'utam_origen': 'utam_origen', 'utam_destino': 'utam_destino', 'modo_principal': 'modo_principal', 'modo_principal_desagregado': 'modo_principal_desagregado', 'Viajes_Parecidos': 'Viajes_Parecidos', });
lyr_TM_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'STOP_CODE': 'STOP_CODE', 'STOP_NAME': 'STOP_NAME', 'ROUTE_SHOR': 'ROUTE_SHOR', 'AGENCY_NAM': 'AGENCY_NAM', 'COMPONENTE': 'COMPONENTE', 'X': 'X', 'Y': 'Y', });
lyr_GPSTracking_0.set('fieldImages', {'id_hogar': 'TextEdit', 'zat_hogar': 'Range', 'municipio_hogar': 'Range', 'estrato_hogar': 'Range', 'edad_personaviaje': 'Range', 'Sexo': 'TextEdit', 'zat_origen': 'Range', 'motivo_viaje': 'TextEdit', 'hora_inicio': 'DateTime', 'zat_destino': 'Range', 'municipio': 'Range', 'hora_llegada': 'DateTime', 'Usa_aplicacion': 'TextEdit', 'mun_origen': 'Range', 'mun_destino': 'Range', 'ORIGEN': 'TextEdit', 'DESTINO': 'TextEdit', 'utam_origen': 'TextEdit', 'utam_destino': 'TextEdit', 'modo_principal': 'TextEdit', 'Viajes_Parecidos': '', });
lyr_Micromovilidad_1.set('fieldImages', {'id_hogar': 'TextEdit', 'zat_hogar': 'Range', 'municipio_hogar': 'Range', 'estrato_hogar': 'Range', 'edad_personaviaje': 'Range', 'Sexo': 'TextEdit', 'zat_origen': 'Range', 'motivo_viaje': 'TextEdit', 'hora_inicio': 'DateTime', 'zat_destino': 'Range', 'municipio': 'Range', 'hora_llegada': 'DateTime', 'Usa_aplicacion': 'TextEdit', 'mun_origen': 'Range', 'mun_destino': 'Range', 'ORIGEN': 'TextEdit', 'DESTINO': 'TextEdit', 'utam_origen': 'TextEdit', 'utam_destino': 'TextEdit', 'modo_principal': 'TextEdit', 'Viajes_Parecidos': '', });
lyr_transporteespecial_2.set('fieldImages', {'id_hogar': 'TextEdit', 'zat_hogar': 'Range', 'municipio_hogar': 'Range', 'estrato_hogar': 'Range', 'edad_personaviaje': 'Range', 'Sexo': 'TextEdit', 'zat_origen': 'Range', 'motivo_viaje': 'TextEdit', 'hora_inicio': 'DateTime', 'zat_destino': 'Range', 'municipio': 'Range', 'hora_llegada': 'DateTime', 'Usa_aplicacion': 'TextEdit', 'mun_origen': 'Range', 'mun_destino': 'Range', 'ORIGEN': 'TextEdit', 'DESTINO': 'TextEdit', 'utam_origen': 'TextEdit', 'utam_destino': 'TextEdit', 'modo_principal': 'TextEdit', 'Viajes_Parecidos': '', });
lyr_Taxi_3.set('fieldImages', {'id_hogar': 'TextEdit', 'zat_hogar': 'Range', 'municipio_hogar': 'Range', 'estrato_hogar': 'Range', 'edad_personaviaje': 'Range', 'Sexo': 'TextEdit', 'zat_origen': 'Range', 'motivo_viaje': 'TextEdit', 'hora_inicio': 'DateTime', 'zat_destino': 'Range', 'municipio': 'Range', 'hora_llegada': 'DateTime', 'Usa_aplicacion': 'TextEdit', 'mun_origen': 'Range', 'mun_destino': 'Range', 'ORIGEN': 'TextEdit', 'DESTINO': 'TextEdit', 'utam_origen': 'TextEdit', 'utam_destino': 'TextEdit', 'modo_principal': 'TextEdit', 'Viajes_Parecidos': '', });
lyr_MovilidadCompartida_4.set('fieldImages', {'id_hogar': 'TextEdit', 'zat_hogar': 'Range', 'municipio_hogar': 'Range', 'estrato_hogar': 'Range', 'edad_personaviaje': 'Range', 'Sexo': 'TextEdit', 'zat_origen': 'Range', 'motivo_viaje': 'TextEdit', 'hora_inicio': 'DateTime', 'zat_destino': 'Range', 'municipio': 'Range', 'hora_llegada': 'DateTime', 'Usa_aplicacion': 'TextEdit', 'mun_origen': 'Range', 'mun_destino': 'Range', 'ORIGEN': 'TextEdit', 'DESTINO': 'TextEdit', 'utam_origen': 'TextEdit', 'utam_destino': 'TextEdit', 'modo_principal': 'TextEdit', 'modo_principal_desagregado': 'TextEdit', 'Viajes_Parecidos': '', });
lyr_APPdeNavegacion_5.set('fieldImages', {'id_hogar': 'TextEdit', 'zat_hogar': 'Range', 'municipio_hogar': 'Range', 'estrato_hogar': 'Range', 'edad_personaviaje': 'Range', 'Sexo': 'TextEdit', 'zat_origen': 'Range', 'motivo_viaje': 'TextEdit', 'hora_inicio': 'DateTime', 'zat_destino': 'Range', 'municipio': 'Range', 'hora_llegada': 'DateTime', 'Usa_aplicacion': 'TextEdit', 'mun_origen': 'Range', 'mun_destino': 'Range', 'ORIGEN': 'TextEdit', 'DESTINO': 'TextEdit', 'utam_origen': 'TextEdit', 'utam_destino': 'TextEdit', 'modo_principal': 'TextEdit', 'modo_principal_desagregado': 'TextEdit', 'Viajes_Parecidos': 'TextEdit', });
lyr_TM_7.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'STOP_CODE': 'Hidden', 'STOP_NAME': 'TextEdit', 'ROUTE_SHOR': 'TextEdit', 'AGENCY_NAM': 'Hidden', 'COMPONENTE': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', });
lyr_GPSTracking_0.set('fieldLabels', {});
lyr_Micromovilidad_1.set('fieldLabels', {});
lyr_transporteespecial_2.set('fieldLabels', {});
lyr_Taxi_3.set('fieldLabels', {});
lyr_MovilidadCompartida_4.set('fieldLabels', {});
lyr_APPdeNavegacion_5.set('fieldLabels', {});
lyr_TM_7.set('fieldLabels', {'STOP_NAME': 'inline label', 'ROUTE_SHOR': 'no label', });
lyr_TM_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
