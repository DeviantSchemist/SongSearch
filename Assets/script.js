document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()
  axios.get(`https://api.happi.dev/v1/music?q=${document.getElementById('song').value}&limit=&apikey=2664c2TNrxJ6hL19jMV6fH5xbOU2i1fB8zkWpecg469xeBnAQny9QyDR&type=&lyrics=0`)
    .then(res => {

      document.getElementById('result').innerHTML = ''

      let song = res.data.result
      // console.log(song)
      for (let i = 0; i < song.length; i++) {
        let title = song[i].track, artist = song[i].artist, album = song[i].album

        if (song[i].haslyrics) {
          axios.get(`${song[i].api_lyrics}?apikey=2664c2TNrxJ6hL19jMV6fH5xbOU2i1fB8zkWpecg469xeBnAQny9QyDR`)
            .then(
              resu => {
                // console.log(resu)
                let lyrics = resu.data.result.lyrics

                // console.log(lyrics)
                document.getElementById('result').innerHTML += `
                  <li>
                    <div class="collapsible-header">
                      <i class="material-icons">cloud_download</i>
                      Title: ${title}<br />
                      Artist ${artist}<br />
                      Album: ${album}
                    <div class="collapsible-body"><p>
                    ${lyrics}
                    </p></div>
                  </li>
                  `
              })
            .catch(err => console.error(err))
        } else {
          document.getElementById('result').innerHTML += `
                  <li>
                    <div class="collapsible-header">
                      <i class="material-icons">cloud</i>
                      Title: ${title}<br />
                      Artist ${artist}<br />
                      Album: ${album}
                    </div>
                  </li>
                  `
        }
        // document.getElementById('result').append(lyrics)

      }

      // console.log(song)

      document.getElementById('song').value = ''

    })
    .catch(err => console.error(err))
})
