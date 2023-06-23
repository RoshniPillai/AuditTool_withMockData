function createData(
  date: string,
  id: number,
  entityType: string,
  entity: string,
  action: string,
  user: string
) {
  return { date, id, entityType, entity, action, user };
}

export const rows = [
  createData(
    "31/3/23 14:16",
    1,
    "Asset Update",
    "Update permissions",
    "AHT183",
    "John Smith"
  ),
  createData(
    "31/3/23 14:16",
    2,
    "Asset Update",
    "Delete",
    "AHT184",
    "Tes T’Account"
  ),
  createData(
    "31/3/23 14:16",
    3,
    "Notification Sent",
    "content",
    "content",
    "content"
  ),
  createData("31/3/23 14:16", 4, "content", "content", "content", "content"),
  createData("31/3/23 14:16", 5, "content", "content", "content", "content"),
  createData("31/3/23 14:16", 6, "content", "content", "content", "content"),
  createData("31/3/23 14:16", 7, "content", "content", "content", "content"),
  createData("31/3/23 14:16", 8, "content", "content", "content", "content")
];
export const entityName = [
  {
    name: "Assignments & Circuits"
  },
  {
    name: "Map Editing"
  },
  {
    name: "Notifications"
  },
  {
    name: "???"
  },
  {
    name: "Asset Health"
  },
  {
    name: "Assset Config"
  },
  {
    name: "User Config"
  },
  {
    name: "???"
  }
];

export const stockData = [
  {
    company: "Twitter Inc",
    ticker: "TWTR",
    stockPrice: "22.76 USD",
    timeElapsed: "5 sec ago"
  },
  {
    company: "Square Inc",
    ticker: "SQ",
    stockPrice: "45.28 USD",
    timeElapsed: "10 sec ago"
  },
  {
    company: "Shopify Inc",
    ticker: "SHOP",
    stockPrice: "341.79 USD",
    timeElapsed: "3 sec ago"
  },
  {
    company: "Sunrun Inc",
    ticker: "RUN",
    stockPrice: "9.87 USD",
    timeElapsed: "4 sec ago"
  },
  {
    company: "Adobe Inc",
    ticker: "ADBE",
    stockPrice: "300.99 USD",
    timeElapsed: "10 sec ago"
  },
  {
    company: "HubSpot Inc",
    ticker: "HUBS",
    stockPrice: "115.22 USD",
    timeElapsed: "12 sec ago"
  }
];
