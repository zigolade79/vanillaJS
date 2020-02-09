const title = document.getElementById("title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

const CLICKED_CLASS = "clicked";

function init() {
  const rand = getRandomArbitrary(1, 17);
  let phrase;
  switch (rand) {
    case 1:
      phrase = "Your limitation—it’s only your imagination.";
      break;
    case 2:
      phrase = "Push yourself, because no one else is going to do it for you.";
      break;
    case 3:
      phrase = "Sometimes later becomes never. Do it now.";
      break;
    case 4:
      phrase = "Great things never come from comfort zones.";
      break;
    case 5:
      phrase = "Dream it. Wish it. Do it.";
      break;
    case 6:
      phrase = "Success doesn’t just find you. You have to go out and get it.";
      break;
    case 7:
      phrase =
        "The harder you work for something, the greater you’ll feel when you achieve it.";
      break;
    case 8:
      phrase = "Dream bigger. Do bigger.";
      break;
    case 9:
      phrase = "Don’t stop when you’re tired. Stop when you’re done..";
      break;
    case 10:
      phrase = "Wake up with determination. Go to bed with satisfaction.";
      break;
    case 11:
      phrase = "Do something today that your future self will thank you for.";
      break;
    case 12:
      phrase = "Little things make big days.";
      break;
    case 13:
      phrase = "It’s going to be hard, but hard does not mean impossible.";
      break;
    case 14:
      phrase = "Don’t wait for opportunity. Create it.";
      break;
    case 15:
      phrase =
        "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.";
      break;
    case 16:
      phrase = "The key to success is to focus on goals, not obstacles.";
      break;
    case 17:
      phrase = "Dream it. Believe it. Build it.";
      break;
  }
  title.innerHTML = phrase;
}

init();
