const browsers = {
    application: "Browsers", sections: [
        {
            name: "Tabs", keys: [
                { name: "New", safari: "cmd t", edge: "ctrl t", brave: "cmd t" },
                { name: "Close", safari: "cmd w", edge: "ctrl w", brave: "cmd w" },
                { name: "Reopen closed", safari: "cmd shift t", edge: "ctrl shift t", brave: "cmd shift t" },
                { name: "Right", safari: "ctrl tab", edge: "ctrl tab", brave: "ctrl tab" },
                { name: "Left", safari: "ctrl shift tab", edge: "ctrl shift tab", brave: "ctrl shift tab" },
                { name: "Previous used", safari: "", edge: "alt tab", brave: "cmd shift a" },
                { name: "List/search", safari: "cmd shift '", edge: "", brave: "shift cmd a" },
            ]
        },
        {
            name: "Misc", keys: [
                { name: "Passwords", safari: "cmd shift x", edge: "ctrl shift x", brave: "cmd shift x" },
                { name: "Commands", safari: "", edge: "", brave: "cmd shift p" },
                { name: "History", safari: "cmd y", edge: "ctrl h", brave: "cmd y" },
                { name: "Downloads", safari: "opt cmd l", edge: "ctrl j", brave: "cmd shift j" },
                { name: "Developer", safari: "opt cmd i", edge: "", brave: "f12" }
            ]
        },
        {
            name: "Bookmarks", keys: [
                { name: "Add", safari: "", edge: "?", brave: "" },
                { name: "Search", safari: "cmd l", edge: "?", brave: "" },
            ]
        },
        {
            name: "Find", keys: [
                { name: "Find", safari: "cmd f", edge: "ctrl f", brave: "cmd f" },
                { name: "Find next", safari: "cmd g", edge: "ctrl g", brave: "cmd g" },
                { name: "Find previous", safari: "cmd shift g", edge: "ctrl shift g", brave: "cmd shift g" },
                { name: "Find previous", safari: "cmd shift g", edge: "ctrl shift g", brave: "cmd shift g" },
            ]
        },
    ]
};