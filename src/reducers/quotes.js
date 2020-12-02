export default (state = [], action) => {

  switch (action.type) {
    /////
    case 'ADD_QUOTE':
      return [...state, action.quote]
    /////
    case 'REMOVE_QUOTE':
      return state.filter(q => q.id !== action.quoteId)

      // perhaps faster???????????????
      // let idx = state.findIndex(quote => quote.id === action.quoteId)
      // return [...state.slice(0, idx), ...state.slice(idx+1)]
    //////
    case 'UPVOTE_QUOTE':
      return state.map(q => {
        if (q.id === action.quoteId){
          q.votes += 1
          return q
        } else return q
      })
    /////
    case 'DOWNVOTE_QUOTE':
      return state.map(q => {
        if (q.id === action.quoteId && q.votes > 0){
          q.votes -= 1
          return q
        } else return q
      })
    /////
      
    default: return state;
  }
}
