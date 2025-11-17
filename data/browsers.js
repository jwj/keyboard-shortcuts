const browsers = {
    application: "Browsers", sections: [
        {
            name: "Modes", keys: [
                { name: "Profile", safari: "ctrl cmd q", edge: "win l", brave: "" },
            ]
        },
        {
            name: "Tabs", keys: [
                { name: "New", safari: "cmd t", edge: "ctrl t", brave: "cmd t" },
                { name: "Close", safari: "cmd w", edge: "ctrl w", brave: "cmd w" },
                { name: "Next", safari: "shift cmd ]", edge: "?", brave: "" },
                { name: "Prev", safari: "cmd left", edge: "?", brave: "" },
                { name: "List", safari: "", edge: "?", brave: "shift cmd a" },
                { name: "Reopen closed", safari: "", edge: "?", brave: "cmd shift t" }
            ]
        },
        {
            name: "Misc", keys: [
                { name: "Passwords", safari: "", edge: "", brave: "cmd shift x" },
                { name: "Commands", safari: "", edge: "", brave: "cmd shift p" },
                { name: "History", safari: "", edge: "", brave: "cmd y" },
                { name: "Downloads", safari: "", edge: "", brave: "cmd shift j" },
                { name: "Developer", safari: "cmd ,", edge: "", brave: "f12" }
            ]
        },
        {
            name: "Bookmarks", keys: [
                { name: "edgedows", safari: "f3", edge: "?", brave: "" },
                { name: "Next", safari: "cmd ´", edge: "?", brave: "" },
                { name: "Prev", safari: "cmd shift ´", edge: "?", brave: "" },
                { name: "Hide", safari: "cmd h", edge: "?", brave: "" },
            ]
        }
    ]
};