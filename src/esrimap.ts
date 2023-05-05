import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import esriConfig from "@arcgis/core/config";
import Locate from "@arcgis/core/widgets/Locate";
import Graphic from "@arcgis/core/Graphic.js";
import Track from "@arcgis/core/widgets/Track.js";

esriConfig.apiKey =
  "AAPK05dc52022a094a8fa1a9601852f6e1581ORSu2w2QBl0XjpB6F5p3Q61xmlJPsUtR_OJeNjE7S45DpH5U-p3HGHUWepsSzo0";

const map = new Map({
  basemap: "arcgis-navigation",
});

const view = new MapView({
  map: map,
  center: [-118.805, 34.027], // Longitude, latitude
  zoom: 13,
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

const track = new Track({
  view: view,
  graphic: new Graphic({
    symbol: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      type: "simple-marker",
      size: "12px",
      color: "green",
      outline: {
        color: "#efefef",
        width: "1.5px",
      },
    },
  }),
  useHeadingEnabled: false,
});
view.ui.add(track, "top-left");

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
