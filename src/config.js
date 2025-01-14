const config = {
    style: "mapbox://styles/mapbox/satellite-streets-v12", // Supports 3D terrain
    accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
    showMarkers: true,
    markerColor: "rgb(0,127,92)",
    theme: "dark",
    use3dTerrain: true,
    auto: false,
    title: "",
    subtitle: "",
    byline: "Scroll Down to Explore",
    footer:
      '<br> Created By <a href="https://interactive-reality.netlify.app/" target="_blank">Richard Brown</a>',
    chapters: [
      {
        id: "slug-style-id",
        alignment: "lefty",
        hidden: false,
        title: "Multnomah-Wahkeena Loop",
        image:
          "https://www.oregonhikers.org/w/images/d/da/Ecola1.JPG",
        description:
          "This popular loop is a waterfall lover's paradise. There are six officially named waterfalls on this trip as well as countless cascades and intermittent falls. The loop can be hiked either direction, and it can be started from either trailhead.",
        Regulations: [
            "Restrooms, restaurant, visitor center at Multnomah Falls Lodge; picnic area, restrooms, information kiosk near Wahkeena Trailhead",
            "Parking Fee",
            "Dogs on leash"
        ],
        location: {
          center: [-122.11841, 45.57893],
          end: [-122.12809, 45.57535],
          zoom: 14.5,
          pitch: 70,
          bearing: 180,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
      },
      {
        id: "second-identifier",
        alignment: "righty",
        hidden: false,
        title: "Multnomah-Wahkeena Loop",
        image:
          "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvOTA0OTM5MjYvMjgyOTk1MTA3NmZkYTFjZGZkNTYwYWE3ODM1ZDkxMjYuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=",
        description:
          "The trail begins at Multnomah Falls Lodge, a historic building constructed to serve early automobile travelers in 1925. From a photographer's viewpoint, get a head on vista of both the lower and main tiers of Multnomah Falls and the picturesque span of the Benson Bridge.",
        location: {
          center: [-122.11841, 45.57893],
          zoom: 14,
          pitch: 70,
          bearing: 360,
        },
        mapAnimation: "flyTo",
        rotateAnimation: true,
      },
      {
        id: "third-identifier",
        alignment: "righty",
        hidden: false,
        title: "Multnomah-Wahkeena Loop",
        image:
          "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvOTAzOTQ5NzYvYjI5N2U4ZTU4ZTFkODZhNmRmZTIzM2Q3ODE0YjJmNWUuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=",
        description:
          "The trail continues to climb, switchbacking up the steep slope. The trail is well graded and maintained, but it is steep. The trail passes through a series of rock walls and talus slopes. The trail is cut into the side of the cliff, and the views are spectacular.",
        location: {
          center: [-122.11841, 45.57893],
          zoom: 14,
          pitch: 10,
          bearing: 60,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
      },
      {
        id: "fourth-chapter",
        alignment: "lefty",
        hidden: false,
        title: "Multnomah-Wahkeena Loop",
        image:
          "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvOTAxOTk3MzcvYjgyNTAwMzFhZWJkZjYzYjM4OTI3YjZkZTEzODVmNTQuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=",
        link:"https://www.oregonhikers.org/field_guide/Multnomah-Wahkeena_Loop_Hike",
        description:
          "he route is a gently sloped 2/10 mile paved path to the Benson Bridge, put in place in 1914 by Simon Benson, one of the builders of the old highway. This part of the trail has one switchback. You'll pass below a rock net and can look up to see the seasonal Shady Creek Falls, which splash down a cliff just west of Multnomah Falls.",
        location: {
          center: [-122.11841, 45.57893],
          zoom: 4,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
      },
    ],
  };

export default config;