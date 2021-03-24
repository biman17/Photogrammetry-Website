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


  myMap.setView(
    //center coords and zoom level:
    new ol.View({ center: [37.8924,6.8867], zoom: 6 })
  );
navMap.addControl(new ol.control.Zoom());
navMap.addControl(new ol.control.ScaleLine());

}