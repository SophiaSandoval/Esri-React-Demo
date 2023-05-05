import { useEffect, useRef } from "react";
import { init } from "./esrimap";

function App() {
  const mapViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapViewRef.current) init(mapViewRef.current);
  }, [mapViewRef]);

  return (
    <div
      style={{ padding: 10, margin: 10, height: 500, width: 500 }}
      ref={mapViewRef}
    ></div>
  );
}

export default App;
