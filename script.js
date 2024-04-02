function menuClick(thissy, newshow, newshow2) {

  thisid = thissy.id; 

  avar='main'
  bvar='show'
  cvar='main show'
  alldivs = document.getElementsByClassName('main'+' '+bvar)

  
  for (let data of alldivs) {
    console.log(data.id)
    document.getElementById(data.id).className="main noshow";
    }

    document.getElementById(newshow).className="main show";

}
