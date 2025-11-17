const apps = [
    {
        application: "Chrome", sections: [
            {
                name: "Tabs", keys: [
                    { name: "Next", mac: "ctrl tab", win: "?" },
                    { name: "Prev", mac: "ctrl shift tab", win: "?" },
                    { name: "Prev used", mac: "", win: "?" },
                    { name: "List & search", mac: "cmd shift a", win: "?" },
                ]
            },
        ]
    },
    {
        application: "Teams", sections: [
            {
                name: "Navigate", keys: [
                    { name: "Channel list", mac: "cmd l", win: "", web: "ctrl cmd l" },
                    { name: "Message panel", mac: "cmd p", win: "", web: "ctrl cmd p" },
                    { name: "Reply", mac: "cmd r", win: "", web: "ctrl cmd r" },
                    { name: "React", mac: "opt cmd r", win: "", web: "opt cmd r" },
                    { name: "Go to", mac: "", win: "", web: "opt cmd r" },
                ]
            },
            {
                name: "Search", keys: [
                    { name: "In chat", mac: "cmd f", win: "", web: "cmd f" },
                ]
            },
        ]
    },
];