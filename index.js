const fs = require("fs");
const path = require("path");

const teamsList = [
  {
    debut: 1991,
    retirement: 9999,
    id: 1,
    name: "Adelaide",
    abbrev: "ADE",
  },
  {
    name: "Brisbane Lions",
    abbrev: "BRI",
    id: 2,
    debut: 1987,
    retirement: 9999,
  },
  {
    retirement: 9999,
    debut: 1897,
    id: 3,
    name: "Carlton",
    abbrev: "CAR",
  },
  {
    id: 4,
    retirement: 9999,
    debut: 1897,
    abbrev: "COL",
    name: "Collingwood",
  },
  {
    id: 5,
    debut: 1897,
    retirement: 9999,
    name: "Essendon",
    abbrev: "ESS",
  },
  {
    retirement: 9999,
    debut: 1995,
    id: 6,
    name: "Fremantle",
    abbrev: "FRE",
  },
  {
    id: 7,
    debut: 1897,
    retirement: 9999,
    name: "Geelong",
    abbrev: "GEE",
  },
  {
    name: "Gold Coast",
    abbrev: "GCS",
    retirement: 9999,
    debut: 2011,
    id: 8,
  },
  {
    debut: 2012,
    retirement: 9999,
    id: 9,
    name: "Greater Western Sydney",
    abbrev: "GWS",
  },
  {
    id: 10,
    debut: 1925,
    retirement: 9999,
    name: "Hawthorn",
    abbrev: "HAW",
  },
  {
    name: "Melbourne",
    abbrev: "MEL",
    id: 11,
    debut: 1897,
    retirement: 9999,
  },
  {
    name: "North Melbourne",
    abbrev: "NOR",
    retirement: 9999,
    debut: 1925,
    id: 12,
  },
  {
    retirement: 9999,
    debut: 1997,
    id: 13,
    name: "Port Adelaide",
    abbrev: "POR",
  },
  {
    name: "Richmond",
    abbrev: "RIC",
    id: 14,
    debut: 1908,
    retirement: 9999,
  },
  {
    debut: 1897,
    retirement: 9999,
    id: 15,
    name: "St Kilda",
    abbrev: "STK",
  },
  {
    debut: 1897,
    retirement: 9999,
    id: 16,
    name: "Sydney",
    abbrev: "SYD",
  },
  {
    id: 17,
    retirement: 9999,
    debut: 1987,
    name: "West Coast",
    abbrev: "WCE",
  },
  {
    name: "Western Bulldogs",
    abbrev: "WBD",
    debut: 1925,
    retirement: 9999,
    id: 18,
  },
];

// write to file
const writeTeamsToFile = async () => {
  const teamsToJson = { teams: [...teamsList] }; // we add the "teams" key to reference it in json
  const teams = await fs.promises
    .writeToFile("/data/teams.json", teamslist)
    .catch((err) => console.log(err));
  return teams;
};

// write to file

const dataDirPath = path.resolve(path.join(__dirname) + "/data");

const teamsToJson = { teams: [...teamsList] }; // we will create a JSON object for our teamslist.
fs.writeFile(
  `${dataDirPath}/teams.json`,
  JSON.stringify(teamsToJson),
  "utf8",
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been written.");
  }
);

const playersList = [
  {
    id: 1,
    name: "Max Gawn",
    teamId: 11,
    teamName: "Melbourne",
  },
  {
    id: 2,
    name: "Brody Grundy",
    teamId: 11,
    teamName: "Melbourne",
  },
  {
    id: 3,
    name: "Isac Kiah",
    teamId: 11,
    teamName: "Melbourne",
  },
  {
    id: 4,
    name: "Oliver",
    teamId: 11,
    teamName: "Melbourne",
  },
];
