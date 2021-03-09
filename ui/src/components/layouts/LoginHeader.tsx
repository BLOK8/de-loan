import React from "react";
import { styled } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import { Container, StyledOption } from "../uiComponents";
import { color } from "../../theme/Color";
import headerBg from "../../images/headerbg.svg";
import { useParty } from '@daml/react';

interface ILoginHeader {
  className?: string;
  onLogout: () => void;
}

export const LoginHeader: React.FC<ILoginHeader> = ({
  className,
  onLogout
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
}) => {

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    prevOpen.current = open;
  }, [open]);


  return (
    <Header className={className}>
      <Container>
        <RightMenu
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={open ? "menu-active" : ""}
        >
          {useParty()}
          <IconButton size="small">
            <UserIcon />
          </IconButton>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            style={{
              left: "auto",
              right: 20,
              top: 56,
              zIndex: 10,
            }}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "right top" : "right bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={false}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <StyledOption
                        className="options-light"
                        onClick={(e) => {
                          handleClose(e);
                        }}
                      >
                        Manage Your Account
                      </StyledOption>

                      <StyledOption
                        className="options-light"
                        onClick={(e) => {
                          onLogout();
                          handleClose(e);
                        }}
                      >
                        Sign Out
                      </StyledOption>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </RightMenu>
      </Container>
    </Header>
  );
};

/*
 ** UI component style
 */

const Header = styled("div")(({ theme }) => ({
  padding: "10px 27px",
  background: theme.palette.grey[800],
  backgroundImage: `url(${headerBg})`,
  backgroundSize: "cover",
  color: color.white,
  "&.header-fixed": {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    zIndex: 2,
  },
  "& strong": {
    marginRight: 5,
  },
  "& > div": {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    maxWidth: "100%",
    height: 36,
  },
}));

interface HTMLProps {}
const UserIcon = styled(({ ...HTMLProps }: HTMLProps) => (
  <svg
    {...HTMLProps}
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.0044 5C15.0044 7.76142 12.7652 10 10.0029 10C7.24067 10 5.00142 7.76142 5.00142 5C5.00142 2.23858 7.24067 0 10.0029 0C12.7652 0 15.0044 2.23858 15.0044 5ZM13.0038 5C13.0038 3.34315 11.6603 2 10.0029 2C8.34557 2 7.00202 3.34315 7.00202 5C7.00202 6.65685 8.34557 8 10.0029 8C11.6603 8 13.0038 6.65685 13.0038 5ZM19.8959 18.55L18.0054 14.76C17.1574 13.0683 15.4268 12.0001 13.534 12H6.47186C4.57907 12.0001 2.84848 13.0683 2.00051 14.76L0.109937 18.55C-0.0460797 18.8595 -0.0306511 19.2277 0.150712 19.5231C0.332075 19.8185 0.653508 19.999 1.00021 20H19.0057C19.3524 19.999 19.6738 19.8185 19.8551 19.5231C20.0365 19.2277 20.0519 18.8595 19.8959 18.55ZM3.79105 15.66L2.6207 18H17.3852L16.2148 15.66C15.7075 14.6441 14.6698 14.0016 13.534 14H6.47186C5.33602 14.0016 4.29839 14.6441 3.79105 15.66Z"
      fill="currentColor"
    />
  </svg>
))(() => ({}));

const RightMenu = styled(({ ...rest }) => <div {...rest} />)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  "&.menu-active, &:hover": {
    color: theme.palette.primary.main,
  },
  "& button": {
    marginLeft: 10,
    color: "currentColor",
  },
}));
