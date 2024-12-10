import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";
import config from "./config";

mapboxgl.accessToken = config.accessToken;

const App = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: config.style,
      center: config.chapters[0].location.center,
      zoom: config.chapters[0].location.zoom,
      bearing: config.chapters[0].location.bearing,
      pitch: config.chapters[0].location.pitch,
      interactive: false,
    });

    if (config.use3dTerrain) {
      map.on("load", () => {
        map.addSource("mapbox-dem", {
          type: "raster-dem",
          url: "mapbox://mapbox.mapbox-terrain-dem-v1", 
          tileSize: 512,
          maxzoom: 14,
        });

        map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

        map.addLayer({
          id: "sky",
          type: "sky",
          paint: {
            "sky-type": "atmosphere",
            "sky-atmosphere-sun": [0.0, 0.0],
            "sky-atmosphere-sun-intensity": 15,
          },
        });
        
        // Add water layer
        map.addLayer({
          id: "water",
          type: "fill",
          source: "composite",
          "source-layer": "water", // Default water layer from Mapbox style
          paint: {
            "fill-color": "#000F52", // Customize water color
            "fill-opacity": 0.8, // Adjust water opacity
          },
        });
        // Add hillshade layer
        map.addSource("hillshade", {
          type: "raster-dem",
          url: "mapbox://mapbox.mapbox-terrain-dem-v1",
          tileSize: 512,
        });

        map.addLayer({
          id: "hillshade",
          type: "hillshade",
          source: "hillshade",
          paint: {
            "hillshade-illumination-direction": 315, // Angle of light source
            "hillshade-shadow-color": "#000000", // Color of shadows
            "hillshade-highlight-color": "#FFFFFF", // Color of highlights
            "hillshade-accent-color": "#AAAAAA", // Color of accent areas
          },
        });
        // Style trails with a line layer
        map.addLayer({
          id: "trails",
          type: "line",
          source: "composite",
          "source-layer": "road", // Adjust to the correct layer name if it's different
          filter: ["==", "class", "path"], // Filters for trails or paths
          paint: {
            "line-color": "#28282B", // Adjust trail color as needed
            "line-width": 6, // Adjust line width as needed
            "line-opacity": 0.9, // Adjust opacity for visibility
            "line-border-color": "#28282B", // Add a Matte black border
          },
        }); 
      });
    }

    let marker;
    let markerTwo;
    if (config.showMarkers) {
      marker = new mapboxgl.Marker({ color: config.markerColor });
      markerTwo = new mapboxgl.Marker({ color: config.markerColor });
      marker.setLngLat(config.chapters[0].location.center).addTo(map);
      markerTwo.setLngLat(config.chapters[0].location.end).addTo(map);
    }

    const updateMap = (chapter) => {
      if (!chapter) return;

      map.flyTo({
        center: chapter.location.center,
        zoom: chapter.location.zoom,
        bearing: chapter.location.bearing,
        pitch: chapter.location.pitch,
        essential: true,
        duration: 1500,
        curve: 1.2,
      });

      if (marker) {
        marker.setLngLat(chapter.location.center);
      }

      if (chapter.rotateAnimation) {
        map.once("moveend", () => {
          map.rotateTo(map.getBearing() + 180, {
            duration: 8000,
            easing: (t) => t,
          });
        });
      }
    };

    const handleScroll = () => {
      const steps = document.querySelectorAll(".step");
      let activeStep = null;

      steps.forEach((step) => {
        const rect = step.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0) {
          activeStep = step;
        }
      });

      if (activeStep) {
        const chapterId = activeStep.id;
        const chapter = config.chapters.find((chap) => chap.id === chapterId);
        if (chapter) updateMap(chapter);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="map" style={{ height: "100vh", width: "100vw" }}></div>
      <div id="story">
        <header className={config.theme} id="header">
          {config.title && <h1>{config.title}</h1>}
          {config.subtitle && <h2>{config.subtitle}</h2>}
          {config.byline && <p>{config.byline}</p>}
        </header>
        <div id="features">
          {config.chapters.map((chapter) => (
            <div
              key={chapter.id}
              id={chapter.id}
              className={`step ${chapter.alignment} ${
                chapter.hidden ? "hidden" : ""
              }`}
            >
              <div className={config.theme}>
                {chapter.title && <h3>{chapter.title}</h3>}
                {chapter.image && (
                  <img src={chapter.image} alt={`${chapter.title} visual`} />
                )}
                {chapter.description && <p>{chapter.description}</p>}
                {chapter.link && (
                  <p>
                    <a href={chapter.link} target="_blank" rel="noreferrer">
                      More information here
                    </a>
                  </p>
                )}
                {chapter.Regulations && (
                  <p>
                    <h4>Regulations:</h4>
                    <ul>
                      {chapter.Regulations.map((regulation, index) => (
                        <li key={index}>{regulation}</li>
                      ))}
                    </ul>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <footer id="footer" className={config.theme}>
          <p dangerouslySetInnerHTML={{ __html: config.footer }} />
        </footer>
      </div>
    </div>
  );
};

export default App;
