import React, {  useState , useContext} from 'react'; 
import GithubContext from '../../context/github/githubContext'; 
import AlertContext from '../../context/alert/alertContext'; 
const Search = ({ setAlert }) => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [text, setText] = useState(''); 

    const onSubmit = (e) => {
        e.preventDefault(); 
        if(text === ''){
            alertContext.setAlert('Please enter', 'light')
        }else{
            githubContext.searchUsers(text);
            setText('');
        }
    }
    const onChange = e => setText(e.target.value)
  
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search.." 
                value={text}  onChange={onChange}
                ></input> 
                <input type="submit" value="search"></input>
                {githubContext.users.length > 0 &&
                    <input type="button" value="clear" onClick={githubContext.clearUsers}></input>
                }
            </form>
        </div>
    ) 
}  
export default Search 