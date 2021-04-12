import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";


const useStyles = makeStyles((theme) => ({
  search: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    borderBottom: "solid grey",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      margin: "auto",
      width: "50%",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    width: "100%",
  },
}));

function SearchBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div>
        <SearchIcon color="action"/>
      </div>
        <InputBase
            placeholder="Search…"
            classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={props.searchFilter}
        />
    </div>
  );
}

export default SearchBar;
