import h1 from '../../Assets/h1.png'
import h2 from '../../Assets/h2.png'
import h3 from '../../Assets/h3.png'
import h4 from '../../Assets/h4.png'
import h6 from '../../Assets/h6.png'
import p1 from '../../Assets/p1.png'
import p2 from '../../Assets/p2.png'
import p7 from '../../Assets/p7.png'
import p5 from '../../Assets/p6.png'
import p6 from '../../Assets/p7.png'
import p4 from '../../Assets/p4.png'
import city1 from '../../Assets/city1.png'
import city2 from '../../Assets/city2.png'
import city3 from '../../Assets/city3.png'
import city4 from '../../Assets/city4.png'
import city5 from '../../Assets/city5.png'
import city6 from '../../Assets/city6.png'
import team1 from '../../Assets/team1.jpg'
import team2 from '../../Assets/team2.jpg'
import team3 from '../../Assets/team3.jpg'
import team4 from '../../Assets/team4.jpg'
import team5 from '../../Assets/team5.jpg'




export const nav = [
    {
      text: "home",
      path: "/",
    },
    {
      text: "about",
      path: "/about",
    },
    {
      text: "services",
      path: "/services",
    },
    {
      text: "blog",
      path: "/blog",
    },
    {
      text: "pricing",
      path: "/pricing",
    },
    {
      text: "contact",
      path: "/contact",
    },
  ]
  export const featured = [
    {
      cover: h1,
      name: "Family House",
      total: "122 Property",
    },
    {
      cover: h2,
      name: "House & Villa",
      total: "155 Property",
    },
    {
      cover: h3,
      name: "Apartment",
      total: "300 Property",
    },
    {
      cover: h4,
      name: "Office & Studio",
      total: "80 Property",
    },
    {
      cover: h6,
      name: "Villa & Condo",
      total: "80 Property",
    },
  ];
  export const list = [
    {
      id: 1,
      cover: p1,
      name: "Red Carpet Real Estate",
      location: "210 Zirak Road, Canada",
      category: "For Rent",
      price: "$3,700",
      type: "Apartment",
    },
    {
      id: 2,
      cover: p2,
      name: "Fairmount Properties",
      location: "5698 Zirak Road, NewYork",
      category: "For Sale",
      price: "$9,750",
      type: "Condos",
    },
    {
      id: 3,
      cover: p7,
      name: "The Real Estate Corner",
      location: "5624 Mooker Market, USA",
      category: "For Rent",
      price: "$5,860",
      type: "Offices",
    },
    {
      id: 4,
      cover: p4,
      name: "Herringbone Realty",
      location: "5621 Liverpool, London",
      category: "For Sale",
      price: "$7,540",
      type: "Homes & Villas",
    },
    {
      id: 5,
      cover: p5,
      name: "Brick Lane Realty",
      location: "210 Montreal Road, Canada",
      category: "For Rent",
      price: "$4,850",
      type: "Commercial",
    },
    {
      id: 6,
      cover: p6,
      name: "Banyon Tree Realty",
      location: "210 Zirak Road, Canada",
      category: "For Sale",
      price: "$2,742",
      type: "Apartment",
    },
  ]
  export const awards = [
    {
      icon: <i class='fa-solid fa-trophy'></i>,
      num: "32 M	",
      name: "Blue Burmin Award",
    },
    {
      icon: <i class='fa-solid fa-briefcase'></i>,
      num: "43 M",
      name: "Mimo X11 Award",
    },
    {
      icon: <i class='fa-solid fa-lightbulb'></i>,
      num: "51 M",
      name: "Australian UGC Award",
    },
    {
      icon: <i class='fa-solid fa-heart'></i>,
      num: "42 M",
      name: "IITCA Green Award",
    },
  ]
  export const location = [
    {
      id: 1,
      name: "New Orleans, Louisiana",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: city1,
    },
    {
      id: 2,
      name: "Jerrsy, United State",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: city2,
    },
    {
      id: 3,
      name: "Liverpool, London",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: city3,
    },
    {
      id: 4,
      name: "NewYork, United States",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: city4,
    },
    {
      id: 5,
      name: "Montreal, Canada",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: city5,
    },
    {
      id: 6,
      name: "California, USA",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: city6,
    },
  ]
  export const team = [
    {
      list: "50",
      cover: team1,
      address: "Liverpool, Canada",
      name: "Sargam S. Singh",
      icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
    },
    {
      list: "70",
      cover: team2,
      address: "Montreal, Canada",
      name: "Harijeet M. Siller",
      icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
    },
    {
      list: "80",
      cover: team3,
      address: "Denever, USA",
      name: "Anna K. Young",
      icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
    },
    {
      list: "51",
      cover: team4,
      address: "2272 Briarwood Drive",
      name: "Michael P. Grimaldo",
      icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
    },
    {
      list: "42",
      cover: team5,
      address: "2272 Briarwood Drive",
      name: "Michael P. Grimaldo",
      icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
    },
    {
      list: "38",
      cover: team5,
      address: "Montreal, USA",
      name: "Adam K. Jollio",
      icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
    },
  ]
  export const price = [
    {
      plan: "Basic",
      price: "29",
      ptext: "per user, per month",
      list: [
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "99.5% Uptime Guarantee",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "120GB CDN Bandwidth",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "5GB Cloud Storage",
        },
        { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Personal Help Support" },
        { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Enterprise SLA" },
      ],
    },
    {
      best: "Best Value",
      plan: "Standard",
      price: "49",
      ptext: "per user, per month",
      list: [
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "99.5% Uptime Guarantee",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "150GB CDN Bandwidth",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "10GB Cloud Storage",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Personal Help Support",
        },
        {
          change: "color",
          icon: <i class='fa-solid fa-x'></i>,
          text: "Enterprise SLA",
        },
      ],
    },
    {
      plan: "Platinum",
      price: "79",
      ptext: "2 user, per month",
      list: [
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "100% Uptime Guarantee",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "200GB CDN Bandwidth",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "20GB Cloud Storage",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Personal Help Support",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Enterprise SLA",
        },
      ],
    },
  ]
  export const footer = [
    {
      title: "LAYOUTS",
      text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Property Page" }, { list: "Contact Page" }, { list: "Single Blog" }],
    },
    {
      title: "ALL SECTIONS",
      text: [{ list: "Headers" }, { list: "Features" }, { list: "Attractive" }, { list: "Testimonials" }, { list: "Videos" }, { list: "Footers" }],
    },
    {
      title: "COMPANY",
      text: [{ list: "About" }, { list: "Blog" }, { list: "Pricing" }, { list: "Affiliate" }, { list: "Login" }, { list: "Changelog" }],
    },
  ]