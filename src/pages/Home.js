import React, { useContext, useState } from 'react';
import { HabitContext } from '../context/HabitContext';
import { HabitCard } from '../components/HabitCard';
import { Popup } from '../components/Popup';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { state, dispatch } = useContext(HabitContext);
  const [form, setForm] = useState({});

  const [isOpen, setIsOpen] = useState(false);

  const handleInputs = (el) => {
    const name = el.target.name;
    const value = el.target.value;
    setForm({ ...form, [name]: value });
  };
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ margin: '20px' }}>
      <div style={{ display: 'flex' }}>
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
          <h3 style={{ textAlign: 'left', margin: '20px' }}>Create My Own</h3>
        </div>

        {state.allHabits.map((habit) => (
          <div onclick={() => {}}>
            <HabitCard habit={habit} />
          </div>
        ))}
      </div>
      <div style={{ marginTop: '100px' }}>
        <Link
          to="/archive"
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
          Check Your Archive
        </Link>
      </div>
      {isOpen && (
        <Popup
          content={
            <form
              onSubmit={() => {
                dispatch({
                  type: 'UPDATE_HABITS',
                  payload: [...state.allHabits, { ...form, isArchive: false }],
                });
                togglePopup();
                setForm({});
              }}
              style={{
                textAlign: 'center',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                height: '300px',
              }}
            >
              <div style={{ width: '600px' }}>
                <p
                  style={{
                    textAlign: 'left',
                    fontSize: '10px',
                    color: 'white',
                    marginLeft: '25px',
                    fontWeight: 'bold',
                  }}
                >
                  NAME<span style={{ color: 'red' }}>*</span>
                </p>
                <input
                  value={form.name}
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input-field"
                  placeholder="Name"
                  onChange={handleInputs}
                  style={{
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    width: '90%',
                    background: 'rgb(49 49 49)',
                  }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '600px',
                  justifyContent: 'space-evenly',
                }}
              >
                <div>
                  <p
                    style={{
                      textAlign: 'left',
                      fontSize: '10px',
                      color: 'white',
                      marginLeft: '5px',
                      fontWeight: 'bold',
                    }}
                  >
                    REPEAT
                  </p>
                  <select
                    value={form.repeat}
                    name="repeat"
                    id="repeat"
                    style={{
                      padding: '10px',
                      borderRadius: '5px',
                      border: 'none',
                      width: '275px',
                      background: 'rgb(49 49 49)',
                      color: 'white',
                    }}
                    onChange={handleInputs}
                    required
                  >
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>

                <div>
                  <p
                    style={{
                      textAlign: 'left',
                      fontSize: '10px',
                      color: 'white',
                      marginLeft: '5px',
                      fontWeight: 'bold',
                    }}
                  >
                    GOAL
                  </p>
                  <select
                    value={form.goal}
                    name="goal"
                    id="goal"
                    style={{
                      padding: '10px',
                      borderRadius: '5px',
                      border: 'none',
                      width: '275px',
                      background: 'rgb(49 49 49)',
                      color: 'white',
                    }}
                    onChange={handleInputs}
                    required
                  >
                    <option value="1 Time">1 Time</option>
                    <option value="2 Times">2 Times</option>
                    <option value="3 Times">3 Times</option>
                  </select>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '600px',
                  justifyContent: 'space-evenly',
                }}
              >
                <div>
                  <p
                    style={{
                      textAlign: 'left',
                      fontSize: '10px',
                      color: 'white',
                      marginLeft: '5px',
                      fontWeight: 'bold',
                    }}
                  >
                    TIME OF DAY
                  </p>
                  <select
                    value={form.time}
                    name="time"
                    id="time"
                    style={{
                      padding: '10px',
                      borderRadius: '5px',
                      border: 'none',
                      width: '275px',
                      background: 'rgb(49 49 49)',
                      color: 'white',
                    }}
                    onChange={handleInputs}
                    required
                  >
                    <option value="Any Time">Any Time</option>
                    <option value="Morning">Morning</option>
                    <option value="Evening">Evening</option>
                    <option value="Night">Night</option>
                  </select>
                </div>

                <div>
                  <p
                    style={{
                      textAlign: 'left',
                      fontSize: '10px',
                      color: 'white',
                      marginLeft: '5px',
                      fontWeight: 'bold',
                    }}
                  >
                    START DATE
                  </p>
                  <select
                    value={form.start}
                    name="start"
                    id="start"
                    style={{
                      padding: '10px',
                      borderRadius: '5px',
                      border: 'none',
                      width: '275px',
                      background: 'rgb(49 49 49)',
                      color: 'white',
                    }}
                    onChange={handleInputs}
                    required
                  >
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="Day After Tomorrow">
                      Day After Tomorrow
                    </option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="button-shadow"
                style={{
                  border: 'none',
                  width: '100px',
                  borderRadius: '10px',
                  backgroundColor: 'rgb(72 125 247)',
                  color: 'white',
                  padding: '10px',
                  cursor: 'pointer',
                }}
              >
                Add
              </button>
            </form>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};
