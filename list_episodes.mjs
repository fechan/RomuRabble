/**
 * @fileoverview list_episodes.mjs lists every episode containing Romulan speech onto the web page
 */
import romulanSpeech from "./site_data.mjs";

const AUDIO_PATH = "data/audio";
const SPECTROGRAM_PATH = "data/spectrograms";

init();

/**
* Initializes the page
*/
function init() {
  let episodeContainer = document.getElementById("episodes");
  let episodeTemplate = document.getElementById("episode");
  let utteranceTemplate = document.getElementById("utterance");
  for (let episode of romulanSpeech) {
    let episodeElem = episodeTemplate.content.cloneNode(true);
    episodeElem.querySelector(".episode-name").textContent = episode.episode_name;
    let utteranceContainer = episodeElem.querySelector(".episode-utterances");
    for (let utterance of episode.utterances) {
      let utteranceElem = utteranceTemplate.content.cloneNode(true);
      utteranceElem.querySelector("summary").textContent = `Utterance ${utterance.id}`;
      utteranceElem.querySelector(".spectrogram").src = `${SPECTROGRAM_PATH}/${utterance.spectrogram}`;
      utteranceElem.querySelector("audio").src = `${AUDIO_PATH}/${utterance.audio}`;
      utteranceElem.querySelector(".time-index").textContent = utterance.time;
      utteranceElem.querySelector(".discourse-nbr").textContent = utterance.discourse;
      utteranceElem.querySelector(".impression-ipa").textContent = utterance.impressionistic_ipa;
      utteranceElem.querySelector(".latin-transc").textContent = utterance.latin_transcription;
      utteranceElem.querySelector(".meaning").textContent = utterance.meaning;
      utteranceElem.querySelector(".notes").textContent = utterance.notes;
      utteranceContainer.appendChild(utteranceElem);
    }
    episodeContainer.appendChild(episodeElem);
  }
}