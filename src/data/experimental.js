const shopData = [
  {
    title: "cactus",
    items: [
      {
        id: 1,
        name: "Sansevieria cylindrica",
        description:
          "Sansevieria cylindrica are very low maintenance. They will survive if you forget to water or feed them, and they can thrive being root-bound in a pot. They are hardy plants that don’t typically have problems with diseases or pests, and they’re not overly picky about their growing conditions.",
        imageUrl: [
          "https://images.pexels.com/photos/3192175/pexels-photo-3192175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.unsplash.com/photo-1599719840151-53fc447e7143?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1598880940371-c756e015fea1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
          "https://images.unsplash.com/photo-1625480801685-53583d6c3bc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
        ],
        price: 5000,
        treatment: {
          sunglight: "Indirect light",
          water: "Soil feels dry",
          fertilizer: "Sandy soil",
          temperature: "Above 50°F",
        },
      },
      {
        id: 2,
        name: "Prickly pear cactus",
        description:
          "Prickly pear cactus is easy and undemanding to grow, they are hardy plants and survive most conditions. It is a great starter plant or gift because it’s so easy to care for. It will tolerate lower light conditions, but thrives in sun, and needs very little water.",
        imageUrl: [
          "https://images.pexels.com/photos/4442276/pexels-photo-4442276.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/3502165/pexels-photo-3502165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://images.pexels.com/photos/1034476/pexels-photo-1034476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/2568458/pexels-photo-2568458.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        ],
        price: 6000,
        treatment: {
          sunglight: "Bright light",
          water: "Soil feels dry",
          fertilizer: "well draining soil",
          temperature: "Warm, dry weather",
        },
      },
      {
        id: 3,
        name: "Green aloe vera",
        description:
          "Aloe vera plants are not only attractive indoor succulents, but they’re also known for their medical and cosmetic benefits like treatings scrapes and burns. They are easy to care for but they absolutely need bright light, they don't do so well in low light conditions. loe vera is a succulent plant species of the genus Aloe. The plant is stemless or very short-stemmed with thick, greenish, fleshy leaves that fan out from the plant’s central stem. The margin of the leaf is serrated with small teeth.",
        imageUrl: [
          "https://images.pexels.com/photos/1840270/pexels-photo-1840270.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/912410/pexels-photo-912410.jpeg?cs=srgb&dl=pexels-dominika-roseclay-912410.jpg&fm=jpg",
          "https://images.pexels.com/photos/904621/pexels-photo-904621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/4299556/pexels-photo-4299556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        ],
        price: 4500,
        treatment: {
          sunglight: "Bright light",
          water: "When soil is dry",
          fertilizer: "well-draining potting mix",
          temperature: "between 55 and 80°F",
        },
      },
      {
        id: 4,
        name: "Haworthia Fasciata",
        description:
          "Haworthia, the adorable “polka-dotted” succulent, is one very easy to plant to care for. It’s similar to the beloved aloe vera plant but has a funky personality to it. It is an easy to grow plant and with any succulents, the most dangerous situation is too much water",
        imageUrl: [
          "https://images.pexels.com/photos/2516650/pexels-photo-2516650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/1445418/pexels-photo-1445418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/3234638/pexels-photo-3234638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/1439179/pexels-photo-1439179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        ],
        price: 9000,
        treatment: {
          sunglight: "bright indirect light",
          water: "very 2-3 weeks",
          fertilizer: "Cactus mix",
          temperature: "65°F-75°F.",
        },
      },
      {
        id: 5,
        name: "Echeveria fleur blanc",
        description:
          "Echeveria fleur blanc is a rossette shaped echveria with a beautiful green colouring. They are are fast becoming the ideal houseplants, they love sitting on sunny windowsills and take little time and care to look after.",
        imageUrl: [
          "https://images.pexels.com/photos/4507748/pexels-photo-4507748.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/4503815/pexels-photo-4503815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://images.pexels.com/photos/2227127/pexels-photo-2227127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/4507751/pexels-photo-4507751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        ],
        price: 15000,
        treatment: {
          sunglight: "Bright indirect light",
          water: "Every 2 weeks",
          fertilizer: "Fast draining soil",
          temperature: "Warm temperature",
        },
      },
      {
        id: 6,
        name: "Jade Plant",
        description:
          "Crassula ovata popularly known as Jade plant is a succulent that thrives indoors provided that it gets a few hours of sunshine per day",
        imageUrl: [
          "https://images.pexels.com/photos/1863621/pexels-photo-1863621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://images.pexels.com/photos/1863621/pexels-photo-1863621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://images.pexels.com/photos/1863621/pexels-photo-1863621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://images.pexels.com/photos/1863621/pexels-photo-1863621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        ],
        price: 15000,
        treatment: {
          sunglight: "Few hrs of sunshine/day",
          water: "Soil is dried out",
          fertilizer: "Well-draining soil",
          temperature: "between 60 F and 75 F",
        },
      },
    ],
  },
  {
    title: "indoor",
    items: [
      {
        id: 7,
        name: "ZZ raven plant",
        description:
          "Zamioculcas zamiifolia popularly known as ZZ raven plant is an indoor plant that is perfect for beginners. It is a low mentainenace and easy to take care of plant that adds a beutiful dark asthetic to your indoor space. It’s a slow-growing plant that can reach anywhere from a foot and a half to three feet tall.",
        imageUrl: [
          "https://images.unsplash.com/photo-1598531402973-61a7a963b9e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
          "https://www.bybrittanygoldwyn.com/wp-content/uploads/2021/01/ZZ-Plant-Care-8.jpg.webp",
          "https://mk0flooracoi4b2ixi58.kinstacdn.com/wp-content/uploads/2020/06/ZZ-Raven.jpg",
          "https://images.unsplash.com/photo-1598531402973-61a7a963b9e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
        ],
        price: 2500,
        treatment: {
          sunglight: "Indirect light",
          water: "Soil is dried out",
          fertilizer: "A pot with drainage hole",
          temperature: "Above 50°F",
        },
      },
      {
        id: 8,
        name: "Monstera deliciosa",
        description:
          "Monstera deliciosa, the Swiss cheese plant, is a species of flowering plant. This climbing evergreen is a popular easy-to-grow houseplant and a favorite. It makes a bold statement with it deep glossy vibe needs so it needs lots of space so don't push it to a corner.",
        imageUrl: [
          "https://images.pexels.com/photos/2001154/pexels-photo-2001154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://images.pexels.com/photos/3125195/pexels-photo-3125195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1598737490942-1754b0a3e131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=605&q=80",
        ],
        price: 7500,
        treatment: {
          sunglight: "Bright to medium sunlight",
          water: "1-2 weeks",
          fertilizer: "peat-based potting",
          temperature: "65°F-85°F range",
        },
      },
      {
        id: 9,
        name: "Philodendron scandens",
        description:
          "Heartleaf philodendron known as Philodendron scandens, is a popular house plant because it is extremely easy to grow, add this bad boy to a space and its sure to add a stunning beauty to any room.",
        imageUrl: [
          "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1600411833457-4b8ea2427e2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
          "https://images.unsplash.com/photo-1600411833708-12c01f911887?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpbG9kZW5kcm9uJTIwc2NhbmRlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1594525622124-86be08198f7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=343&q=80",
        ],
        price: 5500,
        treatment: {
          sunglight: "Bright to medium light",
          water: "2inches of soil is dry",
          fertilizer: "Peat moss-based mix",
          temperature: "65-75°F",
        },
      },
      {
        id: 10,
        name: "Snake plant",
        description:
          "Sansevieria trifasciata also known as 'Mother-in-Law’s Tongue' or 'snake' is one of the most popular houseplants, they are easy to take care of and require minimum attention. they can grow up to 8 feet tall",
        imageUrl: [
          "https://images.pexels.com/photos/5825581/pexels-photo-5825581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/5825382/pexels-photo-5825382.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/4505468/pexels-photo-4505468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        ],
        price: 2500,
        treatment: {
          sunglight: "Most light conditions",
          water: "When soil feels dry",
          fertilizer: "Loose, well drained mix",
          temperature: "between 70 and 90",
        },
      },
      {
        id: 11,
        name: "Chamaedorea elegans",
        description:
          "Chamaedorea elegans is bringing the outdoors in to your home. It is a considered low-maintenance and hardy houseplants, It is a parlor palms and a great place to start for the beginner",
        imageUrl: [
          "https://images.pexels.com/photos/4076589/pexels-photo-4076589.jpeg?cs=srgb&dl=pexels-dominika-roseclay-4076589.jpg&fm=jpg",
          "https://images.pexels.com/photos/7010679/pexels-photo-7010679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://images.unsplash.com/photo-1588082672429-606d1cb18af3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhbWFlZG9yZWElMjBlbGVnYW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1588082672352-dd3eda2f8d81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhbWFlZG9yZWElMjBlbGVnYW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        ],
        price: 2500,
        treatment: {
          sunglight: "Bright, filtered sunlight",
          water: "top 1 inch of soil feels dry",
          fertilizer: "peat-based potting mix",
          temperature: "low of 50 degrees",
        },
      },
      {
        id: 12,
        name: "Yucca",
        description:
          "adds a focal point to a room or works as part of an attractive, indoor display. Growing yucca in containers is a great way to bring the outdoors inside.",
        imageUrl: [
          "https://images.unsplash.com/photo-1585738876562-7d008f53022a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eXVjY2F8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1591102527977-3531f6a4f538?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eXVjY2F8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1585738876562-7d008f53022a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eXVjY2F8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1591102527977-3531f6a4f538?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eXVjY2F8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        ],
        price: 2500,
        treatment: {
          sunglight: "Full sunlight/ indirect",
          water: "dries between waterings",
          fertilizer: "",
          temperature: "Indoor temperature",
        },
      },
    ],
  },
  {
    title: "office",
    items: [
      {
        id: 13,
        name: "Calathea",
        description:
          "Calathea popularly know as prayer plants They have a reputation for being finicky also known among the community as drama queens cause they prefer filtered water, even at that thy are generally considered low maintenance and adds a radiating vibe to every space they are put in.",
        imageUrl: [
          "https://images.pexels.com/photos/6754892/pexels-photo-6754892.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/6754946/pexels-photo-6754946.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://images.pexels.com/photos/8206433/pexels-photo-8206433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.unsplash.com/photo-1616276595426-81d5a3cfc772?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=368&q=80",
        ],
        price: 2500,
        treatment: {
          sunglight: "bright indirect light",
          water: "1-2 weeks",
          fertilizer: "don't need alot of fertilizers ",
          temperature: "65°F-85°F",
        },
      },
      {
        id: 14,
        name: "Peace lily",
        description:
          "Peace lilies (Spathiphyllum), also known as closet plants, are a popular choice for offices. These lovely plants not only brighten up a living space, but are also excellent at cleaning the air of the room they are in. It doesn't get better than this, It’s striking, iconic and simply beautiful. The Peace Lily is easy to care for because it’s tough and doesn’t need frequent watering.",
        imageUrl: [
          "https://images.pexels.com/photos/3698376/pexels-photo-3698376.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhY2UlMjBsaWx5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1616690248297-1ec539dd910f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=325&q=80",
          "https://images.pexels.com/photos/3698376/pexels-photo-3698376.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        ],
        price: 4500,
        treatment: {
          sunglight: "Indirect light",
          water: "Top inch of soil feels dry.",
          fertilizer: "Pot with drainage holes",
          temperature: "Room temperature",
        },
      },
      {
        id: 15,
        name: "Lucky bamboo heaven",
        description:
          "These add a funky style to any environment they are put in, you can decide to put them in a vase with water and they are good to go or rooted in a pot with soil, either ways it works fine. Only water your lucky bamboo only with bottled or distilled water, or tap water that has been left out for 24 hours to allow the chlorine to evaporate.",
        imageUrl: [
          "https://images.unsplash.com/photo-1585155839850-9546d90dbb74?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bHVja3klMjBiYW1ib298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1611137884113-d952b439f985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHVja3klMjBiYW1ib298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1567331711402-509c12c41959?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHVja3klMjBiYW1ib298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1611137884113-d952b439f985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHVja3klMjBiYW1ib298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        ],
        price: 3500,
        treatment: {
          sunglight: "full sunlight",
          water: "Weekly",
          fertilizer: "rich potting soil",
          temperature: "warm temperature",
        },
      },
      {
        id: 16,
        name: "ZZ plant",
        description:
          "The Zamioculcas zamiifolia also known as the zz plant is a common and very popular houseplants",
        imageUrl: [
          "https://images.unsplash.com/photo-1597593873848-409a508574f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80",
          "https://images.unsplash.com/photo-1604762512526-b7ce049b5764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHp6JTIwcGxhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHp6JTIwcGxhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        ],
        price: 4500,
        treatment: {
          sunglight: "Indirect light",
          water: "2-3 weeks",
          fertilizer: "well-draining mix",
          temperature: " 65°F-85°F",
        },
      },
    ],
  },
  {
    title: "planters",
    items: [
      {
        id: 17,
        name: "pot",
        description: "",
        imageUrl: [
          "https://images.pexels.com/photos/4350808/pexels-photo-4350808.jpeg?cs=srgb&dl=pexels-tiia-pakk-4350808.jpg&fm=jpg",
          "https://images.pexels.com/photos/4350808/pexels-photo-4350808.jpeg?cs=srgb&dl=pexels-tiia-pakk-4350808.jpg&fm=jpg",
          "https://images.pexels.com/photos/4350808/pexels-photo-4350808.jpeg?cs=srgb&dl=pexels-tiia-pakk-4350808.jpg&fm=jpg",
          "https://images.pexels.com/photos/4350808/pexels-photo-4350808.jpeg?cs=srgb&dl=pexels-tiia-pakk-4350808.jpg&fm=jpg",
        ],
        price: 4000,
        treatment: {
          sunglight: "moderate sunlight",
          water: "Once daily",
          fertilizer: "Once in 6 months",
          temperature: "Room temperature",
        },
      },
      {
        id: 18,
        name: "pot20",
        description: "",
        imageUrl: [
          "https://images.pexels.com/photos/4350808/pexels-photo-4350808.jpeg?cs=srgb&dl=pexels-tiia-pakk-4350808.jpg&fm=jpg",
          "https://images.pexels.com/photos/4350808/pexels-photo-4350808.jpeg?cs=srgb&dl=pexels-tiia-pakk-4350808.jpg&fm=jpg",
          "https://images.pexels.com/photos/4350808/pexels-photo-4350808.jpeg?cs=srgb&dl=pexels-tiia-pakk-4350808.jpg&fm=jpg",
          "https://images.pexels.com/photos/4350808/pexels-photo-4350808.jpeg?cs=srgb&dl=pexels-tiia-pakk-4350808.jpg&fm=jpg",
        ],
        price: 4000,
        treatment: {
          sunglight: "",
          water: "",
          fertilizer: "",
          temperature: "",
        },
      },
    ],
  },
];

export default shopData;
