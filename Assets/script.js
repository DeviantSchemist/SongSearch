document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()
  axios.get(`https://api.happi.dev/v1/music?q=${document.getElementById('song').value}&limit=&apikey=2664c2TNrxJ6hL19jMV6fH5xbOU2i1fB8zkWpecg469xeBnAQny9QyDR&type=&lyrics=0`)
    .then(res=>{
      let song = res.data.result
      for (let i=0; i<song.length ;i++){
        let title = document.createElement('li'), artist = document.createElement('li'), album = document.createElement('li')
        title.innerHTML = ` Title:
        ${song[i].track}`
        album.innerHTML = ` Album:
        ${song[i].album}`
        artist.innerHTML = ` Artist:
        ${song[i].artist}`
        document.getElementById('result').append(title)
        document.getElementById('result').append(album)
        document.getElementById('result').append(artist)
      }



      document.getElementById('song').value = ''

    })
    .catch(err=>console.error(err))
})
 