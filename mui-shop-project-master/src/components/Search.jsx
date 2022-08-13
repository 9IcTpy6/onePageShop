import TextField from '@mui/material/TextField';

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField type='search'
                      value={value}
                      onChange={onChange}
                      id="standard-basic"
                      fullWidth
                      label="Search"
                      variant="standard"
    />;
};

export default Search;