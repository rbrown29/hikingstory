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
        title: "Mirror Lake",
        image:
          "https://www.oregonhikers.org/w/images/e/e8/MirrorLakeAlpenglow.jpg",
        description:
          "The Mirror Lake Trail has the misfortune of being one of the few hikes accessible directly from Highway 26 and thus suffers a crush of visitors on weekends. The attention is well-deserved: The well-graded trail takes you to a serene mountain lake with picture-postcard views of Mount Hood and rugged Tom Dick and Harry Mountain towering above. With the old trailhead decommissioned in 2018, visitors now have a longer hike but with somewhat less elevation gain from the new Mirror Lake Trailhead. The new trail was machine-built, so it's wide and verged with debris from the operation. There are 10 footbridges on this new section; nine of them were airlifted in by helicopter.",
        Regulations: [
            "Northwest Forest Pass required",
            "Day use only",
            "Restrooms, picnic table, information kiosk at trailhead",
            "Keep dogs on leash",
        ],
        location: {
          center: [-121.77728, 45.30277],
          end: [-121.79286, 45.29695],
          zoom: 14.5,
          pitch: 70,
          bearing: 130,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
      },
      {
        id: "second-identifier",
        alignment: "lefty",
        hidden: false,
        title: "Mirror Lake",
        image:
          "https://www.oregonhikers.org/w/images/thumb/3/30/MirrorLake.jpg/500px-MirrorLake.jpg",
        description:
          "The Mirror Lake Trail has the misfortune of being one of the few hikes accessible directly from Highway 26 and thus suffers a crush of visitors on weekends. The attention is well-deserved: The well-graded trail takes you to a serene mountain lake with picture-postcard views of Mount Hood and rugged Tom Dick and Harry Mountain towering above. With the old trailhead decommissioned in 2018, visitors now have a longer hike but with somewhat less elevation gain from the new Mirror Lake Trailhead. The new trail was machine-built, so it's wide and verged with debris from the operation. There are 10 footbridges on this new section; nine of them were airlifted in by helicopter.",
        location: {
          center: [-121.77728, 45.30277],
          zoom: 13.7,
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
        title: "Mirror Lake",
        image:
          "https://www.oregonhikers.org/w/images/thumb/8/85/Mt._Hood_from_Mirror_Lake.jpg/500px-Mt._Hood_from_Mirror_Lake.jpg",
        description:
          "From the plaza at the parking area, find the paved ADA trail that leads down a slope behind the restrooms. Six winding switchbacks descend 0.2 miles to a wide footbridge over Camp Creek, where the paved section ends. You're in a secondary forest of Douglas-fir, western hemlock, silver fir, noble fir, and western red-cedar. Before Camp Creek, a pole-and-rail barrier prevents shortcutting at a switchback.After Camp Creek, you're on a wide dirt trail that often has protruding roots and embedded rocks. Cross two footbridges over seasonally dry gullies. The next bridge crosses the creek that drains the Comerford Lakes. Then you'll rise gradually to cross more footbridges over trickling creeks that feed small bogs below. Rhododendrons enter the understory, and you'll see springboard notches on rotting stumps. The trail undulates along, passing over more bridges, and soon crosses Mirror Lake Creek. After crossing an old logging road, you'll bend sharp left to rise steeply and intersect the old tread which came up from the U.S. 26 trailhead. Whole trees have been felled over this path to decommission it.Switchback on the narrower old tread, and pass a vine maple-verged patch of talus. Walk on another old logging road for a few yards, pass through a devil's club thicket, and switchback up twice to where a new pole-and-rail fence prevents cutting corners. Reach the Mirror Lake-Mirror Lake Shore Trail North Junction, and go left to begin your clockwise tour around Mirror Lake.",
        location: {
          center: [-121.77728, 45.30277],
          zoom: 14,
          pitch: 10,
          bearing: 0.0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
      },
      {
        id: "fourth-chapter",
        alignment: "lefty",
        hidden: false,
        title: "Mirror Lake",
        image:
          "https://live.staticflickr.com/4882/43974838530_8023ab3489_k.jpg",
        link:"https://www.oregonhikers.org/field_guide/Mirror_Lake_Hike",
        description:
          "Hikers visiting Mirror Lake will enjoy spectacularly close and personal views of Mount Hood and Tom Dick and Harry Mountain.  Visit in mid-July and you'll also enjoy the trail's outstanding abundance of Pacific rhododendron in bloom, as well as Douglas's spiraea surrounding the lake's marshy southern end.",
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