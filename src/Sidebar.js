import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import styled from "styled-components";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <Article>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
        </Article>
      </aside>
    </div>
  );
};

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-start: 10rem;
  font-size: 2.3rem;
`;

export default Sidebar;
