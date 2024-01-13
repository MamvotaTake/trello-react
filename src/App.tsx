import {AppContainer} from "./styles.ts";
import {Column} from "./components/Column.tsx";
import {AddNewItem} from "./components/AddNewItem.tsx";
import {useAppState} from "./AppStateContext.tsx";

function App() {
    const {state, dispatch} = useAppState()



    return (
    <>
        <AppContainer>
            {state.lists.map((list, i) => (
                <Column id={list.id} text={list.text} key={list.id} index={i}/>
            ))}
            <AddNewItem
                toggleButtonText="+ Add another list"
                onAdd={text => dispatch({ type: "ADD_LIST", payload: text })}
            />
        </AppContainer>
    </>
  )
}

export default App
