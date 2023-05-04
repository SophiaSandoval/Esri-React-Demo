import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import esriConfig from "@arcgis/core/config";
import Locate from "@arcgis/core/widgets/Locate";

esriConfig.apiKey =
  "AAPK05dc52022a094a8fa1a9601852f6e1581ORSu2w2QBl0XjpB6F5p3Q61xmlJPsUtR_OJeNjE7S45DpH5U-p3HGHUWepsSzo0";

const map = new Map({
  basemap: "arcgis-navigation",
});

const view = new MapView({
  map: map,
});

const locate = new Locate({
  view: view,
  useHeadingEnabled: false,
  goToOverride: function (view, options) {
    options.target.scale = 1500;
    return view.goTo(options.target);
  },
});
view.ui.add(locate, "top-left");

export const init = (mapView: HTMLDivElement) => {
  view.container = mapView;
  view
    .when()
    .then(() => {
      console.log("ready");
    })
    .catch(() => {
      console.log("error");
    });
};
