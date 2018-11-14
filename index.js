const path = require("path");
const ffmpegBinaries = require('@ffmpeg-installer/ffmpeg');
const ffmpeg = require('fluent-ffmpeg');

console.log("ffmpeg binaries", ffmpegBinaries);
ffmpeg.setFfmpegPath(ffmpegBinaries.path);
ffmpeg(path.resolve('samples/input.mov'))
    .format('mp4')
    .save(path.resolve('samples/output.mp4'));