import ReactDOM from "react-dom/client";
import "./App.css";

function Book() {
    return (
        <div className="card">
            <img src="" width={400} height={400} alt="book image" />
            <h3>Title: Physics</h3>
            <h4>Price: ₹381/-</h4>
            <button>Add to Cart</button>
        </div>
    );
}
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(<Book />);