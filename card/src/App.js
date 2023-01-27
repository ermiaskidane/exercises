import './App.css'
import { faker } from '@faker-js/faker'

console.log(faker)
function App() {
  return (
    <div class='ui card'>
      <div class='image'>
        <img src={faker.image.avatar()} />
      </div>
      <div class='content'>
        <a class='header'>{faker.name.fullName()}</a>

        <div class='description'>{faker.lorem.paragraph()}</div>
      </div>
      <div class='user_content extra content '>
        <a>
          <i class='user icon'></i>
          {faker.random.numeric()} Friends
        </a>

        <div class='meta'>
          <span class='date'>
            {/* Joined in {faker.date.past('10', '2020-01-01T00:00:00.000Z')} */}
            Joined in 2014
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
