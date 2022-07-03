import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./navButtons.css";

function NavButtons() {
  return (
    <div className="nav-group">
      <div className="nav-button">
        <ArrowBackIosIcon />
      </div>
      <div className="nav-button">
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}

export default NavButtons;
