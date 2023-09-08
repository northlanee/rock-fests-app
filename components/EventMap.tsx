import mapboxgl, { Map } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FC, useEffect, useRef, useState } from "react";
import Geocode from "react-geocode";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN || "";
Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || "");

const EventMap: FC<{ address: string }> = ({ address }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);
  const [lat, setLat] = useState<string | null>(null);
  const [lng, setLng] = useState<string | null>(null);
  const [zoom, setZoom] = useState<string | undefined>("12");

  useEffect(() => {
    if (mapContainer.current && lat && lng) {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current as string | HTMLElement,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [Number(lng), Number(lat)],
        zoom: 12,
      });

      const marker1 = new mapboxgl.Marker()
        .setLngLat([Number(lng), Number(lat)])
        .addTo(map.current);

      map.current.on("move", () => {
        setLng(map.current?.getCenter().lng.toFixed(4) || null);
        setLat(map.current?.getCenter().lat.toFixed(4) || null);
        setZoom(map.current?.getZoom().toFixed(2));
      });
    }
  }, [lat, lng, zoom]);

  useEffect(() => {
    Geocode.fromAddress(address).then(
      (response) => {
        const { lat: newLat, lng: newLng } =
          response.results[0].geometry.location;
        setLat(newLat);
        setLng(newLng);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [address]);

  return <div ref={mapContainer} style={{ height: "500px" }} />;
};

export default EventMap;
