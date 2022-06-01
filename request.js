var request = require("request");

function PostCode() {
  request.post(
    {
      headers: { 'content-type': 'application/json', 'auth': '05978C65BF2328FA53493A1BFTESTAPI'},
      url: "https://www.api-usoft.com/insertBet",
      json: {
        trxid: "BET-COLISEO06TEST",
        movement: "BET",
        amount: -0.2,
        gameid: "515",
        game_name: "Blackjack 1 - Azure (Azure Studio I)",
        sessionid:
          "8f030e20771ddbf0e11b0016cd741d3f5552b4ed9431987ab78219e71e642b8f443b79703b14fdb5c722d96970165c482506907f7f2ee9bf36b4102b18a8b7b6",
      },
      time: true,
    },
    function (err, response, body) {
      console.log(body);
      console.log("Request time in ms", response.elapsedTime);
    }
  );
}

PostCode();
