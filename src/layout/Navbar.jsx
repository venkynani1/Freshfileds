import { useState, useRef } from "react";

const menus = [
  { title: "Home" },
  {
    title: "Introduction",
    submenu: [
      {
        title: "Overview",
        submenu: [
          { title: "EG share point like", link: "https://hexawareonline.sharepoint.com/sites/Hexavarsity-CTaDelTrainings/Shared%20Documents/Forms/AllItems.aspx" },
          { title: "About EG", link: "" },
          { title: "About EG 2", link: "https:eg.com" },
        ],
      },
     
  
     
    ],
  },
];

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSub, setOpenSub] = useState(null);
  const [openDeep, setOpenDeep] = useState(null);
  const leaveTimer = useRef(null);

  const clearLeave = () => clearTimeout(leaveTimer.current);
  const scheduleClose = () => {
    leaveTimer.current = setTimeout(() => {
      setOpenMenu(null);
      setOpenSub(null);
      setOpenDeep(null);
    }, 120);
  };

  return (
    <nav className="navbar">
      {menus.map((menu, index) => (
        <div
          key={index}
          className={`menu-item ${openMenu === index ? "menu-item--open" : ""}`}
          onMouseEnter={() => {
            clearLeave();
            setOpenMenu(index);
            setOpenSub(null);
            setOpenDeep(null);
          }}
          onMouseLeave={scheduleClose}
        >
          <span className="menu-title">
            {menu.title}
            {menu.submenu && (
              <svg className="menu-caret" viewBox="0 0 10 6">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            )}
          </span>

          {menu.submenu && openMenu === index && (
            <div className="dropdown" onMouseEnter={clearLeave} onMouseLeave={scheduleClose}>
              <div className="dropdown-inner">
                {menu.submenu.map((sub, i) => (
                  <div
                    key={i}
                    className={`dropdown-item ${openSub === i ? "dropdown-item--active" : ""}`}
                    onMouseEnter={() => { setOpenSub(i); setOpenDeep(null); }}
                  >
                    {sub.link ? (
                      <a href={sub.link} target="_blank" rel="noreferrer" className="dropdown-title dropdown-link">
                        <span className="d-dot" />
                        {sub.title}
                      </a>
                    ) : (
                      <div className="dropdown-title">
                        <span className="d-dot" />
                        {sub.title}
                        {sub.submenu && (
                          <svg className="d-arrow" viewBox="0 0 6 10">
                            <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                          </svg>
                        )}
                      </div>
                    )}

                    {sub.submenu && openSub === i && (
                      <div className="submenu">
                        {sub.submenu.map((child, j) =>
                          child.submenu ? (
                            <div
                              key={j}
                              className={`submenu-item has-sub ${openDeep === j ? "submenu-item--active" : ""}`}
                              onMouseEnter={() => setOpenDeep(j)}
                            >
                              <span className="submenu-item-title">
                                <span className="d-dot" />
                                {child.title}
                                <svg className="d-arrow" viewBox="0 0 6 10">
                                  <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                                </svg>
                              </span>
                              {openDeep === j && (
                                <div className="deepmenu">
                                  <div className="deepmenu-head">{child.title}</div>
                                  {child.submenu.map((link, k) => (
                                    <a key={k} href={link.link} target="_blank" rel="noreferrer">
                                      <span className="d-dot" />{link.title}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <a key={j} href={child.link} target="_blank" rel="noreferrer">
                              <span className="d-dot" />{child.title}
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Navbar;
