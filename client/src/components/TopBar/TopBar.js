import { useState } from "react";
import classes from "./TopBar.module.css";

const topbarOptions = [
  { name: "Create" },
  { name: "List" },
  { name: "Modify" },
  { name: "Delete" },
];

const TopBar = (props) => {
  const [isShown, setIsShown] = useState(false);

  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  const MobileMenu = () => {
    return (
      <div className={classes["mobile-menu"]}>
        {topbarOptions.map((item, index) => {
          return (
            <span
              key={index}
              onClick={() => props.setBarIndex(index)}
              className={
                props.index === index ? classes["menu-span-active"] : ""
              }
            >
              {item.name}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className={classes.topnav}>
        {/* Your Logo/Brand here */}
        <div className={classes.logo}>
          Employee<span>Management</span>
        </div>

        {/* Desktop Menu, which only appears on large screens */}
        <div className={classes.menu}>
          {topbarOptions.map((item, index) => {
            return (
              <span
                key={index}
                onClick={() => props.setBarIndex(index)}
                className={
                  props.index === index ? classes["menu-span-active"] : ""
                }
              >
                {item.name}
              </span>
            );
          })}
        </div>

        {/* This button only shows up on small screens. It is used to open the mobile menu */}
        <button
          className={classes["show-mobile-menu-button"]}
          onClick={toggleMobileMenu}
        >
          &#8801;
        </button>
      </div>

      {/* The mobile menu and the close button */}
      {isShown && <MobileMenu />}
      {isShown && (
        <button
          className={classes["close-mobile-menu-button"]}
          onClick={toggleMobileMenu}
        >
          &times;
        </button>
      )}
    </>
  );
};

export default TopBar;
