import CurrentTime from "./utils/CurrectTime"
import Temperature from "./utils/Temperature"
import WeatherIcon from "./utils/WeatherIcon"

function App() {


  return (

    <div className="container">
      <section className="content">
        <div className="widget">
          <div className="widget-wrapper">
            <div className="widget-col">
              <Temperature />
              <CurrentTime />
            </div>
            <div className="widget-col">
              <div className="widget-row-l">
                <WeatherIcon />
              </div>
              <img className='icon' src="./icons8-home.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
</div>


  )
}

export default App
