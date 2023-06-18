import { createContext, useReducer } from 'react';
import { habit } from '../db/habit';

export const HabitContext = createContext();

const reduceHabit = (state, action) => {
  switch (action.type) {
    case 'UPDATE_HABITS':
      return {
        ...state,
        allHabits: action.payload,
      };

    default:
      break;
  }
};

export function HabitProvider({ children }) {
  const [state, dispatch] = useReducer(reduceHabit, {
    allHabits: habit,
  });
  console.log(state.allHabits);
  return (
    <HabitContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
}
