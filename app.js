var notes = {
    c: {
        audio: document.getElementById("cAudio"),
        key: document.getElementById("cBox"),
        keyCode: 65
    },
    d: {
        audio: document.getElementById("dAudio"),
        key: document.getElementById("dBox"),
        keyCode: 83
    },
    e: {
        audio: document.getElementById("eAudio"),
        key: document.getElementById("eBox"),
        keyCode: 68
    },
    f: {
        audio: document.getElementById("fAudio"),
        key: document.getElementById("fBox"),
        keyCode: 70
    },
    g: {
        audio: document.getElementById("gAudio"),
        key: document.getElementById("gBox"),
        keyCode: 71
    },
    a: {
        audio: document.getElementById("aAudio"),
        key: document.getElementById("aBox"),
        keyCode: 72
    },
    b: {
        audio: document.getElementById("bAudio"),
        key: document.getElementById("bBox"),
        keyCode: 74
    },
    hc: {
        audio: document.getElementById("HighCAudio"),
        key: document.getElementById("HighCBox"),
        keyCode: 75
    }
};

for (var note in notes) {

  (function(note) {
    notes[note].key.addEventListener("click", function() {
        notes[note].audio.currentTime = 0;
        notes[note].audio.play();
    });
    document.addEventListener("keydown", function(event) {
      if(event.keyCode === notes[note].keyCode){
        notes[note].audio.currentTime = 0;
        notes[note].audio.play();
        notes[note].key.classList.add(note + "-color");
      }

    });
    document.addEventListener("keyup", function(event){
      if (event.keyCode === notes[note].keyCode) {
        notes[note].key.classList.remove(note + "-color");
      }
    });


  })(note);


}
