function ShowAnswer(response) {
  alert(response.data.answer);
}
let apiKey = "4at0eb64a44133d38bobabb147b38f4d";
let context = "be polite and provide a very short and conisise answer";
let prompt = "when was the first ai created?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt= ${prompt}&context =${context}&key=${apiKey}`;

axios.get(apiUrl).then(ShowAnswer);
