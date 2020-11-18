import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import RegForm from './pages/RegForm';
import TableData from './pages/TableData';
import NavBar from './components/NavBar';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#a31545'
      },
      secondary: {
        main: '#fff'
      }
    }
  });

  return (
    <div>
      <Router>
        <MuiThemeProvider theme={theme}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={RegForm} />
            <Route exact path="/info" component={TableData} />
          </Switch>
        </MuiThemeProvider>
      </Router>
    </div>
  );
};

export default App;
