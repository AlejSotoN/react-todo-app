import React from "react";
import '../App/App.css'

function EmptySearchResults({ searchedText }) {
    return <p className="alertMessage">Task Not Found: {searchedText}</p>;
}

export { EmptySearchResults }