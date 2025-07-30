export type AchievementType = {
  date: string;
  eventName: string;
  organization: string;
  awardType: string;
  description: string[];
};

export const achievementData: AchievementType[] = [
  {
    date: "July 2021",
    eventName: "Bolgatanga Local Startup Summit",
    organization: "Dansyn ISO",
    awardType: "Winner",
    description: [],
  },

  {
    date: "October 2020",
    eventName: "Wazihub IoT Maiden Competition",
    organization: "Waziup",
    awardType: "Contestant",
    description: [
      "Developed a prototype, KoaTech, that uses IoT and AI to help farmers combat plant diseases. Competed against teams from 6 African countries.",
    ],
  },

  {
    date: "February 2020,",
    eventName: "Invent Electronics Arduino Challenge",
    organization: "Invent Electronics",
    awardType: "Winner",
    description: [
      "Designed 'Test4C’, a device used to test electronic components for projects, especially those used by DIY developers. It gave a feasible solution to the problem most DIY developers face.",
    ],
  },

  {
    date: "November 2018,",
    eventName: "Second African Youth SDGs Summit",
    organization: "UNICERF",
    awardType: "Contestant",
    description: [
      "with a team of 2, pitched a system to help real estates customers spend less time and money when looking for products to buy",
      "simplified the process involved when seeking a home in a real estate company",
    ],
  },
  {
    date: "October 2018,",
    eventName: "UNICEF Generation Unlimited Hackathon",
    organization: "UNICERF",
    awardType: "First runner-up",
    description: [
      "with a team of 2, pitched a system to help real estates customers spend less time and money when looking for products to buy",
    ],
  },
  {
    date: "September 2018,",
    eventName: "Creatives in Augmented Reality Programme",
    organization: "Kumasi Hive",
    awardType: "First runner-up",
    description: [
      "Designed a system to help real estate customers spend less when looking for products to buy. The solution used augmented reality to",
    ],
  },
];
