import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Data
const notes = [
    { id: 1, content: 'Working with Lists', important: true},
    { id: 2, content: 'Usage of Keys', important: false},
    { id: 3, content: 'COndition Rendering', important: true},
    { id: 4, content: 'Handling Events', important: true},
    { id: 5, content: 'Props vs State', important: false}
]

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes}/>);
