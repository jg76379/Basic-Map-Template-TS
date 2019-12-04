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
    var MainMap = /** @class */ (function () {
        function MainMap() {
            this.map = new Map_1.default({
                basemap: "topo",
                layers: []
            });
            this.view = new MapView_1.default({
                container: "viewDiv",
                map: this.map,
                zoom: 4.00,
                center: [-98, 38]
            });
            this.homeBtn = new Home_1.default({
                view: this.view
            });
            this.view.ui.add(this.homeBtn, {
                position: "top-left",
                index: 0
            });
            this.legendExpand = new Expand_1.default({
                view: this.view,
                content: new Legend_1.default({
                    view: this.view,
                }),
                expandTooltip: "Expand Legend",
                collapseTooltip: "Hide Legend"
            });
            this.view.ui.add(this.legendExpand, "top-left");
            this.searchWidget = new Search_1.default({
                container: "searchWidgetContainer",
                view: this.view,
                maxSuggestions: 6,
                locationEnabled: true,
                sources: [] // Add additional search sources here, includes ESRI ArcGIS World Geocoding Service by default
            });
            this.viewDiv = document.getElementById("viewDiv");
            this.searchExpand = document.getElementById("searchExpand");
            this.searchExpand.addEventListener("click", this.toggleSearchExpand);
        }
        MainMap.prototype.toggleSearchExpand = function () {
            var searchDiv = document.getElementById("searchWidgetContainer");
            if (searchDiv.classList.contains("search-collapse")) {
                searchDiv.classList.remove("search-collapse");
                this.searchExpand.classList.add("search-collapse");
                this.viewDiv.addEventListener("click", this.toggleSearchExpand);
            }
            else {
                searchDiv.classList.add("search-collapse");
                this.searchExpand.classList.remove("search-collapse");
                this.viewDiv.removeEventListener("click", this.toggleSearchExpand);
            }
        };
        ;
        return MainMap;
    }());
    var map = new MainMap();
});
//# sourceMappingURL=MapCode.js.map