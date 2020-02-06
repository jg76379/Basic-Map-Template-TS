import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import Home from "esri/widgets/Home";
import Expand from "esri/widgets/Expand";
import Legend from "esri/widgets/Legend";
import Search from "esri/widgets/Search";


class MainMap {
  map: EsriMap;
  view: MapView;
  homeBtn: Home;
  legendExpand: Expand;
  searchWidget: Search;
  viewDiv: HTMLDivElement;
  searchExpand: HTMLDivElement;

  constructor() {

    this.map = new EsriMap({
      basemap: "topo",
      layers: []
    });
    
    this.view = new MapView({
      container: "viewDiv",
      map: this.map,
      zoom: 4.00,
      center: [-98, 38]
    });
    
    this.homeBtn = new Home({
      view: this.view
    });
    this.view.ui.add(this.homeBtn, {
      position: "top-left",
      index: 0
    });
    
    this.legendExpand = new Expand({
      view: this.view,
      content: new Legend({
        view: this.view,
      }),
      expandTooltip: "Expand Legend",
      collapseTooltip: "Hide Legend"
    });
    this.view.ui.add(this.legendExpand, "top-left");
    
    this.searchWidget = new Search({
      container: "searchWidgetContainer",
      view: this.view,
      maxSuggestions: 6,
      locationEnabled: true,
      sources: []  // Add additional search sources here, includes ESRI ArcGIS World Geocoding Service by default
    });
    this.viewDiv = document.getElementById("viewDiv") as HTMLDivElement;
    this.searchExpand = document.getElementById("searchExpand") as HTMLDivElement;
    this.searchExpand.addEventListener("click", this.toggleSearchExpand);
  }

  toggleSearchExpand(){
    var searchDiv = document.getElementById("searchWidgetContainer");
    if (searchDiv.classList.contains("search-collapse")){
      searchDiv.classList.remove("search-collapse");
      this.searchExpand.classList.add("search-collapse");
      this.viewDiv.addEventListener("click", this.toggleSearchExpand)
    }
    else{
      searchDiv.classList.add("search-collapse");
      this.searchExpand.classList.remove("search-collapse");
      this.viewDiv.removeEventListener("click", this.toggleSearchExpand)
    }
  };
}

const map = new MainMap();