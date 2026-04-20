import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AppProvider } from './store/AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
)
