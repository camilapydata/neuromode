function decomposeTask(task, frictionScore) {
  if (frictionScore > 20) {
    return [
      `Step 1: Define ONE core feature inside "${task}".`,
      `Step 2: Implement only that single feature.`,
      `Step 3: Validate that it works independently.`,
      `Step 4: Expand carefully to the next feature.`,
      `Step 5: Integrate features incrementally.`
    ];
  }

  if (frictionScore > 12) {
    return [
      `Step 1: Break "${task}" into smaller functional parts.`,
      `Step 2: Implement the smallest executable part.`,
      `Step 3: Test and refine.`,
      `Step 4: Expand gradually.`
    ];
  }

  return [
    `Step 1: Start implementing "${task}".`,
    `Step 2: Test the result.`,
    `Step 3: Improve if necessary.`
  ];
}

module.exports = { decomposeTask };
