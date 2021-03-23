var CountryName = "Netherlands";
var upperx = 257100
var uppery = 472461
var lowerx = 257540
var lowery = 472175

var navMap;
 
/*-- Initialization function --*/
function init() {

 
  //define map object & link to placeholder div:
  navMap = new ol.Map({target: "map_container"});
  // define layer as tiled map:
  osmLayer = new ol.layer.Tile({
    // load OSM (a connector predefined in the API) as source:
    source: new ol.source.OSM()
  });
  // add layer to map:
  navMap.addLayer(osmLayer);
  // create a map view:
  navMap.setView(
    //center coords and zoom level:
    new ol.View({
      center: ol.proj.transform([6.8867, 52.2231], 'EPSG:4326', 'EPSG:3857'),
      zoom: 14
        })
    );
    ortho = new ol.layer.Tile({
        source: new ol.source.TileWMS({
          url: "https://gisedu.itc.utwente.nl/cgi-bin/mapserv.exe?map=d:/iishome/student/s2451573/q3_group_web/Photogrammetry-Website/configWMS.map&",
           params: {"LAYERS": "ortho", "TILED": true}
         })
        });
       navMap.addLayer(ortho);
      ortho.setVisible(true); 
      
  navMap.addControl(new ol.control.Zoom());
  navMap.addControl(new ol.control.MousePosition({
      projection: 'EPSG:4326',
      coordinateFormat: ol.coordinate.createStringXY(4)
    })
  );
}