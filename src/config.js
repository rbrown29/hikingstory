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
        title: "Eagle Creek to Tunnel Falls",
        image:
          "https://www.oregonhikers.org/w/images/thumb/3/35/PunchbowlFalls.jpg/500px-PunchbowlFalls.jpg",
        description:
          "Tunnel Falls is the traditional turnaround spot for many on the Eagle Creek Trail, and it is indeed a splendid climax...",
        Regulations: [
            "Northwest Forest Pass (or America the Beautiful Pass) required; fee kiosk at the trailhead",
            "Restrooms, picnic tables, information kiosk, nearby campground",
            "Limited parking; if lot is full, go back to the Eagle Creek Day Use Trailhead",
            "Keep dogs on leash",
            "Overnight camping permitted above the High Bridge; campfires not allowed!",
        ],
        location: {
          center: [-121.91970, 45.636574],
          end: [-121.85199, 45.58489],
          zoom: 13,
          pitch: 50,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
      },
      {
        id: "second-identifier",
        alignment: "righty",
        hidden: false,
        title: "Eagle Creek to Tunnel Falls",
        image:
          "https://www.oregonhikers.org/w/images/thumb/d/d6/TunnelFalls1.jpg/600px-TunnelFalls1.jpg",
        description:
          "Over the last thousand years, the falls have carved a majestic basin here, plunging 160 feet from towering basalt cliffs to the rushing creek bed below...",
        location: {
          center: [-121.91970, 45.636574],
          zoom: 14.5,
          pitch: 60,
          bearing: -43.2,
        },
        mapAnimation: "flyTo",
        rotateAnimation: true,
      },
      {
        id: "third-identifier",
        alignment: "lefty",
        hidden: false,
        title: "Eagle Creek to Tunnel Falls",
        image:
          "https://hikingproject.com/assets/photos/hike/7016924_smallMed_1554828543.jpg?cache=1733552775",
        description:
          "While this scene is impressive enough, the most bewildering aspect of the falls in the passageway behind them. Trail builders from the early 1900s blasted a tunnel behind the falls and then across the sheer rock face on their far side, making this area the slickest and perhaps most precarious section of trail in the Columbia River Gorge.",
        location: {
          center: [-121.91970, 45.636574],
          zoom: 12,
          pitch: 8.01,
          bearing: 0.0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
      },
      {
        id: "fourth-chapter",
        alignment: "lefty",
        hidden: false,
        title: "Eagle Creek to Tunnel Falls",
        image:
          "https://hikingproject.com/assets/photos/hike/7011604_smallMed_1554559703.jpg?cache=1733552651",
        link:"https://www.hikingproject.com/trail/7022469/eagle-creek-trail-to-tunnel-falls",
        description:
          "Looking downstream from the falls, you can see where the two forks of Eagle Creek converge, meeting at Grand Union Falls",
        location: {
          center: [-121.91970, 45.636574],
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