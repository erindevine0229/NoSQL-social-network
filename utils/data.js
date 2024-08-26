const users = [
    {
        username: "spiderman",
        email: "pparker@gmail.com",
        thoughts: ["66c0013f94fc0e496cf417bc", "66c0013f94fc0e496cf417be"],
        friends: ["66c0013f94fc0e496cf417b2", "66c0013f94fc0e496cf417b3", "66c0013f94fc0e496cf417b5"]
    },

    {
        username: "blackwidow",
        email: "nromanoff@aol.com",
        thoughts: [],
        friends: ["66c0013f94fc0e496cf417b1", "66c0013f94fc0e496cf417b4"]
    },

    {
        username: "ironman",
        email: "tstark@yahoo.com",
        thoughts: ["66c0013f94fc0e496cf417bd"],
        friends: ["66c0013f94fc0e496cf417b2", "66c0013f94fc0e496cf417b4"]
    },

    {
        username: "captmarvel",
        email: "cdanvers@msn.com",
        thoughts: ["66c0013f94fc0e496cf417bb", "66c0013f94fc0e496cf417bf"],
        friends: ["66c0013f94fc0e496cf417b1", "66c0013f94fc0e496cf417b2", "66c0013f94fc0e496cf417b5"]
    },

    {
        username: "docstrange",
        email: "sstrange@verizon.net",
        thoughts: [],
        friends: ["66c0013f94fc0e496cf417b1", "66c0013f94fc0e496cf417b3", "66c0013f94fc0e496cf417b3"]
    }
];


const thoughts = [
    {
        thoughtText: "I was just thinking about how many crazy storms we've been getting lately! Very strange...",
        username: "captmarvel",
        reaction: [
            {
                reactionBody: "Did somebody say STRANGE?",
                username: "docstrange"
            },
            {
                reactionBody: "Somebody tell Stephen he isn't funny...",
                username: "ironman"
            }
        ]
    },

    {
        thoughtText: "I can't get my car keys to stop sticking to my hands. This spidey stuff can be trickey.",
        username: "spiderman",
        reaction: [
            {
                reactionBody: "Good thing I'm not a real one!",
                username: "blackwidow"
            }
        ]
    },

    {
        thoughtText: "I just hear back from my Doc and I can't believe I'm anemia....the IRONy LOL",
        username: "ironman",
        reaction: [
            {
            reactionBody: "Better take care of your health. You don't want to make your wife a widow...",
            username: "blackwidow"
            },
            {
                reactionBody: "Did somebody say Doc?",
                username: "docstrange"
            }
        ]
    },

    {
        thoughtText: "Hey guys, just wanted to let you know I appreciate having you all in my life",
        username: "spiderman",
        reaction: [
            {
                reactionBody: "Same here! I love you 3000!",
                username: "ironman"
            },
            {
                reactionBody: "Classic friendly neighborhood Spiderman",
                username: "blackwidow"
            }
        ]
    },

    {
        thoughtText: "Did anybody know I could fly? I swear I had no idea",
        username: "captmarvel",
        reaction: [
            {
                reactionBody: "You're welcome for the suit. I'm truly a genius",
                username: "ironman"
            }
        ]
    },
];


module.exports = { users, thoughts };