function customTag(tagName,fn){
  document.createElement(tagName);
  //find all the tags occurrences (instances) in the document
  var tagInstances = document.getElementsByTagName(tagName);
        //for each occurrence run the associated function
        for ( var i = 0; i < tagInstances.length; i++) {
            fn(tagInstances[i]);
        }
}

function navbar(element) {
    element.innerHTML = `<nav class="navbar">
      <div class="left-links">
        <a href="/" class="nav-logo">level_Zero</a>
      </div>
      <div class="right-links">
        <a href="/members.html" class="nav-logo">Members</a>
        <a href="/writeups.html" class="nav-logo">Writeups</a>
      </div>
    </nav>`
}

function customFooter(element) {
    element.outerHTML = `<footer class="footer">
      <div class="right-links">
        <a href="mailto:teamlevelzero@protonmail.com" target="_blank" class="social-icon mail">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="125" height="100" viewBox="0 0 125 100">   <path d="M60,0 l50,0 a10,10 0 0,1 7,17 l-50,50 a10,10 0 0,1 -13,0 l-50,-50 a10,10 0 0,1 7,-17z" stroke-width="0"/>   <path d="M60,90 l54,0 a10,10 0 0,0 7,-7 l0,-60 -50,50 a15,15 0 0,1 -21,0 l-50,-50 0,60 a10,10 0 0,0 7,7z" stroke-width="0"/> </svg>
        </a>
        <a href="https://twitter.com/levelzero_ctf" target="_blank" class="social-icon twitter">
          <svg id="twitter" xmlns="http://www.w3.org/2000/svg" width="260" height="220" fill="inherit" viewBox="0 0 26 22"><path d="M.5 18.7c10 6.2 22.7-.7 22.5-13 1-.7 1.9-1.6 2.6-2.7-1 .5-2 .8-3.1.9 1.14-.7 2-1.7 2.4-2.9-1 .6-2 1-3.3 1.3-4.3-4.13-10 .3-8.8 4.7-4.3-.2-8-2.3-10.6-5.4C1 4 1.5 7.1 3.9 8.5 3 8.4 2 8.2 1.5 7.8c0 2.6 1.8 4.6 4.1 5.1-.8.2-1.5.3-2.3.1.6 2 2.6 3.6 4.8 3.6-2 1.6-4.7 2.4-7.6 2.1z"/></svg>
        </a>
        <a href="https://github.com/levelzero-ctf" target="_blank" class="social-icon github">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
        </a>
      </div>
      <div class="left-links">
        <a class="theme-icon-link">
          <svg id="theme-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m17.75 4.09-2.53 1.94.91 3.06-2.63-1.81-2.63 1.81.91-3.06-2.53-1.94L12.44 4l1.06-3 1.06 3 3.19.09m3.5 6.91-1.64 1.25.59 1.98-1.7-1.17-1.7 1.17.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95 2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14.4-.4.82-.76 1.27-1.08.75-.53 1.93.36 1.85 1.19-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82-2.81 3.14-2.7 7.96.31 10.98 3.02 3.01 7.84 3.12 10.98.31z"></path></svg>
        </a>
      </div>
    </footer>`
}

function memeberCard(element) {
  let innerHTML = "";
  if (element.attributes.username) {
    let username = element.attributes.username.value;
    innerHTML = `<div class="card">
      <div class="cardContent">
        <div class="imgBx">
          <img src="https://avatars.githubusercontent.com/${username}">
        </div>

        <div class="contentBx">
          <h3>`
    if (element.attributes.nickname) {
      innerHTML += element.attributes.nickname.value;
    }
    else {
      innerHTML += username;
    }
    innerHTML += `</h3>
        </div>
        <ul class="sci">
          <li>
            <a target="_blank" href="https://www.github.com/${username}"><i class="fab fa-github"></i></a>
          </li>`
    if(element.attributes.website) {
      innerHTML += `<li>
        <a target="_blank" href="${element.attributes.website.value}"><i class="fas fa-globe"></i></a>
        </li>`
    }
    innerHTML += `</ul>
      </div>
    </div>`
  }
  element.innerHTML = innerHTML;
}

function socialMetaTags(element) {
  element.innerHTML = `<meta property="og:title" content="level_zero" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://levelzero-ctf.github.io/" />
    <meta property="og:image" content="https://levelzero-ctf.github.io/img/levelZero.png" />
    <meta property="og:description" content="level_zero is a group of cybersecurity enthusiasts." />
    <meta name="theme-color" content="#1c1c1c">`
}

function css(element) {
  element.innerHTML = `<!-- CSS -->
    <link rel="stylesheet" type="text/css" href="stylesheets/style.css">
    <link rel="stylesheet" type="text/css" href="stylesheets/monokai.css">
    <link rel="stylesheet" type="text/css" href="stylesheets/blockquote.css">
    <link rel="stylesheet" type="text/css" href="stylesheets/keyboard.css">
    <link rel="stylesheet" type="text/css" href="stylesheets/table.css">
    <link rel="stylesheet" type="text/css" href="stylesheets/codeblock.css">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />`
}

customTag("css", css);
customTag("SocialMetaTags", socialMetaTags);
customTag("navbar", navbar);
customTag("Footer", customFooter);
customTag("memberCard", memeberCard);
