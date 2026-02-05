// const { BsFuelPump } = require("react-icons/bs");
// const { GiSpeedometer } = require("react-icons/gi");
// const { PiEngine } = require("react-icons/pi");

export const models = [
  //0- Maruti victoris
  {
    name: ' Maruti VICTORIS',
    subName: 'VICTORIS',
    offersAmount: 90000,
    offersAdditionalDec: '',
    link: '/arena/victoris-on-road-price',
    linkCG: '/arena/victoris-on-road-price-in-raipur',
    linkOD: '/arena/victoris-on-road-price-in-bhubaneswar',
    offerValidTill: 'Jan 31, 2025',
    colors: [
      {
        img: 'https://www.varunmaruti.com/uploads/products/colors/eternal-blue-with-btuish-black-rooff.png',
        colorCode: '#24475b', // Eternal Blue (dark blue)
        colName: 'Eternal Blue + Black Roof',
      },
      {
        img: 'https://www.varunmaruti.com/uploads/products/colors/splendid-silver-with-bluish-black-rooff.png',
        colorCode: '#A0A4A8', // Splendid Silver (dual tone)
        colName: 'Splendid Silver + Black Roof',
      },
      {
        img: 'https://www.varunmaruti.com/uploads/products/colors/splendid-silverr.png',
        colorCode: '#A8AAAD', // Splendid Silver (monotone)
        colName: 'Splendid Silver',
      },
      {
        img: 'https://www.varunmaruti.com/uploads/products/colors/sizzling-red-with-bluish-black-rof.png',
        colorCode: '#C91F27', // Sizzling Red (dual tone)
        colName: 'Sizzling Red + Black Roof',
      },
      {
        img: 'https://www.varunmaruti.com/uploads/products/colors/sizzling-redd.png',
        colorCode: '#D72B3F', // Sizzling Red
        colName: 'Sizzling Red',
      },
      {
        img: 'https://www.varunmaruti.com/uploads/products/colors/mystic-greenn.png',
        colorCode: '#233b47',
        colName: 'Mystic Green',
      },
      {
        img: 'https://www.varunmaruti.com/uploads/products/colors/pearl-arctic-white.png',
        colorCode: '#F8F9F9',
        colName: 'Pearl Arctic White',
      },
      {
        img: 'https://www.varunmaruti.com/uploads/products/colors/bluish-blackk.png',
        colorCode: '#0A0A0A', // Bluish Black
        colName: 'Bluish Black',
      },
    ],

    keySpecifications: [
      {
        label: 'Fuel Tank Capacity',
        value: '45 L (Petrol); 55 L (CNG, water-equivalent)',
      },
      { label: 'Seating Capacity', value: '5' },
      { label: 'Length', value: '4,360 mm' },
      { label: 'Width', value: '1,795 mm' },
      { label: 'Height', value: '1,655 mm' },
      { label: 'Wheelbase', value: '2,600 mm' },
      { label: 'Front Suspension', value: 'MacPherson Strut with Coil Spring' },
      { label: 'Rear Suspension', value: 'Torsion Beam with Coil Spring' },
      { label: 'Fuel Type', value: 'Petrol / Strong Hybrid / Petrol + CNG' },
      {
        label: 'Engine Options',
        value:
          '1.5 L K15C Mild-Hybrid petrol; Strong Hybrid (1.5 L petrol + electric motor); Petrol + CNG',
      },
      {
        label: 'Max Power',
        value: 'Petrol: ~103 PS; Hybrid: ~92 PS; CNG: ~88 PS',
      },
      {
        label: 'Max Torque',
        value: 'Petrol: ~139 Nm; Hybrid: ~122 Nm; CNG: ~121 Nm',
      },
      {
        label: 'Transmission Type',
        value: '5-Speed Manual / 6-Speed Automatic / e-CVT (Hybrid)',
      },
      {
        label: 'No. of Cylinders',
        value: '4 (Petrol & CNG), 3 (Strong Hybrid)',
      },
      {
        label: 'Drivetrain',
        value: 'FWD; AWD (AllGrip Select with 4×4 modes, on Petrol AT)',
      },
      {
        label: 'Mileage',
        value:
          'Petrol MT: ~21.18 km/l • Petrol AT: ~21.06 km/l • AWD AT: ~19.07 km/l • CNG: ~27.02 km/kg • Strong Hybrid: ~28.65 km/l',
      },
      { label: 'Body Type', value: 'Compact/Midsize SUV' },
    ],

    exterior: [
      {
        img: 'https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:d86f22ee-c205-4548-b276-416217f3a27f/as/Desktop-Wrap-around-design.jpg',
        title: 'Honeycomb Grille',
      },
      {
        img: 'https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:2bb0c9c5-82cd-48c6-87af-21fedf9c2ce8/as/Desktop-Bold-cut-LED-DRLs-and-Headlamps.jpg',
        title: 'Peppy Headlamps',
      },
      {
        img: 'https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:3669bada-c0d8-49ec-bd7f-b7829a2de19c/as/Desktop-Segmented-Rear-LED-Tail-Lamps.jpg',
        title: 'Trendy Rear Combination Lamps',
      },
      {
        img: 'https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:c7e44898-2687-4d72-a63b-4d23000abf83/as/Desktop-R17-Alloy-Wheels.jpg',
        title: "13''(33.02cm) Wheels with Honeycomb-Themed Covers",
      },
      // {
      //   img: '/images/car/arena/altok10/exterior_web_05.webp',
      //   title: 'Reverse Parking Sensors',
      // },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    interior: [
      {
        img: 'https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:3884ba73-886c-462c-a7c4-06b6f49c7c30/as/Desktop-Dual-Tone-Interior---Seat.jpg',
        title: 'Lively and Spacious Interior',
      },
      {
        img: 'https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:4d63d730-bb9d-4466-b4dc-ce3c1b49c444/as/Desktop-Panoramic-Sunroof.jpg',
        title: 'Smartplay Studio with Smartphone Navigation',
      },
      {
        img: 'https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:e95c892c-ab85-4326-800e-44e8a38ae73c/as/Desktop-64-Color-Ambient-Lighting.jpg',
        title: 'Steering-Mounted Audio and Voice Control',
      },
      {
        img: 'https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:80c0f5df-897b-45d1-87c4-e91eb53a8ace/as/Desktop-3-Layered-Dashboard.jpg',
        title: 'Auto Gear Shift Technology',
      },
      {
        img: 'https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:d0e2f309-d9aa-4772-b62b-76a606334db1/as/Desktop-10-25-Digital-MID.jpg',
        title: '1st in Segment 4 Speakers',
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    carDetails: [
      {
        // icon: <GiSpeedometer className="text-4xl" />,
        label: 'Engine',
        value: 'K15C Smart Hybrid',
      },
      {
        // icon: <BsFuelPump className="text-4xl" />,
        label: 'Mileage',
        value: '28.65 kmpl',
      },
      {
        // icon: <PiEngine className="text-4xl" />,
        label: 'Power',
        value: '75.8 kW (103.06 Ps) @ 6000 rpm',
      },
    ],
    variants: [
      {
        variant: 'MARUTI VICTORIS LXI 1.5L 5MT',
        price: 1049900,
        transmission: 'Manual',
      },
      {
        variant: 'MARUTI VICTORIS LXI CNG 1.5L 5MT',
        price: 1149899,
        transmission: 'Manual',
      },
      {
        variant: 'MARUTI VICTORIS VXI 1.5L 5MT',
        price: 1179900,
        transmission: 'Manual',
      },
      {
        variant: 'MARUTI VICTORIS VXI CNG 1.5L 5MT',
        price: 1279900,
        transmission: 'Manual',
      },
      {
        variant: 'MARUTI VICTORIS VXI 1.5L 6AT',
        price: 1335900,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI VICTORIS ZXI 1.5L 5MT',
        price: 1356900,
        transmission: 'Manual',
      },
      {
        variant: 'MARUTI VICTORIS ZXI 1.5L 5MT-D/T',
        price: 1372300,
        transmission: 'Manual',
      },
      {
        variant: 'MARUTI VICTORIS ZXI(O) 1.5L 5MT',
        price: 1423900,
        transmission: 'Manual',
      },
      {
        variant: 'MARUTI VICTORIS ZXI(O) 1.5L 5MT-D/T',
        price: 1439300,
        transmission: 'Manual',
      },
      {
        variant: 'MARUTI VICTORIS ZXI 1.5L 6AT',
        price: 1528300,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI VICTORIS ZXI(O) 1.5L 6AT',
        price: 1563900,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI VICTORIS ZXI(O) 1.5L 6AT-D/T',
        price: 1579300,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI VICTORIS ZXI CNG 1.5L 5MT',
        price: 1456900,
        transmission: 'Manual',
      },
      {
        variant: 'MARUTI VICTORIS ZXI+ 1.5L 5MT',
        price: 1539300,
        transmission: 'Manual',
      },
      {
        variant: 'MARUTI VICTORIS ZXI+ 1.5L 5MT-D/T',
        price: 1523900,
        transmission: 'Manual',
      },
      {
        variant: 'MARUTI VICTORIS ZXI+ 1.5L 6AT',
        price: 1714900,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI VICTORIS ZXI+ 1.5L 6AT-D/T',
        price: 1730300,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI VICTORIS ZXI+(O) 1.5L 5MT',
        price: 1597301,
        transmission: 'Manual',
      },
      {
        variant: 'MARUTI VICTORIS ZXI+(O) 1.5L 5MT-D/T',
        price: 1581901,
        transmission: 'Manual',
      },
      {
        variant: 'MARUTI VICTORIS ZXI+(O) 1.5L 6AT',
        price: 1792300,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI VICTORIS ZXI+(O) 1.5L 6AT-D/T',
        price: 1776900,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI VICTORIS ZXI+(O) 4WD 1.5L 6AT',
        price: 1879300,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI VICTORIS ZXI+(O) 4WD 1.5L 6AT-D/T',
        price: 1892300,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI VICTORIS ZXI+(O) 4WD 1.5L 5MT',
        price: 1819300,
        transmission: 'Manual',
      },
      {
        variant: 'MARUTI VICTORIS ZXI STRONG HYBRID 1.5L ECVT',
        price: 1999300,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI VICTORIS ZXI STRONG HYBRID 1.5L ECVT',
        price: 1939300,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI VICTORIS ZXI STRONG HYBRID 1.5L ECVT',
        price: 1979300,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI VICTORIS ZXI(O) STRONG HYBRID 1.5L ECVT',
        price: 1833900,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI VICTORIS ZXI(O) STRONG HYBRID 1.5L ECVT',
        price: 1854900,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI VICTORIS ZXI(O) STRONG HYBRID 1.5L ECVT',
        price: 1946900,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI VICTORIS ZXI(O) STRONG HYBRID 1.5L ECVT',
        price: 1962300,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI VICTORIS ZXI+(O) STRONG HYBRID 1.5L',
        price: 1999800,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI VICTORIS ZXI+(O) STRONG HYBRID 1.5L',
        price: 1999800,
        transmission: 'Automatic',
      },
    ],

    exploreMore: [1, 2, 3],
    thumbnail: '/thumbnail/victoris.png',
    priceRange: `₹10.50L - ₹19.98L*`,
    //brochure:'https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/Alto-Brochure-and-Spec-Sheet.pdf',
    // blogs: [
    //   {
    //     title: '5 Reasons to Buy the 2024 Maruti Suzuki Alto K10',
    //     desc: 'The 2024 Maruti Suzuki Alto K10 is a standout choice in the entry-level hatchback segment, appealing to first-time car buyers and urban commuters alike. Here are five compelling reasons to consider the Alto K10 for your next vehicle.',

    //     link: '/blogs/5-Reasons-to-Buy-the-2024-Maruti-Suzuki-Alto-K10',
    //     author: 'Sky Automobiles',
    //   },
    // ],
  },
  //0- Maruti ALTO K10
  {
    name: ' Maruti ALTO K10',
    subName: 'ALTO K10',
    offersAmount: 37100,
    offersAdditionalDec: '',
    link: '/arena/alto-k10-on-road-price',
    linkCG: '/arena/alto-k10-on-road-price-in-raipur',
    linkOD: '/arena/alto-k10-on-road-price-in-bhubaneswar',
    offerValidTill: 'Jan 31, 2025',
    colors: [
      {
        img: '/images/car/arena/altok10/altok-10-metallic-sizzling-red1.png',
        colorCode: '#d51716',
        colName: 'Metallic Sizzling Red',
      },
      {
        img: '/images/car/arena/altok10/altok-10-metallic-granite-gray1.png',
        colorCode: '#797a83',
        colName: 'Metallic Granite Grey',
      },
      {
        img: '/images/car/arena/altok10/altok-10-premium-earth-gold.png',
        colorCode: '#5e4923',
        colName: 'Premium Earth Gold',
      },
      {
        img: '/images/car/arena/altok10/altok-10-metallic-silky-silver1.png',
        colorCode: '#9b9aa0',
        colName: 'Metallic Silky Silver',
      },
      {
        img: '/images/car/arena/altok10/altok-10-metallic-speedy-blue.png',
        colorCode: '#2249b5',
        colName: 'Metallic Speedy Blue',
      },
      {
        img: '/images/car/arena/altok10/altok-10-solid-white1.png',
        colorCode: '#e4e4e6',
        colName: 'Solid White',
      },
      {
        img: '/images/car/arena/altok10/altok-10-pearl-midnight-black.png',
        colorCode: '#050505',
        colName: 'Midnight Black',
      },
    ],
    keySpecifications: [
      { label: 'Fuel Tank Capacity', value: '55 Litres' },
      { label: 'Seating Capacity', value: '4, 5' },
      { label: 'Length', value: '3530 mm' },
      { label: 'Width', value: '1490 mm' },
      { label: 'Height', value: '1520 mm' },
      {
        label: 'Front Suspension',
        value: 'Mac Pherson Strut with Coil Spring',
      },
      { label: 'Rear Suspension', value: 'Torsion Beam with Coil Spring' },
      { label: 'Fuel Type', value: 'Petrol, CNG' },
      { label: 'No. of Cylinders', value: '3' },
      { label: 'Max Torque', value: '82.1Nm@3400rpm' },
      { label: 'Transmission Type', value: 'Manual' },
      { label: 'Body Type', value: 'Hatchback' },
      { label: 'Wheel Base', value: '2380 mm' },
      { label: 'Gearbox', value: '5-Speed' },
    ],

    exterior: [
      {
        img: '/images/car/arena/altok10/exterior_web_01.webp',
        title: 'Honeycomb Grille',
      },
      {
        img: '/images/car/arena/altok10/exterior_web_02.webp',
        title: 'Peppy Headlamps',
      },
      {
        img: '/images/car/arena/altok10/exterior_web_03.webp',
        title: 'Trendy Rear Combination Lamps',
      },
      {
        img: '/images/car/arena/altok10/exterior_web_04.webp',
        title: "13''(33.02cm) Wheels with Honeycomb-Themed Covers",
      },
      {
        img: '/images/car/arena/altok10/exterior_web_05.webp',
        title: 'Reverse Parking Sensors',
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    interior: [
      {
        img: '/images/car/arena/altok10/Interior_web_1.webp',
        title: 'Lively and Spacious Interior',
      },
      {
        img: '/images/car/arena/altok10/Interior_web_2.webp',
        title: 'Smartplay Studio with Smartphone Navigation',
      },
      {
        img: '/images/car/arena/altok10/Interior_web_3.webp',
        title: 'Steering-Mounted Audio and Voice Control',
      },
      {
        img: '/images/car/arena/altok10/High_web_05.webp',
        title: 'Auto Gear Shift Technology',
      },
      // {
      //   img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/topgun-launch-2022/highlights/highlight_web_05.webp",
      //   title: "1st in Segment 4 Speakers",
      // },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    carDetails: [
      {
        // icon: <GiSpeedometer className="text-4xl" />,
        label: 'Engine',
        value: '998 cc',
      },
      {
        // icon: <BsFuelPump className="text-4xl" />,
        label: 'Mileage',
        value: '24.39 kmpl',
      },
      {
        // icon: <PiEngine className="text-4xl" />,
        label: 'Power',
        value: '49 kW @ 5500 rpm',
      },
    ],
    variants: [
      { variant: 'ALTO K10 STD 1L 5MT', price: 369900, transmission: 'Manual' },
      { variant: 'ALTO K10 LXI 1L 5MT', price: 399900, transmission: 'Manual' },
      {
        variant: 'ALTO K10 LXI 1L 5MT CNG',
        price: 481900,
        transmission: 'Manual',
      },
      { variant: 'ALTO K10 VXI 1L 5MT', price: 449901, transmission: 'Manual' },
      {
        variant: 'ALTO K10 VXI 1L 5MT CNG',
        price: 531900,
        transmission: 'Manual',
      },
      {
        variant: 'ALTO K10 VXI 1L AGS',
        price: 494900,
        transmission: 'Automatic',
      },
      {
        variant: 'ALTO K10 VXI+ 1L 5MT',
        price: 499900,
        transmission: 'Manual',
      },
      {
        variant: 'ALTO K10 VXI+ 1L AGS',
        price: 535700,
        transmission: 'Automatic',
      },
    ],

    exploreMore: [2, 3, 4],
    thumbnail: '/thumbnail/altoK10.webp',
    priceRange: `₹3.69L - ₹5.35L *`,
    brochure:
      'https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/Alto-Brochure-and-Spec-Sheet.pdf',
    blogs: [
      {
        title: '5 Reasons to Buy the 2024 Maruti Suzuki Alto K10',
        desc: 'The 2024 Maruti Suzuki Alto K10 is a standout choice in the entry-level hatchback segment, appealing to first-time car buyers and urban commuters alike. Here are five compelling reasons to consider the Alto K10 for your next vehicle.',

        link: '/blogs/5-Reasons-to-Buy-the-2024-Maruti-Suzuki-Alto-K10',
        author: 'Sky Automobiles',
      },
    ],
  },

  //1- Maruti Swift
  {
    name: 'Maruti Swift',
    subName: 'Swift',
    offersAmount: 45000,
    offersAdditionalDec: '',
    link: '/arena/swift-on-road-price',
    linkCG: '/arena/swift-on-road-price-in-raipur',
    linkOD: '/arena/swift-on-road-price-in-bhubaneswar',
    offerValidTill: 'Jan 31, 2025',
    colors: [
      {
        img: '/images/car/arena/swift/new-swift-sizzling-red-with-midnight-black-roof.png',
        colorCode: '#EA373B',
        colName: 'Solid Fire Red with Pearl Midnight Black Roof',
      },
      {
        img: '/images/car/arena/swift/new-swift-magma-grey.png',
        colorCode: '#848481',
        colName: 'Metallic Magma Grey',
      },
      {
        img: '/images/car/arena/swift/new-swift-luster-orange.png',
        colorCode: '#C54617',
        colName: 'Pearl Metallic Lucent Orange',
      },
      {
        img: '/images/car/arena/swift/new-swift-luster-blue.png',
        colorCode: '#0C366B',
        colName: 'Pearl Metallic Midnight Blue',
      },
      {
        img: '/images/car/arena/swift/new-swift-sizzling-red.png',
        colorCode: '#D92826',
        colName: 'Sizzling Red',
      },
      {
        img: '/images/car/arena/swift/new-swift-luster-blue-with-midnight-black-roof.png',
        colorCode: '#0D3669',
        colName: 'Pearl Metallic Midnight Blue with Black Roof',
      },
      {
        img: '/images/car/arena/swift/new-swift-pearlr-arctic-white-with-midnight-black-roof.png',
        colorCode: '#D6D6D6',
        colName: 'Pearl Arctic White with Midnight Black Roof',
      },
      {
        img: '/images/car/arena/swift/new-swift-splendid-silver.png',
        colorCode: '#989999',
        colName: 'Metallic Splendid Silver',
      },
      {
        img: '/images/car/arena/swift/new-swift-pearl-arctic-white.png',
        colorCode: '#D1D1D1',
        colName: 'Pearl Arctic White',
      },
    ],
    keySpecifications: [
      { label: 'Fuel Tank Capacity', value: '37 Litres' },
      { label: 'Seating Capacity', value: '5' },
      { label: 'Length', value: '3860 mm' },
      { label: 'Width', value: '1735 mm' },
      { label: 'Height', value: '1520 mm' },
      {
        label: 'Front Suspension',
        value: 'MacPherson Strut ',
      },
      { label: 'Rear Suspension', value: 'Torsion Beam' },
      { label: 'Fuel Type', value: 'Petrol' },
      { label: 'No. of Cylinders', value: '3' },
      { label: 'Max Torque', value: '111.7 Nm @ 4300 rpm' },
      { label: 'Transmission Type', value: 'Manual' },
      { label: 'Body Type', value: 'Hatchback' },
      { label: 'Wheel Base', value: '2450 mm' },
      { label: 'Gearbox', value: '5-Speed' },
    ],

    exterior: [
      {
        img: '/images/slider/swift/ex-2.webp',
        title: '',
      },
      {
        img: '/images/slider/swift/ex-3.webp',
        title: '',
      },
      {
        img: '/images/slider/swift/ex-4.webp',
        title: '',
      },
      {
        img: '/images/slider/swift/ex-5.webp',
        title: '',
      },
      {
        img: '/images/slider/swift/ex-6.webp',
        title: '',
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    interior: [
      {
        img: '/images/slider/swift/in-1.webp',
        title: '',
      },
      {
        img: '/images/slider/swift/in-2.webp',
        title: '',
      },
      {
        img: '/images/slider/swift/in-4.webp',
        title: '',
      },
      {
        img: '/images/slider/swift/in-5.webp',
        title: '',
      },
      {
        img: '/images/slider/swift/in-7.webp',
        title: '',
      },
    ],
    carDetails: [
      {
        // icon: <GiSpeedometer className="text-4xl" />,
        label: 'Engine',
        value: '1197 cc',
      },
      {
        // icon: <BsFuelPump className="text-4xl" />,
        label: 'Mileage',
        value: '24.8 kmpl',
      },
      {
        // icon: <PiEngine className="text-4xl" />,
        label: 'Power',
        value: '60 kW @ 5700 rpm',
      },
    ],
    variants: [
      { variant: 'EPIC NEW SWIFT LXI', price: 578900, transmission: 'Manual' },
      { variant: 'EPIC NEW SWIFT VXI', price: 658900, transmission: 'Manual' },
      {
        variant: 'EPIC NEW SWIFT VXI AGS',
        price: 703900,
        transmission: 'Automatic',
      },
      {
        variant: 'EPIC NEW SWIFT VXI CNG',
        price: 744900,
        transmission: 'Manual',
      },
      {
        variant: 'EPIC NEW SWIFT VXI (O)',
        price: 684900,
        transmission: 'Manual',
      },
      {
        variant: 'EPIC NEW SWIFT VXI (O) AGS',
        price: 729900,
        transmission: 'Automatic',
      },
      {
        variant: 'EPIC NEW SWIFT VXI (O) CNG',
        price: 770900,
        transmission: 'Manual',
      },
      { variant: 'EPIC NEW SWIFT ZXI', price: 752900, transmission: 'Manual' },
      {
        variant: 'EPIC NEW SWIFT ZXI CNG',
        price: 838900,
        transmission: 'Manual',
      },
      {
        variant: 'EPIC NEW SWIFT ZXI AGS',
        price: 797899,
        transmission: 'Automatic',
      },
      {
        variant: 'EPIC NEW SWIFT ZXI +',
        price: 819901,
        transmission: 'Manual',
      },
      {
        variant: 'EPIC NEW SWIFT ZXI + AGS',
        price: 864900,
        transmission: 'Automatic',
      },
      {
        variant: 'EPIC NEW SWIFT ZXI + DUAL',
        price: 834900,
        transmission: 'Manual',
      },
      {
        variant: 'EPIC NEW SWIFT ZXI + AGS DUAL',
        price: 879900,
        transmission: 'Automatic',
      },
    ],

    exploreMore: [3, 4, 5],
    thumbnail: '/thumbnail/swift02.webp',
    priceRange: `₹ 5.78-8.79 Lakhs *`,
    brochure:
      'https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/Vertical_Brochure_NEW.pdf',
    blogs: [
      {
        title:
          '5 Reasons to Buy the 2024 Maruti Suzuki Swift Over Other Hatchbacks',
        desc: 'The 2024 Maruti Suzuki Swift has made a significant impact in the hatchback segment, offering a blend of style, efficiency, and advanced features. Here are five compelling reasons why you should consider the new Swift over its competitors.',

        link: '/blogs/5-Reasons-to-Buy-the-2024-Maruti-Suzuki-Swift-Over-Other-Hatchbacks',
        author: 'Sky Automobiles',
      },
    ],
  },
  //2- Maruti Brezza
  {
    name: 'Maruti Brezza',
    subName: 'Brezza',
    offersAmount: 50000,
    offersAdditionalDec: '',
    link: '/arena/brezza-on-road-price',
    linkCG: '/arena/brezza-on-road-price-in-raipur',
    linkOD: '/arena/brezza-on-road-price-in-bhubaneswar',
    offerValidTill: 'Jan 31, 2025',
    colors: [
      {
        img: '/images/car/arena/brezza/brave_khaki.webp',
        colorCode: '#5D5135',
        colName: 'Brave Khaki',
      },
      {
        img: '/images/car/arena/brezza/exuberant_blue.webp',
        colorCode: '#264B9C',
        colName: 'Exuberant Blue',
      },
      {
        img: '/images/car/arena/brezza/magna_grey.webp',
        colorCode: '#8D8D8D',
        colName: 'Magna Grey',
      },
      {
        img: '/images/car/arena/brezza/pearl+_arctic_white_roof.webp',
        colorCode: '#655A3E',
        colName: 'Brave Khaki Pearl Artic White',
      },
      {
        img: '/images/car/arena/brezza/pearl_arctic_white.webp',
        colorCode: '#F7F7F7',
        colName: 'Pearl Arctic White',
      },
      {
        img: '/images/car/arena/brezza/sizzling_red.webp',
        colorCode: '#E62924',
        colName: 'Sizzling Red',
      },
      {
        img: '/images/car/arena/brezza/sizzling_red_black_roof.webp',
        colorCode: '#C70E1E',
        colName: 'Sizzling Red Black Roof',
      },
      {
        img: '/images/car/arena/brezza/splendid_silver_black_roof.webp',
        colorCode: '#B8BBC0',
        colName: 'Splendid Silver Mid Night Black Roof',
      },
      {
        img: '/images/car/arena/brezza/splendid_silver.webp',
        colorCode: '#C5C5C5',
        colName: 'Splendid Silver',
      },
      {
        img: '/images/car/arena/brezza/brezza-black.webp',
        colorCode: '#000',
        colName: 'Midnight Black',
      },
    ],
    keySpecifications: [
      { label: 'Fuel Tank Capacity', value: '48 Litres' },
      { label: 'Seating Capacity', value: '5' },
      { label: 'Length', value: '3995 mm' },
      { label: 'Width', value: '1790 mm' },
      { label: 'Height', value: '1685 mm' },
      {
        label: 'Front Suspension',
        value: 'MacPherson Strut ',
      },
      { label: 'Rear Suspension', value: 'Torsion Beam' },
      { label: 'Fuel Type', value: 'Petrol/CNG' },
      { label: 'No. of Cylinders', value: '3' },
      { label: 'Max Torque', value: '136.8 Nm @ 4400 rpm' },
      { label: 'Transmission Type', value: 'Manual & Automatic' },
      { label: 'Body Type', value: 'SUVS' },
      { label: 'Wheel Base', value: '2500 mm' },
      { label: 'Gearbox', value: '-Speed' },
    ],

    exterior: [
      {
        img: '/images/car/arena/brezza/exterior_web_01.webp',
        title: 'Dual LED Projector Headlamps with LED DRLs',
      },
      {
        img: '/images/car/arena/brezza/exterior_web_02.webp',
        title: 'LED Tail Lamp',
      },
      {
        img: '/images/car/arena/brezza/exterior_web_03.webp',
        title: 'Chrome Accentuated Front Grille',
      },
      {
        img: '/images/car/arena/brezza/exterior_web_04.webp',
        title: 'Shark fin Antenna',
      },
      {
        img: '/images/car/arena/brezza/exterior_web_05.webp',
        title: 'Bold Geometric Alloy Wheels',
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    interior: [
      {
        img: '/images/car/arena/brezza/Interior_web_01.webp',
        title: 'Interior Ambient Lighting',
      },
      {
        img: '/images/car/arena/brezza/Interior_web_02.webp',
        title: 'Black and Brown Interiors',
      },
      {
        img: '/images/car/arena/brezza/Interior_web_03.webp',
        title: 'Rear AC Vents',
      },
      {
        img: '/images/car/arena/brezza/Interior_web_04.webp',
        title: 'Wide Cabin Space',
      },
      {
        img: '/images/car/arena/brezza/Interior_web_05.webp',
        title: 'Flat Bottom Steering Wheel',
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    carDetails: [
      {
        // icon: <GiSpeedometer className="text-4xl" />,
        label: 'Engine',
        value: '1462 cc',
      },
      {
        // icon: <BsFuelPump className="text-4xl" />,
        label: 'Mileage',
        value: '20.15 kmpl',
      },
      {
        // icon: <PiEngine className="text-4xl" />,
        label: 'Power',
        value: '75.8 kW @ 6000 rpm',
      },
    ],
    variants: [
      { variant: 'BREZZA LXI', price: 825900, transmission: 'Manual' },
      { variant: 'BREZZA LXI CNG', price: 916900, transmission: 'Manual' },
      { variant: 'BREZZA VXI', price: 925900, transmission: 'Manual' },
      { variant: 'BREZZA VXI CNG', price: 1016900, transmission: 'Manual' },
      {
        variant: 'BREZZA SMART HYBRID VXI AMT',
        price: 1059900,
        transmission: 'Automatic',
      },
      {
        variant: 'BREZZA SMART HYBRID ZXI',
        price: 1039900,
        transmission: 'Manual',
      },
      {
        variant: 'BREZZA SMART HYBRID ZXI CNG',
        price: 1134900,
        transmission: 'Manual',
      },
      {
        variant: 'BREZZA SMART HYBRID ZXI AMT',
        price: 1174900,
        transmission: 'Automatic',
      },
      {
        variant: 'BREZZA SMART HYBRID ZXI D/T',
        price: 1055300,
        transmission: 'Manual',
      },
      {
        variant: 'BREZZA SMART HYBRID ZXI D/T CNG',
        price: 1146300,
        transmission: 'Manual',
      },
      {
        variant: 'BREZZA SMART HYBRID ZXI AMT D/T',
        price: 1190300,
        transmission: 'Automatic',
      },
      {
        variant: 'BREZZA SMART HYBRID ZXI+',
        price: 1159900,
        transmission: 'Manual',
      },
      {
        variant: 'BREZZA SMART HYBRID ZXI+ D/T',
        price: 1166300,
        transmission: 'Manual',
      },
      {
        variant: 'BREZZA SMART HYBRID ZXI+ AMT',
        price: 1285900,
        transmission: 'Automatic',
      },
      {
        variant: 'BREZZA SMART HYBRID ZXI+ AMT D/T',
        price: 1301300,
        transmission: 'Automatic',
      },
    ],

    exploreMore: [4, 5, 6],
    thumbnail: '/thumbnail/brezza-page.webp',
    priceRange: `₹ 8.25 - 13.01 Lakh *`,
    brochure:
      'https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/9299_S_Brezza_6_Page_CNG_Brochure.pdf',
    blogs: [
      {
        title:
          '5 Reasons to Buy the 2024 Maruti Suzuki Brezza Over Other Subcompact SUVs',
        desc: 'The 2024 Maruti Suzuki Brezza has emerged as a strong contender in the subcompact SUV market, combining style, safety, and practicality. Here are five compelling reasons to choose the Brezza over its competitors.',

        link: '/blogs/5-Reasons-to-Buy-the-2024-Maruti-Suzuki-Brezza-Over-Other-Subcompact-SUVs',
        author: 'Sky Automobiles',
      },
    ],
  },
  //3- Maruti Dzire  (pending gallery)
  {
    name: 'Maruti Dzire',
    subName: 'Dzire',
    offersAmount: 0,
    offersAdditionalDec: '',
    link: '/arena/dzire-on-road-price',
    linkCG: '/arena/dzire-on-road-price-in-raipur',
    linkOD: '/arena/dzire-on-road-price-in-bhubaneswar',
    offerValidTill: 'Jan 31, 2025',
    colors: [
      {
        img: '/images/car/arena/dzire/bluishblack.webp',
        colorCode: '#2d3137',
        colName: 'Bluish Black',
      },
      {
        img: '/images/car/arena/dzire/white.webp',
        colorCode: '#ffffff',
        colName: 'Pearl Arctic White',
      },
      {
        img: '/images/car/arena/dzire/magmagrey.webp',
        colorCode: '#8F867E',
        colName: 'Magma Gray',
      },
      {
        img: '/images/car/arena/dzire/alluringblue.webp',
        colorCode: '#293d6c',
        colName: 'Alluring Blue',
      },
      {
        img: '/images/car/arena/dzire/nutmegbrown.webp',
        colorCode: '#524134',
        colName: 'Nutmeg Brown',
      },
      {
        img: '/images/car/arena/dzire/splendidsilver.webp',
        colorCode: '#7c8488',
        colName: 'Splendid Silver',
      },
    ],

    keySpecifications: [
      { label: 'Fuel Tank Capacity', value: '37 Litres' },
      { label: 'Seating Capacity', value: '5' },
      { label: 'Length', value: '3995 mm' },
      { label: 'Width', value: '1735 mm' },
      { label: 'Height', value: '1555 mm' },
      { label: 'Front Suspension', value: 'MacPherson Strut' },
      { label: 'Rear Suspension', value: 'Torsion Beam' },
      { label: 'Fuel Type', value: 'Petrol/CNG' },
      { label: 'No. of Cylinders', value: '4' },
      { label: 'Max Torque', value: '113 Nm @ 4200 rpm' },
      { label: 'Transmission Type', value: 'Manual & Automatic' },
      { label: 'Body Type', value: 'Sedan' },
      { label: 'Wheel Base', value: '2450 mm' },
      { label: 'Gearbox', value: '5-Speed' },
    ],

    exterior: [
      {
        img: '/images/car/arena/dzire/Auto-folld-93.avif',
        title: 'Auto-Foldable ORVMs',
      },
      {
        img: '/images/car/arena/dzire/grille-97.avif',
        title: ' Premium Single Aperture Grille For Striking Appearance',
      },
      {
        img: '/images/car/arena/dzire/fog-lamp-41.avif',
        title: '  Fog Lamps With Bold Chrome Accents',
      },
      {
        img: '/images/car/arena/dzire/taillight-44.avif',
        title: 'Precision-Cut Two-Tone Alloy Wheels',
      },
      {
        img: '/images/car/arena/dzire/headlight-43.avif',
        title: 'LED Projector Headlamps & DRLs',
      },
      {
        img: '/images/car/arena/dzire/antenna-80.avif',
        title: '',
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    interior: [
      {
        img: '/images/car/arena/dzire/dashboard-59.avif',
        title: 'Coloured Multi-Information Display',
      },
      {
        img: '/images/car/arena/dzire/sun-roof-moon-roof-81.avif',
        title: 'Premium Trims with Champagne Accents',
      },
      {
        img: '/images/car/arena/dzire/parking-camera-display-136.avif',
        title: 'Exclusive Wood Finish With Natural Gloss Effect',
      },
      {
        img: '/images/car/arena/dzire/rear-air-vents-86.avif',
        title: 'Rear AC Vent',
      },
      {
        img: '/images/car/arena/dzire/wireless-charging-pad-206.avif',
        title: 'Rear Armrest with Cupholder',
      },

      {
        img: '/images/car/arena/dzire/airbags-94.avif',
        title: 'Coloured Multi-Information Display',
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    carDetails: [
      { label: 'Engine', value: '1197 cc' },
      { label: 'Mileage', value: '33.73 kmpl' },
      { label: 'Power', value: '66.7 kW @ 6000 rpm' },
    ],
    variants: [
      {
        variant: 'MARUTI DZIRE TOUR -S',
        price: 623800,
        transmission: 'Manual',
      },
      {
        variant: 'MARUTI DZIRE TOUR -S - CNG',
        price: 709800,
        transmission: 'Manual',
      },
      { variant: 'MARUTI DZIRE LXI', price: 625600, transmission: 'Manual' },
      { variant: 'MARUTI DZIRE VXI', price: 717100, transmission: 'Manual' },
      {
        variant: 'MARUTI DZIRE VXI AGS',
        price: 762100,
        transmission: 'Automatic',
      },
      {
        variant: 'MARUTI DZIRE VXI-CNG',
        price: 803100,
        transmission: 'Manual',
      },
      { variant: 'MARUTI DZIRE ZXI', price: 817700, transmission: 'Manual' },
      {
        variant: 'MARUTI DZIRE ZXI-CNG',
        price: 903700,
        transmission: 'Manual',
      },
      {
        variant: 'MARUTI DZIRE ZXI AGS',
        price: 862700,
        transmission: 'Automatic',
      },
      { variant: 'MARUTI DZIRE ZXI +', price: 886300, transmission: 'Manual' },
      {
        variant: 'MARUTI DZIRE ZXI + AGS',
        price: 931300,
        transmission: 'Automatic',
      },
    ],

    exploreMore: [5, 6, 7],
    thumbnail: '/thumbnail/bluishblack.png',
    priceRange: '₹ 6.23 - 9.31 Lakh *',
    brochure:
      'https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/Dzire-Product-Brochure.pdf',
  },

  //4- Maruti S-Presso
  {
    name: 'Maruti S-Presso',
    subName: 'S-Presso',
    offersAmount: 37100,
    offersAdditionalDec: '67500',
    link: '/arena/spresso-on-road-price',
    linkCG: '/arena/spresso-on-road-price-in-raipur',
    linkOD: '/arena/spresso-on-road-price-in-bhubaneswar',
    offerValidTill: 'Jan 31, 2025',
    colors: [
      {
        img: '/images/car/arena/spresso/s-presso-pearl-starry-blue.png',
        colorCode: '#0159c3',
        colName: 'Pearl Starry Blue',
      },
      {
        img: '/images/car/arena/spresso/s-presso-solid-sizzle-orange.png',
        colorCode: '#e95a12',
        colName: 'Solid Sizzle Orange',
      },
      {
        img: '/images/car/arena/spresso/s-presso-solid-fire-red.png',
        colorCode: '#f40419',
        colName: 'Solid Fire Red',
      },
      {
        img: '/images/car/arena/spresso/s-presso-solid-white.png',
        colorCode: '#f5f8fa',
        colName: 'Solid White',
      },
      {
        img: '/images/car/arena/spresso/s-presso-metallic-granite-grey.png',
        colorCode: '#5f6166',
        colName: 'Metallic Granite Grey',
      },
      {
        img: '/images/car/arena/spresso/s-presso-metallic-sliky-sliver.png',
        colorCode: '#838487',
        colName: 'Metallic Silky Silver',
      },
      {
        img: '/images/car/arena/spresso/s-presso-pearl-midnight-black.png',
        colorCode: '#0f0f0f',
        colName: 'Midnight Black',
      },
    ],
    keySpecifications: [
      { label: 'Fuel Tank Capacity', value: '27 Litres' },
      { label: 'Seating Capacity', value: '5' },
      { label: 'Length', value: '3445 mm' },
      { label: 'Width', value: '1495 mm' },
      { label: 'Height', value: '1495 mm' },
      { label: 'Front Suspension', value: 'MacPherson Strut' },
      { label: 'Rear Suspension', value: 'Torsion Beam' },
      { label: 'Fuel Type', value: 'Petrol/CNG' },
      { label: 'No. of Cylinders', value: '3' },
      { label: 'Max Torque', value: '90 Nm @ 3500 rpm' },
      { label: 'Transmission Type', value: 'Manual' },
      { label: 'Body Type', value: 'Hatchback' },
      { label: 'Wheel Base', value: '2360 mm' },
      { label: 'Gearbox', value: '5-Speed' },
    ],

    exterior: [
      // {
      //   img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/s-presso-launch-2022/highlights/highlight_web_01.webp",
      //   title: "Dynamic Center Console with Smartplay Studio",
      // },
      // {
      //   img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/s-presso-launch-2022/highlights/highlight_web_02.webp",
      //   title: "Strong Heartect Platform",
      // },
      // {
      //   img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/s-presso-launch-2022/highlights/highlight_web_05.webp",
      //   title: "Auto-Gear Shift Technology",
      // },
      {
        img: '/images/car/arena/spresso/exterior_web_01.webp',
        title: 'Signature C-Shaped Tail Lamps',
      },
      {
        img: '/images/car/arena/spresso/exterior_web_02.webp',
        title: 'Twin Chamber Headlamps',
      },
      {
        img: '/images/car/arena/spresso/exterior_web_03.webp',
        title: "Squarish Wheel Arches with 14'' Tyres",
      },
      {
        img: '/images/car/arena/spresso/exterior_web_04.webp',
        title: 'Electrically Adjustable Body Coloured ORVMs',
      },
      {
        img: '/images/car/arena/spresso/exterior_web_05.webp',
        title: 'SUV-Inspired Bold Front Fascia',
      },
    ],
    interior: [
      {
        img: '/images/car/arena/spresso/Interior_web_01 (1).webp',
        title: 'Best-in-its-Class Rear Legroom',
      },
      {
        img: '/images/car/arena/spresso/Interior_web_02 (1).webp',
        title: 'Wide and Spacious Boot',
      },
      {
        img: '/images/car/arena/spresso/Interior_web_03 (1).webp',
        title: 'Higher Seating for a Commanding Position',
      },
      {
        img: '/images/car/arena/spresso/Interior_web_04 (1).webp',
        title: 'Front Utility Spaces',
      },
      {
        img: '/images/car/arena/spresso/Interior_web_05 (1).webp',
        title: 'Rear Utility Spaces',
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    carDetails: [
      { label: 'Engine', value: '998 cc' },
      { label: 'Mileage', value: '21.4 kmpl' },
      { label: 'Power', value: '50 kW @ 5500 rpm' },
    ],
    variants: [
      { variant: 'NEW SPRESSO LXI', price: 499500, transmission: 'Manual' },
      { variant: 'NEW SPRESSO VXI', price: 521500, transmission: 'Manual' },
      {
        variant: 'NEW SPRESSO VXI-AGS',
        price: 566500,
        transmission: 'Automatic',
      },
      { variant: 'NEW SPRESSO VXI+', price: 550500, transmission: 'Manual' },
      {
        variant: 'NEW SPRESSO VXI+ AGS',
        price: 595500,
        transmission: 'Automatic',
      },
    ],
    exploreMore: [6, 7, 8],
    thumbnail: '/thumbnail/spresso.webp',
    priceRange: '₹ 3.49 - 5.24 Lakh *',
    brochure:
      'https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/SpressoBrochure_Spresso_6_pager_brochure_Red_car_A4_Digital_new.pdf',
  },

  // Maruti WagonR 5
  {
    name: 'Maruti WagonR',
    subName: 'WagonR',
    offersAmount: 37100,
    offersAdditionalDec: '',
    link: '/arena/wagon-r-on-road-price',
    linkCG: '/arena/wagon-r-on-road-price-in-raipur',
    linkOD: '/arena/wagon-r-on-road-price-in-bhubaneswar',
    offerValidTill: 'Jan 31, 2025',
    colors: [
      {
        img: '/images/car/arena/wagonr/wagonr-poolside-blue.png',
        colorCode: '#789ec9',
        colName: 'Poolside Blue',
      },
      {
        img: '/images/car/arena/wagonr/wagonr-silky-silver.png',
        colorCode: '#6b6d74',
        colName: 'Silky Silver',
      },
      {
        img: '/images/car/arena/wagonr/wagonr-midnight-black-plus-gallant-red1.png',
        colorCode: '#b7272b',
        colName: 'Prime Gallant Red Dual',
      },
      {
        img: '/images/car/arena/wagonr/wagonr-gallant-red1.png',
        colorCode: '#bd282c',
        colName: 'Premium Gallant Red',
      },
      {
        img: '/images/car/arena/wagonr/wagonr-midnight-black-plus-magma-grey.png',
        colorCode: '#6b6b6b',
        colName: 'Metallic Megma Grey Dual',
      },
      {
        img: '/images/car/arena/wagonr/wagonr-nutmeg-brown.png',
        colorCode: '#342214',
        colName: 'Nutmeg Brown',
      },

      {
        img: '/images/car/arena/wagonr/wagonr-superior-white.png',
        colorCode: '#fafbff',
        colName: 'Solid White',
      },

      {
        img: '/images/car/arena/wagonr/wagonr-magma-grey.png',
        colorCode: '#858080',
        colName: 'Metallic Grey',
      },
      {
        img: '/images/car/arena/wagonr/wagonr-midnight-black.png',
        colorCode: '#000',
        colName: 'Midnight Black',
      },
    ],
    keySpecifications: [
      { label: 'Fuel Tank Capacity', value: '32 Litres' },
      { label: 'Seating Capacity', value: '5' },
      { label: 'Length', value: '3655 mm' },
      { label: 'Width', value: '1620 mm' },
      { label: 'Height', value: '1675 mm' },
      { label: 'Front Suspension', value: 'MacPherson Strut' },
      { label: 'Rear Suspension', value: 'Torsion Beam' },
      { label: 'Fuel Type', value: 'Petrol/CNG' },
      { label: 'No. of Cylinders', value: '3' },
      { label: 'Max Torque', value: '90 Nm @ 3500 rpm' },
      { label: 'Transmission Type', value: 'Manual & Automatic' },
      { label: 'Body Type', value: 'Hatchback' },
      { label: 'Wheel Base', value: '2435 mm' },
      { label: 'Gearbox', value: '5-Speed' },
    ],

    carDetails: [
      { label: 'Engine', value: '998 cc' },
      { label: 'Mileage', value: '24.35 kmpl' },
      { label: 'Power', value: '49.0 kW @ 5500 rpm' },
    ],
    exterior: [
      {
        img: '/images/car/arena/wagonr/exterior_web_01 (1).webp',
        title: 'Robust Design Language with a wide stance',
      },
      {
        img: '/images/car/arena/wagonr/exterior_web_02 (1).webp',
        title: 'Sporty Floating Roof Design',
      },
      {
        img: '/images/car/arena/wagonr/exterior_web_04 (1).webp',
        title: 'Dynamic Alloy Wheels',
      },
      {
        img: '/images/car/arena/wagonr/exterior_web_05 (1).webp',
        title: 'Electrical Retractable ORVMs',
      },
      {
        img: '/images/car/arena/wagonr/exterior_web_03 (1).webp',
        title: 'Unique Dual-Split Headlamps',
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    interior: [
      {
        img: '/images/car/arena/wagonr/Interior_web_1.webp',
        title: 'Spacious Boot',
      },
      {
        img: '/images/car/arena/wagonr/Interior_web_2.webp',
        title: 'Spacious Cabin',
      },
      {
        img: '/images/car/arena/wagonr/Interior_web_4.webp',
        title: 'Smartplay Studio with Smartphone Navigation and 4 Speakers',
      },
      {
        img: '/images/car/arena/wagonr/Interior_web_5.webp',
        title: 'Modern Grey Melange Fabric',
      },
      {
        img: '/images/car/arena/wagonr/Interior_web_3.webp',
        title: 'Steering Mounted Controls',
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],

    variants: [
      {
        variant: 'NEW WAGONR TOUR LXI 1.0 L - 6 ABS',
        price: 498900,
        transmission: 'Manual',
      },
      {
        variant: 'NEW WAGONR LXI 1.0 L 6 ABS',
        price: 498900,
        transmission: 'Manual',
      },
      {
        variant: 'NEW WAGONR LXI 1.0 L-CNG 6 ABS',
        price: 588900,
        transmission: 'Manual',
      },
      {
        variant: 'NEW WAGONR VXI 1.0 L 6 ABS',
        price: 551900,
        transmission: 'Manual',
      },
      {
        variant: 'NEW WAGONR VXI 1.0 L-CNG 6 ABS',
        price: 641900,
        transmission: 'Manual',
      },
      {
        variant: 'NEW WAGONR VXI AGS 1.0 L 6 ABS',
        price: 596900,
        transmission: 'Automatic',
      },
      {
        variant: 'NEW WAGONR ZXI 1.2 L 6 ABS',
        price: 595900,
        transmission: 'Manual',
      },
      {
        variant: 'NEW WAGONR ZXI AGS 1.2 L 6 ABS',
        price: 640900,
        transmission: 'Automatic',
      },
      {
        variant: 'NEW WAGONR ZXI+ 1.2 L 6 ABS',
        price: 626000,
        transmission: 'Manual',
      },
      {
        variant: 'NEW WAGONR ZXI+ AGS 1.2 L 6 ABS',
        price: 683900,
        transmission: 'Automatic',
      },
      {
        variant: 'NEW WAGONR ZXI + D/T 1.2 L 6 ABS',
        price: 637000,
        transmission: 'Manual',
      },
      {
        variant: 'NEW WAGONR ZXI+ AGS D/T 1.2 L 6 ABS',
        price: 694900,
        transmission: 'Automatic',
      },
    ],

    exploreMore: [7, 8, 9],
    thumbnail: '/thumbnail/wagnor.webp',
    priceRange: '₹ 4.98 - 6.94 Lakh *',
    brochure:
      'https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/WagonR%20MMC%20Brochure_NEW_1.pdf',
    blogs: [
      {
        title:
          '5 Reasons to Buy the 2024 Maruti Suzuki Wagon R Over Other Hatchbacks',
        desc: 'The 2024 Maruti Suzuki Wagon R continues to be a popular choice in the hatchback segment, offering a perfect blend of practicality, efficiency, and modern features. Here are five compelling reasons to consider the Wagon R over its competitors.',

        link: '/blogs/5-Reasons-to-Buy-the-2024-Maruti-Suzuki-Wagon-R-Over-Other-Hatchbacks',
        author: 'Sky Automobiles',
      },
    ],
  },
  // Maruti Ertiga -6
  {
    name: 'Maruti Ertiga',
    subName: 'Ertiga',
    offersAmount: 5000,
    offersAdditionalDec: '',
    link: '/arena/ertiga-on-road-price',
    linkCG: '/arena/ertiga-on-road-price-in-raipur',
    linkOD: '/arena/ertiga-on-road-price-in-bhubaneswar',
    offerValidTill: '',
    colors: [
      {
        img: '/images/car/arena/ertiga/ertiga-pearl-metallic-arctic-white.png',
        colorCode: '#d2d2d2',
        colName: 'Pearl Metallic Artic White',
      },
      {
        img: '/images/car/arena/ertiga/ertiga-auburn-red.png',
        colorCode: '#df1f24',
        colName: 'Auburn Red',
      },
      {
        img: '/images/car/arena/ertiga/ertiga-pearl-metallic-diginity-brown.png',
        colorCode: '#633f2f',
        colName: 'Pearl Metallic Dignity Brown',
      },
      {
        img: '/images/car/arena/ertiga/ertiga-magma-grey.png',
        colorCode: '#5d5d5d',
        colName: 'Magma Grey',
      },
      {
        img: '/images/car/arena/ertiga/ertiga-prime-oxford-blue.png',
        colorCode: '#29427b',
        colName: 'Prime Oxford Blue',
      },
      {
        img: '/images/car/arena/ertiga/ertiga-splendid-silver.png',
        colorCode: '#4f5457',
        colName: 'Splendid Silver',
      },
      {
        img: '/images/car/arena/ertiga/ertiga-pearl-midnight-black.png',
        colorCode: '#000',
        colName: 'Midnight Black',
      },
    ],
    keySpecifications: [
      { label: 'Fuel Tank Capacity', value: '45 Litres' },
      { label: 'Seating Capacity', value: '7' },
      { label: 'Length', value: '4395 mm' },
      { label: 'Width', value: '1735 mm' },
      { label: 'Height', value: '1690 mm' },
      { label: 'Front Suspension', value: 'MacPherson Strut' },
      { label: 'Rear Suspension', value: 'Torsion Beam' },
      { label: 'Fuel Type', value: 'Petrol/CNG' },
      { label: 'No. of Cylinders', value: '4' },
      { label: 'Max Torque', value: '138 Nm @ 4400 rpm' },
      { label: 'Transmission Type', value: 'Manual & Automatic' },
      { label: 'Body Type', value: 'MPV' },
      { label: 'Wheel Base', value: '2740 mm' },
      { label: 'Gearbox', value: '5-Speed' },
    ],

    exterior: [
      {
        img: '/images/car/arena/ertiga/Ext_web_01.webp',
        title: 'New Dynamic Chrome Winged Front Grille',
      },
      {
        img: '/images/car/arena/ertiga/Ext_web_02.webp',
        title: 'New Back Door Garnish with Chrome Insert',
      },
      {
        img: '/images/car/arena/ertiga/Ext_web_04.webp',
        title: '3D Origami Style LED Tail Lamps',
      },
      {
        img: '/images/car/arena/ertiga/Ext_web_05.webp',
        title: 'Machined Two-tone Alloy Wheels',
      },
      {
        img: '/images/car/arena/ertiga/Ext_web_03.webp',
        title: 'Retractable ORVMs',
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    interior: [
      {
        img: '/images/car/arena/ertiga/Int_web_01.webp',
        title: 'Sculpted Dashboard with Metallic Teak-Wooden Finish',
      },
      {
        img: '/images/car/arena/ertiga/Int_web_02.webp',
        title: 'Plush Dual Tone Interiors',
      },
      {
        img: '/images/car/arena/ertiga/Int_web_05.webp',
        title: 'Air Cooled Twin Cup Holders',
      },
      {
        img: '/images/car/arena/ertiga/Int_web_04.webp',
        title: '17.78cm SmartPlay Pro',
      },
      {
        img: '/images/car/arena/ertiga/Int_web_03.webp',
        title: '2nd Row roof mounted AC ',
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    carDetails: [
      { label: 'Engine', value: '1462 cc' },
      { label: 'Mileage', value: '20.51 kmpl' },
      { label: 'Power', value: '75.8 kW @ 6000 rpm' },
    ],
    variants: [
      {
        variant: 'NEW ERTIGA SMART HYBRID LXI(O) 1.5L',
        price: 880000,
        transmission: 'Manual',
      },
      {
        variant: 'NEW ERTIGA SMART HYBRID VXI(O) 1.5L',
        price: 985300,
        transmission: 'Manual',
      },
      {
        variant: 'NEW ERTIGA SMART HYBRID VXI(O) 1.5L-CNG',
        price: 1076300,
        transmission: 'Manual',
      },
      {
        variant: 'NEW ERTIGA SMART HYBRID VXI AMT 1.5L',
        price: 1120300,
        transmission: 'Automatic',
      },
      {
        variant: 'NEW ERTIGA SMART HYBRID ZXI 1.5L',
        price: 1091500,
        transmission: 'Manual',
      },
      {
        variant: 'NEW ERTIGA SMART HYBRID ZXI(O) 1.5L-CNG',
        price: 1182500,
        transmission: 'Manual',
      },
      {
        variant: 'NEW ERTIGA SMART HYBRID ZXI AMT 1.5L',
        price: 1226499,
        transmission: 'Automatic',
      },
      {
        variant: 'NEW ERTIGA SMART HYBRID ZXI+ 1.5L',
        price: 1159101,
        transmission: 'Manual',
      },
      {
        variant: 'NEW ERTIGA SMART HYBRID ZXI+ AMT 1.5L',
        price: 1294100,
        transmission: 'Automatic',
      },
      {
        variant: 'NEW ERTIGA TOUR M 1.5L',
        price: 982400,
        transmission: 'Manual',
      },
      {
        variant: 'NEW ERTIGA TOUR M 1.5L-CNG',
        price: 1073400,
        transmission: 'Manual',
      },
    ],

    exploreMore: [8, 9, 0],
    thumbnail: '/thumbnail/ertiga.webp',
    priceRange: '₹ 8.80 - 12.94 Lakh *',
    brochure:
      'https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/Updated-Ertiga-Brochure-60Pgs.pdf',
  },
  // Maruti Celerio -7
  {
    name: 'Maruti Celerio',
    subName: 'Celerio',
    offersAmount: 37100,
    offersAdditionalDec: '',
    link: '/arena/celerio-on-road-price',
    linkCG: '/arena/celerio-on-road-price-in-raipur',
    linkOD: '/arena/celerio-on-road-price-in-bhubaneswar',
    offerValidTill: 'Jan 31, 2025',
    colors: [
      {
        img: '/images/car/arena/celerio/celerio-artic-white.png',
        colorCode: '#f1f2f3',
        colName: 'White',
      },
      {
        img: '/images/car/arena/celerio/celerio-speedy-blue.png',
        colorCode: '#4d7fe0',
        colName: 'Speedy Blue',
      },
      {
        img: '/images/car/arena/celerio/celerio-silky-silver.png',
        colorCode: '#8e9395',
        colName: 'Silky Silver',
      },
      {
        img: '/images/car/arena/celerio/celerio-glistering-grey.png',
        colorCode: '#9a9a9a',
        colName: 'Glistening Grey',
      },
      {
        img: '/images/car/arena/celerio/celerio-solid-fire-red.png',
        colorCode: '#bd2822',
        colName: 'Fire Red',
      },
      {
        img: '/images/car/arena/celerio/celerio-caffeine-brown.png',
        colorCode: '#6f4e37',
        colName: 'Caffine Brown',
      },
      {
        img: '/images/car/arena/celerio/celerio-pearl-midnight-black.png',
        colorCode: '#000',
        colName: 'Midnight Black',
      },
    ],
    keySpecifications: [
      { label: 'Fuel Tank Capacity', value: '35 Litres' },
      { label: 'Seating Capacity', value: '5' },
      { label: 'Length', value: '3495 mm' },
      { label: 'Width', value: '1495 mm' },
      { label: 'Height', value: '1565 mm' },
      { label: 'Front Suspension', value: 'MacPherson Strut' },
      { label: 'Rear Suspension', value: 'Torsion Beam' },
      { label: 'Fuel Type', value: 'Petrol/CNG' },
      { label: 'No. of Cylinders', value: '3' },
      { label: 'Max Torque', value: '89 Nm @ 3500 rpm' },
      { label: 'Transmission Type', value: 'Manual & Automatic' },
      { label: 'Body Type', value: 'Hatchback' },
      { label: 'Wheel Base', value: '2425 mm' },
      { label: 'Gearbox', value: '5-Speed' },
    ],

    exterior: [
      {
        img: '/images/car/arena/celerio/exterior_web_01.webp',
        title: 'Animated Sweeping Headlamps',
      },
      {
        img: '/images/car/arena/celerio/exterior_web_02.webp',
        title: 'Urbane Black 15” (38.02cm) Alloy Wheels​',
      },
      {
        img: '/images/car/arena/celerio/exterior_web_04.webp',
        title: 'Radiant Grille With Sharp Chrome assets',
      },
      {
        img: '/images/car/arena/celerio/exterior_web_05.webp',
        title: 'Droplet Styled Tail lamps',
      },
      {
        img: '/images/car/arena/celerio/exterior_web_03.webp',
        title: 'Electrically-Foldable ORVMs with Turn Indicators​',
      },
    ],
    interior: [
      {
        img: '/images/car/arena/celerio/Interior_web_01.webp',
        title: 'Strereoscopic Instrument Cluster',
      },
      {
        img: '/images/car/arena/celerio/Interior_web_02.webp',
        title: 'Auto Gear Shift Technology',
      },
      {
        img: '/images/car/arena/celerio/Interior_web_05.webp',
        title: 'Premium All Black Interiors',
      },
      {
        img: '/images/car/arena/celerio/Interior_web_04.webp',
        title: 'Contemporary Dashboard',
      },
      {
        img: '/images/car/arena/celerio/Interior_web_03.webp',
        title: 'Energetic & Spacious Cabin',
      },
    ],
    carDetails: [
      { label: 'Engine', value: '998 cc' },
      { label: 'Mileage', value: '25.24 kmpl' },
      { label: 'Power', value: '49 kW @ 5500 rpm' },
    ],
    variants: [
      {
        variant: 'NEW CELERIO LXI - 6 ABS',
        price: 469900,
        transmission: 'Manual',
      },
      {
        variant: 'NEW CELERIO VXI - 6 ABS',
        price: 501699,
        transmission: 'Manual',
      },
      {
        variant: 'NEW CELERIO VXI-CNG - 6 ABS',
        price: 597900,
        transmission: 'Manual',
      },
      {
        variant: 'NEW CELERIO VXI-AGS - 6 ABS',
        price: 560900,
        transmission: 'Automatic',
      },
      {
        variant: 'NEW CELERIO ZXI - 6 ABS',
        price: 570901,
        transmission: 'Manual',
      },
      {
        variant: 'NEW CELERIO ZXI-AGS - 6 ABS',
        price: 615900,
        transmission: 'Automatic',
      },
      {
        variant: 'NEW CELERIO ZXI+ - 6 ABS',
        price: 627900,
        transmission: 'Manual',
      },
      {
        variant: 'NEW CELERIO ZXI+-AGS - 6 ABS',
        price: 672900,
        transmission: 'Automatic',
      },
    ],

    exploreMore: [0, 1, 2],
    thumbnail: '/thumbnail/celerio.webp',
    priceRange: '₹ 4.69 - 6.72 Lakh *',
    brochure:
      'https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/15_Page_Brochure_Celerio_Digital.pdf',
    blogs: [
      {
        title: '5 Reasons to Buy the 2024 Maruti Suzuki Celerio',
        desc: 'The 2024 Maruti Suzuki Celerio is a compact hatchback that has garnered attention for its blend of efficiency, comfort, and modern features. Here are five compelling reasons to consider the Celerio for your next vehicle purchase.',

        link: '/blogs/5-Reasons-to-Buy-the-2024-Maruti-Suzuki-Celerio',
        author: 'Sky Automobiles',
      },
    ],
  },
  // Maruti Eeco -8
  {
    name: 'Maruti Eeco',
    subName: 'Eeco',
    offersAmount: 37100,
    offersAdditionalDec: '',
    link: '/arena/eeco-on-road-price',
    linkCG: '/arena/eeco-on-road-price-in-raipur',
    linkOD: '/arena/eeco-on-road-price-in-bhubaneswar',
    offerValidTill: 'Jan 31, 2025',
    colors: [
      {
        img: '/images/car/arena/eeco/eeco-cerulean-blue.png',
        colorCode: '#0088ce',
        colName: 'Blue',
      },
      {
        img: '/images/car/arena/eeco/eeco-solid-white.png',
        colorCode: '#e5e4e6',
        colName: 'Superior White',
      },
      {
        img: '/images/car/arena/eeco/eeco-metallic-glistening-grey.png',
        colorCode: '#a09694',
        colName: 'Mettalic grey',
      },
      {
        img: '/images/car/arena/eeco/eeco-pearl-midnight-black.png',
        colorCode: '#141614',
        colName: 'Midnight black',
      },
      {
        img: '/images/car/arena/eeco/eeco-metallic-silky-silver.png',
        colorCode: '#a6a5a5',
        colName: 'Silky silver',
      },
    ],
    keySpecifications: [
      { label: 'Fuel Tank Capacity', value: '40 Litres' },
      { label: 'Seating Capacity', value: '5/7' },
      { label: 'Length', value: '3675 mm' },
      { label: 'Width', value: '1495 mm' },
      { label: 'Height', value: '1825 mm' },
      { label: 'Front Suspension', value: 'Independent, McPherson Strut' },
      { label: 'Rear Suspension', value: 'Rigid Axle' },
      { label: 'Fuel Type', value: 'Petrol/CNG' },
      { label: 'No. of Cylinders', value: '4' },
      { label: 'Max Torque', value: '104.4 Nm @ 3000 rpm' },
      { label: 'Transmission Type', value: 'Manual' },
      { label: 'Body Type', value: 'Van' },
      { label: 'Wheel Base', value: '2350 mm' },
      { label: 'Gearbox', value: '5-Speed' },
    ],

    exterior: [
      {
        img: '/images/car/arena/eeco/exterior_web_01 (1).webp',
        title: 'Exciting new color',
      },
      {
        img: '/images/car/arena/eeco/exterior_web_02 (1).webp',
        title: 'Stylish Clear Lens Headlamps and Tail Lamps',
      },
      {
        img: '/images/car/arena/eeco/exterior_web_04 (1).webp',
        title: 'Reverse Parking Sensors',
      },
      {
        img: '/images/car/arena/eeco/exterior_web_03 (1).webp',
        title: 'Outside Rear View Mirror',
      },
      {
        img: '/images/car/arena/eeco/exterior_web_05 (1).webp',
        title: 'Front Mud Flaps',
      },

      // {
      //   img: "",
      //   title: "",
      // },
    ],
    interior: [
      {
        img: '/images/car/arena/eeco/interior_web_01.webp',
        title: '5 & 7 Seater Options ',
      },
      {
        img: '/images/car/arena/eeco/interior_web_02.webp',
        title: 'Matching Seat Covers with Interior Colour',
      },
      {
        img: '/images/car/arena/eeco/interior_web_05.webp',
        title: 'Sunvisor',
      },
      {
        img: '/images/car/arena/eeco/interior_web_04.webp',
        title: 'Assist Grips ',
      },
      {
        img: '/images/car/arena/eeco/interior_web_03.webp',
        title: 'Large Boot Space ',
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    carDetails: [
      { label: 'Engine', value: '1196 cc' },
      { label: 'Mileage', value: '19.711 kmpl' },
      { label: 'Power', value: '59.4 kW @ 6000 rpm' },
    ],
    variants: [
      {
        variant: 'NEW EECO 5 STR STD - 6 ABS',
        price: 520900,
        transmission: 'Manual',
      },
      {
        variant: 'NEW EECO 5 STR AC - 6 ABS',
        price: 553800,
        transmission: 'Manual',
      },
      {
        variant: 'NEW EECO 5 STR AC - CNG - 6 ABS',
        price: 635800,
        transmission: 'Manual',
      },
      {
        variant: 'NEW EECO 6 STR NON-AC - 6 ABS',
        price: 547400,
        transmission: 'Manual',
      },
      {
        variant: 'NEW EECO GARGO NON AC',
        price: 538800,
        transmission: 'Manual',
      },
      {
        variant: 'NEW EECO STD GARGO - CNG 2STR',
        price: 660501,
        transmission: 'Manual',
      },
      {
        variant: 'NEW EECO GARGO AC- CNG 2 STR',
        price: 620799,
        transmission: 'Manual',
      },
      {
        variant: 'NEW EECO TOUR V 5STR STD - 6 ABS',
        price: 518101,
        transmission: 'Manual',
      },
      {
        variant: 'NEW EECO TOUR V 5STR AC - 6 ABS',
        price: 551100,
        transmission: 'Manual',
      },
      {
        variant: 'NEW EECO TOUR V 5STR AC - 6 ABS -CNG',
        price: 633100,
        transmission: 'Manual',
      },
      {
        variant: 'NEW EECO TOUR V 6 STR STD - ABS',
        price: 545600,
        transmission: 'Manual',
      },
      {
        variant: 'NEW EECO AMBULANCE SHELL',
        price: 637100,
        transmission: 'Manual',
      },
      { variant: 'NEW EECO AMBULANCE', price: 801500, transmission: 'Manual' },
    ],

    exploreMore: [1, 2, 3],
    thumbnail: '/thumbnail/Eeco.webp',
    priceRange: '₹ 5.20 - 8.01 Lakh *',
    brochure:
      'https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/Eeco-Passenger-BRAND-Leaflet.pdf',
  },

  // Maruti eVitara - 9

  {
    name: 'Maruti eVitara',
    subName: 'eVitara',
    description: 'Created to Spark Your eMagination.',
    offersAmount: 'N/A',
    offersAdditionalDec: '',
    link: '/nexa/eVitara-on-road-price',
    linkCG: '/nexa/eVitara-on-road-price-in-raipur',
    linkOD: '/nexa/eVitara-on-road-price-in-bhubaneswar',
    offerValidTill: '',
    colors: [
      {
        img: '/images/car/nexa/eVitara/Background.png',
        colorCode: '#183F66',
        colName: 'NEXA Blue (Celestial)',
      },
      {
        img: '/images/car/nexa/eVitara/opulent-red-blish-black-roof.png',
        colorCode: 'red',
        colName: 'Opulent Red with Bluish Black Roof',
      },

      {
        img: '/images/car/nexa/eVitara/gradenur-grey.png',
        colorCode: 'grey',
        colName: 'Grandeur Grey',
      },

      {
        img: '/images/car/nexa/eVitara/Splended-silver (2).png',
        colorCode: '#AFB3B8',
        colName: 'Splended Silver',
      },

      {
        img: '/images/car/nexa/eVitara/Background (6).png',
        colorCode: '#EEEFF0',
        colName: ' Arctic White',
      },
      {
        img: '/images/car/nexa/eVitara/Background (4).png',
        colorCode: '#171717',
        colName: 'Bluish Black',
      },
    ],
    // keySpecifications: [
    //   { label: "Fuel Tank Capacity", value: "32 Litres" },
    //   { label: "Seating Capacity", value: "5" },
    //   { label: "Length", value: "3700 mm" },
    //   { label: "Width", value: "1690 mm" },
    //   { label: "Height", value: "1595 mm" },
    //   { label: "Front Suspension", value: "Independent, McPherson Strut" },
    //   { label: "Rear Suspension", value: "Torsion Beam" },
    //   { label: "Fuel Type", value: "Petrol" },
    //   { label: "No. of Cylinders", value: "4" },
    //   { label: "Max Torque", value: "113 Nm @ 4200 rpm" },
    //   { label: "Transmission Type", value: "Manual/Automatic" },
    //   { label: "Body Type", value: "Hatchback" },
    //   { label: "Wheel Base", value: "2435 mm" },
    //   { label: "Gearbox", value: "5-Speed/Auto" },
    // ],
    exterior: [
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/POLYHEDRAL-MUSCULAR-STANCE.avif',
        title: 'Polyhyderal Muscular Stance',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/FUTURISTIC-FRONT-FASCIA.avif',
        title: 'Futuristic Front Fascia',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/R18-AERODYNAMIC-ALLOYS-.avif',
        title: 'R18 Aerodynamic Alloys',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/NEXTR%C3%88-3-POINT-MATRIX-LED-DRLs-.avif',
        title: 'NEXTrè 3-Point Matrix LED DRLs',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/NEXTR%C3%88-3-POINT-MATRIX-REAR-LAMPS-.avif',
        title: 'NEXTrè 3-Point Matrix Rear Lamps',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/SCULPTED-3D-APPEARANCE.avif',
        title: 'Sculpted 3D Appearance',
      },
    ],
    interior: [
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/AMBIENT-LIGHTING-WITH-MULTI-COLOUR-ILLUMINATION.avif',
        title: 'Ambient Lighting With Multi Colour Illumination',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/26.avif',
        title: '26.04 cm Multi Information Display',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/Twindeck-Floating-Console-with-Shift-by-Wire-_-New.avif',
        title: 'Twindeck Floating Console With Shift By Wire',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/DIGITAL-COCKPIT-EXPERIENCE.avif',
        title: 'Digital Cockpit Experience',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/SUNROOF-WITH-FIXED-GLASS.avif',
        title: 'Sunroof With Fixed Glass',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/WIRELESS-CHARGER.avif',
        title: 'Wireless Charger',
      },
    ],
    carDetails: [
      { label: 'Pure Electric', value: 'platform' },
      { label: 'Range', value: '500km' },
      { label: 'Battery', value: '61kWh' },
    ],
    variants: [
      { variant: 'eVitara', price: 'N/A', transmission: 'Automatic' },
      // { variant: "ALPHA DT AGS (P)", price: 820000, transmission: "Automatic" },
      // { variant: "ALPHA AGS (P)", price: 806000, transmission: "Automatic" },
      // { variant: "ZETA DT AGS (P)", price: 755000, transmission: "Automatic" },
      // { variant: "ZETA AGS (P)", price: 741000, transmission: "Automatic" },
      // { variant: "DELTA AGS (P)", price: 683000, transmission: "Automatic" },
      // { variant: "ALPHA DT MT (P)", price: 775000, transmission: "Manual" },
      // { variant: "ALPHA MT (P)", price: 761000, transmission: "Manual" },
      // { variant: "ZETA DT MT (P)", price: 710000, transmission: "Manual" },
      // { variant: "ZETA MT (P)", price: 696000, transmission: "Manual" },
      // { variant: "DELTA MT (P)", price: 638000, transmission: "Manual" },
      // { variant: "SIGMA MT (P)", price: 584000, transmission: "Manual" },
    ],
    exploreMore: [10, 11, 12],
    thumbnail: '/images/car/nexa/eVitara/Evitara.png',
    priceRange: '₹ N/A *',
    brochure: '',
  },

  // Invicto - 10
  {
    name: 'Maruti Invicto',
    subName: 'Invicto',
    description: 'The League of Extraordinary',
    offersAmount: 155000,
    offersAdditionalDec: '+ MSSF Offer (Worth Rs. 100,000)',
    link: '/nexa/invicto-on-road-price',
    linkCG: '/nexa/invicto-on-road-price-in-raipur',
    linkOD: '/nexa/invicto-on-road-price-in-bhubaneswar',
    offerValidTill: 'Jan 31, 2025',
    colors: [
      {
        img: '/images/car/nexa/invicto/Blue_810 x 411.webp',
        colorCode: '#183F66',
        colName: 'NEXA BLUE (CELESTIAL)',
      },
      {
        img: '/images/car/nexa/invicto/AVANT_GRADE_BRONZE_810 x 411 webp.webp',
        colorCode: '#7A756E',
        colName: 'STELLAR BRONZE',
      },
      {
        img: '/images/car/nexa/invicto/MAJESTIC_SILVER_810 x 411 webp.webp',
        colorCode: '#AFB3B8',
        colName: 'MAJESTIC SILVER',
      },
      {
        img: '/images/car/nexa/invicto/PLATINUM_WHITE_810 x 411 webp.webp',
        colorCode: '#EEEFF0',
        colName: 'MYSTIC WHITE',
      },
      {
        img: '/images/car/nexa/invicto/Magnificent Black.webp',
        colorCode: '#0F1012',
        colName: 'MAGNIFICENT BLACK',
      },
    ],
    keySpecifications: [
      { label: 'Fuel Tank Capacity', value: '52 Litres' },
      { label: 'Seating Capacity', value: '7/8' },
      { label: 'Length', value: '4755 mm' },
      { label: 'Width', value: '1845 mm' },
      { label: 'Height', value: '1795 mm' },
      { label: 'Front Suspension', value: 'Independent, McPherson Strut' },
      { label: 'Rear Suspension', value: 'Torsion Beam' },
      { label: 'Fuel Type', value: 'Petrol' },
      { label: 'No. of Cylinders', value: '4' },
      { label: 'Max Torque', value: '250 Nm @ 2000 rpm' },
      { label: 'Transmission Type', value: 'Manual/Automatic' },
      { label: 'Body Type', value: 'SUV' },
      { label: 'Wheel Base', value: '2850 mm' },
      { label: 'Gearbox', value: '6-Speed/Auto' },
    ],
    exterior: [
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Extr-img-4+webp.webp',
        title: '',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Extr-img-2+jpg.webp',
        title: '',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Extr-img-5+webp.webp',
        title: '',
      },

      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/int-img-5+webp.webp',
        title: '',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Extr-img-3+jpg.webp',
        title: '',
      },
    ],
    interior: [
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/intr-img-3+jpg.webp',
        title: '',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/intr-img-2+jpg.webp',
        title: '',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/int-img-8+webp.webp',
        title: '',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/int-img-6+webp.webp',
        title: '',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/int-img-4+webp.webp',
        title: '',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/intr-img-1+jpg.webp',
        title: '',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/int-img-7+webp.webp',
        title: '',
      },
    ],
    carDetails: [
      { label: 'Engine', value: '1987 cc' },
      { label: 'Mileage', value: '23.24 kmpl' },
      { label: 'Power', value: '112 kW @ 6000 rpm' },
    ],
    variants: [
      { variant: 'ALPHA+ 7S', price: 2830414, transmission: 'Automatic' },
      { variant: 'ALPHA+ 7S (M)', price: 2821241, transmission: 'Automatic' },
      { variant: 'ZETA+ 8S', price: 2477034, transmission: 'Automatic' },
      { variant: 'ZETA+ 8S (M)', price: 2467862, transmission: 'Automatic' },
      { variant: 'ZETA+ 7S', price: 2472207, transmission: 'Automatic' },
      { variant: 'ZETA+ 7S (M)', price: 2463034, transmission: 'Automatic' },
    ],
    exploreMore: [11, 12, 13],
    thumbnail: '/thumbnail/invicto-main-thubmnail-no-bg.webp',
    priceRange: '₹ 24.63 - 28.30 Lakh *',
    brochure:
      'https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/invicto/invicto-brochure_invicto-pdf.pdf',
  },
  // Maruti Jimny -11
  {
    name: 'Maruti Jimny',
    subName: 'Jimny',
    description: 'Crafted for Purity of Function',
    offersAmount: 110000,
    offersAdditionalDec: '+ 1.5 Lakh MSSF Offer',
    link: '/nexa/jimny-on-road-price',
    linkCG: '/nexa/jimny-on-road-price-in-raipur',
    linkOD: '/nexa/jimny-on-road-price-in-bhubaneswar',
    offerValidTill: 'Jan 31, 2025',
    colors: [
      {
        img: '/images/car/nexa/jimny/jimny-bluish-black.png',
        colorCode: '#1c1c1c',
        colName: 'Bluish Black',
      },
      {
        img: '/images/car/nexa/jimny/jimny-kinetic-yellow-bluish-black-roof.png',
        colorCode: '#959a36',
        colName: 'Kinetic Yellow Bluish Black Roof',
      },
      {
        img: '/images/car/nexa/jimny/jimny-Granite-Gray.png',
        colorCode: '#575757',
        colName: 'Granite Gray',
      },

      {
        img: '/images/car/nexa/jimny/jimny-nexa-blue.png',
        colorCode: '#002e8a',
        colName: 'Nexa Blue',
      },
      {
        img: '/images/car/nexa/jimny/jimny-pearl-arctic-white.png',
        colorCode: '#ffffff',
        colName: 'Pearl Artic White',
      },
      {
        img: '/images/car/nexa/jimny/jimny-sizzling-red.png',
        colorCode: '#e00000',
        colName: 'Sizzling Red',
      },
      {
        img: '/images/car/nexa/jimny/jimny-sizzling-red-bluish-black-roof.png',
        colorCode: '#bd0000',
        colName: 'Sizzling Red Bluish Black Roof',
      },
    ],
    keySpecifications: [
      { label: 'Fuel Tank Capacity', value: '40 Litres' },
      { label: 'Seating Capacity', value: '4' },
      { label: 'Length', value: '3985 mm' },
      { label: 'Width', value: '1645 mm' },
      { label: 'Height', value: '1720 mm' },
      { label: 'Front Suspension', value: 'Independent, 3-Link Coil Spring' },
      { label: 'Rear Suspension', value: 'Rigid Axle, 3-Link Coil Spring' },
      { label: 'Fuel Type', value: 'Petrol' },
      { label: 'No. of Cylinders', value: '4' },
      { label: 'Max Torque', value: '134.2 Nm @ 4000 rpm' },
      { label: 'Transmission Type', value: 'Manual/Automatic' },
      { label: 'Body Type', value: 'SUV' },
      { label: 'Wheel Base', value: '2590 mm' },
      { label: 'Gearbox', value: '5-Speed' },
    ],
    exterior: [
      {
        img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/exterior/clamshell-bonnet.webp',
        title: 'Clamshell Bonnet',
      },
      {
        img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/exterior/1000x500-ar_sn_nexa_jimny_optimized-bumper_v2.webp',
        title: 'Optimized Bumpers',
      },
      {
        img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/exterior/practical-drip-rail.webp',
        title: 'Practical Drip Rail',
      },
      {
        img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/exterior/1000x500-ar_ab_jimny_led_headlamp_with_washer_02-copy.webp',
        title: 'LED Headlamps with Washer',
      },
      {
        img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/exterior/alloy.webp',
        title: 'All Alloy Wheels',
      },
      {
        img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/exterior/5-slot-chrome-plated-grille.webp',
        title: 'Gunmetal Grey Grille with Chrome Plating',
      },
    ],
    interior: [
      {
        img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/interior/1000x500-ar_pk_nexa_jimny_interior_kv_v-1.webp',
        title: 'Sporty Cabin with Scratch-Resistant Surfaces',
      },
      {
        img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/interior/1000x500-ar_pk_nexa_jimny_intuitively-designed-controls_v-2.webp',
        title: 'Intuitively Designed Controls',
      },
      {
        img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/interior/comfortable-seat-design.webp',
        title: 'Comfortable Seat Design',
      },
      {
        img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/interior/professional-utility-kit.webp',
        title: ' Professional Utility Kit',
      },
      {
        img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/rocky/featuretechnology/interior/1000x500-ar-am-jimny-ywd-smart-play-pro-shot-v1-copy.webp',
        title: 'SmartPlay Pro+',
      },
    ],
    carDetails: [
      { label: 'Engine', value: '1462 cc' },
      { label: 'Mileage', value: '18-20 kmpl' },
      { label: 'Power', value: '77.1 kW @ 6000 rpm' },
    ],
    variants: [
      {
        variant: 'ALL GRIP PRO 1.5L (4AT) ALPHA (DT)',
        price: 1444897,
        transmission: 'Automatic',
      },
      {
        variant: 'ALL GRIP PRO 1.5L (4AT) ALPHA',
        price: 1429448,
        transmission: 'Automatic',
      },
      {
        variant: 'ALL GRIP PRO 1.5L (4AT) ZETA',
        price: 1337724,
        transmission: 'Automatic',
      },
      {
        variant: 'ALL GRIP PRO 1.5L (MT) ALPHA (DT)',
        price: 1338690,
        transmission: 'Manual',
      },
      {
        variant: 'ALL GRIP PRO 1.5L (MT) ALPHA',
        price: 1323241,
        transmission: 'Manual',
      },
      {
        variant: 'ALL GRIP PRO 1.5L (MT) ZETA',
        price: 1231517,
        transmission: 'Manual',
      },
    ],

    exploreMore: [12, 13, 14],
    thumbnail: '/thumbnail/Jimny.webp',
    priceRange: '₹ 12.31 - 14.44 Lakh*',
    brochure:
      'https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/rocky/jimny_brochure.pdf#element_submenu',
  },
  // Maruti Fronx - 12
  {
    name: 'Maruti Fronx',
    subName: 'Fronx',
    description: 'Created to Inspire Style and Performance.',
    offersAmount: 75000,
    offersAdditionalDec: '+ Velocity Kit worth 43K ',
    link: '/nexa/fronx-on-road-price',
    linkCG: '/nexa/fronx-on-road-price-in-raipur',
    linkOD: '/nexa/fronx-on-road-price-in-bhubaneswar',
    offerValidTill: 'Jan 31, 2025',
    colors: [
      {
        img: '/images/car/nexa/fronx/FRONX-Color-1500x700-NEXA_Blue.webp',
        colorCode: '#163472',
        colName: 'NEXA Blue (Celestial)',
      },
      {
        img: '/images/car/nexa/fronx/FRONX-Color-1500x700-ARCTIC_WHITE.webp',
        colorCode: '#f9f9f9',
        colName: 'Arctic White',
      },
      {
        img: '/images/car/nexa/fronx/FRONX-Color-1500x700-SPLENDID_SILVER.webp',
        colorCode: '#B6BABD',
        colName: 'Splendid Silver',
      },
      {
        img: '/images/car/nexa/fronx/FRONX-Color-1500x700-GRANDEUR_GREY.webp',
        colorCode: '#414c5f',
        colName: 'Grandeur Grey',
      },
      {
        img: '/images/car/nexa/fronx/FRONX-Color-1500x700-EARTHERN_BROWN.webp',
        colorCode: '#594840',
        colName: 'Earthen Brown',
      },
      {
        img: '/images/car/nexa/fronx/FRONX-Color-1500x700-OPULENT_RED.webp',
        colorCode: '#AC0F0F',
        colName: 'Opulent Red',
      },
      {
        img: '/images/car/nexa/fronx/FRONX-Color-934x455-NEXA_bluish_black webp.webp',
        colorCode: '#171717',
        colName: 'Bluish Black',
      },
      {
        img: '/images/car/nexa/fronx/FRONX-Color-1500x700-DUAL_TONE-EARTHERN_BROWN.webp',
        colorCode: '#5b5133',
        colName: 'Earthen Brown with Bluish Black Roof',
      },
      {
        img: '/images/car/nexa/fronx/FRONX-Color-1500x700-DUAL_TONE-SPLENDID_SILVER.webp',
        colorCode: '#8d94a5',
        colName: 'Splendid Silver with Bluish Black Roof',
      },
      {
        img: '/images/car/nexa/fronx/FRONX-Color-1500x700-DUAL_TONE-OPULENT_RED.webp',
        colorCode: '#c84361',
        colName: 'Opulent Red with Bluish Black Roof',
      },
    ],
    keySpecifications: [
      { label: 'Fuel Tank Capacity', value: '45 Litres' },
      { label: 'Seating Capacity', value: '5' },
      { label: 'Length', value: '3995 mm' },
      { label: 'Width', value: '1765 mm' },
      { label: 'Height', value: '1550 mm' },
      { label: 'Front Suspension', value: 'Independent, McPherson Strut' },
      { label: 'Rear Suspension', value: 'Torsion Beam' },
      { label: 'Fuel Type', value: 'Petrol' },
      { label: 'No. of Cylinders', value: '4' },
      { label: 'Max Torque', value: '113 Nm @ 4400 rpm' },
      { label: 'Transmission Type', value: 'Manual/Automatic' },
      { label: 'Body Type', value: 'SUV' },
      { label: 'Wheel Base', value: '2520 mm' },
      { label: 'Gearbox', value: '5-Speed/6-Speed' },
    ],
    exterior: [
      {
        img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/flash/technology/technology-1000x500-dashboard.webp',
        title: 'Dual Tone Plush Interiors',
      },
      {
        img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/flash/technology/technology-1000x500-360_screen.webp',
        title: '360° Panoramic View',
      },
      {
        img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/flash/technology/technology-1000x500-head_up_display.webp',
        title: 'Head-Up Display',
      },
      {
        img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/flash/technology/technology-1000x500-wireless-changing.webp',
        title: 'Wireless Charging',
      },
    ],
    interior: [
      {
        img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/flash/technology/technology-1000x500-9inch_touch_screen.webp',
        title: 'Advanced Dashboard',
      },
      {
        img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/TECHNOLOGY-1000x500-PADDLE_SHIFTERS.webp',
        title: 'Paddle Shifters',
      },
    ],
    carDetails: [
      { label: 'Engine', value: '1197 cc' },
      { label: 'Mileage', value: '21.79 kmpl' },
      { label: 'Power', value: '77.5 kW @ 5500 rpm' },
    ],
    variants: [
      {
        variant: '1.0L TURBO (6AT) Smart Hybrid ALPHA (DT)',
        price: 1198752,
        transmission: 'Automatic',
      },
      {
        variant: '1.0L TURBO (6AT) Smart Hybrid ALPHA',
        price: 1184116,
        transmission: 'Automatic',
      },
      {
        variant: '1.0L TURBO (6AT) Smart Hybrid ZETA',
        price: 1099961,
        transmission: 'Automatic',
      },
      {
        variant: '1.0L TURBO (MT) Smart Hybrid ALPHA (DT)',
        price: 1070690,
        transmission: 'Manual',
      },
      {
        variant: '1.0L TURBO (MT) Smart Hybrid ALPHA',
        price: 1056054,
        transmission: 'Manual',
      },
      {
        variant: '1.0L TURBO (MT) Smart Hybrid ZETA',
        price: 971899,
        transmission: 'Manual',
      },

      {
        variant: '1.2L (AGS) DELTA+',
        price: 854814,
        transmission: 'Automatic',
      },
      { variant: '1.2L (AGS) DELTA', price: 818225, transmission: 'Automatic' },
      { variant: '1.2L (MT) DELTA+', price: 809078, transmission: 'Manual' },
      { variant: '1.2L (MT) DELTA', price: 772488, transmission: 'Manual' },
      { variant: '1.2L (MT) SIGMA', price: 693822, transmission: 'Manual' },

      { variant: 'CNG (MT) DELTA', price: 859388, transmission: 'Manual' },
      { variant: 'CNG (MT) SIGMA', price: 780721, transmission: 'Manual' },
    ],
    exploreMore: [13, 14, 15],
    thumbnail: '/thumbnail/Fronx.webp',
    priceRange: '₹ 6.93 - 11.98 Lakh *',
    brochure:
      'https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/flash/fronx-brochure.pdf#element_submenu',
    blogs: [
      {
        title: '5 Reasons to Buy the 2024 Maruti Suzuki Fronx',
        desc: 'The 2024 Maruti Suzuki Fronx has emerged as a compelling choice in the compact SUV segment, combining modern design, efficiency, and advanced features. Here are five reasons why the Fronx deserves your attention.',

        link: '/blogs/5-Reasons-to-Buy-the-2024-Maruti-Suzuki-Fronx',
        author: 'Sky Automobiles',
      },
    ],
  },
  // Maruti GV -13
  {
    name: 'Maruti Grand Vitara',
    subName: 'Grand Vitara',
    description: 'The League of Extraordinary',
    offersAmount: 160000,
    offersAdditionalDec: '+ Extended Warranty',
    link: '/nexa/grand-vitara-on-road-price',
    linkCG: '/nexa/grand-vitara-on-road-price-in-raipur',
    linkOD: '/nexa/grand-vitara-on-road-price-in-bhubaneswar',
    offerValidTill: 'Jan 31, 2025',
    colors: [
      {
        img: '/images/car/nexa/grand-vitara/Nexa_blue.webp',
        colorCode: '#273daa',
        colName: 'Nexa Blue',
      },
      {
        img: '/images/car/nexa/grand-vitara/grandeur_grey.webp',
        colorCode: '#5d6671',
        colName: 'Granite Grey',
      },
      {
        img: '/images/car/nexa/grand-vitara/Chestnut_Brown.webp',
        colorCode: '#221913',
        colName: 'Chestnut Brown',
      },
      {
        img: '/images/car/nexa/grand-vitara/opulent_red.webp',
        colorCode: '#cc0000',
        colName: 'Opulent Red',
      },
      {
        img: '/images/car/nexa/grand-vitara/splendid_silver.webp',
        colorCode: '#919191',
        colName: 'Splendid Silver',
      },
      {
        img: '/images/car/nexa/grand-vitara/arctic_white.webp',
        colorCode: '#dfe5ef',
        colName: 'Arctic White',
      },
      {
        img: '/images/car/nexa/grand-vitara/MIDNIGHT_BLACK.webp',
        colorCode: '#1c1c1c',
        colName: 'Midnight Black',
      },
      {
        img: '/images/car/nexa/grand-vitara/arctic_white_midnight_black.webp',
        colorCode: '#e6e6e6',
        colName: 'Arctic White Midnight Black',
      },
      {
        img: '/images/car/nexa/grand-vitara/opulent_red_midnight_black.webp',
        colorCode: '#db0000',
        colName: 'Opulent Red Midnight Black',
      },
      {
        img: '/images/car/nexa/grand-vitara/splendid_silver_midnight_black.webp',
        colorCode: '#707070',
        colName: 'Splendid Silver Midnight Black',
      },
    ],
    keySpecifications: [
      { label: 'Fuel Tank Capacity', value: '45 Litres' },
      { label: 'Seating Capacity', value: '5' },
      { label: 'Length', value: '4345 mm' },
      { label: 'Width', value: '1795 mm' },
      { label: 'Height', value: '1645 mm' },
      { label: 'Front Suspension', value: 'Independent, McPherson Strut' },
      { label: 'Rear Suspension', value: 'Independent Torsion Beam' },
      { label: 'Fuel Type', value: 'Petrol' },
      { label: 'No. of Cylinders', value: '4' },
      { label: 'Max Torque', value: '136.8 Nm @ 4400 rpm' },
      { label: 'Transmission Type', value: 'Manual/Automatic' },
      { label: 'Body Type', value: 'SUV' },
      { label: 'Wheel Base', value: '2600 mm' },
      { label: 'Gearbox', value: '5-Speed/6-Speed' },
    ],
    exterior: [
      {
        img: '/images/car/nexa/grand-vitara/front-left-side-47.avif',
        title: 'Bold Front Grille',
      },
      {
        img: '/images/car/nexa/grand-vitara/door-view-of-driver-seat-51.avif',
        title: 'Door-view',
      },
      {
        img: '/images/car/nexa/grand-vitara/grille-97.avif',
        title: 'Grille',
      },
      {
        img: '/images/car/nexa/grand-vitara/wheel-42.avif',
        title: 'Stylish Alloy Wheels',
      },
      {
        img: '/images/car/nexa/grand-vitara/sun-roof-moon-roof-81.avif',
        title: 'Panoramic Sunroof',
      },
    ],
    interior: [
      {
        img: '/images/car/nexa/grand-vitara/dashboard-59.avif',
        title: 'Luxurious Cabin',
      },
      {
        img: '/images/car/nexa/grand-vitara/interior-image-207.webp',
        title: 'Advanced Infotainment System',
      },
      {
        img: '/images/car/nexa/grand-vitara/wireless-charging-pad-206.avif',
        title: 'Comfortable Leather Seats',
      },
      {
        img: '/images/car/nexa/grand-vitara/rear-air-vents-86.avif',
        title: 'ac-vents',
      },
      {
        img: '/images/car/nexa/grand-vitara/front-armrest-185.avif',
        title: 'Front Armrest',
      },
    ],
    carDetails: [
      { label: 'Engine', value: '1462 cc' },
      { label: 'Mileage', value: '19.38 kmpl' },
      { label: 'Power', value: '77.5 kW @ 6000 rpm' },
    ],
    variants: [
      {
        variant: 'Hybrid (E-CVT) ALPHA+ (O) DT',
        price: 2024616,
        transmission: 'Automatic',
      },
      {
        variant: 'Hybrid (E-CVT) ALPHA+ (O)',
        price: 2008951,
        transmission: 'Automatic',
      },
      {
        variant: 'Hybrid (E-CVT) ALPHA+ DT',
        price: 1965874,
        transmission: 'Automatic',
      },
      {
        variant: 'Hybrid (E-CVT) ALPHA+',
        price: 1950541,
        transmission: 'Automatic',
      },
      {
        variant: 'Hybrid (E-CVT) ZETA+ (O) DT',
        price: 1895384,
        transmission: 'Automatic',
      },
      {
        variant: 'Hybrid (E-CVT) ZETA+ (O)',
        price: 1879720,
        transmission: 'Automatic',
      },
      {
        variant: 'Hybrid (E-CVT) ZETA+ (DT)',
        price: 1836643,
        transmission: 'Automatic',
      },
      {
        variant: 'Hybrid (E-CVT) ZETA+',
        price: 1820979,
        transmission: 'Automatic',
      },
      {
        variant: 'Hybrid (E-CVT) DELTA+',
        price: 1636357,
        transmission: 'Automatic',
      },

      {
        variant: 'All Grip 4WD (AT) ALPHA (O) DT',
        price: 1911724,
        transmission: 'Automatic',
      },
      {
        variant: 'All Grip 4WD (AT) ALPHA (O)',
        price: 1896276,
        transmission: 'Automatic',
      },
      {
        variant: 'All Grip 4WD (AT) ALPHA DT',
        price: 1853793,
        transmission: 'Automatic',
      },
      {
        variant: 'All Grip 4WD (AT) ALPHA',
        price: 1838344,
        transmission: 'Automatic',
      },

      {
        variant: 'Smart Hybrid (AT) ALPHA (O) DT',
        price: 1766897,
        transmission: 'Automatic',
      },
      {
        variant: 'Smart Hybrid (AT) ALPHA (O)',
        price: 1751488,
        transmission: 'Automatic',
      },
      {
        variant: 'Smart Hybrid (AT) ALPHA DT',
        price: 1709606,
        transmission: 'Automatic',
      },
      {
        variant: 'Smart Hybrid (AT) ALPHA',
        price: 1693517,
        transmission: 'Automatic',
      },
      {
        variant: 'Smart Hybrid (AT) ZETA (O) DT',
        price: 1624956,
        transmission: 'Automatic',
      },
      {
        variant: 'Smart Hybrid (AT) ZETA (O)',
        price: 1609867,
        transmission: 'Automatic',
      },
      {
        variant: 'Smart Hybrid (AT) ZETA DT',
        price: 1557034,
        transmission: 'Automatic',
      },
      {
        variant: 'Smart Hybrid (AT) ZETA',
        price: 1544906,
        transmission: 'Automatic',
      },
      {
        variant: 'Smart Hybrid (AT) DELTA',
        price: 1434966,
        transmission: 'Automatic',
      },

      {
        variant: 'All Grip 4WD (MT) ALPHA (O) DT',
        price: 1646276,
        transmission: 'Manual',
      },
      {
        variant: 'All Grip 4WD (MT) ALPHA (O)',
        price: 1642828,
        transmission: 'Manual',
      },

      {
        variant: 'Smart Hybrid (MT) ALPHA (O) DT',
        price: 1614724,
        transmission: 'Manual',
      },
      {
        variant: 'Smart Hybrid (MT) ALPHA (O)',
        price: 1616276,
        transmission: 'Manual',
      },
      {
        variant: 'Smart Hybrid (MT) ALPHA DT',
        price: 1601276,
        transmission: 'Manual',
      },
      {
        variant: 'Smart Hybrid (MT) ALPHA',
        price: 1558344,
        transmission: 'Manual',
      },
      {
        variant: 'Smart Hybrid (MT) ZETA (O) DT',
        price: 1474384,
        transmission: 'Manual',
      },
      {
        variant: 'Smart Hybrid (MT) ZETA (O)',
        price: 1447343,
        transmission: 'Manual',
      },
      {
        variant: 'Smart Hybrid (MT) ZETA DT',
        price: 1416419,
        transmission: 'Manual',
      },
      {
        variant: 'Smart Hybrid (MT) ZETA',
        price: 1416393,
        transmission: 'Manual',
      },
      {
        variant: 'Smart Hybrid (MT) DELTA',
        price: 1173622,
        transmission: 'Manual',
      },
      {
        variant: 'Smart Hybrid (MT) SIGMA',
        price: 1120621,
        transmission: 'Manual',
      },

      {
        variant: 'CNG (MT) ZETA (O) DT',
        price: 1474344,
        transmission: 'Manual',
      },
      { variant: 'CNG (MT) ZETA', price: 1308138, transmission: 'Manual' },
      { variant: 'CNG (MT) DELTA', price: 1301537, transmission: 'Manual' },
    ],

    exploreMore: [14, 15, 16],
    thumbnail: '/thumbnail/GV.webp',
    priceRange: '₹ 11.02- 20.24 Lakh *',
    brochure:
      'https://nexaprod5.azureedge.net/-/media/feature/nexawebsiteherobanner/brochure/grand_vitara-brochure.pdf',
    blogs: [
      {
        title:
          '5 Reasons to Buy the 2024 Maruti Suzuki Grand Vitara Strong Hybrid',
        desc: 'The 2024 Maruti Suzuki Grand Vitara Strong Hybrid is making waves in the compact SUV segment, offering a unique combination of performance, efficiency, and advanced features. Here are five compelling reasons to consider this hybrid model over its competitors.',

        link: '/blogs/5-Reasons-to-Buy-the-2024-Maruti-Suzuki-Grand-Vitara-Strong-Hybrid',
        author: 'Sky Automobiles',
      },
      {
        title: 'Fuel Efficiency of Grand Vitara Strong Hybrid Compared',
        desc: 'The 2024 Maruti Suzuki Grand Vitara Strong Hybrid stands out in the compact SUV segment, particularly due to its impressive fuel efficiency. Here’s how its fuel efficiency compares to other SUVs in the same category.',

        link: '/blogs/Fuel-Efficiency-of-Grand-Vitara-Strong-Hybrid-Compared',
        author: 'Sky Automobiles',
      },
    ],
  },

  // XL6 - 14

  {
    name: 'Maruti XL6',
    subName: 'XL6',
    description: 'Created to Inspire Indulgence.',
    offersAmount: 55000,
    offersAdditionalDec: '',
    link: '/nexa/xl6-on-road-price',
    linkCG: '/nexa/xl6-on-road-price-in-raipur',
    linkOD: '/nexa/xl6-on-road-price-in-bhubaneswar',
    offerValidTill: 'Jan 31, 2025',
    colors: [
      {
        img: '/images/car/nexa/xl6/Brand-page-car_Nexa-Blue.webp',
        colorCode: '#183f66',
        colName: 'NEXA Blue (Celestial)',
      },
      {
        img: '/images/car/nexa/xl6/Brand-page-car_OPULENT RED.webp',
        colorCode: '#a31326',
        colName: 'Opulent Red',
      },
      {
        img: '/images/car/nexa/xl6/Brand-page-car_BRAVE KHAKI.webp',
        colorCode: '#4f3f23',
        colName: 'Brave Khaki',
      },
      {
        img: '/images/car/nexa/xl6/Brand-page-car_GRANDEUR GREY.webp',
        colorCode: '#545454',
        colName: 'Grandeur Grey',
      },
      {
        img: '/images/car/nexa/xl6/Brand-page-car_SPLENDID SILVER.webp',
        colorCode: '#afb3b8',
        colName: 'Splendid Silver',
      },
      {
        img: '/images/car/nexa/xl6/Brand-page-car_ARCTIC WHITE.webp',
        colorCode: '#eeeff0',
        colName: 'Arctic White',
      },
      {
        img: '/images/car/nexa/xl6/Car Image 810x411.webp',
        colorCode: '#171717',
        colName: 'Pearl Midnight Black',
      },
      {
        img: '/images/car/nexa/xl6/810x411-DUAL_OPPULENT_RED.webp',
        colorCode: '#c84361',
        colName: 'Opulent Red With Midnight Black Roof',
      },

      {
        img: '/images/car/nexa/xl6/810x411-DUAL_BRAVE_KHAKI.webp',
        colorCode: '#5b5133',
        colName: 'Brave Khaki With Midnight Black Roof',
      },
      {
        img: '/images/car/nexa/xl6/810x411-DUAL_SPLENDID_SILVER.webp',
        colorCode: '#8d94a5',
        colName: 'Splendid Silver With Midnight Black Roof',
      },
    ],
    keySpecifications: [
      { label: 'Fuel Tank Capacity', value: '45 Litres' },
      { label: 'Seating Capacity', value: '6' },
      { label: 'Length', value: '4450 mm' },
      { label: 'Width', value: '1775 mm' },
      { label: 'Height', value: '1755 mm' },
      { label: 'Front Suspension', value: ' Mac Pherson Strut & Coil Spring' },
      { label: 'Rear Suspension', value: 'Torsion Beam Type & Coil Spring' },
      { label: 'Fuel Type', value: 'Petrol' },
      { label: 'No. of Cylinders', value: '4' },
      { label: 'Max Torque', value: '136.8 Nm @ 4400 rpm' },
      { label: 'Transmission Type', value: 'Manual/Automatic' },
      { label: 'Body Type', value: 'MPV' },
      { label: 'Wheel Base', value: '2740 mm' },
      { label: 'Gearbox', value: '5-Speed/6-Speed' },
    ],
    exterior: [
      {
        img: '/images/car/nexa/xl6/1170x521-roof-end-spoiler.ac029c6c59028c43a775.webp',
        title: 'Backdoor Spoiler',
      },
      {
        img: '/images/car/nexa/xl6/1170x521--ORVM.d6ef7c4cf6eea705df2c.webp',
        title: 'Auto ORVMs',
      },
      {
        img: '/images/car/nexa/xl6/1170x521-UV-cut-glass.5fa942fd6178e619dfbe.webp',
        title: 'UV Cut Glass',
      },
      {
        img: '/images/car/nexa/xl6/1170x521-fog-light.19e3214c1923c110a78d.webp',
        title: 'LED Fog Lights',
      },
      {
        img: '/images/car/nexa/xl6/1170x521-cabin-foot-lamp.2f42eae8e5aa6cc2d024.webp',
        title: 'Footlamp Illumination',
      },
    ],
    interior: [
      {
        img: '/images/car/nexa/xl6/Ventilated-seats.webp',
        title: 'Ventilated Seats',
      },
      {
        img: '/images/car/nexa/xl6/camera360.webp',
        title: '360 View Camera',
      },
      {
        img: '/images/car/nexa/xl6/paddle-swifter.webp',
        title: '6-Speed AT with Paddle Shifters',
      },
      {
        img: '/images/car/nexa/xl6/tyre-pressure.webp',
        title: 'Tyre Pressure Monitoring System',
      },
    ],
    carDetails: [
      { label: 'Engine', value: '1462 cc' },
      { label: 'Mileage', value: '20.97 kmpl' },
      { label: 'Power', value: '75.8 kW @ 6000 rpm' },
    ],
    variants: [
      {
        variant: 'XL6 1.5P AT ALPHA+ (D)',
        price: 1447793,
        transmission: 'Automatic',
      },
      {
        variant: 'XL6 1.5P AT ALPHA+',
        price: 1432345,
        transmission: 'Automatic',
      },
      {
        variant: 'XL6 1.5P AT ALPHA',
        price: 1384069,
        transmission: 'Automatic',
      },
      {
        variant: 'XL6 1.5P AT ZETA',
        price: 1287517,
        transmission: 'Automatic',
      },

      {
        variant: 'XL6 1.5P MT ALPHA+ (D)',
        price: 1312621,
        transmission: 'Manual',
      },
      { variant: 'XL6 1.5P MT ALPHA+', price: 1297172, transmission: 'Manual' },
      { variant: 'XL6 1.5P MT ALPHA', price: 1248897, transmission: 'Manual' },
      { variant: 'XL6 1.5P MT ZETA', price: 1152345, transmission: 'Manual' },

      { variant: 'XL6 CNG (MT) ZETA', price: 1244069, transmission: 'Manual' },
    ],
    exploreMore: [15, 16, 17],
    thumbnail: '/thumbnail/XL6.webp',
    priceRange: '₹ 11.52 - 14.47 Lakh *',
    brochure:
      'https://nexaprod3.azureedge.net/-/media/feature/nexawebsiteherobanner/brochure/xl6-brochure-for-digital.pdf',
  },

  // Ciaz - 15

  {
    name: 'Maruti Ciaz',
    subName: 'Ciaz',
    description: 'Created To Inspire Elegance',
    offersAmount: 55000,
    offersAdditionalDec: '',
    link: '/nexa/ciaz-on-road-price',
    linkCG: '/nexa/ciaz-on-road-price-in-raipur',
    linkOD: '/nexa/ciaz-on-road-price-in-bhubaneswar',
    offerValidTill: 'Jan 31, 2025',
    colors: [
      {
        img: '/images/car/nexa/ciaz/5.webp',
        colorCode: '#063b5e',
        colName: 'Nexa Blue',
      },
      {
        img: '/images/car/nexa/ciaz/6.webp',
        colorCode: '#483333',
        colName: 'Pearl Metallic Dignity Brown',
      },
      {
        img: '/images/car/nexa/ciaz/3.webp',
        colorCode: '#525151',
        colName: 'Grandeur Grey',
      },
      {
        img: '/images/car/nexa/ciaz/2.webp',
        colorCode: '#a1a1a1',
        colName: 'Splendid Silver ',
      },
      {
        img: '/images/car/nexa/ciaz/4.webp',
        colorCode: '#d32f2f',
        colName: 'Opulent Red ',
      },
      {
        img: '/images/car/nexa/ciaz/1.webp',
        colorCode: '#dfe1e6',
        colName: ' Pearl Arctic White',
      },
      {
        img: '/images/car/nexa/ciaz/7.webp',
        colorCode: '#171516',
        colName: 'Bluish Black',
      },
      {
        img: '/images/car/nexa/ciaz/PEARL METALLIC DIGNITY BROWN And_BLACK.webp',
        colorCode: '#483333',
        colName: 'Pearl Metallic Dignity Brown And Bluish Black',
      },
      {
        img: '/images/car/nexa/ciaz/OPULENT RED and_BLACK.webp',
        colorCode: '#b40404',
        colName: 'Opulent Red And Bluish Black',
      },
      {
        img: '/images/car/nexa/ciaz/GRANDEUR GREY And_BLACK.webp',
        colorCode: '#524242',
        colName: 'Grandeur Grey and Black',
      },
    ],
    keySpecifications: [
      { label: 'Fuel Tank Capacity', value: '43 Litres' },
      { label: 'Seating Capacity', value: '5' },
      { label: 'Length', value: '4490 mm' },
      { label: 'Width', value: '1730 mm' },
      { label: 'Height', value: '1485 mm' },
      { label: 'Front Suspension', value: 'Independent, McPherson Strut' },
      { label: 'Rear Suspension', value: 'Torsion Beam' },
      { label: 'Fuel Type', value: 'Petrol' },
      { label: 'No. of Cylinders', value: '4' },
      { label: 'Max Torque', value: '138 Nm @ 4400 rpm' },
      { label: 'Transmission Type', value: 'Manual/Automatic' },
      { label: 'Body Type', value: 'Sedan' },
      { label: 'Wheel Base', value: '2650 mm' },
      { label: 'Gearbox', value: '5-Speed/6-Speed' },
    ],
    exterior: [
      {
        img: '/images/car/nexa/ciaz/Ciaz-Exterior-Metal-Grille.webp',
        title: 'Metal Grille',
      },
      {
        img: '/images/car/nexa/ciaz/Ciaz-Exterior-Back-Lamp.webp',
        title: 'LED Tail Lamp',
      },
      {
        img: '/images/car/nexa/ciaz/Ciaz-Exterior-Led-Projector-Head-Lamps.webp',
        title: 'LED Projector Headlamps',
      },
      {
        img: '/images/car/nexa/ciaz/Ciaz-Exterior-Fog-Lamp.webp',
        title: 'Fog Lamps',
      },
      {
        img: '/images/car/nexa/ciaz/Ciaz-Alloy-Wheels.webp',
        title: 'Alloy Wheels',
      },
    ],
    interior: [
      {
        img: 'https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/smart-play.webp?la=en&hash=DF45D720A00AFAA3BF65C79BFF8D9008',
        title: 'SmartPlay Pro+',
      },
      {
        img: 'https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/cruse-control.webp?la=en&hash=77163AF7DAC92B24F208D8E79458BB76',
        title: 'Cruse Control',
      },
      {
        img: 'https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/tilt-steering-1/tilt-steering/tilt-st.webp?la=en&hash=89B8F429758F878291EF6B18C083E14B',
        title: 'Tilt Steering',
      },
      {
        img: 'https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/mid.webp?la=en&hash=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp',
        title: 'MULTI-INFORMATION DISPLAY',
      },
      {
        img: 'https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/start-stop-button/start-stop-button.webp?la=en&hash=27619673A168328A76477A098ADCA421',
        title: 'Push Start Stop Button',
      },
      {
        img: 'https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/orvm/orvm.webp?la=en&hash=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp',
        title: 'ORVM',
      },
      {
        img: 'https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/auto-ac_new.webp?la=en&hash=DF96E30F84F81B3182B68AF568865207',
        title: ' Automatic Air Conditioning',
      },
      {
        img: 'https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/rear-ac-vent/rear-ac-vent.webp?la=en&hash=55DA7ECCDB5F4C07DAAF604E73706B48',
        title: ' Rear AC Ventilation',
      },
    ],
    carDetails: [
      { label: 'Engine', value: '1462 cc' },
      { label: 'Mileage', value: '20.65 kmpl' },
      { label: 'Power', value: '77 kW @ 6000 rpm' },
    ],
    variants: [
      {
        variant: 'Ciaz 1.5P AT ALPHA DT',
        price: 1204000,
        transmission: 'Automatic',
      },
      {
        variant: 'Ciaz 1.5P AT ALPHA',
        price: 1188552,
        transmission: 'Automatic',
      },
      {
        variant: 'Ciaz 1.5P AT ZETA',
        price: 1111793,
        transmission: 'Automatic',
      },
      {
        variant: 'Ciaz 1.5P AT DELTA',
        price: 1072690,
        transmission: 'Automatic',
      },

      {
        variant: 'Ciaz 1.5P MT ALPHA DT',
        price: 1097793,
        transmission: 'Manual',
      },
      { variant: 'Ciaz 1.5P MT ALPHA', price: 1082345, transmission: 'Manual' },
      { variant: 'Ciaz 1.5P MT ZETA', price: 1005586, transmission: 'Manual' },
      { variant: 'Ciaz 1.5P MT DELTA', price: 965034, transmission: 'Manual' },
      { variant: 'Ciaz 1.5P MT SIGMA', price: 909034, transmission: 'Manual' },
    ],
    exploreMore: [16, 17, 9],
    thumbnail: '/thumbnail/Ciaz.webp',
    priceRange: '₹ 9.09 - 12.04 Lakh *',
    brochure:
      'https://www.nexaexperience.com/-/media/feature/nexawebsiteherobanner/brochure/all_new_ciaz_brochure.pdf',
  },

  // Baleno - 16

  {
    name: 'Maruti Baleno',
    subName: 'Baleno',
    description: 'Created to Inspire The Bold and Intelligent',
    offersAmount: 77500,
    offersAdditionalDec: '+ Regal Kit worth 60526',
    link: '/nexa/baleno-on-road-price',
    linkCG: '/nexa/baleno-on-road-price-in-raipur',
    linkOD: '/nexa/baleno-on-road-price-in-bhubaneswar',
    offerValidTill: 'Jan 31, 2025',
    colors: [
      {
        img: '/images/car/nexa/baleno/CelestialBlue.webp',
        colorCode: '#183f66',
        colName: 'NEXA Blue (Celestial)',
      },
      {
        img: '/images/car/nexa/baleno/ArticWhite.webp',
        colorCode: '#eeeff0',
        colName: 'Pearl Arctic White',
      },
      {
        img: '/images/car/nexa/baleno/SplendidSilver.webp',
        colorCode: '#afb3bb',
        colName: 'Splendid Silver',
      },
      {
        img: '/images/car/nexa/baleno/GrandeurGrey.webp',
        colorCode: '#545454',
        colName: 'Grandeur Grey',
      },
      {
        img: '/images/car/nexa/baleno/OpulantRed.webp',
        colorCode: '#a31326',
        colName: 'Opulent Red',
      },
      {
        img: '/images/car/nexa/baleno/LuxeBeige.webp',
        colorCode: '#68482f',
        colName: 'Luxe Beige',
      },
      {
        img: '/images/car/nexa/baleno/Desktop_BluishBlack_810x411 webp.webp',
        colorCode: '#393d4c',
        colName: 'Bluish Black',
      },
    ],
    keySpecifications: [
      { label: 'Fuel Tank Capacity', value: '37 Litres' },
      { label: 'Seating Capacity', value: '5' },
      { label: 'Length', value: '3990 mm' },
      { label: 'Width', value: '1745 mm' },
      { label: 'Height', value: '1500 mm' },
      { label: 'Front Suspension', value: 'Independent, McPherson Strut' },
      { label: 'Rear Suspension', value: 'Torsion Beam' },
      { label: 'Fuel Type', value: 'Petrol/Diesel' },
      { label: 'No. of Cylinders', value: '4' },
      { label: 'Max Torque', value: '113 Nm @ 4400 rpm' },
      { label: 'Transmission Type', value: 'Manual/Automatic' },
      { label: 'Body Type', value: 'Hatchback' },
      { label: 'Wheel Base', value: '2520 mm' },
      { label: 'Gearbox', value: '5-Speed/Auto' },
    ],
    exterior: [
      {
        img: '/images/car/nexa/baleno/front-view-118.avif',
        title: ' Baleno Front View',
      },
      {
        img: '/images/car/nexa/baleno/rear-view-119.webp',
        title: 'Maruti Baleno Rear view',
      },
      {
        img: '/images/car/nexa/baleno/headlight-43.webp',
        title: 'Maruti Baleno Headlight',
      },
      {
        img: '/images/car/nexa/baleno/taillight-44.webp',
        title: 'Maruti Baleno Taillight',
      },
      {
        img: '/images/car/nexa/baleno/wheel-42.webp',
        title: 'Maruti Baleno Wheel',
      },
    ],

    interior: [
      {
        img: '/images/car/nexa/baleno/Boot-space.webp',
        title: 'Boot Space with 60:40 Rear Split',
      },
      {
        img: '/images/car/nexa/baleno/Anti-pinch.webp',
        title: 'Anti-Pinch Window',
      },
      {
        img: '/images/car/nexa/baleno/UV-cut-Glasses_new.webp',
        title: 'UV Cut Glass',
      },
      {
        img: '/images/car/nexa/baleno/bottle-holder.webp',
        title: 'Bottle Holder',
      },
      {
        img: '/images/car/nexa/baleno/technology-1080x420-HUD.webp',
        title: 'HEAD UP DISPLAY',
      },
      {
        img: '/images/car/nexa/baleno/technology-1080x420-360-CAMERA-VIEW.webp',
        title: '360 VIEW CAMERA',
      },
      {
        img: '/images/car/nexa/baleno/technology-1080x420-apple-carplay.webp',
        title: '22.86 CM HD SMARTPLAY PRO+',
      },
      {
        img: '/images/car/nexa/baleno/technology-1080x420-suzuki-connect.webp',
        title: 'NEXT GENERATION SUZUKI CONNECT',
      },
      // {
      //   img: "https://nexaprod2.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/newbranddetails/img2.webp",
      //   title: "6 AIRBAGS",
      // },
    ],
    carDetails: [
      { label: 'Engine', value: '1197 cc' },
      { label: 'Mileage', value: '22.35 kmpl' },
      { label: 'Power', value: '77.5 kW @ 6000 rpm' },
    ],
    variants: [
      {
        variant: 'Baleno P AGS ALPHA',
        price: 911070,
        transmission: 'Automatic',
      },
      {
        variant: 'Baleno P AGS ZETA',
        price: 824171,
        transmission: 'Automatic',
      },
      {
        variant: 'Baleno P AGS DELTA',
        price: 739101,
        transmission: 'Automatic',
      },

      { variant: 'Baleno P MT ALPHA', price: 865333, transmission: 'Manual' },
      { variant: 'Baleno P MT ZETA', price: 778434, transmission: 'Manual' },
      { variant: 'Baleno P MT DELTA', price: 693364, transmission: 'Manual' },
      { variant: 'Baleno P MT SIGMA', price: 616527, transmission: 'Manual' },

      { variant: 'Baleno CNG MT ZETA', price: 860760, transmission: 'Manual' },
      { variant: 'Baleno CNG MT DELTA', price: 775690, transmission: 'Manual' },
    ],

    exploreMore: [17, 9, 10],
    thumbnail: '/thumbnail/Baleno.webp',
    priceRange: '₹ 6.16 - 9.11 Lakh *',
    brochure:
      'https://nexaprod1.azureedge.net/-/media/feature/nexawebsiteherobanner/brochure/the-new-age-baleno-brochure.pdf',
    blogs: [
      {
        title: '5 Reasons to Buy the 2024 Maruti Suzuki Baleno',
        desc: 'The 2024 Maruti Suzuki Baleno continues to be a popular choice in the premium hatchback segment, offering a blend of style, performance, and advanced features. Here are five compelling reasons to consider the Baleno for your next vehicle purchase.',

        link: '/blogs/5-Reasons-to-Buy-the-2024-Maruti-Suzuki-Baleno',
        author: 'Sky Automobiles',
      },
    ],
  },

  // Ignis - 17
  {
    name: 'Maruti Ignis',
    subName: 'Ignis',
    description: 'Created to Inspire The Toughness in You.',
    offersAmount: 85000,
    offersAdditionalDec: '+ Radiance Kit Worth 3K',
    link: '/nexa/ignis-on-road-price',
    linkCG: '/nexa/ignis-on-road-price-in-raipur',
    linkOD: '/nexa/ignis-on-road-price-in-bhubaneswar',
    offerValidTill: 'Jan 31, 2025',
    colors: [
      {
        img: '/images/car/nexa/ignis/brandpage-car-nexa-blue.webp',
        colorCode: '#183F66',
        colName: 'NEXA Blue (Celestial)',
      },
      {
        img: '/images/car/nexa/ignis/Orange.webp',
        colorCode: '#E34C26',
        colName: 'Lucent Orange',
      },
      {
        img: '/images/car/nexa/ignis/SILKY-SILVER.webp',
        colorCode: '#AFB3B8',
        colName: 'Silky Silver',
      },
      {
        img: '/images/car/nexa/ignis/TURQUOSIE-BLUE.webp',
        colorCode: '#00648F',
        colName: 'Turquoise Blue',
      },
      {
        img: '/images/car/nexa/ignis/GLISTERING-GREY.webp',
        colorCode: '#545454',
        colName: 'Glistening Grey',
      },
      {
        img: '/images/car/nexa/ignis/PEARL-WHITE.webp',
        colorCode: '#EEEFF0',
        colName: 'Pearl Arctic White',
      },
      {
        img: '/images/car/nexa/ignis/PEARL-MIDNIGHT-BLACK.webp',
        colorCode: '#171717',
        colName: 'Pearl Midnight Black',
      },
      {
        img: '/images/car/nexa/ignis/Orange-Black.webp',
        colorCode: '#812418',
        colName: 'Lucent Orange With Black Roof',
      },
      {
        img: '/images/car/nexa/ignis/brandpage-car-size- Blue with Silver.webp',
        colorCode: '#213169',
        colName: 'Nexa Blue With Silver Roof',
      },
      {
        img: '/images/car/nexa/ignis/brandpage-car-Nexa Blue with Black Roof.webp',
        colorCode: '#295294',
        colName: 'Nexa Blue With Black Roof',
      },
    ],
    keySpecifications: [
      { label: 'Fuel Tank Capacity', value: '32 Litres' },
      { label: 'Seating Capacity', value: '5' },
      { label: 'Length', value: '3700 mm' },
      { label: 'Width', value: '1690 mm' },
      { label: 'Height', value: '1595 mm' },
      { label: 'Front Suspension', value: 'Independent, McPherson Strut' },
      { label: 'Rear Suspension', value: 'Torsion Beam' },
      { label: 'Fuel Type', value: 'Petrol' },
      { label: 'No. of Cylinders', value: '4' },
      { label: 'Max Torque', value: '113 Nm @ 4200 rpm' },
      { label: 'Transmission Type', value: 'Manual/Automatic' },
      { label: 'Body Type', value: 'Hatchback' },
      { label: 'Wheel Base', value: '2435 mm' },
      { label: 'Gearbox', value: '5-Speed/Auto' },
    ],
    exterior: [
      {
        img: '/images/car/nexa/ignis/grille-97.webp',
        title: 'Grill',
      },

      {
        img: '/images/car/nexa/ignis/Feature-1170x521-split-seat new webp.webp',
        title: '60:40 SPLIT SEAT',
      },
      {
        img: '/images/car/nexa/ignis/Feature-1170x521-ORVM webp.webp',
        title: 'AUTO ORVM',
      },
      {
        img: '/images/car/nexa/ignis/tilt.webp',
        title: 'TILT STEERING',
      },
      {
        img: '/images/car/nexa/ignis/tech.webp',
        title: 'AGS',
      },
    ],
    interior: [
      {
        img: '/images/car/nexa/ignis/SLDA.webp',
        title: 'SMARTPLAY STUDIO',
      },
      {
        img: '/images/car/nexa/ignis/steer-mount-control webp.webp',
        title: 'Steering Control',
      },
      {
        img: '/images/car/nexa/ignis/push-start-stop.webp',
        title: 'Push Start Stop Button',
      },
      {
        img: '/images/car/nexa/ignis/MID.webp',
        title: 'MID WITH TFT SCREEN',
      },
      {
        img: '/images/car/nexa/ignis/auto-AC.webp',
        title: 'AUTOMATIC CLIMATE CONTROL',
      },
    ],
    carDetails: [
      { label: 'Engine', value: '1197 cc' },
      { label: 'Mileage', value: '20.89 kmpl' },
      { label: 'Power', value: '61 kW @ 6000 rpm' },
    ],
    variants: [
      {
        variant: 'Ignis P AGS ALPHA DT',
        price: 755566,
        transmission: 'Automatic',
      },
      {
        variant: 'Ignis P AGS ALPHA',
        price: 742760,
        transmission: 'Automatic',
      },
      {
        variant: 'Ignis P AGS ZETA DT',
        price: 696109,
        transmission: 'Automatic',
      },
      { variant: 'Ignis P AGS ZETA', price: 683302, transmission: 'Automatic' },
      {
        variant: 'Ignis P AGS DELTA',
        price: 630248,
        transmission: 'Automatic',
      },

      { variant: 'Ignis P MT ALPHA DT', price: 709829, transmission: 'Manual' },
      { variant: 'Ignis P MT ALPHA', price: 697023, transmission: 'Manual' },
      { variant: 'Ignis P MT ZETA DT', price: 650372, transmission: 'Manual' },
      { variant: 'Ignis P MT ZETA', price: 637566, transmission: 'Manual' },
      { variant: 'Ignis P MT DELTA', price: 584512, transmission: 'Manual' },
      { variant: 'Ignis P MT SIGMA', price: 535116, transmission: 'Manual' },
    ],
    exploreMore: [9, 10, 11],
    thumbnail: '/thumbnail/Ignis.webp',
    priceRange: '₹ 5.35 - 7.55 Lakh *',
    brochure:
      'https://nexaprod4.azureedge.net/-/media/feature/nexawebsiteherobanner/brochure/ignis-brochure.pdf',
  },
];

export const cgOutlets = [
  {
    name: 'Arena',
    locations: [
      {
        name: 'SKY AUTOMOBILES - RAIPUR',
        channel: 'Arena',
        address:
          'Great Eastern Rd, Maruti Vihar, Kota, Raipur, Chhattisgarh 492001',
        map: 'https://maps.app.goo.gl/jBXrQK86hU4sDmDk8',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14873.575748626132!2d81.5938016!3d21.2558686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28de0522595e83%3A0x9b53881314481416!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Raipur%2C%20Mohaba%20Bazar)!5e0!3m2!1sen!2sin!4v1726030050436!5m2!1sen!2sin',
        phone: '9893307422',
        salesPersonName: 'Mr. Ustav Goswami',
        email: 'sales@skyautomobiles.in',
        servicePersonName: 'Mr. Jai Singh Madwar',
        servicePhone: '9584433150',
      },
      {
        name: 'SKY AUTOMOBILES - JAGDALPUR',
        channel: 'Arena',
        address: 'Geedam Rd, Jagdalpur, Chhattisgarh 494001',
        map: 'https://maps.app.goo.gl/uJ9uULnbxpT9kKbUA',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.817684755998!2d81.98698901098479!3d19.071751852031007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3013ae37b5a953%3A0x5bb8be0455abd258!2sMaruti%20Suzuki%20Arena%20(Sky%20Automobiles%2C%20Jagdalpur%2C%20Geedam%20Road)!5e0!3m2!1sen!2sin!4v1726032668769!5m2!1sen!2sin',
        salesPersonName: 'Mr. Dhananjay Swain',
        phone: '9584433110',
        servicePersonName: 'Mr. Sohan Singh Choudhary',
        servicePhone: '9893000043',
        email: 'sales.jdp@skyautomobiles.in',
      },
      {
        name: 'SKY AUTOMOBILES - Avanti Vihar ',
        channel: 'Arena',
        address:
          'Avanti Vihar, Geetanjali Colony, Shankar Nagar, Raipur, Chhattisgarh 492001',
        map: 'https://maps.app.goo.gl/zZeuyBL7Jxtm2dW66',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8113557967727!2d81.6664485110296!3d21.23932788043111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd1600edd2a3%3A0x791bcbba4df232c9!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Raipur%2C%20Avanti%20Vihar)!5e0!3m2!1sen!2sin!4v1726033303248!5m2!1sen!2sin',
        salesPersonName: 'Mr. Anil Mishra',
        phone: '9109900120',
        servicePersonName: 'Mr. Hitesh Sharma',
        servicePhone: '9584465293',
        email: 'sales.megnato@skyautomobiles.in',
      },
      {
        name: 'SKY AUTOMOBILES - BHATAGAON ',
        channel: 'Arena',
        address:
          'Ring Road No: 1, beside Walfort City, Bhatagaon, Raipur, Chhattisgarh 492013',
        map: 'https://maps.app.goo.gl/mh2avC1KaWpauPD48',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14877.113409625104!2d81.6179656!3d21.220808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ddcce8998e51%3A0x8b959a717e58f52a!2sMaruti%20Suzuki%20Service%20(Sky%20Automobiles)!5e0!3m2!1sen!2sin!4v1726034177313!5m2!1sen!2sin',
        salesPersonName: 'Mr. Bharat Yadu ',
        phone: '9893303282',
        servicePersonName: 'Mr. Vivek Dewangan ',
        servicePhone: '9109969073',
        email: 'skybhatagaon@gmail.com',
      },
      {
        name: 'SKY AUTOMOBILES - DHAMTARI',
        channel: 'Arena',
        address:
          'Kasra No.238/2 Sehara Dabri, Raipur Rd, Dhamtari, Chhattisgarh 492009',
        map: 'https://maps.app.goo.gl/QHf1zrQRmGkqqEkL8',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.202978453152!2d81.5759785110188!3d20.742565497466607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2f29745ccaded5%3A0x9e1b18ca6780297f!2sMaruti%20Suzuki%20Service%20(Sky%20Automobiles)!5e0!3m2!1sen!2sin!4v1726034449515!5m2!1sen!2sin',
        salesPersonName: 'Mr. Santosh Singh',
        phone: '9893307417',
        servicePersonName: 'Mr. Rajesh Vishwakarma',
        servicePhone: '8889998612',
        email: 'sales.dhamtari@skyautomobiles.in',
      },
      {
        name: 'SKY AUTOMOBILES - BALODA BAZAAR',
        channel: 'Arena',
        address:
          'M547+FP9, Ambedkar Chowk, Raipur Rd, Baloda Bazar, Chhattisgarh 493332',
        map: 'https://maps.app.goo.gl/TjGXALPwd6JNrg4q6',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.8468887026147!2d82.17568717556416!3d21.63088918017342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28808ee8817f3f%3A0x99a6617344ab4a70!2sMaruti%20Suzuki%20Arena%20(Sky%20Automobiles%2C%20Baloda%20Bazar%2C%20Raipur%20Road)!5e0!3m2!1sen!2sin!4v1726035214037!5m2!1sen!2sin',
        salesPersonName: 'Mr. Jitendra Sahoo',
        phone: '9584433123',
        servicePersonName: 'Mr. Deepak Pandey',
        servicePhone: '9893307429',
        email: 'baloda@skyautomobiles.in',
      },
      {
        name: 'SKY AUTOMOBILES - KANKER ',
        channel: 'Arena',
        address:
          'NH30 up & down road, Civil Line Mahurband Para Rd, Udaynagar Colony, Kanker, Chhattisgarh 494334',
        map: 'https://maps.app.goo.gl/5zPCH6EYksiKGYsv7',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14969.81170199055!2d81.4871876!3d20.2815114!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2efda8d0168e35%3A0xc2bfe94b00edced1!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Kanker%2C%20Udaynagar%20Colony)!5e0!3m2!1sen!2sin!4v1726035498173!5m2!1sen!2sin',
        salesPersonName: 'Mr. Amit Kumar Dalai ',
        phone: '8889998604',
        servicePersonName: 'Mr. Navneet Kumar Ajay',
        servicePhone: '9329149400',
        email: 'skymarutikanker5001@gmail.com',
      },
      {
        name: 'SKY AUTOMOBILES - KASDOL ',
        channel: 'Arena',
        address:
          'Raipur - Baloda Bazar Marg, near Bus Stand, Kasdol, Chhattisgarh 493335',
        map: 'https://maps.app.goo.gl/p7JZTsKvSA9iT3fM8',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14836.649294940033!2d82.4257419!3d21.6185975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a26332d92a6732d%3A0x1615ae0d15da03fb!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Baloda%20Bazar%2C%20Kasdol)!5e0!3m2!1sen!2sin!4v1726035599768!5m2!1sen!2sin',
        salesPersonName: 'Mr. Bhuneshwar Gupta',
        phone: '9584433135',
        servicePersonName: '',
        servicePhone: '',
        email: 'sales.kasdol@skyautomobiles.in',
      },
      {
        name: 'SKY AUTOMOBILES - KHARORA',
        channel: 'Arena',
        address: 'Tilda Simga Rd, Kharora, Chhattisgarh 493225',
        map: 'https://maps.app.goo.gl/Kp45JVSc5CeZhVPbA',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14859.462725630197!2d81.934238!3d21.3951928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2893eb779b8ee1%3A0x379978946c0332e0!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Tilda%2C%20Kharora)!5e0!3m2!1sen!2sin!4v1726036188333!5m2!1sen!2sin',
        salesPersonName: 'Mr. Saket Chichkhade',
        phone: '9584465301',
        servicePersonName: '',
        servicePhone: '',
        email: 'skyautomobilstilda123@gmail.com',
      },
      {
        name: 'SKY AUTOMOBILES - ABHANPUR',
        channel: 'Arena',
        address: 'WARD NO 14, Abhanpur, Chhattisgarh 493661',
        map: 'https://maps.app.goo.gl/npZsawrLExdsGk2z8',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14893.597430501439!2d81.7477511!3d21.0567061!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28cfcc2fc3b04b%3A0xbba6568b0cddd24f!2sSKY%20AUTOMOBILES%20ABHANPUR!5e0!3m2!1sen!2sin!4v1726036410059!5m2!1sen!2sin',
        salesPersonName: 'Mr. Saket Chichkhade',
        phone: '9584465301',
        servicePersonName: '',
        servicePhone: '',
        email: 'skyabhanpur@gmail.com',
      },
      {
        name: 'SKY AUTOMOBILES - SARSIWA',
        channel: 'Arena',
        address:
          'Sarsiwa, Raipur, NH-200, Bilaspur Road, Baloda Bazar, Baloda Bazar, Chhattisgarh 493559',
        map: 'https://maps.app.goo.gl/77bsx39SX3fCeyqG9',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14835.20294122274!2d82.9177825!3d21.6326871!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a26ff5d346314b1%3A0x91892320deb34c45!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Raipur%2C%20Sarsiwa)!5e0!3m2!1sen!2sin!4v1726036838663!5m2!1sen!2sin',
        salesPersonName: 'Mr. Joginder Choudhary',
        phone: '9584433874',
        servicePersonName: '',
        servicePhone: '',
        email: 'skyabhanpur@gmail.com',
      },
      {
        name: 'SKY AUTOMOBILES - SARAIPALI ',
        channel: 'Arena',
        address:
          'Harratar, Mahasamund Nh 53,Bhawanipatna- Raipur Hwy, Basna road, Saraipali, Chhattisgarh 493558',
        map: 'https://maps.app.goo.gl/wqKVaapNfTJGrsJE6',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.0829309385745!2d82.96745677555582!3d21.307739180412423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a268b3f8140d70d%3A0x1cf0b7d9486c9c57!2sMaruti%20Suzuki%20Arena%20(Sky%20Automobiles%2C%20Saraipali%2C%20Basna%20Road)!5e0!3m2!1sen!2sin!4v1726037321364!5m2!1sen!2sin',
        salesPersonName: 'Mr. Joginder Choudhary',
        phone: '9584433874',
        servicePersonName: 'Mr. Himanshu Chouhan',
        servicePhone: '9109996511',
        email: 'sales.saraipali@skyautomobiles.in',
      },
      {
        name: 'SKY AUTOMOBILES - TILDA ',
        channel: 'Arena',
        address: 'Bahesar, Chhattisgarh 493114',
        map: 'https://maps.app.goo.gl/MvoByr1b9qQ3mePo7',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.003803245586!2d81.80224567556101!3d21.507570980264326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28f3f3a7b12741%3A0xeea79c915fada04c!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Tilda%2C%20Bahesar)!5e0!3m2!1sen!2sin!4v1726037635748!5m2!1sen!2sin',
        salesPersonName: 'Mr. Saket Chichkhade',
        phone: '9584465301',
        servicePersonName: 'Mr. Balram Neti',
        servicePhone: '9109900117',
        email: 'skyautomobilstilda123@gmail.com',
      },
      {
        name: 'SKY AUTOMOBILES - KONDAGAON',
        channel: 'Arena',
        address:
          'NH 30, beside Indian Oil Petrol Pump, Kondagaon, Chhattisgarh 494226',
        map: 'https://maps.app.goo.gl/5jwP3RipT7CfcUPJ9',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.288016841051!2d81.6635051755138!3d19.61498068170378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2fcf49dc1ca279%3A0x8136d187923f162a!2sMaruti%20Suzuki%20Arena%20(Sky%20Automobiles%2C%20Kondagaon%2C%20NH%2030)!5e0!3m2!1sen!2sin!4v1726037796381!5m2!1sen!2sin',
        salesPersonName: 'Mr. Sanjeev Karla',
        phone: '7909903505',
        servicePersonName: 'Mr. Mulchand Newala',
        servicePhone: '9109969062',
        email: 'bm.kondagaon@skyautomobiles.in',
      },
      {
        name: 'SKY AUTOMOBILES - MAGARLOAD',
        channel: 'Arena',
        address:
          'Kasra No.238/2 Sehara Dabri, Raipur Rd, Dhamtari, Chhattisgarh 492009',
        map: 'https://maps.app.goo.gl/QHf1zrQRmGkqqEkL8',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.202978453152!2d81.5759785110188!3d20.742565497466607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2f29745ccaded5%3A0x9e1b18ca6780297f!2sMaruti%20Suzuki%20Service%20(Sky%20Automobiles)!5e0!3m2!1sen!2sin!4v1726034449515!5m2!1sen!2sin',
        salesPersonName: 'Mr. Santosh Singh',
        phone: '9893307417',
        servicePersonName: '',
        servicePhone: '',
        email: 'sales.dhamtari@skyautomobiles.in',
      },
    ],
  },
  {
    name: 'Nexa',
    locations: [
      // Nexa
      {
        name: 'SKY AUTOMOBILES - MAGNETO MALL  ',
        channel: 'Nexa',
        address:
          'Beside Magneto The Mall, National Highway, Street Number 6, Labhandih, Chhattisgarh 492001',
        map: 'https://maps.app.goo.gl/sbg569Z6cp6JMfkM8',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14875.289415715275!2d81.6848154!3d21.2388919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd21064997cb%3A0xcfc08d5e3f679793!2sNEXA%20(Sky%20Automobiles%2C%20Raipur%2C%20Magneto)!5e0!3m2!1sen!2sin!4v1726038467745!5m2!1sen!2sin',
        salesPersonName: 'Mr. Abhishek  ',
        phone: '9111107017',
        servicePersonName: 'Mr. Srijan Gupta',
        servicePhone: '7470778082',
        email: '',
      },
      {
        name: 'SKY AUTOMOBILES - JAGDALPUR',
        channel: 'Nexa',
        address:
          'Ganga Nagar, Ward, Geedam Rd, Hikmipara, Jagdalpur, Chhattisgarh 494001',
        map: 'https://maps.app.goo.gl/HPHaJ3kJZ6H33qxG8',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15083.258693451746!2d81.9894603!3d19.0718842!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a301334ac7f5107%3A0xafb4e93610c07b40!2sNEXA%20(Sky%20Automobiles%2C%20Jagdalpur%2C%20Geedam%20Road)!5e0!3m2!1sen!2sin!4v1726038754903!5m2!1sen!2sin',
        salesPersonName: 'Mr. Kanchan',
        phone: '9584433160',
        servicePersonName: 'Mr. Abrar Khan',
        servicePhone: '9111107446',
        email: '',
      },
      {
        name: 'SKY AUTOMOBILES - BALODA BAZAAR',
        channel: 'Nexa',
        address:
          'M547+FP9, Ambedkar Chowk, Raipur Rd, Baloda Bazar, Chhattisgarh 493332',
        map: 'https://maps.app.goo.gl/TjGXALPwd6JNrg4q6',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.8468887026147!2d82.17568717556416!3d21.63088918017342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28808ee8817f3f%3A0x99a6617344ab4a70!2sMaruti%20Suzuki%20Arena%20(Sky%20Automobiles%2C%20Baloda%20Bazar%2C%20Raipur%20Road)!5e0!3m2!1sen!2sin!4v1726035214037!5m2!1sen!2sin',

        salesPersonName: 'Mr. Rajneesh',
        phone: '9111107013',
        servicePersonName: 'Mr. Deepak Pandey ',
        servicePhone: '9893307429',
        email: '',
      },
      {
        name: 'SKY AUTOMOBILES - DHAMTARI',
        channel: 'Nexa',
        address:
          'Kasra No.238/2 Sehara Dabri, Raipur Rd, Dhamtari, Chhattisgarh 492009',
        map: 'https://maps.app.goo.gl/QHf1zrQRmGkqqEkL8',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.202978453152!2d81.5759785110188!3d20.742565497466607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2f29745ccaded5%3A0x9e1b18ca6780297f!2sMaruti%20Suzuki%20Service%20(Sky%20Automobiles)!5e0!3m2!1sen!2sin!4v1726034449515!5m2!1sen!2sin',
        salesPersonName: 'Mr. Pramod ',
        phone: '9111107014',
        servicePersonName: 'Mr. Rajesh Vishwakarma',
        servicePhone: '8889998612',
        email: '',
      },
    ],
  },
  {
    name: 'Workshop',
    locations: [
      // Workshop
      {
        name: 'SKY AUTOMOBILES - Sarona',
        channel: 'Workshop',
        address:
          '7H2H+8RP, Sarona Rd, Doomar Talab Thana Rd, Raipur, Chhattisgarh 492001',
        map: 'https://maps.app.goo.gl/dAPsRr2sCYzmb75p8',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d495.0767793354671!2d81.5795559!3d21.2507596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28df004a1217a1%3A0xa06f141c7155abca!2sMaruti%20Suzuki%20Service%2C%20Sarona!5e1!3m2!1sen!2sin!4v1727678892957!5m2!1sen!2sin',
        salesPersonName: '',
        phone: '',
        servicePersonName: 'Mr. Yogesh Sahu',
        servicePhone: '9584433070',
        email: '',
      },
      {
        name: 'SKY AUTOMOBILES - Maudhapara ',
        channel: 'Workshop',
        address:
          'Mahavir Gaushala Complex, KK Rd, Janak Bada, Station Road, Moudhapara, Raipur, Chhattisgarh 492001',
        map: 'https://maps.app.goo.gl/UN9oHUmghSvQ66d19',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.497504078807!2d81.63270277555439!3d21.251765780453958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd909238419d%3A0xc0813fa489e8695b!2sMaruti%20Suzuki%20Service%20(Sky%20Automobiles)!5e0!3m2!1sen!2sin!4v1726039881106!5m2!1sen!2sin',
        salesPersonName: '',
        phone: '',
        servicePersonName: 'Mr. Simalu Rao',
        servicePhone: '9584433147',
        email: '',
      },
    ],
  },
  {
    name: 'True value',
    locations: [
      // TrueValue
      {
        name: 'SKY AUTOMOBILES - Mahoba Bazar',
        channel: 'True Value',
        address:
          'Maruti Heights Commercial Complex, Mohaba Bazar Great Eastern Road NH 6, near Ambika Rly Crossing, Raipur, Chhattisgarh 492001',
        map: 'https://maps.app.goo.gl/J82JQAyo91wE2hss7',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.400185799678!2d81.59120527555443!3d21.255621080451128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28de0522f7a7af%3A0x329f8a757d9f4500!2sMaruti%20Suzuki%20True%20Value%20(Sky%20Automobiles%2C%20Raipur%2C%20Mohaba%20Bazar)!5e0!3m2!1sen!2sin!4v1726040077387!5m2!1sen!2sin',
        salesPersonName: 'Mr. Ajit Biswas',
        phone: '9584433005',
        servicePersonName: '',
        servicePhone: '',
        email: '',
      },
      {
        name: 'SKY AUTOMOBILES - Udhyog Bhawan',
        channel: 'True Value',
        address:
          'Ring Road No. 1, near Udyog Bhawan, MAHAVIR NAGAR, Telibandha, Raipur, Chhattisgarh 492001',
        map: 'https://maps.app.goo.gl/MgBraXYNRfVwKQ5N6',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9186361760258!2d81.6643385755539!3d21.23507478046641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd17a2333ca7%3A0xfe8b892c661899c0!2sMaruti%20Suzuki%20TRUE%20VALUE%20(Sky%20Automobiles%2C%20Raipur%2C%20Ring%20Road%20One)!5e0!3m2!1sen!2sin!4v1726040300507!5m2!1sen!2sin',
        salesPersonName: 'Mr. Naman Dave',
        phone: '9584333066',
        servicePersonName: '',
        servicePhone: '',
        email: '',
      },
      {
        name: 'SKY AUTOMOBILES - JAGDALPUR ',
        channel: 'True Value',
        address:
          'Ganga Nagar, Ward, Geedam Rd, Hikmipara, Jagdalpur, Chhattisgarh 494001',
        map: 'https://maps.app.goo.gl/HPHaJ3kJZ6H33qxG8',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15083.258693451746!2d81.9894603!3d19.0718842!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a301334ac7f5107%3A0xafb4e93610c07b40!2sNEXA%20(Sky%20Automobiles%2C%20Jagdalpur%2C%20Geedam%20Road)!5e0!3m2!1sen!2sin!4v1726038754903!5m2!1sen!2sin',

        salesPersonName: 'Mr. Ramdas Mukharjee',
        phone: '6260288613',
        servicePersonName: '',
        servicePhone: '',
        email: '',
      },
    ],
  },
];
export const odOutlets = [
  {
    name: 'Arena',
    locations: [
      {
        name: 'SKY AUTOMOBILES - BHUBANESWAR',
        channel: 'Arena',
        address:
          'Besides The, Arcon Retreat, Nandankanan Rd, Kanan Vihar, Patia, Bhubaneswar, Odisha 751031',
        map: 'https://maps.app.goo.gl/7kujYmyGs5NnRUys6',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.9206376940115!2d85.82146437603774!3d20.34489698113881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909dd9bca2089%3A0xa54f9d01703c8849!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Bhubaneswar%2C%20Patia)!5e0!3m2!1sen!2sin!4v1727083042435!5m2!1sen!2sin',
        phone: '9776645722',
        salesPersonName: 'Mr. Sudhir Kumar Das',
        // email: "sales@skyautomobiles.in",
        servicePersonName: 'Mr. Surendra',
        servicePhone: '9776645798',
      },
      {
        name: 'SKY AUTOMOBILES - TANGI',
        channel: 'Arena',
        address: 'Benta Chowk, Champagada, Tangi, Odisha 752024',
        map: 'https://maps.app.goo.gl/a8sTThhu5hQCG9wK6',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.3272706351518!2d85.41678017602939!3d19.95273438144072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1847fb45bc6ed1%3A0xef8be353f23d8e42!2sMaruti%20Suzuki%20Arena%20(Sky%20Automobiles%2C%20Khurda%2C%20Tangi)!5e0!3m2!1sen!2sin!4v1727084375546!5m2!1sen!2sin',
        phone: '9776645715',
        salesPersonName: 'Mr. Biswajit  Rana',
        // email: "",
        servicePersonName: 'Mr. Biswajit  Rana',
        servicePhone: '9776645715',
      },
      {
        name: 'SKY AUTOMOBILES - DHENKANAL',
        channel: 'Arena',
        address:
          'PLOT NO-136/1103, KATHAGARA, NEARASSAM, OIL NH-42, Ananda Nagar, Dhenkanal, Odisha 759013',
        map: 'https://maps.app.goo.gl/LJBcWMqnnxNpRp5M7',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.84514496587!2d85.61882397604396!3d20.63516788091758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a191feae8dfc023%3A0x9576f496c2c6d84b!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Dhenkanal%2C%20Kathagada)!5e0!3m2!1sen!2sin!4v1727084721383!5m2!1sen!2sin',
        phone: '9776900005',
        salesPersonName: 'Mr. Anup Sundar Samal',
        // email: "",
        servicePersonName: 'Mr. Satya',
        servicePhone: '7440025919',
      },
      {
        name: 'SKY AUTOMOBILES - KAMAKSHYANAGAR',
        channel: 'Arena',
        address:
          'INFRONT OF KAMAKHYA NAGAR POLICE STATION,HANUMAN BAZAR, Kamakhyanagar, Odisha 759018',
        map: 'https://maps.app.goo.gl/BdXZDvLryaDDhqi77',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.50960400156!2d85.53879037605049!3d20.932040580693204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a18d6988531e92b%3A0x4f88a770e7562fb2!2sMaruti%20Suzuki%20Arena%20(Sky%20Automobiles%2C%20Kamakhya%20nagar%2C%20Hanuman%20Bazar)!5e0!3m2!1sen!2sin!4v1727086398171!5m2!1sen!2sin',
        phone: '9776900005',
        salesPersonName: 'Mr. Anup Sundar Samal',
        // email: "",
        servicePersonName: '',
        servicePhone: '',
      },
      {
        name: 'SKY AUTOMOBILES - NARSINGHPUR',
        channel: 'Arena',
        address: 'PAIKAPADA,NARSINGHPUR, CUTTACK, Odisha 754032',
        map: 'https://maps.app.goo.gl/HKUzWSrXKZt38t868',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.061633781103!2d85.08761867604032!3d20.462661581048753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a189ab739eed375%3A0xce81fd47c548d0e7!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Cuttack%2C%20Narasinghpur)!5e0!3m2!1sen!2sin!4v1727086573412!5m2!1sen!2sin',
        phone: '9776900005',
        salesPersonName: 'Mr. Anup Sundar Samal',
        // email: "",
        servicePersonName: '',
        servicePhone: '',
      },
      {
        name: 'SKY AUTOMOBILES - CUTTACK',
        channel: 'Arena',
        address: 'At/Po- Bhanpur, NH16, Urali, Odisha 753011',
        map: 'https://maps.app.goo.gl/YtUJ9jNNsHAyt1bC9',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59842.397949808044!2d85.81121821953124!3d20.376709579723716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190c5b69728a9d%3A0xa3832eebb93eba7a!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Cuttack%2C%20Kathajodi)!5e0!3m2!1sen!2sin!4v1727086664331!5m2!1sen!2sin',
        phone: '9776900555',
        salesPersonName: 'Mr. Jagannath Sahoo',
        // email: "",
        servicePersonName: 'Mr. Saroj',
        servicePhone: '9583011030',
      },
      {
        name: 'SKY AUTOMOBILES - SALEPUR',
        channel: 'Arena',
        address: 'https://maps.app.goo.gl/ou869kWDtYPbR2XBA',
        map: 'https://maps.app.goo.gl/ou869kWDtYPbR2XBA',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d959027.356043581!2d84.82850161249995!3d20.125676664635417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1965bac675e76f%3A0x1c0221e74eb054de!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Salepur%2C%20Machuati)!5e0!3m2!1sen!2sin!4v1727086815580!5m2!1sen!2sin',
        phone: '7440011601',
        salesPersonName: 'Mr. Ashok Sahoo',
        // email: "",
        servicePersonName: '',
        servicePhone: '',
      },
      {
        name: 'SKY AUTOMOBILES - JAJPUR',
        channel: 'Arena',
        address:
          ' At-BENAPUR, NEAR JANHA HOTEL, JAJPUR ROAD, JAJPUR, Odisha 755019',
        map: 'https://maps.app.goo.gl/t9MkJ7kT9UJDgDU76',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.4183936550785!2d86.16410577605053!3d20.935706580690447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a195148eecbd077%3A0x9eed6dd171481fc3!2sMaruti%20Suzuki%20Arena%20(Sky%20Automobiles%2C%20Jajpur%2C%20Benapur)!5e0!3m2!1sen!2sin!4v1727087773128!5m2!1sen!2sin',
        phone: '9776900777',
        salesPersonName: 'Mr. Bharat Panda',
        // email: "",
        servicePersonName: 'Mr. Janaki',
        servicePhone: '9583011010',
      },
      {
        name: 'SKY AUTOMOBILES - CHANDIKHOL',
        channel: 'Arena',
        address: 'PO, AT:, Chandikhol, Sunguda, Odisha 754204',
        map: 'https://maps.app.goo.gl/E8E8M8cunN6HawQk9',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.4995464689073!2d86.12957017604515!3d20.689929780875993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a195d7500e92783%3A0x19f63087bb7032c6!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Jajpur%2C%20Chandikhol)!5e0!3m2!1sen!2sin!4v1727088009796!5m2!1sen!2sin',
        phone: '9583011012',
        salesPersonName: 'Mr. Aswini Panda',
        // email: "",
        servicePersonName: 'Mr. Sahadat  ',
        servicePhone: '8117829611',
      },
      {
        name: 'SKY AUTOMOBILES - BERHAMPUR',
        channel: 'Arena',
        address:
          'NH-16, Jagannathpur-Gopalpur Jn, Dist, Brahmapur, Odisha 760010',
        map: 'https://maps.app.goo.gl/QXT8YaQ92a8hbqsU9',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.245914054893!2d84.85389107601618!3d19.315132481939383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d500f3686400d%3A0x4c3cae13a22d5210!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Berhampur)!5e0!3m2!1sen!2sin!4v1728035521580!5m2!1sen!2sin',
        phone: '9776645725',
        salesPersonName: 'Mr. Dillip Behera',
        // email: "",
        servicePersonName: 'Mr. Sada',
        servicePhone: '8828291895',
      },
      {
        name: 'SKY AUTOMOBILES - BHANJA NAGAR',
        channel: 'Arena',
        address: 'baunsalundi, Bhanjanagar, Odisha 761126',
        map: 'https://maps.app.goo.gl/cMQp655yXRtWxgga8',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.006833115482!2d84.56583917602885!3d19.924116881463036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a22eb109187a573%3A0xba858c55d71403c1!2sMaruti%20Suzuki%20Arena%20(Sky%20Automobiles%2C%20Bhanjanagar%2C%20Baunsalundi)!5e0!3m2!1sen!2sin!4v1727088296429!5m2!1sen!2sin',
        phone: '7328812012',
        salesPersonName: 'Mr. Balaram Panda',
        // email: "",
        servicePersonName: '',
        servicePhone: '',
      },
      {
        name: 'SKY AUTOMOBILES - PHULBANI',
        channel: 'Arena',
        address: 'Gudrisahi, Gudari, PS, Dist, Khajuripada, Odisha 762012',
        map: 'https://maps.app.goo.gl/7M8ehbejqGPSt5mb6',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.1054687933843!2d84.28291887604018!3d20.460860881050156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a224d801c34f79f%3A0x99a62dfbdf279ed7!2sMaruti%20Suzuki%20Arena%20(Sky%20Automobiles%2C%20Phulbani%2C%20Gudari)!5e0!3m2!1sen!2sin!4v1727088427851!5m2!1sen!2sin',
        phone: '6370687787',
        salesPersonName: 'Mr. Pitabas Amat',
        // email: "",
        servicePersonName: 'Mr. Biranchi',
        servicePhone: '9337777800',
      },
      {
        name: 'SKY AUTOMOBILES - PARALAKHEMUNDI',
        channel: 'Arena',
        address: 'Q3Vh+Crs6, Paralakhemundi, Odisha 761201',
        map: 'https://maps.app.goo.gl/bQTdvR3uZ1FtVpsQ8',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.1655005475154!2d84.07563487934566!3d18.7907763729119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3cf7388563d045%3A0xcee40bf96800f81e!2sMaruti%20Suzuki%20Arena%20(Sky%20Automobiles%2C%20Odisha%2C%20Paralakhemundi)!5e0!3m2!1sen!2sin!4v1727088680635!5m2!1sen!2sin',
        phone: '8093010737',
        salesPersonName: 'Mr. Shambhunath Panda',
        // email: "",
        servicePersonName: 'Mr. Umashankar',
        servicePhone: '8249561230',
      },
      {
        name: 'SKY AUTOMOBILES - BALIGUDA',
        channel: 'Arena',
        address:
          'Maruti Suzuki Arena ( Sky Automobiles, Balliguda, Odisha 762103',
        map: 'https://maps.app.goo.gl/Bpm8zFiEK8Q8pteQ8',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7488.75276110039!2d83.90309825869141!3d20.201674924864673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a237580e8151827%3A0x775f31287b8dca23!2sMaruti%20Suzuki%20Arena%20(%20Sky%20Automobiles%2C%20Baliguda%2C%20Kandhamala)!5e0!3m2!1sen!2sin!4v1727088811313!5m2!1sen!2sin',
        phone: '9692875363',
        salesPersonName: 'Mr. Nirmal Chandra Behera',
        // email: "",
        servicePersonName: '',
        servicePhone: '',
      },
    ],
  },
  {
    name: 'Nexa',
    locations: [
      // Nexa
      {
        name: 'SKY AUTOMOBILES -  Bhubaneshwar',
        channel: 'Nexa',
        address: 'Mouza, NH16, Naharkanta, Bhubaneswar, Odisha 752101',
        map: 'https://maps.app.goo.gl/74tEX5Gj7Lx4Y12D9',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.5645908400693!2d85.87805527603712!3d20.31828188115911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c4e7c351c5%3A0xc70e6896ae439b35!2sNEXA%20(Sky%20Automobiles%2C%20Bhubaneshwar%2C%20Twin%20City)!5e0!3m2!1sen!2sin!4v1727091501886!5m2!1sen!2sin',
        salesPersonName: 'Mr. Birat Nayak',
        phone: '9090060111',
        servicePersonName: 'Mr. Biswajit ',
        servicePhone: '9776999977',
        email: '',
      },
      {
        name: 'SKY AUTOMOBILES -  Berhampur',
        channel: 'Nexa',
        address:
          'N.H. - 5, Amabapua Mouza, Between Gopalpur, Junction, Jaganathpur, Brahmapur, Odisha 760007',
        map: 'https://maps.app.goo.gl/GnR9rkkmAFKxoPHE6',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.3216906316534!2d84.84798137601607!3d19.31184228194186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d51b3544ed31d%3A0xa3fb10ccd1f5fc83!2sNEXA%20(Sky%20Automobiles%2C%20Ganjam%2C%20Berhampur)!5e0!3m2!1sen!2sin!4v1727091677429!5m2!1sen!2sin',
        salesPersonName: 'Mr. Bighnaraj Satpathy',
        phone: '7064906490',
        servicePersonName: 'Mr. Biswajit ',
        servicePhone: '9776999977',
        email: '',
      },
    ],
  },
  // {
  //   name: "Workshop",
  //   locations: [
  //     // Workshop

  //     {
  //       name: "SKY AUTOMOBILES - Maudhapara ",
  //       channel: "Workshop",
  //       address:
  //         "Mahavir Gaushala Complex, KK Rd, Janak Bada, Station Road, Moudhapara, Raipur, Chhattisgarh 492001",
  //       map: "https://maps.app.goo.gl/UN9oHUmghSvQ66d19",
  //       iframe:
  //         "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.497504078807!2d81.63270277555439!3d21.251765780453958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd909238419d%3A0xc0813fa489e8695b!2sMaruti%20Suzuki%20Service%20(Sky%20Automobiles)!5e0!3m2!1sen!2sin!4v1726039881106!5m2!1sen!2sin",
  //       salesPersonName: "",
  //       phone: "",
  //       servicePersonName: "Mr. Simalu Rao",
  //       servicePhone: "9584433147",
  //       email: "",
  //     },
  //   ],
  // },
  {
    name: 'True value',
    locations: [
      // TrueValue
      {
        name: 'SKY AUTOMOBILES - Bhubaneswar',
        channel: 'True Value',
        address:
          'Plot No. -435/1886, Khata No.- 474/456, near Big Bazar, Patia, Bhubaneswar, Odisha 751021',
        map: 'https://maps.app.goo.gl/Gioa4PemStvMFDdb9',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14963.524401873929!2d85.824638!3d20.34653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190966d730554d%3A0xeabfbdeaf10087f2!2sMaruti%20Suzuki%20TRUE%20VALUE%20(Sky%20Automobiles%2C%20Bhubaneswar%2C%20Patia)!5e0!3m2!1sen!2sin!4v1727092165956!5m2!1sen!2sin',

        salesPersonName: 'Mr. Md. Imtiyaz',
        phone: '9583522333',
        servicePersonName: '',
        servicePhone: '',
        email: '',
      },
      {
        name: 'SKY AUTOMOBILES - Cuttack',
        channel: 'True Value',
        address: 'NH16, Bhanpur, Cuttack, Urali, Odisha 753011',
        map: 'https://maps.app.goo.gl/SZQEd1SaiSBvqUDB9',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7478.744695995085!2d85.880508!3d20.408753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190d6e115c031f%3A0x21ff7ddff2c6def5!2sMaruti%20Suzuki%20TRUE%20VALUE%20(Sky%20Automobiles%2C%20Cuttack%2C%20NH-5)!5e0!3m2!1sen!2sin!4v1727092090120!5m2!1sen!2sin',
        salesPersonName: 'Mr. Pratyush Bose',
        phone: '9776900999',
        servicePersonName: '',
        servicePhone: '',
        email: '',
      },
      {
        name: 'SKY AUTOMOBILES - Berhampur',
        channel: 'True Value',
        address:
          'N.H. - 5, Amabapua Mouza, Between Gopalpur, Junction, Jaganathpur, Brahmapur, Odisha 760007',
        map: 'https://maps.app.goo.gl/GnR9rkkmAFKxoPHE6',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.3216906316534!2d84.84798137601607!3d19.31184228194186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d51b3544ed31d%3A0xa3fb10ccd1f5fc83!2sNEXA%20(Sky%20Automobiles%2C%20Ganjam%2C%20Berhampur)!5e0!3m2!1sen!2sin!4v1727091677429!5m2!1sen!2sin',
        salesPersonName: 'Mr. Samarendra Das',
        phone: '7381019416',
        servicePersonName: '',
        servicePhone: '',
        email: '',
      },
    ],
  },
];
