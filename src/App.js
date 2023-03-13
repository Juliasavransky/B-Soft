import './App.css';
import Hading from './components/Hading/Hading';
import Rating from './components/Rating/Rating';
import Review from './components/Review/Review';
import SubHeader from './components/SubHeader/SubHeader';

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

        <div className="br--photo">
          <input id="img" className="br--photo__input" type="file"></input>
          <label htmlFor="img">הוספת תמונה</label>
        </div>
        <div className="divider-bottom"></div>

        <div className="br--confirmation">
          <input type="checkbox" id="box" className="br--confirmation__box"></input>
          <label htmlFor="box" className="br--confirmation">קראתי את  <a href="https://www.b144.co.il/TermsOfService/">תנאי השימוש  </a>והם מקובלים עלי</label>

          <button>שיתוף תגובה</button>
        </div>
      </div>
    </div>

  );
}

export default App;
