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
        alignment: "righty",
        hidden: false,
        title: "Garflield Peak",
        image:
          "https://www.oregonhikers.org/w/images/c/cf/GarfieldPeak1.jpg",
        description:
          "Try this 3.5-mile out-and-back trail near Crater Lake, Oregon. Generally considered a moderately challenging route, it takes an average of 2 h 8 min to complete. This is a very popular area for cross-country skiing, hiking, and snowshoeing, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime.",
        Regulations: [
            "$30 per vehicle entrance fee to Crater Lake National Park - good for 7 days - or America the Beautiful Pass",
            "No pets allowed on trails",
        ],
        location: {
          center: [-122.1435, 42.9109],
          end: [-122.1232, 42.9041],
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
        title: "Garfield Peak",
        image:
          "https://www.oregonhikers.org/w/images/thumb/0/0e/GarfieldPeak3.jpg/500px-GarfieldPeak3.jpg",
        description:
          "This is the one of the most popular hiking trails in Crater Lake National Park with close proximity to the Rim Village, Crater Lake Lodge, and Applegate Peak. There are spectacular panoramic views of the entire lake and other high Cascade Range Landmarks to the north and to the south the Klamath Basin and southern Cascade Landmarks.",
        location: {
          center: [-122.1435, 42.9109],
          zoom: 14,
          pitch: 70,
          bearing: 360,
        },
        mapAnimation: "flyTo",
        rotateAnimation: true,
      },
      {
        id: "third-identifier",
        alignment: "lefty",
        hidden: false,
        title: "Garfield Peak",
        image:
          "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvODcyOTk3NTYvODVkNzFhMDgyYTUxNWZlNjRlYmZiYWIxMTc4M2Y0MjcuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=",
        description:
          "This short steep hike leaves the parking lot of Crater Lake Lodge and immediately heads uphill. Stick with it for a half mile or so and you will be rewarded with views of the deepest lake in America - and the blue color only gets better as you climb!",
        location: {
          center: [-122.1435, 42.9109],
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
        title: "Garfield Peak",
        image:
          "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvODY1MDQ0ODUvMmM0Mjk5NDIyOTg0ODE0NjBjZmJhYTlhMjkxMGVhMDEuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=",
        link:"https://www.oregonhikers.org/field_guide/Garfield_Peak_Hike",
        description:
          "The trail leads eastward contouring the ridge above Crater Lake. The track turns northward one-half mile from the trailhead and begins to climb. It ascends the northwestern ridge of Garfield Peak then turns eastward. Gaining the northern ridge crest the route continues to climb to the 8,060-foot summit. Views from this lofty peak south of Crater Lake include views of the lake, Wizard Island,  Phantom Ship, Mount Mazama, and the terrain to the south. There is a good path to the top, but, be prepared for a difficult climb along this peak trail.",
        location: {
          center: [-122.1435, 42.9109],
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