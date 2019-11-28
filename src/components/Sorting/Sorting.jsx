import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const filters = [
  {
    name: "name"
  },
  {
    name: "balance"
  }
];

const Sorter = props => {
  const classes = useStyles();
  const [sortItem, setSortItem] = useState(null);
  const [sortDirection, setSortDirection] = useState(true);
  const [filter, setFilter] = useState("name");

  useEffect(() => {
    var sortData = props.data;
    if (filter === "name") {
      if (sortDirection) {
        sortData.sort((a, b) => (a.name > b.name) - (a.name < b.name));
      } else {
        sortData.sort((a, b) => (a.name < b.name) - (a.name > b.name));
      }
    } else if (filter === "balance") {
      if (sortDirection) {
        sortData.sort((a, b) => a.card.balance - b.card.balance);
      } else {
        sortData.sort((a, b) => b.card.balance - a.card.balance);
      }
    }
    props.setData([...sortData]);
  }, [props.data, filter, sortDirection]);

  const handleChange = event => {
    setFilter(event.target.value);
  };

  const changeDirection = () => {
    setSortDirection(!sortDirection);
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          onChange={handleChange}
        >
          {filters.map(filterItem => (
            <MenuItem value={filterItem.name}>{filterItem.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControlLabel
        control={
          <Switch
            checked={sortDirection}
            onChange={changeDirection}
            value="checked"
          />
        }
        label="Direction"
      />
    </div>
  );
};

export default Sorter;
