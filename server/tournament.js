var _ = require('underscore');

module.exports = {

	/*
		(integer) number_of_rounds - the total number of rounds to be played
		(array) participants - where each participant is an object with the following attributes:
			(string) alias - given by user when registering for a tournament
		(array) matches - where each match is an object
			string) participant_alias_1 - alias of first participant
			string) participant_alias_2 - alias of second participant
		(array) rounds - where each round is an object:
			(string) choice_1 - the first participant's choice for this round
			(string) choice_2 - the second participant's choice for this round
	*/
	number_of_rounds: 5,
	participants: [],
	matches: [],
	rounds: [],
	started: false,

	start: function() {

		this.started = true;
	},

	addParticipant: function(options) {

		options = JSON.parse(JSON.stringify(options || {}));
		options = _.defaults(options || {}, {
			alias: null,
		});

		_.each(['alias'], function(field) {
			if (!options[field]) {
				throw new Error('Failed to add participant: "' + field + '" is required');
			}
		});

		var aliasAlreadyUsed = _.some(this.participants, function(participant) {
			return participant.alias === options.alias;
		});

		if (aliasAlreadyUsed) {
			throw new Error('Failed to add participant: Alias already taken');
		}

		var participant = _.pick(options, 'alias');
		this.participants.push(participant);
	},
};
