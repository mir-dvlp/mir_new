import './App.css'
import Card from './components/Card.jsx'

function App() {
  return (
    <div className="App">
      <div className='bs-card'>
          <div class="logo">
            <img src="/avatar.webp" alt=""/>
          </div>
          <div class="title">
            <span class="name">Михаил Иванов</span>
            <span class="caption">UI/UX-Дизайнер,<br/>разработчик</span>
          </div>
          <div className='row'>
            <Card type="icon_card hover" href="https://www.behance.net/mir_dsgn" src="/s_behance.webp" name="Behance"/>
            <Card type="icon_card hover" href="https://t.me/mir_dsgn" src="/s_telegram.webp" name="Telegram"/>
            <Card type="icon_card hover" href="https://github.com/mir-dvlp" src="/s_github.webp" name="GitHub"/>
          </div>
          <div className='column'>
            <Card type="item_card hover" href="https://langame.ru" src="/ic_langame.svg" name="LANGAME Design"/>
            <Card type="item_card hover" href="https://my-study-projects.netlify.app/" src="/ic_code.svg" name="My Study Projects"/>
          </div>
          <div class="promote">Хотите также?<a href="https://t.me/mir_dsgn" aria-label="Write Me">Напишите мне</a></div>
      </div>
    </div>
  )
}

export default App
