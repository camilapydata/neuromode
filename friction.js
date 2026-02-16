function calculateCognitiveFriction(task) {
  const words = task.split(" ").length;

  const heavyKeywords = [
    "scalable",
    "architecture",
    "distributed",
    "microservices",
    "multi-tenant",
    "analytics",
    "dashboard",
    "authentication",
    "billing",
    "infrastructure",
    "monitoring",
    "enterprise"
  ];

  let score = words;

  heavyKeywords.forEach(keyword => {
    if (task.toLowerCase().includes(keyword)) {
      score += 5;
    }
  });

  return score;
}

module.exports = { calculateCognitiveFriction };
