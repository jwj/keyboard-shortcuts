 const editors = {
      application: "Coding ;-)", sections: [
        {
          name: "Navigation", keys: [
            { name: "Commands", vscode: "cmd shift p", vim: "?" },
            { name: "Editor", vscode: "", vim: "?" },
            { name: "Console", vscode: "", vim: "?" },
            { name: "Files", vscode: "cmd shift e", vim: "?" },
          ]
        },
        {
          name: "Go to", keys: [
            { name: "File", vscode: "cmd p", vim: "?" },
            { name: "Symbol in file", vscode: "cmd shift o", vim: "?" },
            { name: "Symbole", vscode: "cmd t", vim: "?" },
          ]
        },
        {
          name: "Text", keys: [
            { name: "Select word", vscode: "ctrl d", vim: "?" },
            { name: "Select line", vscode: "ctrl l", vim: "?" },
            { name: "Select bracket", vscode: "", vim: "?" },
            { name: "Delete line", vscode: "ctrl x", vim: "?" }
          ]
        },
        {
          name: "Find", keys: [
            { name: "Find", vscode: "ctrl d", vim: "?" },
            { name: "Find in files", vscode: "ctrl l", vim: "?" },
            { name: "Replace", vscode: "cmd opt f", vim: "?" },
          ]
        },
        {
          name: "Code", keys: [
            { name: "Rename", vscode: "f2", vim: "?" },
          ]
        },
      ]
    };