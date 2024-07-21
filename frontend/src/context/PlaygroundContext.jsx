import { createContext, useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';

export const PlaygroundContext = createContext();

export const languageMap = {
    "c": {
        id: 50,
        defaultCode: `#include <stdio.h>\n\nint main() {\n    // Uncomment the following lines to test with input\n    /*\n    char input[100];\n    fgets(input, sizeof(input), stdin);\n    printf("Input: %s", input);\n    */\n    printf("Hello World!");\n    return 0;\n}\n`
    },

    "cpp": {
        id: 54,
        defaultCode: 
        "#include <iostream>\n"
        + "using namespace std;\n\n"
        + "int main() {\n"
        + '    // Uncomment the following lines to test with input\n'
        + '    /*\n'
        + '    string input;\n'
        + '    getline(cin, input);\n'
        + '    cout << "Input: " << input;\n'
        + '    */\n'
        + '    cout << "Hello World!";\n'
        + '    return 0;\n'
        + '}\n'
    },

    "java": {
        id: 62,
        defaultCode: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Uncomment the following lines to test with input\n        /*\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        System.out.println("Input: " + input);\n        */\n        System.out.println("Hello World!");\n    }\n}\n`
    },

    "python": {
        id: 71,
        defaultCode: `# Uncomment the following lines to test with input\n# input_text = input()\n# print(f"Input: {input_text}")\n\nprint("Hello World!")`
    },

    "javascript": {
        id: 63,
        defaultCode: `// Uncomment the following lines to test with input\n/*\nconst input = require('fs').readFileSync(0, 'utf-8');\nconsole.log("Input:", input);\n*/\n\nconsole.log("Hello World!");`
    }
}


const PlaygroundProvider = ({ children }) => {

    const initialItems = {
        [uuid()]: {
            title: "DSA",
            playgrounds: {
                [uuid()]: {
                    title: "Stack Implementation",
                    language: "cpp",
                    code: languageMap["cpp"].defaultCode,
                },
                [uuid()]: {
                    name: "Array",
                    language: "javascript",
                    code: languageMap["javascript"].defaultCode,
                },
            }
        },
    }

    const [folders, setFolders] = useState(() => {
        let localData = localStorage.getItem('playgrounds-data');
        if (localData === null || localData === undefined) {
            return initialItems;
        }

        return JSON.parse(localData);
    })

    useEffect(() => {
        localStorage.setItem('playgrounds-data', JSON.stringify(folders));
    }, [folders])

    const deleteCard = (folderId, cardId) => {
        setFolders((oldState) => {
            const newState = { ...oldState };
            delete newState[folderId].playgrounds[cardId];
            return newState;
        });
    }

    const deleteFolder = (folderId) => {
        setFolders((oldState) => {
            const newState = { ...oldState };
            delete newState[folderId];
            return newState;
        });
    }

    const addFolder = (folderName) => {
        setFolders((oldState) => {
            const newState = { ...oldState };

            newState[uuid()] = {
                title: folderName,
                playgrounds: {}
            }

            return newState;
        })
    }

    const addPlayground = (folderId, playgroundName, language) => {
        setFolders((oldState) => {
            const newState = { ...oldState };

            newState[folderId].playgrounds[uuid()] = {
                title: playgroundName,
                language: language,
                code: languageMap[language].defaultCode,
            }

            return newState;
        })
    }

    const addPlaygroundAndFolder = (folderName, playgroundName, cardLanguage) => {
        setFolders((oldState) => {
            const newState = { ...oldState }

            newState[uuid()] = {
                title: folderName,
                playgrounds: {
                    [uuid()]: {
                        title: playgroundName,
                        language: cardLanguage,
                        code: languageMap[cardLanguage].defaultCode,
                    }
                }
            }

            return newState;
        })
    }

    const editFolderTitle = (folderId, folderName) => {
        setFolders((oldState) => {
            const newState = { ...oldState }
            newState[folderId].title = folderName;
            return newState;
        })
    }

    const editPlaygroundTitle = (folderId, cardId, PlaygroundTitle) => {
        setFolders((oldState) => {
            const newState = { ...oldState }
            newState[folderId].playgrounds[cardId].title = PlaygroundTitle;
            return newState;
        })
    }

    const savePlayground = (folderId, cardId, newCode, newLanguage) => {
        setFolders((oldState) => {
            const newState = { ...oldState };
            newState[folderId].playgrounds[cardId].code = newCode;
            newState[folderId].playgrounds[cardId].language = newLanguage;
            return newState;
        })
    }

    const PlayGroundFeatures = {
        folders: folders,
        deleteCard: deleteCard,
        deleteFolder: deleteFolder,
        addFolder: addFolder,
        addPlayground: addPlayground,
        addPlaygroundAndFolder: addPlaygroundAndFolder,
        editFolderTitle: editFolderTitle,
        editPlaygroundTitle: editPlaygroundTitle,
        savePlayground: savePlayground,
    }

    return (
        <PlaygroundContext.Provider value={PlayGroundFeatures}>
            {children}
        </PlaygroundContext.Provider>
    )
}

export default PlaygroundProvider;