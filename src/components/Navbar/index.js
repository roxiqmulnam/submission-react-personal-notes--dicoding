const Navbar = ({ searchInput, onChange }) => {
   return (
      <>
         <nav className="note-app__header">
            <h1>Note Apps</h1>
            <div className="note-search">
               <input value={searchInput} onChange={onChange} type="text" placeholder="Search Note..." />
            </div>
         </nav>
      </>
   );
};

export default Navbar;
