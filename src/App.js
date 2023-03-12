import './App.css';
import Hading from './components/Hading';
import Rating from './components/Rating';

function App() {
  return (
    <div className="br-container">

      <Hading text=" דירוג העסק" />


      <div className="br--wrapper">

        <Rating />

        <div className="divider-bottom"></div>
        <div className="br--review">
          <div className="br--review__title">
            כמה מילים על החוויה שלך עם העסק
          </div>
          <input textarea className="br--review__input" type="text" placeholder="יש להקליד כאן..." />
        </div>
        <div className="divider-bottom"></div>

        <div className="br--photo">
          <input id="img" className="br--photo__input" type="file"></input>
          <label for="img">הוספת תמונה</label>
        </div>
        <div className="divider-bottom"></div>

        <div className="br--confirmation">
          <input type="checkbox" id="box" className="br--confirmation__box"></input>
          <label for="box" className="br--confirmation">קראתי את  <a href="https://www.b144.co.il/TermsOfService/">תנאי השימוש  </a>והם מקובלים עלי</label>

          <button>שיתוף תגובה</button>
        </div>
      </div>
    </div>

  );
}

export default App;
