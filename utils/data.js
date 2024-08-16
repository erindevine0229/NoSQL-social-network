const users = [
    {
        username: "spiderman",
        email: "pparker@gmail.com"
    },

    {
        username: "blackwidow",
        email: "nromanoff@aol.com"
    },

    {
        username: "ironman",
        email: "tstark@yahoo.com"
    },

    {
        username: "captmarvel",
        email: "cdanvers@msn.com"
    },

    {
        username: "docstrange",
        email: "sstrange@verizon.net"
    }
];


const thoughts = [
    {
        thoughtText: "I was just thinking about how many crazy storma we've been getting lately! Very strange...",
        username: "captmarvel",
        reaction: [
            {
                reactionBody: "Did somebody say STRANGE?",
                username: "docstrange"
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