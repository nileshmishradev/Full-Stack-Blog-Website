import {createContext, useContext, useEffect , useState} from 'react'
import axios from 'axios'; // for sending request
import {useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'; // toash for error display


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL // backend server url


const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState("");

  const value = {
    axios,
    navigate,
    token,
    setToken,
    blogs,
    setBlogs,
    input,
    setInput,
  };

  // fetching all blogs form backend
  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/blog/all");
      data.success ? setBlogs(data.blog) : toast.error(data.message); // data.blog is from backedn we will sending success true and blog ka andar data
    } catch (error) {
      toast.error(error.message);
    }
  };

   useEffect(() => {
    fetchBlogs()
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      axios.defaults.headers.common['Authorization'] = `${token}`;
    }
  }, []);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext =()=>{
    return useContext(AppContext)
}