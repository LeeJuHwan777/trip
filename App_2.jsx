import './css/App.css'
import './css/Header.css'
import './css/Input.css'
import './css/List.css'
import './css/Totalcount.css'

function App() {
  return (
    <>
    <div className="Header-box">
      <h1>가자여행</h1>
    </div>

    <div className="Input-box">
      <input type="text" placeholder='가고싶은 여행지를 입력하세요'/>
      <i></i>
    </div>

    <div className="Totalcount-box">
      <i></i>
    </div>

    <div className="List-box">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
    </>
  )
}

export default App