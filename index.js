async function setCardData() {
    const user = await fetch('https://api.github.com/users/joaohenrik03')
    .then(r => r.json())
    .then(data => {
        document.querySelector('#userName').textContent = data.name
        document.querySelector('#userAvatar').src = data.avatar_url
        document.querySelector('#userFollowers').textContent = data.followers
        document.querySelector('#userFollowing').textContent = data.following
        document.querySelector('#userRepository').textContent = data.public_repos
        document.querySelector('#userCompany').textContent = String(data.company) === 'null' ? '' : `@${data.company}`
        document.querySelector('#userLocation').textContent = data.location
    })
}

setCardData()