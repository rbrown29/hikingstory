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
        title: "Tamolitch Blue Pool",
        image:
          "https://www.oregonhikers.org/w/images/5/51/Tamolitch_Falls_and_Blue_Pool%2C_McKenzie_River_Trail.jpg",
        description:
          "Head out on this 3.9-mile out-and-back trail near Blue River, Oregon. Generally considered a moderately challenging route, it takes an average of 1 h 28 min to complete. This is a very popular area for birding, hiking, and mountain biking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.",
        Regulations: [
            "Restrooms, information kiosk, nearby campground",
            "Share trail with mountain bikers"
        ],
        location: {
          center: [-122.03567, 44.29022],
          end: [-122.0269, 44.3120],
          zoom: 13.5,
          pitch: 70,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
      },
      {
        id: "second-identifier",
        alignment: "lefty",
        hidden: false,
        title: "Tamolitch Blue Pool",
        image:
          "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNDc1ODgxNzUvZDQ3ODkzOWVhOGEzNzEyNzk3MTUwZjI3ZDQ2YmFlMzMuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=",
        description:
          "The beginning of this easy hike is through an old-growth Douglas fir forest. As the McKenzie River falls away, you walk along a cliff and descend into a dry river bed which eventually comes to an old lava flow.",
        location: {
          center: [-122.03567, 44.29022],
          zoom: 13,
          pitch: 70,
          bearing: 220,
        },
        mapAnimation: "flyTo",
        rotateAnimation: true,
      },
      {
        id: "third-identifier",
        alignment: "righty",
        hidden: false,
        title: "Tamolitch Blue Pool",
        image:
          "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvOTEyNzg0MzYvN2UxNDJkMzExMDIyMDNjNTEwODVjOTYwMDc3OWRkMGUuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=",
        description:
          "The trail is not too strenuous but there is some elevation gain as can be seen on the tracks and footing can be tricky in a few places. Be advised the trail passes one ledge with a steep drop-off to the river a short distance before Blue Pool.",
        location: {
          center: [-122.03567, 44.29022],
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
        title: "Tamolitch Blue Pool",
        image:
          "https://www.oregonhikers.org/w/images/1/13/North_end_of_the_Blue_Pool%2C_McKenzie_River_Trail.jpg",
        link:"https://www.oregonhikers.org/field_guide/Tamolitch_Pool_Hike",
        description:
          "This pool is actually where the McKenzie River emerges after submerging into a lava tube at the Carmen Reservoir, creating the Tamolitch Falls. It's known as a “dry fall” because during especially wet rainy winters the river will flood over the lava bed and waterfall into Tamolitch Pool. ",
        location: {
          center: [-122.03567, 44.29022],
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