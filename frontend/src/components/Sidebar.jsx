const Sidebar = ({ children }) => {
   return (
      <aside className="fixed top-0 bottom-0 left-0 z-20 w-80 bg-lilac">
         {children}
      </aside>
   )
}

export default Sidebar
