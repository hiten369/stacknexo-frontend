import { dltCard } from "./GrammarUtils";

// Add/Remove to dictionary
export const updateDict = (cardId, ind, dictWord, editorContext) => {
    const { dictWords, setDictWords, onEditorStateChange5, client } = editorContext;
    dltCard(cardId, ind, `"${dictWord}" has been added to dictionary`, true, dictWord, false, editorContext);
    onEditorStateChange5(dictWord, client);
    setDictWords(dictWords.concat(dictWord));
};

// Add/Remove to dictionary (Modal)
export const updateDictModal = (word, editorContext) => {
    const { dictWords, setDictWords, onEditorStateChange5, client } = editorContext;

    if (dictWords.includes(word)) {
        setDictWords(() => {
            return dictWords.filter((e) => {
                return e !== word;
            });
        });
    }
    else {
        setDictWords(dictWords.concat(word));
    }
    onEditorStateChange5(word, client);
};
