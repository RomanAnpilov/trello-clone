const initialState = {
  items: [
    {
      title: "Plan on month",
      cards: ["React", "React", "React"],
    },
    {
      title: "Plan on month",
      cards: ["React", "React", "React"],
    },
  ],
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    case "CARDS:ADD":
      return {
        ...state,
        items: state.items.map((item, index) => {
          if (action.payload.index === index) {
            return {
              ...item,
              cards: [...item.cards, action.payload.text],
            };
          }
        }),
      };
    default:
      return state;
  }
};

export default cards;
