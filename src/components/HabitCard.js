import { Icon } from '@iconify/react';
import React, { useContext, useState } from 'react';
import { HabitContext } from '../context/HabitContext';

export const HabitCard = ({ habit }) => {
  const { state, dispatch } = useContext(HabitContext);
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const addInArchive = (n) => {
    dispatch({
      type: 'UPDATE_HABITS',
      payload: state.allHabits.map((habit) =>
        habit.name === n.name
          ? { ...habit, isArchive: !habit.isArchive }
          : habit,
      ),
    });
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          width: '250px',
          height: '150px',
          backgroundColor: 'black',
          color: 'white',
          borderRadius: '10px',
          margin: '10px',
          cursor: 'pointer',
          paddingTop: '10px',
        }}
        onClick={togglePopup}
      >
        <h3 style={{ textAlign: 'left', margin: '20px' }}>{habit.name}</h3>
      </div>
      <Icon
        icon="material-symbols:archive"
        color="white"
        width="30"
        height="30"
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          color: habit.isArchive ? 'red' : 'white',
        }}
        onClick={() => addInArchive(habit)}
      />
    </div>
  );
};
