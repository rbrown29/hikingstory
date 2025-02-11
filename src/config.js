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
        title: "Cape Kiwanda",
        image:
          "https://www.oregonhikers.org/w/images/9/98/CapeKiwanda1.jpg",
        description:
          "Cape Kiwanda is part of the Three Capes Scenic Route (along with Cape Meares and Cape Lookout). Kiwanda is the smallest of the three, but it is one of the best places to experience spectacular wave action. Pacific City is the home of the Pacific Dory Fleet. The beach is home to the Pacific City Dory Days where the Dory Fleet launches into the surf and then lands on the beach.",
        Regulations: [
            "$10 Tillamook County Day Use Access Parking Fee",
            "Dogs are allowed on the beach, but must be on a leash",
            "Cars on the beach at the Cape Kiwanda Trailhead"
        ],
        location: {
          center: [-123.96697, 45.20239],
          end: [-123.97435, 45.21981],
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
        title: "Cape Kiwanda",
        image:
          "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNTI2NDY2MzcvYjc5OTk0Y2E0YmIyY2MyMjZlNzYzNzZmYzkzZjIxMDguanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=",
        description:
          "One of the most unique features of Cape Kiwanda is the massive sand dune that dominates the landscape. You can climb to the top for incredible views of the beach and surrounding area or you can try your hand at sandboarding down the dune.",
        location: {
          center: [-123.96697, 45.20239],
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
        title: "Cape Kiwanda",
        image:
          "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvODQ1MTUzNjgvMmI5ZWYyNmRiNjkyZGM1YTM4NTA5YTFmNmViYTljYjIuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=",
        description:
          "It’s a thrilling experience that is sure to be a highlight of any visit. There are also plenty of hiking trails and other outdoor activities to enjoy in the surrounding area.",
        location: {
          center: [-123.96697, 45.20239],
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
        title: "Cape Kiwanda",
        image:
          "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNjgzOTIzMTUvZDM1MTBjYTg5MTJjMzdkMDlhNTQ3NTI5M2MyMzU1YzIuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=",
        link:"https://www.oregonhikers.org/field_guide/Cape_Kiwanda_Hike",
        description:
          "Whether you’re looking for a peaceful spot to relax and soak up the sun or an adventurous destination with plenty of outdoor activities this beach has it all. The stunning natural beauty or area combined with the modern amenities make it a must-see destination on the Oregon coast.",
        location: {
          center: [-123.96697, 45.20239],
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