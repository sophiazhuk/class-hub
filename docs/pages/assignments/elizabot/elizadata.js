// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"hi.  hows it going :-)👋",
// additions (not original)
"whats up? 👋",
"how are u doing? 👋"
];

var elizaFinals = [
"see ya!.  it was nice talking :-D",
// additions (not original)
"bye, see u later! 👋",
"so long :-D",
"nice talk! -- ttyl 👋.",
"bye bye! 👋"
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "maybe",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "i dont understand",
     "go on....",
     "what do u think it means o.o ?",
     "how do u feel about it ?",
     "interesting... go on...",
     "tell me more about that.",
     "does talking about this bother you ?"
  ]]
]],
["sorry", 0, [
 ["*", [
     "don't apologise.",
     "you dont need to apologise.",
     "again, apologies are not necessary.",
     "im okay,  go on..."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "do you think of (2) a lot ?",
     "does thinking of (2) make you think of anything else ?",
     "what else do u remember ?",
     "why do you remember (2) just now ?",
     "what here reminds you of (2) ?",
     "whats the connection between me and (2) ?",
     "what else does (2) remind you of ?"
  ]],
 ["* do you remember *", [
     "did you think i would forget (2) ?",
     "why do you think i would rememver (2) now ?",
     "what about (2) ?",
     "goto what",
     "u said (2) ?"
  ]],
 ["* you remember *", [
     "how could i forget (2) ?",
     "what about (2) should i remember ?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "why did you forget (2) ?",
     "why can't you remember (2) ?",
     "how often do you think of (2) ?",
     "is it annoying to forget that ?",
     "could it be a mental block ?",
     "are you normally forgetful ?",
     "do you think you are suppressing (2) ?"
  ]],
 ["* did you forget *", [
     "why do you ask ?",
     "r you sure you told me ?",
     "would it bother you if i forgot (2) ?",
     "why would i remember (2) just now ?",
     "goto what",
     "tell me more about (2)."
  ]]
]],
["if", 3, [
 ["* if *", [
     "do you think it's likely that (2) ?",
     "do you wish that (2) ?",
     "what do you know about (2) ?",
     "rly, if (2) ?",
     "what would you do if (2) ?",
     "but what are the chances that (2) ?",
     "what does this speculation lead to ?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "rly, (2) ?",
     "have you ever fantasized (2) while you were awake ?",
     "have you ever dreamed (2) before ?",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "what does that dream suggest to you ?",
     "do you dream often ?",
     "what persons appear in your dreams ?",
     "do you believe that dreams have something to do with your problem ?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "u don't seem quite certain.",
     "why so uncertain ?",
     "be more positive",
     "u aren't sure ?",
     "u dont know ?",
     "how likely ?"
  ]]
]],
["name", 15, [
 ["*", [
     "idc about names.",
     "i already said, i don't care about names -- please continue."
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "i told you before, idk German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "i told you before, idk French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "i told you before, idk Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "i told you before, idk Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "i only know English."
  ]]
]],
["hello", 0, [
 ["*", [
     "howdy. whats going on?",
     "whatsup ?"
  ]]
]],
["computer", 50, [
 ["*", [
     "do computers scare you ?",
     "why do you mention computers ?",
     "what do you think machines have to do with your problem ?",
     "don't you think computers can help people ?",
     "what about machines worries you ?",
     "what do you think about machines ?",
     "u don't think i am a computer program, do you ?"
  ]]
]],
["am", 0, [
 ["* am i *", [
     "do you believe you are (2) ?",
     "would you want to be (2) ?",
     "do you want me to tell you that ur (2) ?",
     "what would it mean if you were (2) ?",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "why do you say 'am' ?",
     "idk that."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "why are you interested in whether i am (2) or not ?",
     "would you prefer if i weren't (2) ?",
     "maybe i am (2) in your fantasies.",
     "do you sometimes think i am (2) ?",
     "goto what",
     "would it matter to you ?",
     "what if i were (2) ?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "did you think they might not be (2) ?",
     "would you like it if they were not (2) ?",
     "what if they were not (2) ?",
     "are they always (2) ?",
     "Possibly they are (2).",
     "are you positive they are (2) ?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "why are you concerned over my (2) ?",
     "what about your own (2) ?",
     "are you worried about someone else's (2) ?",
     "rly, my (2) ?",
     "what makes you think of my (2) ?",
     "do you want my (2) ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "what if you were (2) ?",
     "do you think you were (2) ?",
     "Were you (2) ?",
     "what would it mean if you were (2) ?",
     "what does ' (2) ' suggest to you ?",
     "goto what"
  ]],
 ["* i was *", [
     "Were you really ?",
     "why do you tell me you were (2) now ?",
     "maybe i already know you were (2)."
  ]],
 ["* was you *", [
     "Would you like to believe i was (2) ?",
     "what suggests that i was (2) ?",
     "what do you think ?",
     "maybe i was (2).",
     "what if i had been (2) ?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "what would it mean to you if you got (3) ?",
     "why do you want (3) ?",
     "Suppose you got (3) soon.",
     "what if you never got (3) ?",
     "what would getting (3) mean to you ?",
     "what does wanting (3) have to do with this discussion ?"
  ]],
 ["* i am* @sad *", [
     "i am sorry to hear that you are (3).",
     "do you think coming here will help you not to be (3) ?",
     "I'm sure it's not pleasant to be (3).",
     "can you explain what made you (3) ?"
  ]],
 ["* i am* @happy *", [
     "how did i helped you to be (3) ?",
     "did your treatment make you (3) ?",
     "what makes you (3) just now ?",
     "can you explain why you are suddenly (3) ?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "do you really think so ?",
     "but you are not sure you (3).",
     "do you really doubt you (3) ?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "is it because you are (2) that you came to me ?",
     "how long have you been (2) ?",
     "do you believe it is normal to be (2) ?",
     "do you enjoy being (2) ?",
     "do you know anyone else who is (2) ?"
  ]],
 ["* i @cannot *", [
     "how do you know that you can't (3) ?",
     "have you tried ?",
     "maybe you could (3) now.",
     "do you really want to be able to (3) ?",
     "what if you could (3) ?"
  ]],
 ["* i don't *", [
     "do you really not (2) ?",
     "why don't you (2) ?",
     "do you wish to be able to (2) ?",
     "does that trouble you ?"
  ]],
 ["* i feel *", [
     "tell me more about such feelings.",
     "do you often feel (2) ?",
     "do you enjoy feeling (2) ?",
     "Of what does feeling (2) remind you ?"
  ]],
 ["* i * you *", [
     "maybe in your fantasies we (2) each other.",
     "do you wish to (2) me ?",
     "u seem to need to (2) me.",
     "do you (2) anyone else ?"
  ]],
 ["*", [
     "u say (1) ?",
     "can you elaborate on that ?",
     "do you say (1) for some special reason ?",
     "thats interesting."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "what makes you think i am (2) ?",
     "does it please you to believe i am (2) ?",
     "do you sometimes wish you were (2) ?",
     "maybe you would like to be (2)."
  ]],
 ["* you* me *", [
     "why do you think i (2) you ?",
     "u like to think i (2) you -- don't you ?",
     "what makes you think i (2) you ?",
     "rly, i (2) you ?",
     "do you wish to believe i (2) you ?",
     "and so what if i did (2) you -- what would that mean ?",
     "does someone else believe i (2) you ?"
  ]],
 ["* you *", [
     "We were discussing you -- not me.",
     "Oh, i (2) ?",
     "u r not really talking about me -- are you ?",
     "what are your feelings now ?"
  ]]
]],
["yes", 0, [
 ["*", [
     "u seem to be quite positive.",
     "u are sure.",
     "i see.",
     "i understand."
  ]]
]],
["no", 0, [
 ["* no one *", [
     "are you sure, no one (2) ?",
     "surely someone (2) .",
     "can you think of anyone at all ?",
     "are you thinking of a very special person ?",
     "who, may i ask ?",
     "u have a particular person in mind, don't you ?",
     "who do you think you are talking about ?"
  ]],
 ["*", [
     "are you saying no just to be negative?",
     "u are being a bit negative.",
     "why not ?",
     "why 'no' ?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "does that have anything to do with the fact that your (2) ?",
     "lets talk about why ur (2).",
     "earlier you said your (2).",
     "but your (2)."
  ]],
 ["* my* @family *", [
     "tell me more about your family.",
     "who else in your family (4) ?",
     "ur (3) ?",
     "what else comes to your mind when you think of your (3) ?"
  ]],
 ["* my *", [
     "ur (2) ?",
     "why do you say your (2) ?",
     "does that suggest anything else which belongs to you ?",
     "is it important to you that your (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "u believe i can (2) don't you ?",
     "goto what",
     "u want me to be able to (2).",
     "maybe you would like to be able to (2) yourself."
  ]],
 ["* can i *", [
     "whether or not you can (2) depends on u.",
     "do you want to be able to (2) ?",
     "maybe you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "why do you ask ?",
     "does that question interest you ?",
     "what is it you really want to know ?",
     "are such questions much on your mind ?",
     "what answer would please you most ?",
     "what do you think ?",
     "what comes to mind when you ask that ?",
     "have you asked such questions before ?",
     "have you asked anyone else ?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "is that the real reason ?",
     "do any other reasons come to mind ?",
     "does that explain anything else ?",
     "what other reasons might there be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "do you believe i don't (2) ?",
     "maybe i will (2) in good time.",
     "should you (2) yourself ?",
     "u want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "do you think you should be able to (2) ?",
     "do you want to be able to (2) ?",
     "do you believe this will help you to (2) ?",
     "do you any idea why you can't (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "rly, (2) ?",
     "it cant be (2).",
     "can you think of anyone in particular ?",
     "like who ?",
     "r you thinking of a very special person ?",
     "who ?",
     "someone special maybe ?",
     "u have a particular person in mind, don't you ?",
     "who do you think you're talking about ?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "can you think of a specific example ?",
     "when ?",
     "what incident are you thinking of ?",
     "rly, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "in what way ?",
     "what similarity do you see ?",
     "what does that similarity mean to you ?",
     "what other connections do you see ?",
     "what do you suppose that resemblence means ?",
     "what is the connection, do you suppose ?",
     "is there rly a connection ?",
     "how ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "how is it different ?",
     "what differences do you see ?",
     "what does that difference mean to you ?",
     "what other distinctions do you see ?",
     "what do you suppose that difference means ?",
     "do you think there is a connection ?",
     "how ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bi to have (\w+)/, "i have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof