import React, { useContext } from 'react';
import { HabitContext } from '../context/HabitContext';
import { HabitCard } from '../components/HabitCard';
import { Link } from 'react-router-dom';

export const Archive = () => {
  const { state, dispatch } = useContext(HabitContext);
  const archiveHabit = state.allHabits.filter((habit) => habit.isArchive);
  console.log(archiveHabit);
  // state.filteredMail.map((mail) => (mail.mId === action.payload ? { ...mail, unread: !mail.unread } : mail))
  return (
    <div>
      {archiveHabit.length === 0 ? (
        <h2>No habits are there.</h2>
      ) : (
        <div style={{ display: 'flex' }}>
          {archiveHabit.map((habit) => (
            <div onclick={() => {}}>
              <HabitCard habit={habit} />
            </div>
          ))}
        </div>
      )}
      <div style={{ marginTop: '100px' }}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            border: 'none',
            width: '100px',
            borderRadius: '10px',
            backgroundColor: 'rgb(72 125 247)',
            color: 'white',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          Check Your Habits
        </Link>
      </div>
    </div>
  );
};
