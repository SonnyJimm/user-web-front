import React from "react";
import Sidebar from "./Sidebar";

export default function Layout(props) {
  return (
    <div className='layout'>
      <div className='layout_sidebar'>
        <Sidebar {...props} />
      </div>
      <div className='layout_body'>{props.children}</div>
    </div>
  );
}
