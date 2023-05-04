import { useEffect, useRef } from "react";
import { init } from "./esrimap";

function App() {
  const mapViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapViewRef.current) init(mapViewRef.current);
  }, [mapViewRef]);

  return <div style={{ maxWidth: 100, maxHeight: 100 }} ref={mapViewRef}></div>;
}

export default App;
