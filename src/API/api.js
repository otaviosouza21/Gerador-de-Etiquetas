const APIkey = "312febd94b51e954d762454e8c70f617";
const APItoken =
  "ATTA4755ffbdc34c9afc8a79d5868322ba9100634d7588eaaffe8a99eea69cd2482807A351BF";
const ID_board = "FspEmnJz";
const ID_list = "649c21ed465a00f1c2cb7ef7";
const ID_plugin = "60e068efb294647187bbe4f5";

export function GET_PLUGIN() {
  return {
    url: `https://api.trello.com/1/boards/${ID_board}/plugins?key=${APIkey}&token=${APItoken}`,
    options: {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    },
  };
}

export function GET_CARDS() {
  return {
    url: `https://api.trello.com/1/lists/${ID_list}/cards/?key=${APIkey}&token=${APItoken}`,
    options: {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    },
  };
}

export function GET_CARD(id) {
  return {
    url: `https://api.trello.com/1/cards/${id}/customFieldItems?key=${APIkey}&token=${APItoken}`,
    options: {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    },
  };
}