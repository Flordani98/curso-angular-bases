interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

/*La destructuracion se puede aplicar en objetos, en cualquier archivo, arreglo */
/*Consiste en el que yo podamos tomar de algun lado ciertas piezas q necesito */


//DESTRUCTURACION DE OBJETOS

// const{song: anotherSong,
//      songDuration:duration,
//     details:{author}
    // ,details: details
    // } = audioPlayer;

// const{author} = details;


// const{author: author} = audioPlayer.details;

// console.log("Song: ", anotherSong);
// console.log("Duration: ", duration);
// console.log("author: ", author);






export {};