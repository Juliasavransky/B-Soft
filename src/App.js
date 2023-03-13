import './App.css';
import Hading from './components/hading/Hading';
import Rating from './components/rating/Rating';
import Review from './components/review/Review';
import SubHeader from './components/sub-header/SubHeader';
import FileUpload from './components/file-upload/FileUpload.jsx';
import Confirmation from './components/confirmation/Confirmation.jsx';
import Button from './components/button/Button';

function App() {
  return (
    <div className="br-container">

      <Hading text=" דירוג העסק" />

      <div className="br--wrapper">
        <div className="br--rating">
          <SubHeader text={"עד כמה היית מרוצה מהעסק?"} />
          <Rating title={"שירות מקצועי "} />
          <Rating title={" מחיר ממוצע "} />
          <Rating title={"  מקצועיות הצוות "} />
          <Rating title={" זמינות בעל העסק  "} />
          <Rating title={" התרשמות כללית "} />
        </div >
        <div className="divider-bottom"></div>
        <Review />
        <div className="divider-bottom"></div>
        <FileUpload />
        <div className="divider-bottom"></div>

        <Confirmation />
        <Button text={"שיתוף תגובה"} />
      </div>
    </div>

  );
}

export default App;
