// Create an object to hold the sound files
const soundDict = {
    'a': new Audio('sounds/sound_a.mp3'),
    'b': new Audio('sounds/sound_b.mp3'),
    'c': new Audio('sounds/sound_c.mp3'),
    'd': new Audio('sounds/sound_d.mp3'),
    'e': new Audio('sounds/sound_e.mp3'),
    'f': new Audio('sounds/sound_f.mp3'),
    'g': new Audio('sounds/sound_g.mp3'),
    'h': new Audio('sounds/sound_h.mp3'),
    'i': new Audio('sounds/sound_i.mp3'),
    'j': new Audio('sounds/sound_j.mp3'),
    'k': new Audio('sounds/sound_k.mp3'),
    'l': new Audio('sounds/sound_l.mp3'),
    'm': new Audio('sounds/sound_m.mp3'),
    'n': new Audio('sounds/sound_n.mp3'),
    'o': new Audio('sounds/sound_o.mp3'),
    'p': new Audio('sounds/sound_p.mp3'),
    'q': new Audio('sounds/sound_q.mp3'),
    'r': new Audio('sounds/sound_r.mp3'),
    's': new Audio('sounds/sound_s.mp3'),
    't': new Audio('sounds/sound_t.mp3'),
    'u': new Audio('sounds/sound_u.mp3'),
    'v': new Audio('sounds/sound_v.mp3'),
    'w': new Audio('sounds/sound_w.mp3'),
    'x': new Audio('sounds/sound_x.mp3'),
    'y': new Audio('sounds/sound_y.mp3'),
    'z': new Audio('sounds/sound_z.mp3'),
    '1': new Audio('sounds/sound_1.mp3'),
    '2': new Audio('sounds/sound_2.mp3'),
    '3': new Audio('sounds/sound_3.mp3'),
    '4': new Audio('sounds/sound_4.mp3'),
    '5': new Audio('sounds/sound_5.mp3'),
    '6': new Audio('sounds/sound_6.mp3'),
    '7': new Audio('sounds/sound_7.mp3'),
    '8': new Audio('sounds/sound_8.mp3'),
    '9': new Audio('sounds/sound_9.mp3'),
    '0': new Audio('sounds/sound_0.mp3'),
    ' ': new Audio('sounds/sound_space.mp3')
};

// Event listener for keydown events
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase(); // Get the key pressed and convert to lowercase
    if (soundDict[key]) {
        soundDict[key].play();  // Play the corresponding sound
    }
});

// Optional: add click event to buttons
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const soundKey = key.textContent.toLowerCase();
        if (soundDict[soundKey]) {
            soundDict[soundKey].play();
        }
    });
});
