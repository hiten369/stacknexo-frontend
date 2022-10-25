import { dltCard } from "./GrammarUtils";

// Add/Remove to dictionary
export const updateDict=(cardId, ind, dictWord, editorContext, onEditorStateChange5)=> {
    const { dictWords, setDictWords } =  editorContext;
    dltCard(cardId, ind, `"${dictWord}" has been added to dictionary`, true, dictWord, false, editorContext);
    onEditorStateChange5(dictWord);
    setDictWords(dictWords.concat(dictWord));
};

// Add/Remove to dictionary (Modal)
export const updateDictModal=(word, editorContext, onEditorStateChange5)=> {
    const { dictWords, setDictWords } =  editorContext;

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
    onEditorStateChange5(word);
};
