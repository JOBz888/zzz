window.onload = function() {
    setTimeout(() => document.getElementById('just').classList.add('show'), 40);
    setTimeout(() => document.getElementById('do').classList.add('show'), 400);
    setTimeout(() => document.getElementById('it').classList.add('show'), 800);
    setTimeout(() => document.getElementById('subtext').classList.add('show'), 1200);

    let audio = document.getElementById("background-audio");
    let volumeControl = document.getElementById("volume-control");

    // แก้ไขปัญหา autoplay ที่อาจไม่ทำงาน
    audio.play().catch(error => console.log("Autoplay error: ", error));

    // ควบคุมระดับเสียงของเพลง
    volumeControl.addEventListener("input", function() {
        audio.volume = this.value;
    });
};
