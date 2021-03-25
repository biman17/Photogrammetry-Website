var navMap;

/*-- Initialization function --*/
function init() {


  //define map object & link to placeholder div:
  navMap = new ol.Map({ target: "map_container", attribution: false });
  // define layer as tiled map:
  osmLayer = new ol.layer.Tile({
    title: 'OpenStreetMap',
    // load OSM (a connector predefined in the API) as source:
    source: new ol.source.OSM()
  });

  dtm = new ol.layer.Tile({
    title: 'DTM (5m)',
    visible: true,
    source: new ol.source.TileWMS({
      url: "https://gisedu.itc.utwente.nl/cgi-bin/mapserv.exe?map=d:/iishome/student/s2578956/Photogrammetry-Website/configWMS.map&",
      params: { "LAYERS": "dtm", "TILED": true }
    })
  });

  bingAerial = new ol.layer.Tile({
    title: 'Bing Aerial',
    visible: true,
    preload: Infinity,
    source: new ol.source.BingMaps({
        // We need a key to get the layer from the provider. 
        // Sign in with Bing Maps and you will get your key (for free)
        key: 'Ap5mgiXRshxB7Fnt76VHYWdUn_lNWr5nZ_4Bu49YiyYbo5EfjfnFpT9CXNe_X96w',
        imagerySet: 'AerialWithLabels', // or'Aerial' 'Road', 'AerialWithLabels', etc.
        // use maxZoom 19 to see stretched tiles instead of the Bing Maps
        // "no photos at this zoom level" tiles
        maxZoom: 19
    })
  });
  // add layer to map:
  navMap.addLayer(osmLayer);
  navMap.addLayer(bingAerial);
  // create a map view:
  navMap.addLayer(dtm);



  navMap.setView(
    new ol.View({
      center: ol.proj.transform([37.86, 6.96], 'EPSG:4326', 'EPSG:3857'),
      zoom: 12.5
    })    //center coords and zoom level:
  );
  navMap.addControl(new ol.control.Zoom());
  navMap.addControl(new ol.control.ScaleLine());
  navMap.addControl(new ol.control.MousePosition({
    projection: 'EPSG:4326',
    coordinateFormat: ol.coordinate.createStringXY(4)
  })
  );
  var layerSwitcher = new LayerSwitcher({
    reverse: true,
    groupSelectStyle: 'children',
    type: 'base'
  });
  navMap.addControl(layerSwitcher);

  
}