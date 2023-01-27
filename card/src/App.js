import './App.css'
import { faker } from '@faker-js/faker'

console.log(faker)
function App() {
  return (
    <div className='ui card'>
      <div className='image'>
        <img src={faker.image.avatar()} />
      </div>
      <div className='content'>
        <a className='header'>{faker.name.fullName()}</a>
        <div className='friends'>
          <span>Friends</span>
        </div>
        <div className='description'>{faker.lorem.paragraph()}</div>
      </div>
      <div className='user_content extra content '>
        <a>
          <i className='user icon'></i>
          {faker.random.numeric()} Friends
        </a>

        <div className='meta'>
          <span className='date'>
            {/* Joined in {faker.date.past('10', '2020-01-01T00:00:00.000Z')} */}
            Joined in 2014
          </span>
        </div>
      </div>
    </div>
  )
}
