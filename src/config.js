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
        title: "Cascade Head",
        image:
          "https://www.oregonhikers.org/w/images/f/f4/CascadeHead3.JPG",
        description:
          "This is one of the truly amazing places on the Oregon Coast. It has spectacular views down to Three Rocks, the Salmon River Estuary, and the headlands north of Lincoln City. The grassy headland is also home to an endangered species of butterfly, the Oregon silverspot, and at least two rare plant species.",
        Regulations: [
            "Dogs are not permitted on this trail",
            "Off-trail travel is not permitted",
            "Last 0.6 miles of trail as well as the upper Nature Conservancy Trailhead closed from January 1st to July 15th.",
            "Restrooms at Knights Park Trailhead",
        ],
        location: {
          center: [-123.99234, 45.04183],
          end: [-123.98842, 45.06068],
          zoom: 14.5,
          pitch: 70,
          bearing: 30,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
      },
      {
        id: "second-identifier",
        alignment: "righty",
        hidden: false,
        title: "Cascade Head",
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.DlZMfYEnCndoDvibmSpgwgHaDy%26pid%3DApi&f=1&ipt=48f93e1bb3f6aa134768c7cc2daae98e018be8e169cab5ac8ed7d15d913bc7ff&ipo=images",
        description:
          "The hike begins at Knights Park. The first part of trail follows a path of wood shavings scant feet from Three Rocks Road. Cross the road and you'll find the path headed north on the shoulder of Savage Road. The trail dips from the road to reach a wooden bridge, and then parallels the road through the trees. At the crest of a hill, the path crosses the road and follows its west shoulder. A sign at the bottom of the hill marks the original trailhead, where the trail leaves the road for good.",
        location: {
          center: [-123.99234, 45.04183],
          zoom: 14,
          pitch: 70,
          bearing: -43.2,
        },
        mapAnimation: "flyTo",
        rotateAnimation: true,
      },
      {
        id: "third-identifier",
        alignment: "righty",
        hidden: false,
        title: "Cascade Head",
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.RpOy7N0Q6dXouW0T0Ie8SAHaEK%26pid%3DApi&f=1&ipt=adbdd715948c2c654ff129b52a16b895d99a501eb5ddeb37402b515599e5b45c&ipo=images",
        description:
          "This headland meadow is a very rare ecosystem. There are two rare plants that call this hill home, the Cascade Head catchfly (Silene douglasii var oraria) and the hairy-stemmed checkermallow (Sidalcea hirtipes). Both of these species make their strongest stand here. It's estimated the 99% of all Cascade Head catchflies live on this one hill.",
        location: {
          center: [-123.99234, 45.04183],
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
        title: "Cascade Head",
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.2O-hriXSCC3bhoSEra-RwAHaFj%26pid%3DApi&f=1&ipt=ba00787b20494d904015158126680bd839daca06045a2d1afb36742faec697fa&ipo=images",
        link:"https://www.oregonhikers.org/field_guide/Cascade_Head_Hike",
        description:
          "With the roadside hike done, you'll begin climbing steeply, sometimes on stairs, through an old growth coastal forest. Douglas-fir and Sitka spruce dominate the area. You're on National Forest land in this short section, but please stay on the trail as private property is close. You'll climb about 270 feet in the first 2/10 of a mile to a grove of Sitka spruce indicated by a 13 marker. The climb eases here.",
        location: {
          center: [-123.99234, 45.04183],
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