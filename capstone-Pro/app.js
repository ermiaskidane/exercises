let masthead = document.querySelector('.masthead')
let searchedUser = document.querySelector('.searchedUser')
let singleUser = document.querySelector('.singleUser')
let userContent = document.querySelector('.userContent')

// document.querySelector('body').addEventListener('DOMContentLoaded', (event) => {
//   searchedUser.classList.add('hiden')
//   singleUser.classList.add('hiden')
// })
let GithubIcon = document.querySelector('.fa-github')

GithubIcon.addEventListener('click', () => {
  console.log(masthead.classList.value)
  if (
    searchedUser.classList.value !== 'hiden' ||
    singleUser.classList.value !== 'hiden'
  ) {
    searchedUser.classList.add('hiden')
    singleUser.classList.add('hiden')
    masthead.classList.remove('hiden')
  }
})

let SearchUser = (e) => {
  const loc = document.getElementById('textAddress').value

  fetch(`https://api.github.com/search/users?q=${loc}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)

      ListUsers(data.items)
    })

  masthead.classList.add('hiden')
  singleUser.classList.add('hiden')
  e.preventDefault()

  const loc2 = document.getElementById('textAddress')
  console.log(loc2)
}

let ListUsers = (dta) => {
  let userTemplate = ''

  dta.map((user) => {
    userTemplate += `<div class="col-lg-4">
    <div class="testimonial-item mx-auto mb-5 mb-lg-0" id="userId">
        <img class="img-fluid rounded-circle mb-3" src="${user.avatar_url}" alt="..." />
        <div class="visible">
          <h5 id="pickeduser">${user.login}</h5>
          <a href="#" class="font-weight-light mb-0 " id="singleuser" onClick="userFunc('${user.login}')">Visit the profile</a>
        </div>        
    </div>
</div>`
  })

  searchedUser.classList.remove('hiden')
  document.querySelector('.users').innerHTML = userTemplate
}

let userFunc = (user) => {
  console.log(user)

  fetch(`https://api.github.com/users/${user}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(' userFunc' + data.id)

      document.getElementById(
        'user_image'
      ).innerHTML = `<img class="img-fluid  mb-3" id="user_image" src="${data.avatar_url}" alt="..." />
      <h2 class="fs-4 fw-bold">${data.login}</h2>
      `

      document.getElementById(
        'user_info'
      ).innerHTML = `<div class="col-lg-6 col-xxl-4 mb-5">
      <div class="card bg-light border-0 h-100">
          <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-collection"></i></div>
              <h2 class="fs-4 fw-bold " id="loginer">Github repos</h2>
              <p class="mb-0">public repositories: ${data.public_repos}</p>
          </div>
      </div>
  </div>
  <div class="col-lg-6 col-xxl-4 mb-5">
      <div class="card bg-light border-0 h-100">
          <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-cloud-download"></i></div>
              <h2 class="fs-4 fw-bold">Visit Github Profile</h2>
              <a href="${data.html_url}" class="mb-0 profile_page">Github Profile: ${data.login} </a>
          </div>
      </div>
  </div>
  
  <div class="col-lg-6 col-xxl-4 mb-5">
      <div class="card bg-light border-0 h-100">
          <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-bootstrap"></i></div>
              <h2 class="fs-4 fw-bold">Followers</h2>
              <p class="mb-0">Number of Followers: ${data.followers}</p>
          </div>
      </div>
  </div>
  <div class="col-lg-6 col-xxl-4 mb-5">
      <div class="card bg-light border-0 h-100">
          <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-code"></i></div>
              <h2 class="fs-4 fw-bold">Following</h2>
              <p class="mb-0">Number of following: ${data.following}</p>
          </div>
      </div>
  </div>

  `
    })

  searchedUser.classList.add('hiden')
  singleUser.classList.remove('hiden')
}

document.getElementById('submitButton').addEventListener('click', SearchUser)
