import { useState, useRef } from "react";

const menus = [
  { title: "Home" },
  {
    title: "Introduction",
    submenu: [
      {
        title: "Overview",
        submenu: [
          { title: "Scope of Knowledge Academy", link: "https://hexawareonline.sharepoint.com/sites/KMPortal/Freshfields/Scope%20of%20Knowledge%20Academy/Forms/AllItems.aspx?viewid=e4728749%2D0f8f%2D4a65%2D8b2d%2D3a96d3f0350e&id=%2Fsites%2FKMPortal%2FFreshfields%2FScope%20of%20Knowledge%20Academy%2FKnowledge%20Academy%20Scope%2Epdf&parent=%2Fsites%2FKMPortal%2FFreshfields%2FScope%20of%20Knowledge%20Academy" },
          { title: "About Freshfields", link: "" },
          { title: "About Hexaware", link: "https://hexaware.com/about-us/" },
        ],
      },
      {
        title: "Induction Kit",
        submenu: [
          { title: "Hexaware Fresh Fields Induction", link: "https://hexawareonline.sharepoint.com/sites/KMPortal/Freshfields/SitePages/Home.aspx" },
        ],
      },
    ],
  },
  {
    title: "Hexaware Focus",
    submenu: [
      {
        title: "Offerings & Solutions",
        submenu: [
          { title: "Hexaware Technology Focus", link: "https://hexawareonline.sharepoint.com/sites/KMPortal/Freshfields/Hexaware%20Technology%20Focus/Forms/AllItems.aspx?viewid=b5d39a7a%2D2cbf%2D4660%2Daa87%2D74116c795349&id=%2Fsites%2FKMPortal%2FFreshfields%2FHexaware%20Technology%20Focus%2FHexaware%20detailed%20Service%20Line%20offerings%2Epdf&parent=%2Fsites%2FKMPortal%2FFreshfields%2FHexaware%20Technology%20Focus" },
         
        ],
      },
      {
        title: "people welfare's it solutions for legal",
        submenu: [
          { title: "Market Research", link: "https://hexawareonline.sharepoint.com/sites/KMPortal/Freshfields/Peopleware%20%20Hexawares%20IT%20solutions%20for%20the%20Legal%20Domain/Forms/AllItems.aspx?viewid=7711fbde%2De6e2%2D4f9b%2Dacb3%2D85f7857b38cd&id=%2Fsites%2FKMPortal%2FFreshfields%2FPeopleware%20%20Hexawares%20IT%20solutions%20for%20the%20Legal%20Domain%2FMarket%20Research%2Epdf&parent=%2Fsites%2FKMPortal%2FFreshfields%2FPeopleware%20%20Hexawares%20IT%20solutions%20for%20the%20Legal%20Domain" },
          { title: "Our capabilites and Offerings for Legal Clients", link: "https://hexawareonline.sharepoint.com/sites/KMPortal/Freshfields/Peopleware%20%20Hexawares%20IT%20solutions%20for%20the%20Legal%20Domain/Forms/AllItems.aspx?viewid=7711fbde%2De6e2%2D4f9b%2Dacb3%2D85f7857b38cd&id=%2Fsites%2FKMPortal%2FFreshfields%2FPeopleware%20%20Hexawares%20IT%20solutions%20for%20the%20Legal%20Domain%2FOur%20Capabilities%20and%20Offerings%20for%20Legal%20clients%2Epdf&parent=%2Fsites%2FKMPortal%2FFreshfields%2FPeopleware%20%20Hexawares%20IT%20solutions%20for%20the%20Legal%20Domain" },
          { title: "POV - AI in Legal", link: "https://hexawareonline.sharepoint.com/sites/KMPortal/Freshfields/Peopleware%20%20Hexawares%20IT%20solutions%20for%20the%20Legal%20Domain/Forms/AllItems.aspx?viewid=7711fbde%2De6e2%2D4f9b%2Dacb3%2D85f7857b38cd&id=%2Fsites%2FKMPortal%2FFreshfields%2FPeopleware%20%20Hexawares%20IT%20solutions%20for%20the%20Legal%20Domain%2FOur%20Capabilities%20and%20Offerings%20for%20Legal%20clients%2Epdf&parent=%2Fsites%2FKMPortal%2FFreshfields%2FPeopleware%20%20Hexawares%20IT%20solutions%20for%20the%20Legal%20Domain" },
         
        ],
      },
    ],
    
  },
  {
    title: "Programs",
    submenu: [
      {
        title: "Policy Docs",
        submenu: [
          { title: "HR Policies", link: "https://hexawareonline.sharepoint.com/sites/KMPortal/Freshfields/Peopleware%20%20Hexawares%20IT%20solutions%20for%20the%20Legal%20Domain/Forms/AllItems.aspx?viewid=7711fbde%2De6e2%2D4f9b%2Dacb3%2D85f7857b38cd&id=%2Fsites%2FKMPortal%2FFreshfields%2FPeopleware%20%20Hexawares%20IT%20solutions%20for%20the%20Legal%20Domain%2FOur%20Capabilities%20and%20Offerings%20for%20Legal%20clients%2Epdf&parent=%2Fsites%2FKMPortal%2FFreshfields%2FPeopleware%20%20Hexawares%20IT%20solutions%20for%20the%20Legal%20Domain" },
          { title: "Travel Policy", link: "https://hexawareonline.sharepoint.com/sites/KMPortal/Freshfields/Peopleware%20%20Hexawares%20IT%20solutions%20for%20the%20Legal%20Domain/Forms/AllItems.aspx?viewid=7711fbde%2De6e2%2D4f9b%2Dacb3%2D85f7857b38cd&id=%2Fsites%2FKMPortal%2FFreshfields%2FPeopleware%20%20Hexawares%20IT%20solutions%20for%20the%20Legal%20Domain%2FOur%20Capabilities%20and%20Offerings%20for%20Legal%20clients%2Epdf&parent=%2Fsites%2FKMPortal%2FFreshfields%2FPeopleware%20%20Hexawares%20IT%20solutions%20for%20the%20Legal%20Domain" },
        ],
      },
    ],
  },
  {
    title: "Project Documents",
    submenu: [
      { title: "MSA", link: "https://hexawareonline.sharepoint.com/sites/KMPortal/Freshfields/Peopleware%20%20Hexawares%20IT%20solutions%20for%20the%20Legal%20Domain/Forms/AllItems.aspx?viewid=7711fbde%2De6e2%2D4f9b%2Dacb3%2D85f7857b38cd&id=%2Fsites%2FKMPortal%2FFreshfields%2FPeopleware%20%20Hexawares%20IT%20solutions%20for%20the%20Legal%20Domain%2FOur%20Capabilities%20and%20Offerings%20for%20Legal%20clients%2Epdf&parent=%2Fsites%2FKMPortal%2FFreshfields%2FPeopleware%20%20Hexawares%20IT%20solutions%20for%20the%20Legal%20Domain" },
      { title: "SOW's", link: "https://hexawareonline.sharepoint.com/sites/KMPortal/Freshfields/SOWs/Forms/AllItems.aspx" },
      { title: "Project Charter", link: "https://hexawareonline.sharepoint.com/sites/KMPortal/Freshfields/Project%20Charter/Forms/AllItems.aspx" },
      {
        title: "Governance",
        submenu: [
          { title: "Weekly Status Reports", link: "https://hexawareonline.sharepoint.com/sites/KMPortal/Freshfields/Project%20Charter/Forms/AllItems.aspx" },
          { title: "Monthly Status Reports", link: "https://hexawareonline.sharepoint.com/sites/KMPortal/Freshfields/Monthly%20Status%20Reports/Forms/AllItems.aspx" },
          { title: "Steering Committee Reports", link: "https://hexawareonline.sharepoint.com/sites/KMPortal/Freshfields/Monthly%20Status%20Reports/Forms/AllItems.aspx" },
          { title: "Monthly Governance", link: "https://hexawareonline.sharepoint.com/sites/KMPortal/Freshfields/Monthly%20Status%20Reports/Forms/AllItems.aspx" },
          { title: "Annual Performance & Achievements", link: "https://hexawareonline.sharepoint.com/sites/KMPortal/Freshfields/Monthly%20Status%20Reports/Forms/AllItems.aspx" },
        ],
      },
    ],
  },
  {
    title: "Employee Zone",
    submenu: [
      {
        title: "Event Gallery",
        submenu: [
          { title: "Townhall and Leadership Connects", link: "https://example.com/scope" },
          { title: "Client Engagement Events", link: "https://example.com/freshfields" },
          { title: "Engagement Activities", link: "https://example.com/scope" },
        ],
      },
      {
        title: "Rewards & Recognition",
        submenu: [
          { title: "Peer to Peer Recognition", link: "https://example.com/scope" },
          { title: "Gallery", link: "https://example.com/freshfields" },
        ],
      },
    ],
  },
  {
    title: "Training Zone",
    submenu: [
      {
        title: "Legal Practice",
        submenu: [
          {
            title: "Legal 101 for IT Consultants",
            submenu: [
              { title: "Legal 101 Video Training", link: "https://example.com/legal101-video" },
              { title: "Legal 101 Assessment", link: "https://example.com/legal101-assessment" },
              { title: "Assessment Key", link: "https://example.com/assessment-key" },
            ],
          },
          { title: "Legal 102 for IT Consultants", link: "https://example.com/legal102" },
          { title: "Law Firm Operating Model", link: "https://example.com/lawfirm" },
          { title: "Matter Lifecycle View", link: "https://example.com/matter" },
          { title: "Technology and Glossary", link: "https://example.com/tech" },
          { title: "Legal Practice Areas", link: "https://example.com/practice" },
          { title: "Billing and Time Concepts", link: "https://example.com/billing" },
        ],
      },
      {
        title: "Compliance",
        submenu: [
          {
            title: "Mandatory Trainings",
            submenu: [
              { title: "Training Details", link: "https://example.com/training-details" },
              { title: "HexaGuru Portal", link: "https://example.com/hexaguru" },
            ],
          },
          { title: "Information Security", link: "https://example.com/infosec" },
          { title: "Data Privacy", link: "https://example.com/dataprivacy" },
        ],
      },
      {
        title: "Technology",
        submenu: [
          { title: "Technology Resources", link: "https://example.com/technology" },
        ],
      },
    ],
  },
  {
    title: "Get Freshfielded",
    submenu: [
      {
        title: "GET",
        submenu: [
          { title: "NDA — Non Disclosure Agreement", link: "https://example.com/scope" },
          { title: "Background Check", link: "https://example.com/freshfields" },
        ],
      },
      {
        title: "SET",
        submenu: [
          { title: "Setting Login Credentials", link: "https://example.com/scope" },
        ],
      },
      {
        title: "GO",
        submenu: [
          { title: "Connect to VPN", link: "https://example.com/scope" },
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
