import React, {useState, useContext} from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenulOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({page: '', links: []});

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

  const openSubmenu = (text, coordinates) => {
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  }

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  }

  return <AppContext.Provider value={{
    isSubmenulOpen,
    isSidebarOpen,
    openSubmenu,
    openSidebar,
    closeSubmenu,
    closeSidebar,
    location,
  }} >{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}
