import "./main.css"

const Main = () => {
    return (
        <>
        <main className = "main-section">
            <input  aria-label="add ingredient"  type = "text" placeholder="e.g tomato paste" 
            />
            <button>Add ingredient</button>
        </main>
        </>
    )
}

export default Main