"use client";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GEO_URL = "/countries.geojson";

const CONFIGS = {
  LB: {
    numericCode: "422",
    center: [35.85, 33.9],
    scale: 5500,
    city: [35.5, 33.9],
    width: 200,
    height: 160,
  },
  SA: {
    numericCode: "682",
    center: [46.1, 24.1],
    scale: 750,
    city: [46.72, 24.69],
    width: 280,
    height: 220,
  },
  KW: {
    numericCode: "414",
    center: [47.55, 29.35],
    scale: 5000,
    city: [47.98, 29.37],
    width: 200,
    height: 160,
  },
};

export default function CountryMap({ code, cityName, className = "" }) {
  const cfg = CONFIGS[code];
  if (!cfg) return null;

  return (
    <div className={className}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: cfg.center, scale: cfg.scale }}
        width={cfg.width}
        height={cfg.height}
        style={{ width: "100%", height: "100%", display: "block", overflow: "visible" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies
              .filter((geo) => geo.id === cfg.numericCode)
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="rgba(20,184,166,0.10)"
                  stroke="rgba(20,184,166,0.55)"
                  strokeWidth={1.5}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
          }
        </Geographies>

        <Marker coordinates={cfg.city}>
          <circle r={4} fill="#14b8a6" opacity={0.9} />
          <circle r={8} fill="none" stroke="#14b8a6" strokeWidth={1} opacity={0.35} />
          <text
            y={-14}
            textAnchor="middle"
            fill="rgba(20,184,166,0.85)"
            fontSize={10}
            fontWeight="500"
            style={{ fontFamily: "inherit", pointerEvents: "none" }}
          >
            {cityName}
          </text>
        </Marker>
      </ComposableMap>
    </div>
  );
}
