"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

export default function Map() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const map = new maplibregl.Map({
      container: ref.current,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
      center: [89.56768, 22.80600],
      zoom: 13,
    });

    new maplibregl.Marker({ color: "#E94235" })
      .setLngLat([89.56768, 22.80600])
      .addTo(map);

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    return () => map.remove();
  }, []);

  return <div ref={ref} className="w-full h-65 lg:h-full rounded" />;
}
