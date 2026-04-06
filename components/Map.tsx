"use client";
import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface MapProps {
  latitude: number;
  longitude: number;
  title: string;
}

export default function Map({ latitude, longitude, title }: MapProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [latitude, longitude],
      zoom: 8,
    });

    map.flyTo({
      center: [latitude, longitude],
      zoom: 14,
      speed: 1.2,
    });

    new maplibregl.Marker({ color: "#3b82f6" })
      .setLngLat([latitude, longitude])
      .setPopup(new maplibregl.Popup().setHTML(`<h2 class="custom-popup">${title}</h2>`))
      .addTo(map);

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    return () => map.remove();
  }, [latitude, longitude, title]);

  return <div ref={mapContainer} className="w-full h-125 rounded-2xl" />;
}
