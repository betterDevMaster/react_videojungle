import moment from "moment";
const categories = [
  {
    name: "Film & Animation",
    videos: 12345,
    isPopular: true,
    isTrending: false,
    uploadedOn: moment(Date.now())
      .subtract(2, "days")
      .valueOf()
  },
  {
    name: "Autos & Vehicles",
    videos: 23223,
    isPopular: true,
    isTrending: false,
    uploadedOn: moment(Date.now())
      .subtract(2, "days")
      .valueOf()
  },
  {
    name: "Music",
    videos: 13245,
    isPopular: true,
    isTrending: false,
    uploadedOn: moment(Date.now())
      .subtract(2, "days")
      .valueOf()
  },
  {
    name: "Pets & Animals",
    videos: 12335,
    isPopular: true,
    isTrending: false,
    uploadedOn: moment(Date.now())
      .subtract(2, "days")
      .valueOf()
  },
  {
    name: "Sports",
    videos: 14345,
    isPopular: false,
    isTrending: false,
    uploadedOn: moment(Date.now())
      .subtract(2, "days")
      .valueOf()
  },
  {
    name: "Travel & Events",
    videos: 12345,
    isPopular: true,
    isTrending: false,
    uploadedOn: moment(Date.now())
      .subtract(2, "days")
      .valueOf()
  },
  {
    name: "Gaming",
    videos: 23223,
    isPopular: false,
    isTrending: true,
    uploadedOn: moment(Date.now())
      .subtract(5, "days")
      .valueOf()
  },
  {
    name: "People & Blogs",
    videos: 13245,
    isPopular: true,
    isTrending: false,
    uploadedOn: moment(Date.now())
      .subtract(5, "days")
      .valueOf()
  },
  {
    name: "Comedy",
    videos: 12335,
    isPopular: false,
    isTrending: false,
    uploadedOn: moment(Date.now())
      .subtract(5, "days")
      .valueOf()
  },
  {
    name: "Entertainment",
    videos: 14345,
    isPopular: true,
    isTrending: false,
    uploadedOn: moment(Date.now())
      .subtract(5, "days")
      .valueOf()
  },
  {
    name: "News & Politics",
    videos: 12345,
    isPopular: true,
    isTrending: true,
    uploadedOn: moment(Date.now())
      .subtract(10, "days")
      .valueOf()
  },
  {
    name: "Howto & Style",
    videos: 12345,
    isPopular: true,
    isTrending: false,
    uploadedOn: moment(Date.now())
      .subtract(10, "days")
      .valueOf()
  },
  {
    name: "Education",
    videos: 23223,
    isPopular: true,
    isTrending: false,
    uploadedOn: moment(Date.now())
      .subtract(10, "days")
      .valueOf()
  },
  {
    name: "Science & Technology",
    videos: 13245,
    isPopular: true,
    isTrending: false,
    uploadedOn: moment(Date.now())
      .subtract(10, "days")
      .valueOf()
  },
  {
    name: "Nonprofits & Activism",
    videos: 12335,
    isPopular: true,
    isTrending: false,
    uploadedOn: moment(Date.now())
      .subtract(10, "days")
      .valueOf()
  },
  // {
  //   name: "Water",
  //   videos: 14345,
  //   isPopular: false,
  //   isTrending: false,
  //   uploadedOn: moment(Date.now())
  //     .subtract(10, "days")
  //     .valueOf()
  // },
  // {
  //   name: "Limit",
  //   videos: 12345,
  //   isPopular: true,
  //   isTrending: false,
  //   uploadedOn: moment(Date.now())
  //     .subtract(10, "days")
  //     .valueOf()
  // },
  // {
  //   name: "melodic",
  //   videos: 23223,
  //   isPopular: false,
  //   isTrending: true,
  //   uploadedOn: moment(Date.now())
  //     .subtract(1, "day")
  //     .valueOf()
  // },
  // {
  //   name: "Quite",
  //   videos: 12345,
  //   isPopular: true,
  //   isTrending: false,
  //   uploadedOn: moment(Date.now())
  //     .subtract(2, "days")
  //     .valueOf()
  // },
  // {
  //   name: "Rescue",
  //   videos: 23223,
  //   isPopular: true,
  //   isTrending: false,
  //   uploadedOn: moment(Date.now())
  //     .subtract(2, "days")
  //     .valueOf()
  // },
  // {
  //   name: "Agonizing",
  //   videos: 13245,
  //   isPopular: true,
  //   isTrending: false,
  //   uploadedOn: moment(Date.now())
  //     .subtract(2, "days")
  //     .valueOf()
  // },
  // {
  //   name: "Stich",
  //   videos: 12335,
  //   isPopular: true,
  //   isTrending: false,
  //   uploadedOn: moment(Date.now())
  //     .subtract(2, "days")
  //     .valueOf()
  // },
  // {
  //   name: "Bored",
  //   videos: 14345,
  //   isPopular: false,
  //   isTrending: false,
  //   uploadedOn: moment(Date.now())
  //     .subtract(2, "days")
  //     .valueOf()
  // },
  // {
  //   name: "Hot",
  //   videos: 12345,
  //   isPopular: true,
  //   isTrending: false,
  //   uploadedOn: moment(Date.now())
  //     .subtract(2, "days")
  //     .valueOf()
  // },
  // {
  //   name: "Tasteful",
  //   videos: 23223,
  //   isPopular: false,
  //   isTrending: true,
  //   uploadedOn: moment(Date.now())
  //     .subtract(5, "days")
  //     .valueOf()
  // },
  // {
  //   name: "Grin",
  //   videos: 13245,
  //   isPopular: true,
  //   isTrending: false,
  //   uploadedOn: moment(Date.now())
  //     .subtract(5, "days")
  //     .valueOf()
  // },
  // {
  //   name: "Fat",
  //   videos: 12335,
  //   isPopular: false,
  //   isTrending: false,
  //   uploadedOn: moment(Date.now())
  //     .subtract(5, "days")
  //     .valueOf()
  // },
  // {
  //   name: "Gate",
  //   videos: 14345,
  //   isPopular: true,
  //   isTrending: false,
  //   uploadedOn: moment(Date.now())
  //     .subtract(5, "days")
  //     .valueOf()
  // },
  // {
  //   name: "Bels",
  //   videos: 12345,
  //   isPopular: true,
  //   isTrending: true,
  //   uploadedOn: moment(Date.now())
  //     .subtract(10, "days")
  //     .valueOf()
  // },
  // {
  //   name: "Rub",
  //   videos: 12345,
  //   isPopular: true,
  //   isTrending: false,
  //   uploadedOn: moment(Date.now())
  //     .subtract(10, "days")
  //     .valueOf()
  // },
  // {
  //   name: "holiday",
  //   videos: 23223,
  //   isPopular: true,
  //   isTrending: false,
  //   uploadedOn: moment(Date.now())
  //     .subtract(10, "days")
  //     .valueOf()
  // },
  // {
  //   name: "balance",
  //   videos: 13245,
  //   isPopular: true,
  //   isTrending: false,
  //   uploadedOn: moment(Date.now())
  //     .subtract(10, "days")
  //     .valueOf()
  // },
  // {
  //   name: "scatter",
  //   videos: 12335,
  //   isPopular: true,
  //   isTrending: false,
  //   uploadedOn: moment(Date.now())
  //     .subtract(10, "days")
  //     .valueOf()
  // },
  // {
  //   name: "trot",
  //   videos: 14345,
  //   isPopular: false,
  //   isTrending: false,
  //   uploadedOn: moment(Date.now())
  //     .subtract(10, "days")
  //     .valueOf()
  // },
  // {
  //   name: "scissors",
  //   videos: 12345,
  //   isPopular: true,
  //   isTrending: false,
  //   uploadedOn: moment(Date.now())
  //     .subtract(10, "days")
  //     .valueOf()
  // },
  // {
  //   name: "Tin",
  //   videos: 23223,
  //   isPopular: false,
  //   isTrending: true,
  //   uploadedOn: moment(Date.now())
  //     .subtract(1, "day")
  //     .valueOf()
  // }
];
export default categories;
