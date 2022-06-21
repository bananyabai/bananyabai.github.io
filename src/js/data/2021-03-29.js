dataSetVersion = "2021-04-07"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Game",
    key: "game",
    tooltip: "Check this to restrict to characters from certain games.",
    checked: false,
    sub: [
      { name: "Phoenix Wright: Ace Attorney", key: "AA" },
      { name: "Phoenix Wright: Ace Attorney – Justice for All", key: "JfA" },
      { name: "Phoenix Wright: Ace Attorney – Trials and Tribulations", key: "TaT" },
      { name: "Apollo Justice: Ace Attorney", key: "AJ" },
      { name: "Ace Attorney Investigations: Miles Edgeworth", key: "AAI" },
      { name: "Ace Attorney Investigations 2", tooltip: "05 - Kaikidan", key: "AAI2" },
      { name: "Phoenix Wright: Ace Attorney – Dual Destinies", key: "DD" },
      { name: "Phoenix Wright: Ace Attorney – Spirit of Justice", key: "SoJ" },
      { name: "Dai Gyakuten Saiban: Naruhodo Ryunosuke no Boken", key: "DGS" },
      { name: "Dai Gyakuten Saiban 2: Naruhodo Ryunosuke no Kakugo", key: "DGS2" },
    ]
  },
  {
    name: "Filter by Character role",
    key: "role",
    tooltip: "Check this to restrict to certain Ace Attorney character roles.",
    checked: false,
    sub: [ { name: "Attorney", key: "att" }, { name: "Prosecutor", key: "pro" }, { name: "Detective", key: "det" }, { name: "Assistant", key: "ass" }, { name: "Judge", key: "jud" }
    ]
  },
  {
    name: "Exclude victims",
    key: "victim",
    tooltip: "Check this to exclude murder victims."
  },
  {
    name: "Exclude animals",
    key: "animal",
    tooltip: "Check this to exclude pets and animals."
  },
  {
    name: "Exclude DLC",
    key: "dlc",
    tooltip: "Check this to exclude characters from DLC cases."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Larry Butz",
    img: "jb3pdTT.png",
    opts: {
      game: [ "AA", "TaT", "AAI", "AAI2", "SoJ" ]
    }
  },
  {
    name: "Mia Fey",
    img: "zanVASd.png",
    opts: {
      game: [ "AA", "JfA", "TaT" ],
      role: ["att"]
    }
  },
  {
    name: "The judge",
    img: "r4Deq3j.png",
    opts: {
      game: ["AA", "JfA", "TaT", "AJ", "DD" ],
      role: ["jud"]
    }
  },
  {
    name: "Winston Payne",
    img: "HtVvDmP.png",
    opts: {
      game: ["AA", "JfA", "TaT", "AJ" ],
      role: ["pro"]
    },
  },
  {
    name: "Phoenix Wright",
    img: "7SCxAHc.png",
    opts: {
      game: [ "AA", "JfA", "TaT", "AJ", "DD" , "SoJ"],
      role: ["att"]
    }
  },
  {
    name: "Frank Sahwit",
    img: "jYtivNY.png",
    opts: {
      game: ["AA"]
    }
  },
  {
    name: "Cindy Stone",
    img: "gBULpbL.png",
    opts: {
      game: ["AA"],
      victim: true
    }
  },
  {
    name: "Bellboy",
    img: "bFbIkxt.png",
    opts: {
      game: ["AA"]
    }
  },
  {
    name: "Miles Edgeworth",
    img: "Ih6TlWk.png",
    opts: {
      game: [ "AA", "JfA", "TaT", "AAI", "AAI2" ],
      role: ["pro"]
    }
  },
  {
    name: "Maya Fey",
    img: "v3IHTJ5.png",
    opts: {
      game: ["AA", "JfA", "TaT"],
      role: ["ass"]
    }
  },
  {
    name: "Marvin Grossberg",
    img: "sXGpONR.png",
    opts: {
      game: ["AA", "TaT"]
    }
  },
  {
    name: "Dick Gumshoe",
    img: "QlRT6Hm.png",
    opts: {
      game: ["AA", "JfA", "TaT", "AAI", "AAI2"],
      role: ["det"]
    }
  },
  {
    name: "April May",
    img: "GykIILP.png",
    opts: {
      game: ["AA"]
    }
  },
  {
    name: "Redd White",
    img: "MEpk4tI.png",
    opts: {
      game: ["AA"]
    }
  },
  {
    name: "Misty Fey",
    img: "aGsaImU.png",
    opts: {
      game: ["TaT"]
    }
  },
  {
    name: "Sal Manella",
    img: "Iq15nv1.png",
    opts: {
      game: ["AA"],
    }
  },
  {
    name: "Wendy Oldbag",
    img: "6HAywGk.png",
    opts: {
      game: ["AA", "JfA"]
    }
  },
  {
    name: "Will Powers",
    img: "wH3I5fF.png",
    opts: {
      game: ["AA", "JfA"]
    }
  },
  {
    name: "Cody Hackins",
    img: "QltbYG9.png",
    opts: {
      game: ["AA"]
    }
  },
  {
    name: "Jack Hammer",
    img: "KJZXekn.png",
    opts: {
      game: ["AA"],
      victim: true
    }
  },
  {
    name: "Penny Nichols",
    img: "eqHkg2i.png",
    opts: {
      game: ["AA"]
    }
  },
  {
    name: "Dee Vasquez",
    img: "nR2lENK.png",
    opts: {
      game: ["AA"]
    }
  },
  {
    name: "Lotta Hart",
    img: "AIPs1IE.png",
    opts: {
      game: ["AA", "JfA" ]
    }
  },
  {
    name: "Manfred von Karma",
    img: "0BQYW9c.png",
    opts: {
      game: ["AA"],
      role: ["pro"]
    }
  },
  {
    name: "Robert Hammond",
    img: "yHmkuhj.png",
    opts: {
      game: ["AA"],
      victim: true
    }
  },
  {
    name: "Polly",
    img: "Rk8N1a6.png",
    opts: {
      game: ["AA"],
      animal: true
    }
  },
  {
    name: "Missile",
    img: "53W103N.png",
    opts: {
      game: ["AA"],
      animal: true
    }
  },
  {
    name: "Yanni Yogi",
    img: "Nd8MNrA.png",
    opts: {
      game: ["AA"]
    }
  },
  {
    name: "Gregory Edgeworth",
    img: "vkiyWgr.png",
    opts: {
      game: ["AA"],
      victim: true
    }
  },
  {
    name: "Mike Meekins",
    img: "EqS6M7M.png",
    opts: {
      game: ["AA", "AJ"]
    }
  },
  {
    name: "Ema Skye",
    img: "zdYr7US.png",
    opts: {
      game: ["AA", "AJ"],
      role: ["ass", "det"]
    }
  },
  {
    name: "Damon Gant",
    img: "Oy9eNNE.png",
    opts: {
      game: ["AA"]
    }
  },
  {
    name: "Bruce Goodman",
    img: "xo7bJ7H.png",
    opts: {
      game: [ "AA" ],
      victim: true
    }
  },
  {
    name: "Jake Marshall",
    img: "z4BguDs.png",
    opts: {
      game: ["AA"],
      role: ["det"]
    }
  },
  {
    name: "Lana Skye",
    img: "mcmEUeA.png",
    opts: {
      game: ["AA"]
    }
  },
  {
    name: "Angel Starr",
    img: "EJFIJCm.png",
    opts: {
      game: ["AA"]
    }
  },
  {
    name: "Neil Marshall",
    img: "upG8TMC.png",
    opts: {
      game: ["AA"],
      victim: true
    }
  },
  {
    name: "Joe Darke",
    img: "PXXTKFI.png",
    opts: {
      game: ["AA"],
      victim: true
    }
  },
  {
    name: "Maggey Byrde",
    img: "ZIjD01d.png",
    opts: {
      game: ["JfA", "TaT"]
    }
  },
  {
    name: "Dustin Prince",
    img: "uB5rI8W.png",
    opts: {
      game: ["JfA"],
      victim: true
    }
  },
  {
    name: "Richard Wellington",
    img: "pMG0u0v.png",
    opts: {
      game: ["JfA"]
    }
  },
  {
    name: "Hickfield",
    img: "90kt0E8.png",
    opts: {
      game: ["JfA", "AJ"]
    }
  },
  {
    name: "Pearl Fey",
    img: "a8cqueY.png",
    opts: {
      game: ["JfA", "TaT"],
      role: ["ass"]
    }
  },
  {
    name: "Morgan Fey",
    img: "oNo60LQ.png",
    opts: {
      game: ["JfA"]
    }
  },
  {
    name: "Franziska von Karma",
    img: "QyLI6Cl.png",
    opts: {
      game: ["JfA", "TaT" ],
      role: ["pro"]
    }
  },
  {
    name: "Turner Grey",
    img: "2OhTcua.png",
    opts: {
      game: ["JfA"],
      victim: true
    }
  },
  {
    name: "Ini Miney (deceased)",
    img: "VAuuxZF.png",
    opts: {
      game: ["JfA"],
      victim: true
    }
  },
  {
    name: "Mimi Miney (aka Ini Miney)",
    img: "dalAE8i.png",
    opts: {
      game: ["JfA"]
    }
  },
  {
    name: "Acro",
    img: "FyZen8E.png",
    opts: {
      game: ["JfA"]
    }
  },
  {
    name: "Bat",
    img: "m2Klfed.png",
    opts: {
      game: ["JfA"],
      victim: true
    }
  },
  {
    name: "Regina Berry",
    img: "eB5vpEz.png",
    opts: {
      game: ["JfA"]
    }
  },
  {
    name: "Russell Berry",
    img: "7Hk3sB3.png",
    opts: {
      game: ["JfA"],
      victim: true
    }
  },
  {
    name: "Max Galactica",
    img: "A4V2GmC.png",
    opts: {
      game: ["JfA"]
    }
  },
  {
    name: "Moe",
    img: "xqmVdnX.png",
    opts: {
      game: ["JfA"]
    }
  },
  {
    name: "Money",
    img: "aHtA6kv.png",
    opts: {
      game: ["JfA"],
      animal: true
    }
  },
  {
    name: "Regent",
    img: "oZt9Eu7.png",
    opts: {
      game: ["JfA"],
      animal: true
    }
  },
  {
    name: "Benjamin Woodman",
    img: "8w5SDxc.png",
    opts: {
      game: ["JfA"]
    }
  },
  {
    name: "Adrian Andrews",
    img: "LT41v18.png",
    opts: {
      game: ["JfA", "TaT"]
    }
  },
  {
    name: "Shelly de Killer",
    img: "yOKE0UT.png",
    opts: {
      game: ["JfA"]
    }
  },
  {
    name: "Juan Corrida",
    img: "ciVFcpR.png",
    opts: {
      game: ["JfA"],
      victim: true
    }
  },
  {
    name: "Matt Engarde",
    img: "4kkta0D.png",
    opts: {
      game: ["JfA"]
    }
  },
  {
    name: "Celeste Inpax",
    img: "RxcsOJk.png",
    opts: {
      game: ["JfA"],
      victim: true
    }
  },
  {
    name: "Godot",
    img: "mqcooo8.png",
    opts: {
      game: ["TaT"],
      role: ["pro"]
    }
  },
  {
    name: "The judge's brother",
    img: "3LXlR0Z.png",
    opts: {
      game: ["TaT"],
      role: ["jud"]
    }
  },
  {
    name: "Doug Swallow",
    img: "hWJCdG9.png",
    opts: {
      game: ["TaT"],
      victim: true
    }
  },
  {
    name: "Ron DeLite",
    img: "K7jxpad.png",
    opts: {
      game: ["TaT"]
    }
  },
  {
    name: "Kane Bullard",
    img: "vDjmF8O.png",
    opts: {
      game: ["TaT"],
      victim: true
    }
  },
  {
    name: "Luke Atmey",
    img: "m4xNn2k.png",
    opts: {
      game: ["TaT"]
    }
  },
  {
    name: "Desiree DeLite",
    img: "XNX9Qol.png",
    opts: {
      game: ["TaT"]
    }
  },
  {
    name: "Glen Elg",
    img: "8NDulx8.png",
    opts: {
      game: ["TaT"],
      victim: true
    }
  },
  {
    name: "Viola Cadaverini",
    img: "yL1BMsI.png",
    opts: {
      game: ["TaT"]
    }
  },
  {
    name: "Lisa Basil",
    img: "QPeQWYq.png",
    opts: {
      game: ["TaT"]
    }
  },
  {
    name: "Jean Armstrong",
    img: "9XEN7Kh.png",
    opts: {
      game: ["TaT"]
    }
  },
  {
    name: "Bruto Cadaverini",
    img: "rRIUzt8.png",
    opts: {
      game: ["TaT"]
    }
  },
  {
    name: "Victor Kudo",
    img: "L6f0twX.png",
    opts: {
      game: ["TaT"]
    }
  },
  {
    name: "Furio Tigre",
    img: "iEpY29Z.png",
    opts: {
      game: ["TaT"]
    }
  },
  {
    name: "Dahlia Hawthorne",
    img: "j3L6yUz.png",
    opts: {
      game: ["TaT"]
    }
  },
  {
    name: "Terry Fawles",
    img: "Yt9ZKXr.png",
    opts: {
      game: ["TaT"]
    }
  },
  {
    name: "Valerie Hawthorne",
    img: "cL8frIp.png",
    opts: {
      game: ["TaT"],
      victim: true
    }
  },
  {
    name: "Sister Iris",
    img: "cChg8Mv.png",
    opts: {
      game: ["TaT"]
    }
  },
  {
    name: "Sister Bikini",
    img: "kBFhkTh.png",
    opts: {
      game: ["TaT"]
    }
  },
  {
    name: "Apollo Justice",
    img: "oUy1O6g.png",
    opts: {
      game: ["AJ", "DD", "SoJ" ],
      role: ["att"]
    }
  },
  {
    name: "Kristoph Gavin",
    img: "3VpTkA9.png",
    opts: {
      game: ["AJ"]
    }
  },
  {
    name: "Trucy Wright",
    img: "5jVL5lL.png",
    opts: {
      game: ["AJ", "DD", "SoJ"],
      role: ["ass"]
    }
  },
  {
    name: "The Amazing Mr Hat",
    img: "DQRWmxl.png",
    opts: {
      game: ["AJ"]
    }
  },
  {
    name: "Zak Gramarye",
    img: "39sohNj.png",
    opts: {
      game: ["AJ"],
      victim: true
    }
  },
  {
    name: "Olga Orly",
    img: "q5FmvkG.png",
    opts: {
      game: ["AJ"]
    }
  },
  {
    name: "Klavier Gavin",
    img: "vyTTAQS.png",
    opts: {
      game: ["AJ", "DD"],
      role: ["pro"]
    }
  },
  {
    name: "Guy Eldoon",
    img: "oibLfuf.jpg",
    opts: {
      game: ["AJ"]
    }
  },
  {
    name: "Plum Kitaki",
    img: "4R9EX2T.png",
    opts: {
      game: ["AJ"]
    }
  },
  {
    name: "Winfred Kitaki",
    img: "DddfGYp.png",
    opts: {
      game: ["AJ"]
    }
  },
  {
    name: "Wocky Kitaki",
    img: "nwV056R.png",
    opts: {
      game: ["AJ"]
    }
  },
  {
    name: "Pal Meraktis",
    img: "6IjH7yq.png",
    opts: {
      game: ["AJ"],
      victim: true
    }
  },
  {
    name: "Wesley Stickler",
    img: "KWvSz0V.png",
    opts: {
      game: ["AJ"]
    }
  },
  {
    name: "Alita Tiala",
    img: "rtyi7s0.png",
    opts: {
      game: ["AJ"]
    }
  },
  {
    name: "Valant Gramarye",
    img: "8Wk4i0k.png",
    opts: {
      game: ["AJ"]
    }
  },
  {
    name: "Lamiroir (Thalassa Gramarye)",
    img: "tXzfr9x.png",
    opts: {
      game: ["AJ"]
    }
  },
  {
    name: "Daryan Crescend",
    img: "N314dU3.png",
    opts: {
      game: ["AJ"]
    }
  },
  {
    name: "Romein LeTouse",
    img: "foEAYaV.png",
    opts: {
      game: ["AJ"],
      victim: true
    }
  },
  {
    name: "Machi Tobaye",
    img: "ut9MKsn.png",
    opts: {
      game: ["AJ"]
    }
  },
  {
    name: "Spark Brushel",
    img: "Pl4frua.png",
    opts: {
      game: ["AJ"]
    }
  },
  {
    name: "Drew Misham",
    img: "3ZOdTxK.png",
    opts: {
      game: ["AJ"],
      victim: true
    }
  },
  {
    name: "Vera Misham",
    img: "G9Dtv1Z.png",
    opts: {
      game: ["AJ"]
    }
  },
  {
    name: "Magnifi Gramarye",
    img: "bqkXQiV.png",
    opts: {
      game: ["AJ"],
      victim: true
    }
  },
  {
    name: "Athena Cykes",
    img: "G51LSJ2.png",
    opts: {
      game: ["DD", "SoJ"],
      role: ["att"]
    }
  },
  {
    name: "Simon Blackquill",
    img: "26bOKeE.png",
    opts: {
      game: ["DD"],
      role: ["pro"]
    }
  },
  {
    name: "Taka",
    img: "ijzxIBv.png",
    opts: {
      game: ["DD"],
      animal: true
    }
  },
  {
    name: "Gaspen Payne",
    img: "flVM3J4.png",
    opts: {
      game: ["DD"],
      role: ["pro"]
    }
  },
  {
    name: "Juniper Woods",
    img: "6ekKBXB.png",
    opts: {
      game: ["DD"]
    }
  },
  {
    name: "Ted Tonate",
    img: "ThQb5I0.png",
    opts: {
      game: ["DD"]
    }
  },
  {
    name: "Candice Arme",
    img: "j3piqMl.png",
    opts: {
      game: ["DD"],
      victim: true
    }
  },
  {
    name: "Bobby Fulbright",
    img: "ThAsAca.png",
    opts: {
      game: ["DD"],
      role: ["det"]
    }
  },
  {
    name: "Rex Kyubi",
    img: "bGQV7gy.png",
    opts: {
      game: ["DD"],
      victim: true
    }
  },
  {
    name: "Damian Tenma",
    img: "bgBaduy.png",
    opts: {
      game: ["DD"]
    }
  },
  {
    name: "Jinxie Tenma",
    img: "cuwQ2KO.png",
    opts: {
      game: ["DD"]
    }
  },
  {
    name: "Phineas Filch",
    img: "eS3AosP.png",
    opts: {
      game: ["DD"]
    }
  },
  {
    name: "Florent L'Belle",
    img: "2yeNkM7.png",
    opts: {
      game: ["DD"]
    }
  },
  {
    name: "Hugh O'Conner",
    img: "ZPwHOjC.png",
    opts: {
      game: ["DD"]
    }
  },
  {
    name: "Robin Newman",
    img: "mCpy64l.png",
    opts: {
      game: ["DD"]
    }
  },
  {
    name: "Aristotle Means",
    img: "179Ng2r.png",
    opts: {
      game: ["DD"]
    }
  },
  {
    name: "Constance Courte",
    img: "X4YSpPh.png",
    opts: {
      game: ["DD"],
      victim: true
    }
  },
  {
    name: "Myriam Scuttlebutt",
    img: "IuRcwBq.png",
    opts: {
      game: ["DD"]
    }
  },
  {
    name: "Clay Terran",
    img: "s8Zbzut.png",
    opts: {
      game: ["DD"],
      victim: true
    }
  },
  {
    name: "Solomon Starbuck",
    img: "gdQpzKb.png",
    opts: {
      game: ["DD"]
    }
  },
  {
    name: "Yuri Cosmos",
    img: "1uEfzlF.png",
    opts: {
      game: ["DD"]
    }
  },
  {
    name: "Aura Blackquill",
    img: "6Oij1ru.png",
    opts: {
      game: ["DD"]
    }
  },
  {
    name: "Ponco",
    img: "MR3L951.png",
    opts: {
      game: ["DD"]
    }
  },
  {
    name: "Clonco",
    img: "j3CmGwM.png",
    opts: {
      game: ["DD"]
    }
  },
  {
    name: "Metis Cykes",
    img: "mcRBgvU.png",
    opts: {
      game: ["DD"],
      victim: true
    }
  },
  {
    name: "Sasha Buckler",
    img: "edyDytJ.png",
    opts: {
      game: ["DD"],
      dlc: true
    }
  },
  {
    name: "Orla Shipley",
    img: "SfisANa.png",
    opts: {
      game: ["DD"],
      animal: true,
      dlc: true
    }
  },
  {
    name: "Jack Shipley",
    img: "Gkpqmqo.png",
    opts: {
      game: ["DD"],
      victim: true,
      dlc: true
    }
  },
  {
    name: "Marlon Rimes",
    img: "v65tRSI.png",
    opts: {
      game: ["DD"],
      dlc: true
    }
  },
  {
    name: "Herman Crab",
    img: "DzMUYLb.png",
    opts: {
      game: ["DD"],
      dlc: true
    }
  },
  {
    name: "Norma DePlume",
    img: "5ILHrqj.png",
    opts: {
      game: ["DD"],
      dlc: true
    }
  },
  {
    name: "Azura Summers",
    img: "bHqJrkz.png",
    opts: {
      game: ["DD"],
      dlc: true
    }
  },
  {
    name: "Nahyuta Sahdmadhi",
    img: "I8p4R66.png",
    opts: {
      game: ["SoJ"],
      role: ["pro"]
    }
  },
  {
    name: "Rayfa Padma Khura’in",
    img: "yKIxbYh.png",
    opts: {
      game: ["SoJ"],
      role: ["ass"]
    }
  },
  {
    name: "Ahlbi Ur’gaid",
    img: "6ugvura.png",
    opts: {
      game: ["SoJ"]
    }
  },
  {
    name: "Judge (Khura'in)",
    img: "Omtbkuo.png",
    opts: {
      game: ["SoJ"],
      role: ["jud"]
    }
  },
  {
    name: "Amara Sigatar Khura’in",
    img: "W0gR6jv.png",
    opts: {
      game: ["SoJ"]
    }
  },
  {
    name: "Shah'do",
    img: "0aF56cF.png",
    opts: {
      game: ["SoJ"],
      animal: true
    }
  },
  {
    name: "Inga Karkhuul Khura’in",
    img: "ApcYl48.png",
    opts: {
      game: ["SoJ"]
    }
  },
  {
    name: "Dhurke Sahdmadhi",
    img: "hmKwr9Y.png",
    opts: {
      game: ["SoJ"]
    }
  },
  {
    name: "Datz Are’bal",
    img: "xFSfju6.png",
    opts: {
      game: ["SoJ"]
    }
  },
  {
    name: "Ga’ran Sigatar Khura’in",
    img: "gKURrXO.png",
    opts: {
      game: ["SoJ"],
      role: ["pro"]
    }
  },
  {
    name: "Pees’lubn Andistan’dhin",
    img: "Cz0edSg.png",
    opts: {
      game: ["SoJ"]
    }
  },
  {
    name: "Paht Rohl",
    img: "8sDOMFN.png",
    opts: {
      game: ["SoJ"],
      victim: true
    }
  },
  {
    name: "Bonny de Famme",
    img: "1utfg0s.png",
    opts: {
      game: ["SoJ"]
    }
  },
  {
    name: "Betty de Famme",
    img: "PKvl0Uv.png",
    opts: {
      game: ["SoJ"]
    }
  },
  {
    name: "Roger Retinz",
    img: "NPHupZD.png",
    opts: {
      game: ["SoJ"]
    }
  },
  {
    name: "Manov Mistree",
    img: "GicWFkx.png",
    opts: {
      game: ["SoJ"],
      victim: true
    }
  },
  {
    name: "Tahrust Inmee",
    img: "jd9focl.png",
    opts: {
      game: ["SoJ"]
    }
  },
  {
    name: "Puhray Zeh’lot",
    img: "HZfBxfR.png",
    opts: {
      game: ["SoJ"],
      victim: true
    }
  },
  {
    name: "Beh’leeb Inmee",
    img: "Y0MFEY0.png",
    opts: {
      game: ["SoJ"]
    }
  },
  {
    name: "Taifu Toneido",
    img: "QnJLPWY.png",
    opts: {
      game: ["SoJ"],
      victim: true
    }
  },
  {
    name: "Bucky Whet",
    img: "1C21FAz.png",
    opts: {
      game: ["SoJ"]
    }
  },
  {
    name: "Geiru Toneido",
    img: "V93dN6I.png",
    opts: {
      game: ["SoJ"]
    }
  },
  {
    name: "Uendo Toneido",
    img: "ChApfX2.png",
    opts: {
      game: ["SoJ"]
    }
  },
  {
    name: "Paul Atishon",
    img: "B3tYb6B.png",
    opts: {
      game: ["SoJ"]
    }
  },
  {
    name: "Archie Buff",
    img: "9XdDogC.png",
    opts: {
      game: ["SoJ"],
      victim: true
    }
  },
  {
    name: "Armie Buff",
    img: "xDx2TOF.png",
    opts: {
      game: ["SoJ"]
    }
  },
  {
    name: "Ellen Wyatt",
    img: "L4ICxpg.png",
    opts: {
      game: ["SoJ"],
      dlc: true
    }
  },
  {
    name: "Sorin Sprocket",
    img: "DCAYoPf.png",
    opts: {
      game: ["SoJ"],
      dlc: true
    }
  },
  {
    name: "Pierce Nichody",
    img: "MKVRJu2.png",
    opts: {
      game: ["SoJ"],
      dlc: true
    }
  },
  {
    name: "Dumas Gloomsbury",
    img: "8q6RU1o.png",
    opts: {
      game: ["SoJ"],
      victim: true,
      dlc: true
    }
  },
  {
    name: "Selena Sprocket",
    img: "zylYvG8.png",
    opts: {
      game: ["SoJ"],
      dlc: true
    }
  },
  {
    name: "Kay Faraday",
    img: "gudNIlI.png",
    opts: {
      game: ["AAI"],
      role: ["ass"]
    }
  },
  {
    name: "Shi-Long Lang",
    img: "QKVdyBM.png",
    opts: {
      game: ["AAI"],
      role: ["det"]
    }
  },
  {
    name: "Calisto Yew",
    img: "Im87S7V.png",
    opts: {
      game: ["AAI"],
      role: ["att"]
    }
  },
  {
    name: "Tyrell Badd",
    img: "Ib6iv4a.png",
    opts: {
      game: ["AAI"],
      role: ["det"]
    }
  },
  {
    name: "Buddy Faith",
    img: "19SbhM7.png",
    opts: {
      game: ["AAI"],
      victim: true
    }
  },
  {
    name: "Jacques Portsman",
    img: "kl9tFYR.png",
    opts: {
      game: ["AAI"]
    }
  },
  {
    name: "Zinc Lablanc",
    img: "twl6rhy.png",
    opts: {
      game: ["AAI"]
    }
  },
  {
    name: "Akbey Hicks",
    img: "pL95mcc.png",
    opts: {
      game: ["AAI"],
      victim: true
    }
  },
  {
    name: "Cammy Meele",
    img: "fvz3Hs3.png",
    opts: {
      game: ["AAI"]
    }
  },
  {
    name: "Rhoda Teneiro",
    img: "EOZGi25.png",
    opts: {
      game: ["AAI"]
    }
  },
  {
    name: "Ernest Amano",
    img: "zyxXous.png",
    opts: {
      game: ["AAI"]
    }
  },
  {
    name: "Lance Amano",
    img: "9VhFTDS.png",
    opts: {
      game: ["AAI"]
    }
  },
  {
    name: "Colin Devorae",
    img: "DEkwYeJ.png",
    opts: {
      game: ["AAI"],
      victim: true
    }
  },
  {
    name: "Lauren Paups",
    img: "Vxchbh2.png",
    opts: {
      game: ["AAI"]
    }
  },
  {
    name: "Manny Coachen",
    img: "UiP2MwT.png",
    opts: {
      game: ["AAI"],
      victim: true
    }
  },
  {
    name: "Byrne Faraday",
    img: "HL5PsAz.png",
    opts: {
      game: ["AAI"],
      victim: true
    }
  },
  {
    name: "Deid Mann",
    img: "rlzC712.png",
    opts: {
      game: ["AAI"],
      victim: true
    }
  },
  {
    name: "Mack Rell",
    img: "TNcszVp.png",
    opts: {
      game: ["AAI"]
    }
  },
  {
    name: "Quercus Alba",
    img: "LfKIeei.png",
    opts: {
      game: ["AAI"]
    }
  },
  {
    name: "Ka-Shi Nou",
    img: "TDtKkpc.png",
    opts: {
      game: ["AAI"],
      victim: true
    }
  },
  {
    name: "Colias Palaeno",
    img: "e9bSH3g.png",
    opts: {
      game: ["AAI"]
    }
  },
  {
    name: "Raymond Shields",
    img: "opxPeYB.png",
    opts: {
      game: ["AAI2"],
      role: ["att"]
    }
  },
  {
    name: "Justine Courtney",
    img: "Iobjx0W.png",
    opts: {
      game: ["AAI2"],
      role: ["jud"]
    }
  },
  {
    name: "Sebastian Debeste",
    img: "KqOVLTh.png",
    opts: {
      game: ["AAI2"],
      role: ["pro"]
    }
  },
  {
    name: "Di-Jun Huang",
    img: "06zTGHf.png",
    opts: {
      game: ["AAI2"]
    }
  },
  {
    name: "Nicole Swift",
    img: "qlMLv5x.png",
    opts: {
      game: ["AAI2"]
    }
  },
  {
    name: "Horace Knightley",
    img: "5rEf8HN.png",
    opts: {
      game: ["AAI2"]
    }
  },
  {
    name: "Ethan Rooke",
    img: "qFBPJk6.png",
    opts: {
      game: ["AAI2"],
      victim: true
    }
  },
  {
    name: "Patricia Roland",
    img: "hWVCg4l.png",
    opts: {
      game: ["AAI2"]
    }
  },
  {
    name: "Simon Keyes",
    img: "4xEu3xY.png",
    opts: {
      game: ["AAI2"]
    }
  },
  {
    name: "Jay Elbird",
    img: "XjFatYf.png",
    opts: {
      game: ["AAI2"]
    }
  },
  {
    name: "Sirhan Dogen",
    img: "v03i0aV.png",
    opts: {
      game: ["AAI2"]
    }
  },
  {
    name: "Jeffrey Master",
    img: "zMYHpjU.png",
    opts: {
      game: ["AAI2"]
    }
  },
  {
    name: "Katherine Hall",
    img: "PuXkr84.png",
    opts: {
      game: ["AAI2"]
    }
  },
  {
    name: "Delicia Scones",
    img: "lkDp7eH.png",
    opts: {
      game: ["AAI2"]
    }
  },
  {
    name: "Dane Gustavia",
    img: "5PlKnSZ.png",
    opts: {
      game: ["AAI2"]
    }
  },
  {
    name: "Pierre Hoquet",
    img: "RfQHWhk.png",
    opts: {
      game: ["AAI2"],
      victim: true
    }
  },
  {
    name: "Karin Jenson",
    img: "LBS3aEk.png",
    opts: {
      game: ["AAI2"]
    }
  },
  {
    name: "Bonnie Young",
    img: "PMZypP6.png",
    opts: {
      game: ["AAI2"]
    }
  },
  {
    name: "Blaise Debeste",
    img: "ZgmNUrQ.png",
    opts: {
      game: ["AAI2"]
    }
  },
  {
    name: "Jill Crane",
    img: "FcVVrk9.png",
    opts: {
      game: ["AAI2"],
      victim: true
    }
  },
  {
    name: "John Marsh",
    img: "2PJrP1l.png",
    opts: {
      game: ["AAI2"]
    }
  },
  {
    name: "Jack Cameron",
    img: "STxL7OH.png",
    opts: {
      game: ["AAI2"],
      victim: true
    }
  },
  {
    name: "Ryunosuke Naruhodo",
    img: "peyeng0.png",
    opts: {
      game: ["DGS"],
      role: ["att"]
    }
  },
  {
    name: "Susato Mikotoba",
    img: "KJ9sAjI.png",
    opts: {
      game: ["DGS"],
      role: ["ass"]
    }
  },
  {
    name: "Kazuma Asogi",
    img: "l1K7Czm.png",
    opts: {
      game: ["DGS"],
      role: ["att"]
    }
  },
  {
    name: "Herlock Sholmes",
    img: "ME5NJ80.png",
    opts: {
      game: ["DGS"],
      role: ["det"]
    }
  },
  {
    name: "Iris Wilson",
    img: "IZcjbBY.png",
    opts: {
      game: ["DGS"],
      role: ["ass"]
    }
  },
  {
    name: "Barok van Zieks",
    img: "vkNZaVP.png",
    opts: {
      game: ["DGS"],
      role: ["pro"]
    }
  },
  {
    name: "Yujin Mikotoba",
    img: "PUZEuvY.png",
    opts: {
      game: ["DGS"],
      role: ["ass"]
    }
  },
  {
    name: "John H Wilson",
    img: "55sJUsM.png",
    opts: {
      game: ["DGS"],
      victim: true
    }
  },
  {
    name: "Seishiro Jigoku",
    img: "aQZ8RzZ.png",
    opts: {
      game: ["DGS"],
      role: ["jud"]
    }
  },
  {
    name: "Taketsuchi Auchi",
    img: "YRKkX5c.png",
    opts: {
      game: ["DGS"],
      role: ["pro"]
    }
  },
  {
    name: "Satoru Hosonaga",
    img: "RJtb4JP.png",
    opts: {
      game: ["DGS"],
      role: ["det"]
    }
  },
  {
    name: "Iyesa Nosa",
    img: "VkCLQGA.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Kyurio Korekuta",
    img: "ocinpqU.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Jezaille Brett",
    img: "G7SGrTu.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Nikolina Pavlova",
    img: "oy4IqQh.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Bif Strogenov",
    img: "6LZ9PhO.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Vilen Borshevik",
    img: "hmxKM5h.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Mael Stronghart",
    img: "3ZvJjOs.png",
    opts: {
      game: ["DGS"],
      role: ["jud"]
    }
  },
  {
    name: "Magnus McGilded",
    img: "UWf2qqy.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Mason Milverton",
    img: "RGJQQks.png",
    opts: {
      game: ["DGS"],
      victim: true
    }
  },
  {
    name: "Beppo",
    img: "lfrktVG.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Lay D. Furst",
    img: "BjDVdnZ.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Bruce Fairplay",
    img: "xfjt3oy.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Gina Lestrade",
    img: "nBmXgJI.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Soseki Natsume",
    img: "og9onMG.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Olive Green",
    img: "2rqeCD4.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "John Garrideb",
    img: "RubbpB1.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Joan Garrideb",
    img: "TnOKKXs.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Roly Beate",
    img: "OofX0Oz.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Patricia Beate",
    img: "WCrKylv.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Tobias Gregson",
    img: "6rhkZDS.png",
    opts: {
      game: ["DGS"],
      role: ["det"]
    }
  },
  {
    name: "Wagahai",
    img: "d2te760.png",
    opts: {
      game: ["DGS"],
      animal: true
    }
  },
  {
    name: "Pop Windibank",
    img: "AM7UL33.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Eggert Benedict",
    img: "9OJAaRb.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Nash Skulkin",
    img: "dMgLHhs.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Ringo Skulkin",
    img: "ImlBzj5.png",
    opts: {
      game: ["DGS"]
    }
  },
  {
    name: "Judge (British Empire)",
    img: "WJ7lLY6.png",
    opts: {
      game: ["DGS"],
      role: ["jud"]
    }
  },
  {
    name: "Toby",
    img: "LmSqHEQ.png",
    opts: {
      game: ["DGS2"],
      animal: true
    }
  },
  {
    name: "Genshin Asogi",
    img: "NQzQZQf.png",
    opts: {
      game: ["DGS2"],
    }
  },
  {
    name: "Klint van Zieks",
    img: "OPvnDE8.png",
    opts: {
      game: ["DGS2"],
    }
  },
  {
    name: "Rei Membami",
    img: "hu8JgFV.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "Raiten Menimemo",
    img: "6lbYY8m.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "William Shamspeare",
    img: "iuRazhm.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "Adron B. Metermann",
    img: "SEfyeZI.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "Quinby Altamont",
    img: "syODzvt.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "Duncan Ross",
    img: "ICEvlY3.png",
    opts: {
      game: ["DGS2"],
      victim: true
    }
  },
  {
    name: "Albert Harebrayne",
    img: "K5FkNcd.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "Esmeralda Tusspells",
    img: "90QeZ5A.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "Gotts",
    img: "jhwFY4I.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "Odie Asman",
    img: "oLYbJLs.png",
    opts: {
      game: ["DGS2"],
      victim: true
    }
  },
  {
    name: "Balthazar Lune",
    img: "clxkn4g.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "Enoch Drebber",
    img: "8YsRF88.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "Courtney Sithe",
    img: "eLBwSeJ.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "Maria Gorey",
    img: "tAgkM20.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "Evie Vigil",
    img: "sHYoIE2.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "Daley Vigil",
    img: "gbZBf0s.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "Barry Caidin",
    img: "KQ2OTRk.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "Venus",
    img: "uCj55d4.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "Sandwich",
    img: "YKhhhCt.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "Fabien de Rousseau",
    img: "KPxV4n2.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "Peppino de Rossi",
    img: "I1Gczp2.png",
    opts: {
      game: ["DGS2"]
    }
  },
  {
    name: "Tchikin Strogenov",
    img: "soMLBHH.png",
    opts: {
      game: ["DGS2"]
    }
  }
];
