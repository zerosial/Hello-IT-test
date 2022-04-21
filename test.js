var solution = (participant, completion) =>
  participant.find(
    (participant) => !completion[participant]--,
    completion.map(
      (participant) =>
        (completion[participant] = (completion[participant] | 0) + 1)
    )
  );
