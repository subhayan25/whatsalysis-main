export const META_REGEX = /(\d{1,2}\/\d{1,2}\/\d{2,4}), (\d{1,2}:\d{2}(?: [apAP][mM])?) - /;

export const whatsappChatEvents = {
	message: /(?<sender>.*?): (?<message>.*)/s,
	subjectChange: /(?<changer>.+) changed the subject(?: from "(?<from>.+)")? to "(?<to>.+)"/,
	descriptionChange: /(?<changer>.+) (?<effect>changed|deleted) the group description/,
	iconChange: /(?<changer>.+) (?<effect>changed|deleted) this group's icon/,
	settingsChange:
		/(?<changer>.+) changed this group's settings to allow (?<to>only admins|all participants) to (?<setting>send messages to this group|edit this group's info)/,
	adminChange: /(?<admin>You're (?<effect>now|no longer) an admin)/,
	personAdded: /(?<adder>.+) added (?<added>.+)/,
	personJoined: /(?<joined>.+) joined using (?:your invite|this group's invite link)/,
	personRemoved: /(?<remover>.+) removed (?<removed>.+)/,
	personLeft: /(?<left>.+) left/,
	groupCreated: /(?<creator>.+) created group "(?<name>.+)"/,
	numberChange: /(?<changer>.+) changed their phone number to a new number. Tap to message or add the new number./,
};

export const ignoredWords = [
	"a",
	"in",
	"to",
	"if",
	"an",
	"the",
	"as",
	"but",
	"i",
	"is",
	"our",
	"and",
	"will",
	"be",
	"or",
	"was",
	"this",
	"that",
	"what",
	"have",
	"like",
	"from",
	"yeah",
	"only",
	"with",
	"also",
	"your",
	"they",
	"just",
	"then",
	"there",
	"know",
	"want",
	"when",
	"very",
	"even",
	"much",
	"didn", //didn't
	"here",
	"https",
	"should",
];
