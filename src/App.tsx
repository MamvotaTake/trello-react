import {AppContainer} from "./styles.ts";
import {Column} from "./components/Column.tsx";
import {AddNewItem} from "./components/AddNewItem.tsx";
import {useAppState} from "./AppStateContext.tsx";

function App() {
    const {state} = useAppState()


  return (
    <>
        <AppContainer>
            {state.lists.map((list, i) => (
                <Column text={list.text} key={list.id} index={i}/>
            ))}
            <AddNewItem
                toggleButtonText="+ Add another list"
                onAdd={console.log}
            />
        </AppContainer>
    </>
  )
}

export default App
