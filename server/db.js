let games = [
  { id: "1", title: "Zelda, Tear", platform: ["switch"] },
  { id: "2", title: "Final fantasy", platform: ["ps5", "xbox"] },
  { id: "3", title: "elden ring", platform: ["ps5", "xbox", "pc"] },
  { id: "4", title: "Mario kart", platform: ["switch"] },
  { id: "5", title: "Pokemon scarlet", platform: ["ps5", "xbox", "pc"] },
];

let authors = [
  { id: "1", name: "mario", verified: true },
  { id: "2", name: "yoshi", verified: false },
  { id: "3", name: "peach", verified: true },
];

let reviews = [
  { id: "1", rating: 9, content: "content Tear", author_id: "1", game_id: "2" },
  { id: "2", rating: 10, content: "contentTear", author_id: "2", game_id: "1" },
  { id: "3", rating: 7, content: "content Tear", author_id: "3", game_id: "3" },
  { id: "4", rating: 5, content: "content Tear", author_id: "2", game_id: "4" },
  { id: "5", rating: 8, content: "content Tear", author_id: "2", game_id: "5" },
  { id: "6", rating: 7, content: "content Tear", author_id: "1", game_id: "2" },
  { id: "7", rating: 10, content: "contentTear", author_id: "3", game_id: "1" },
];

export default { games, authors, reviews };
