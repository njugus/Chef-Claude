import "./main.css"

const Main = () => {
    return (
        <>
        <main className="main-section">
        <form className = "form-section">
            <input  aria-label="add ingredient"  type = "text" placeholder="e.g tomato paste" 
            />
            <button>Add ingredient</button>
        </form>
        </main>
        </>
       
    )
}

export default Main