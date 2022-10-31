// UI Logic

function useArray() {

  const answer1 = document.querySelector("input[name='question1']:checked");
  const answer2 = document.querySelector("input[name='question2']:checked");
  const answer3 = document.querySelector("input[name='question3']:checked");
  const answer4 = document.querySelector("input[name='question4']:checked");
  const answer5 = document.querySelector("input[name='question5']:checked");

  answers = [answer1,answer2,answer3,answer4,answer5];

}

function display() {
  document.getElementById("JavaScript").setAttribute("class", "hidden");
  document.getElementById("C#").setAttribute("class", "hidden");
  document.getElementById("Ruby").setAttribute("class", "hidden");
  document.getElementById(langSuggestion).removeAttribute("class");
}

//Event Listeners
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let langSuggestion = "";
  let answers = [];

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    useArray();
    display();
    ();
  });
});



