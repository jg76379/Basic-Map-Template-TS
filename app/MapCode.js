var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/Map", "esri/views/MapView", "esri/widgets/Home", "esri/widgets/Expand", "esri/widgets/Legend", "esri/widgets/Search"], function (require, exports, Map_1, MapView_1, Home_1, Expand_1, Legend_1, Search_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Map_1 = __importDefault(Map_1);
    MapView_1 = __importDefault(MapView_1);
    Home_1 = __importDefault(Home_1);
    Expand_1 = __importDefault(Expand_1);
    Legend_1 = __importDefault(Legend_1);
    Search_1 = __importDefault(Search_1);
    var map = new Map_1.default({
        basemap: "topo",
        layers: []
    });
    var view = new MapView_1.default({
        container: "viewDiv",
        map: map,
        zoom: 10.00,
        center: [-75.3, 38.7]
    });
    var homeBtn = new Home_1.default({
        view: view
    });
    view.ui.add(homeBtn, {
        position: "top-left",
        index: 0
    });
    var legendExpand = new Expand_1.default({
        view: view,
        content: new Legend_1.default({
            view: view,
        }),
        expandTooltip: "Expand Legend",
        collapseTooltip: "Hide Legend"
    });
    view.ui.add(legendExpand, "top-left");
    var searchWidget = new Search_1.default({
        container: "searchWidgetContainer",
        view: view,
        maxSuggestions: 6,
        locationEnabled: true,
        sources: [] // Add additional search sources here, includes ESRI ArcGIS World Geocoding Service by default
    });
    var viewDiv = document.getElementById("viewDiv");
    var searchExpand = document.getElementById("searchExpand");
    searchExpand.addEventListener("click", toggleSearchExpand);
    function toggleSearchExpand() {
        var searchDiv = document.getElementById("searchWidgetContainer");
        if (searchDiv.classList.contains("search-collapse")) {
            searchDiv.classList.remove("search-collapse");
            searchExpand.classList.add("search-collapse");
            viewDiv.addEventListener("click", toggleSearchExpand);
        }
        else {
            searchDiv.classList.add("search-collapse");
            searchExpand.classList.remove("search-collapse");
            viewDiv.removeEventListener("click", toggleSearchExpand);
        }
    }
    ;
});
//# sourceMappingURL=MapCode.js.map