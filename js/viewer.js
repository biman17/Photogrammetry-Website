var navMap;

/*-- Initialization function --*/
function init() {


  //define map object & link to placeholder div:
  navMap = new ol.Map({ target: "map_container", attribution: false });
  // define layer as tiled map:
  osmLayer = new ol.layer.Tile({
    // load OSM (a connector predefined in the API) as source:
    source: new ol.source.OSM()
  });
  dtm = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url: "https://gisedu.itc.utwente.nl/cgi-bin/mapserv.exe?map=d:/iishome/student/s2578956/Photogrammetry-Website/configWMS.map&",
      params: { "LAYERS": "dtm", "TILED": true }
    })
  });
  // add layer to map:
  navMap.addLayer(osmLayer);
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
}