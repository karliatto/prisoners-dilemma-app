(function() {

	// The total number of participants:
	var numParticipants = 10;

	// The maximum time for players to make each choice:
	var maxTimeForChoice = 4;// seconds

	// The time to wait after each round:
	var delayAfterRound = 4;// seconds

	// The time to wait after each match:
	var delayBeforeMatch = 8;// seconds

	// Number of rounds for each match:
	var numRounds = 7;

	var numMatches = Math.max(numParticipants - 1, 0);

	// The maximum number of matches for the whole tournament (regardless of number of participants).
	var maxNumberOfMatches = 6;

	if (maxNumberOfMatches) {
		numMatches = Math.min(numMatches, maxNumberOfMatches);
	}

	var estimatedTimeForWholeTournament = (numMatches * delayBeforeMatch) + (numMatches * numRounds * (maxTimeForChoice + delayAfterRound));

	console.log(
		'Estimated time for tournament is',
		Math.round((estimatedTimeForWholeTournament / 60) * 100) / 100,
		'minutes'
	);

})();
