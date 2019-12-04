import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import Home from "esri/widgets/Home";
import Expand from "esri/widgets/Expand";
import Legend from "esri/widgets/Legend";
import Search from "esri/widgets/Search";


var map = new EsriMap({
  basemap: "topo",
  layers: []
});

var view = new MapView({
  container: "viewDiv",
  map: map,
  zoom: 10.00,
  center: [-75.3, 38.7]
});

var homeBtn = new Home({
  view: view
});
view.ui.add(homeBtn, {
  position: "top-left",
  index: 0
});

const legendExpand = new Expand({
  view: view,
  content: new Legend({
    view: view,
  }),
  expandTooltip: "Expand Legend",
  collapseTooltip: "Hide Legend"
});
view.ui.add(legendExpand, "top-left");

var searchWidget = new Search({
  container: "searchWidgetContainer",
  view: view,
  maxSuggestions: 6,
  locationEnabled: true,
  sources: []  // Add additional search sources here, includes ESRI ArcGIS World Geocoding Service by default
});


const viewDiv = document.getElementById("viewDiv");
const searchExpand = document.getElementById("searchExpand");
searchExpand.addEventListener("click", toggleSearchExpand);

function toggleSearchExpand(){
  var searchDiv = document.getElementById("searchWidgetContainer");
  if (searchDiv.classList.contains("search-collapse")){
    searchDiv.classList.remove("search-collapse");
    searchExpand.classList.add("search-collapse");
    viewDiv.addEventListener("click", toggleSearchExpand)
  }
  else{
    searchDiv.classList.add("search-collapse");
    searchExpand.classList.remove("search-collapse");
    viewDiv.removeEventListener("click", toggleSearchExpand)
  }
};
