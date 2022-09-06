class Player {
  constructor(clickerPower, stone, food, gold, people, workforce) {
    this.clickerPower = clickerPower;
    this.stone = stone;
    this.food = food;
    this.gold = gold;
    this.people = people;
    this.workforce = workforce;
  }
}

// Global Variables

let p1 = new Player(
  {
    level: 1,
    cost: 10,
  }, 0, 0, 0, 0, {
  unemployed: 0,
  farmers: {
    count: 0,
    level: 1,
    upgradeCost: 10,
    levelMod: 2,
  },
  miners: {
    count: 0,
    level: 1,
    upgradeCost: 10,
    levelMod: 3,
  },
  merchants: {
    count: 0,
    level: 1,
    upgradeCost: 10,
    levelMod: 5,
  },
  summoners: {
    count: 0,
    level: 1,
    upgradeCost: 10,
    levelMod: 1,
  },
  // warriors: {
  //   count: 0,
  //   level: 1,
  //   upgradeCost: 10,
  // },
  // researchers: {
  //   count: 0,
  //   level: 1,
  //   upgradeCost: 10,
  // },
  // builders: {
  //   count: 0,
  //   level: 1,
  //   upgradeCost: 10,
  // },
  // spies: {
  //   count: 0,
  //   level: 1,
  //   upgradeCost: 10,
  // },
});
let p2 = new Player(
  {
    level: 1,
    cost: 10
  }, 0, 0, 0, 0, {
  unemployed: 0,
  farmers: {
    count: 0,
    level: 1,
    upgradeCost: 10,
  },
  miners: {
    count: 0,
    level: 1,
    upgradeCost: 10,
  },
  merchants: {
    count: 0,
    level: 1,
    upgradeCost: 10,
  },
  summoners: {
    count: 0,
    level: 1,
    upgradeCost: 10,
  },
  warriors: {
    count: 0,
    level: 1,
    upgradeCost: 10,
  },
  researchers: {
    count: 0,
    level: 1,
    upgradeCost: 10,
  },
  builders: {
    count: 0,
    level: 1,
    upgradeCost: 10,
  },
  spies: {
    count: 0,
    level: 1,
    upgradeCost: 10,
  },
});

// Updates all Resources
function updateResources() {
  // Get values and areas to display values
  let displayedResources = [
    {
      value: p1.stone,
      id: "p1-stone"
    },
    {
      value: p1.workforce.miners.count * (p1.workforce.miners.level * p1.workforce.miners.levelMod),
      id: "p1-spc"
    },
    {
      value: p1.food,
      id: "p1-food"
    },
    {
      value: p1.workforce.farmers.count * (p1.workforce.farmers.level * p1.workforce.farmers.levelMod) - p1.people,
      id: "p1-fpc"

    },
    {
      value: p1.gold,
      id: "p1-gold"
    },
    {
      value: p1.workforce.merchants.count * (p1.workforce.merchants.level * p1.workforce.merchants.levelMod),
      id: "p1-gpc"
    },
    {
      value: p1.people,
      id: "p1-people"
    },
    {
      value: p1.workforce.summoners.count * (p1.workforce.summoners.level * p1.workforce.summoners.levelMod),
      id: "p1-ppc"
    },
    {
      value: p1.workforce.unemployed,
      id: "p1-unemployed"
    },
    {
      value: p1.workforce.farmers.count,
      id: "p1-farmers-count"
    },
    {
      value: p1.workforce.farmers.level,
      id: "p1-farmers-level"
    },
    {
      value: p1.workforce.farmers.upgradeCost,
      id: "p1-farmers-cost"
    },
    {
      value: p1.workforce.miners.count,
      id: "p1-miners-count"
    },
    {
      value: p1.workforce.miners.level,
      id: "p1-miners-level"
    },
    {
      value: p1.workforce.miners.upgradeCost,
      id: "p1-miners-cost"
    },
    {
      value: p1.workforce.merchants.count,
      id: "p1-merchants-count"
    },
    {
      value: p1.workforce.merchants.level,
      id: "p1-merchants-level"
    },
    {
      value: p1.workforce.merchants.upgradeCost,
      id: "p1-merchants-cost"
    },
    {
      value: p1.workforce.summoners.count,
      id: "p1-summoners-count"
    },
    {
      value: p1.workforce.summoners.level,
      id: "p1-summoners-level"
    },
    {
      value: p1.workforce.summoners.upgradeCost,
      id: "p1-summoners-cost"
    },
    // {
    //   value: p1.workforce.warriors.count,
    //   id: "p1-warriors-count"
    // },
    // {
    //   value: p1.workforce.warriors.level,
    //   id: "p1-warriors-level"
    // },
    // {
    //   value: p1.workforce.warriors.upgradeCost,
    //   id: "p1-warriors-cost"
    // },
    // {
    //   value: p1.workforce.researchers.count,
    //   id: "p1-researchers-count"
    // },
    // {
    //   value: p1.workforce.researchers.level,
    //   id: "p1-researchers-level"
    // },
    // {
    //   value: p1.workforce.researchers.upgradeCost,
    //   id: "p1-researchers-cost"
    // },
    // {
    //   value: p1.workforce.builders.count,
    //   id: "p1-builders-count"
    // },
    // {
    //   value: p1.workforce.builders.level,
    //   id: "p1-builders-level"
    // },
    // {
    //   value: p1.workforce.builders.upgradeCost,
    //   id: "p1-builders-cost"
    // },
    // {
    //   value: p1.workforce.spies.count,
    //   id: "p1-spies-count"
    // },
    // {
    //   value: p1.workforce.spies.level,
    //   id: "p1-spies-level"
    // },
    // {
    //   value: p1.workforce.spies.upgradeCost,
    //   id: "p1-spies-cost"
    // },
    {
      value: p1.clickerPower.level,
      id: "p1-click-power-upgrade-level"
    },
    {
      value: p1.clickerPower.cost,
      id: "p1-click-power-upgrade-cost"
    },
  ]
  // Loop through value area pairs
  displayedResources.forEach(resource => {

    // Get Write to correct area
    let resourceArea = document.getElementById(`${resource.id}`);

    let resourceText = resourceArea.querySelector('.resource-text');

    resourceText.innerText = resource.value;
  })
}

// Clicks a resource for p1 or p2
function clickResource(resource, location) {
  switch (resource) {
    case 'stone':
      if (location == 'playerBank') {
        p1.stone += p1.clickerPower.level;
      } else {
        p2.stone += p2.clickerPower.level;
      }
      break;

    case 'food':
      if (location == 'playerBank') {
        p1.food += p1.clickerPower.level;
      } else {
        p2.food += p2.clickerPower.level;
      }
      break;

    case 'gold':
      if (location == 'playerBank') {
        p1.gold += p1.clickerPower.level;
      } else {
        p2.gold += p2.clickerPower.level;
      }
      break;

    case 'people':
      if (location == 'playerBank') {
        p1.people += p1.clickerPower.level;
        p1.workforce.unemployed += p1.clickerPower.level;
      } else {
        p2.people += p2.clickerPower.level;
        p2.workforce.unemployed += p2.clickerPower.level;
      }
      break;

  }
  updateResources();
}

function employPerson(team, job) {
  if (team) {
    let unemployed = p1.workforce.unemployed

    if (unemployed > 0) {
      p1.workforce.unemployed--;
      p1.workforce[job].count++;
    }

  } else {
    let unemployed = p2.workforce.unemployed

    if (unemployed > 0) {
      p2.workforce.unemployed--;
      p2.workforce[job].count++;
    }
  }
  updateResources();
}

function unemployPerson(team, job) {
  if (team) {
    let employed = p1.workforce[job].count

    if (employed > 0) {
      p1.workforce.unemployed++;
      p1.workforce[job].count--;
    }

  } else {
    let employed = p2.workforce[job]

    if (employed > 0) {
      p2.workforce.unemployed++;
      p2.workforce[job].count--;
    }
  }
  updateResources();
}

function killRandomWorker(team) {
  let workforce = ["farmers", "miners", "merchants", "summoners"]
  let killable = workforce.filter(job => team.workforce[job].count > 0)

  console.log(killable)

  if (team.workforce.unemployed > 0) {
    team.workforce.unemployed--;
  } else {
    let kill = killable[Math.floor(Math.random() * killable.length)]
    console.log(team.workforce[kill].count)
    team.workforce[kill].count--;
  }
}

function upgradeUnit(team, job) {
  if (team) {
    if (p1.workforce[job].upgradeCost <= p1.gold) {
      p1.workforce[job].level++;
      p1.gold -= p1.workforce[job].upgradeCost;
      p1.workforce[job].upgradeCost *= 2;
    }
  } else {
    if (p2.workforce[job].upgradeCost <= p1.gold) {
      p2.workforce[job].level++;
      p2.gold -= p2.workforce[job].upgradeCost;
      p2.workforce[job].upgradeCost *= 2;
    }
  }
  updateResources();
}

function upgradeClick(team) {
  if (team) {
    if (p1.clickerPower.cost <= p1.gold) {
      p1.clickerPower.level++;
      p1.gold -= p1.clickerPower.cost;
      p1.clickerPower.cost *= 2;
    }
  } else {
    if (p2.clickerPower.cost <= p2.gold) {
      p2.clickerPower.level++;
      p2.gold -= p2.clickerPower.cost;
      p2.clickerPower.cost *= 2;
    }
  }
  updateResources();
}

function humanLoop(team) {
  // Workers Working
  team.food += team.workforce.farmers.count * (team.workforce.farmers.level * team.workforce.farmers.levelMod);

  team.stone += team.workforce.miners.count * (team.workforce.miners.level * team.workforce.miners.levelMod);

  team.gold += team.workforce.merchants.count * (team.workforce.merchants.level * team.workforce.merchants.levelMod);

  team.people += team.workforce.summoners.count * (team.workforce.summoners.level * team.workforce.summoners.levelMod);

  team.workforce.unemployed += team.workforce.summoners.count * (team.workforce.summoners.level * team.workforce.summoners.levelMod);

  // Food cost
  team.food -= team.people;
  if (team.food < 0) {
    for (let index = team.food; index < 0; index++) {
      team.people--;
      killRandomWorker(team)
    }
    team.food = 0;
  }

  updateResources();
}

setInterval(function () { humanLoop(p1) }, 2000)
// updateResources()